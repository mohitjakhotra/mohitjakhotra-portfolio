import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me | Your Name</title>
        <meta name='description' content='About Your Name - Software Developer.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-4xl mx-auto px-4 py-12 prose prose-indigo dark:prose-invert'>
        <h1>About Me</h1>
        <p>I am Your Name, a software developer passionate about building scalable web applications. I enjoy working with modern web technologies and continuously learning new skills.</p>
        <p>My expertise includes React, Next.js, TypeScript, and Tailwind CSS.</p>
        <p>I believe in clean code, performance optimization, and creative solutions.</p>
      </main>
      <Footer />
    </>
  )
}

export default About
