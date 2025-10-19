import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mohit Jakhotra | Full Stack Developer</title>
        <meta name='description' content='Mohit Jakhotra - Full Stack Developer specializing in React, Node.js, and Kafka applications. Based in Pune, India.' />
        <meta name='keywords' content='Mohit Jakhotra, Full Stack Developer, React, Node.js, Kafka, Pune, India' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-5xl mx-auto px-4 py-12'>
        <section className='text-center'>
          <div className='mb-8'>
            <div className='w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold'>
              MJ
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Hi, I&apos;m Mohit Jakhotra
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 mb-2'>Full Stack Developer</p>
            <p className='text-lg text-gray-500 dark:text-gray-400 mb-8'>Building scalable web applications with modern technologies</p>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4 mb-12'>
            <Link href='/projects' className='btn-primary'>View My Work</Link>
            <Link href='/contact' className='btn-outline'>Get In Touch</Link>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Current Role</h3>
              <p className='text-gray-600 dark:text-gray-300'>Full Stack Developer at IntVerse.io</p>
              <p className='text-sm text-gray-500 mt-1'>Pune, Maharashtra</p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Experience</h3>
              <p className='text-gray-600 dark:text-gray-300'>2+ Years</p>
              <p className='text-sm text-gray-500 mt-1'>Frontend & Backend Development</p>
            </div>
            <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
              <h3 className='text-lg font-semibold mb-2'>Education</h3>
              <p className='text-gray-600 dark:text-gray-300'>MCA (Ongoing)</p>
              <p className='text-sm text-gray-500 mt-1'>Vellore Institute of Technology</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
