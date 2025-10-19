import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact: NextPage = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mohitjakhotra',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mohitjakhotra',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
        </svg>
      )
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@mohitjakhotra',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'/>
        </svg>
      )
    }
  ]

  return (
    <>
      <Head>
        <title>Contact | Mohit Jakhotra</title>
        <meta name='description' content='Get in touch with Mohit Jakhotra - Full Stack Developer. Available for freelance projects, collaborations, and full-time opportunities.' />
        <meta name='keywords' content='Mohit Jakhotra contact, Full Stack Developer hire, Pune developer, freelance developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-4xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Get In Touch</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            I&apos;m always interested in new opportunities, whether it&apos;s a full-time position,
            freelance project, or just a friendly chat about technology. Let&apos;s connect!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8'>
            <h2 className='text-2xl font-semibold mb-6'>Send a Message</h2>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label htmlFor='firstName' className='block text-sm font-medium mb-2'>First Name</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='lastName' className='block text-sm font-medium mb-2'>Last Name</label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
                  required
                />
              </div>

              <div>
                <label htmlFor='subject' className='block text-sm font-medium mb-2'>Subject</label>
                <select
                  id='subject'
                  name='subject'
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
                  required
                >
                  <option value=''>Select a topic</option>
                  <option value='job'>Job Opportunity</option>
                  <option value='project'>Project Collaboration</option>
                  <option value='consultation'>Technical Consultation</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white'
                  placeholder='Tell me about your project or opportunity...'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full btn-primary py-3 text-lg font-medium'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className='space-y-8'>
            {/* Contact Information */}
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8'>
              <h2 className='text-2xl font-semibold mb-6'>Contact Information</h2>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center'>
                    <svg className='w-5 h-5 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium'>Email</p>
                    <p className='text-gray-600 dark:text-gray-300'>hello@mohitjakhotra.tech</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center'>
                    <svg className='w-5 h-5 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium'>Location</p>
                    <p className='text-gray-600 dark:text-gray-300'>Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center'>
                    <svg className='w-5 h-5 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium'>Response Time</p>
                    <p className='text-gray-600 dark:text-gray-300'>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-8'>
              <h2 className='text-2xl font-semibold mb-6'>Connect With Me</h2>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                Find me on professional networks and follow my journey in tech.
              </p>
              <div className='grid grid-cols-1 gap-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors'
                  >
                    <div className='w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400'>
                      {social.icon}
                    </div>
                    <div>
                      <p className='font-medium'>{social.name}</p>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>Follow me on {social.name}</p>
                    </div>
                    <svg className='w-5 h-5 text-gray-400 ml-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <h3 className='text-lg font-semibold text-green-800 dark:text-green-200'>Available for Opportunities</h3>
              </div>
              <p className='text-green-700 dark:text-green-300'>
                I&apos;m currently open to full-time positions, freelance projects, and consulting opportunities.
                Let&apos;s discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
