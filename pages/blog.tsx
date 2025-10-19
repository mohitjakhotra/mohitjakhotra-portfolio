import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog: NextPage = () => {
  const publications = [
    {
      id: 1,
      title: 'How to Get Done Work: Productivity Insights for Developers',
      platform: 'Medium',
      date: '2024',
      excerpt: 'Exploring effective strategies for managing workload, prioritizing tasks, and maintaining productivity in fast-paced development environments.',
      tags: ['Productivity', 'Career', 'Development'],
      link: 'https://medium.com/@mohitjakhotra/how-to-get-done-work',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'P vs NP Problem: The Importance of Mathematics in Computer Science',
      platform: 'Medium',
      date: '2024',
      excerpt: 'A deep dive into one of computer science\'s most famous unsolved problems and its implications for algorithm design and computational complexity.',
      tags: ['Computer Science', 'Mathematics', 'Algorithms'],
      link: 'https://medium.com/@mohitjakhotra/p-vs-np-importance-of-mathematics',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Content to Process in Learning: Reflections on Effective Study Techniques',
      platform: 'Medium',
      date: '2023',
      excerpt: 'Personal reflections on transforming passive learning into active processing, with practical techniques for better knowledge retention and application.',
      tags: ['Learning', 'Education', 'Personal Development'],
      link: 'https://medium.com/@mohitjakhotra/content-to-process-in-learning',
      readTime: '6 min read'
    }
  ]

  return (
    <>
      <Head>
        <title>Blog & Publications | Mohit Jakhotra</title>
        <meta name='description' content='Technical blog posts and publications by Mohit Jakhotra covering productivity, computer science, and learning techniques.' />
        <meta name='keywords' content='Mohit Jakhotra blog, Medium articles, productivity tips, computer science, learning techniques' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-4xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Blog & Publications</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Sharing insights on software development, productivity, and the intersection of technology and learning.
            I write about my experiences and discoveries in the tech world.
          </p>
        </div>

        <div className='space-y-8'>
          {publications.map((post) => (
            <article key={post.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div className='flex-1'>
                  <h2 className='text-2xl font-semibold mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
                    <a href={post.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                      {post.title}
                    </a>
                  </h2>
                  <div className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3'>
                    <span className='flex items-center gap-1'>
                      <span className='w-2 h-2 bg-indigo-500 rounded-full'></span>
                      {post.platform}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              <p className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'>
                {post.excerpt}
              </p>

              <div className='flex flex-wrap gap-2 mb-4'>
                {post.tags.map((tag) => (
                  <span key={tag} className='bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium'>
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex items-center justify-between'>
                <a
                  href={post.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2'
                >
                  Read on Medium
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-12 text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-8'>
          <h2 className='text-2xl font-semibold mb-4'>Follow My Writing Journey</h2>
          <p className='text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'>
            I regularly share insights about software development, productivity techniques, and technology trends.
            Follow me on Medium to stay updated with my latest articles.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://medium.com/@mohitjakhotra'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary flex items-center justify-center gap-2'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'/>
              </svg>
              Follow on Medium
            </a>
            <Link href='/contact' className='btn-outline'>
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Blog