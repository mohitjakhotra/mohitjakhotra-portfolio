import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

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
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-4xl font-bold mb-4'>Blog & Publications</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Sharing insights on software development, productivity, and the intersection of technology and learning.
            I write about my experiences and discoveries in the tech world.
          </p>
        </motion.div>

        <motion.div
          className='space-y-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {publications.map((post) => (
            <motion.article
              key={post.id}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div className='flex-1'>
                  <motion.h2
                    className='text-2xl font-semibold mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href={post.link} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                      {post.title}
                    </a>
                  </motion.h2>
                  <motion.div
                    className='flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className='flex items-center gap-1'>
                      <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
                      {post.platform}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </motion.div>
                </div>
              </div>

              <motion.p
                className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {post.excerpt}
              </motion.p>

              <motion.div
                className='flex flex-wrap gap-2 mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {post.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors cursor-default'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + tagIndex * 0.1, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className='flex items-center justify-between'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href={post.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read on Medium
                  <ArrowTopRightOnSquareIcon className='w-4 h-4' />
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className='mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 rounded-lg p-8'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-2xl font-semibold mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            Follow My Writing Journey
          </motion.h2>
          <motion.p
            className='text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
          >
            I regularly share insights about software development, productivity techniques, and technology trends.
            Follow me on Medium to stay updated with my latest articles.
          </motion.p>
          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a
              href='https://medium.com/@mohitjakhotra'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary flex items-center justify-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'/>
              </svg>
              Follow on Medium
            </motion.a>
            <Link href='/contact' className='btn-outline flex items-center justify-center'>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

export default Blog