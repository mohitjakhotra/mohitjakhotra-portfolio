import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Name | Software Developer</title>
        <meta name='description' content='Personal portfolio of Your Name, a software developer.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-5xl mx-auto px-4 py-12'>
        <section className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Hi, I'm Your Name.</h1>
          <p className='text-lg text-gray-700 dark:text-gray-300 mb-8'>I am a passionate software developer focused on creating efficient, modern web applications.</p>
          <div className='flex justify-center gap-6'>
            <a href='#projects' className='btn-primary'>View Projects</a>
            <a href='#contact' className='btn-outline'>Contact Me</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
