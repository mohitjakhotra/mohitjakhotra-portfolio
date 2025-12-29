import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import sanitizeHtml from 'sanitize-html'
import { MEDIUM_FEED } from '../../lib/constants'
import { generatePostSlug } from '../../lib/slug'
import { motion } from 'framer-motion'
import Link from 'next/link'

type PostDetailProps = {
  title: string
  contentHtml: string
  date?: string
  link?: string
}

export default function PostPage({ title, contentHtml, date, link }: PostDetailProps) {
  return (
    <>
      <Head>
        <title>{title} | Mohit Jakhotra</title>
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-3xl mx-auto px-4 py-12'>
        <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className='prose max-w-none dark:prose-invert'>
          <h1 className='text-3xl font-bold mb-2'>{title}</h1>
          {date && <p className='text-sm text-gray-500 mb-6'>{date}</p>}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          {link && (
            <p className='mt-8'>
              <a href={link} target='_blank' rel='noopener noreferrer' className='text-blue-600'>Read on Medium</a>
            </p>
          )}
        </motion.article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const Parser = (await import('rss-parser')).default
  const parser = new Parser()
  const feed = await parser.parseURL(MEDIUM_FEED)

  const paths = (feed.items || []).map((item, idx) => {
    const slug = generatePostSlug(item, idx)
    return { params: { slug } }
  })

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slugParam = String(params?.slug || '')
    const Parser = (await import('rss-parser')).default
    const parser = new Parser()
    const feed = await parser.parseURL(MEDIUM_FEED)

    const found = (feed.items || []).find((item, idx) => {
      const slug = generatePostSlug(item, idx)
      return slug === slugParam
    })

    if (!found) {
      return { notFound: true, revalidate: 60 }
    }

    const raw = (found['content:encoded'] || found.content || found.contentSnippet || '') as string

    const clean = sanitizeHtml(raw, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2', 'img']),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'width', 'height']
      }
    })

    return {
      props: {
        title: found.title ?? 'Untitled',
        contentHtml: clean,
        date: found.pubDate ?? found.isoDate ?? '',
        link: found.link ?? ''
      },
      revalidate: 600
    }
  } catch (err) {
    console.error('Error building post page', err)
    return { notFound: true }
  }
}
