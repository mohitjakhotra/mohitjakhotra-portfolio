import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | Your Name</title>
        <meta name='description' content='Contact Your Name for software development opportunities.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-4xl mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold mb-6'>Get in Touch</h1>
        <p>If you want to collaborate or have any questions, feel free to reach out.</p>
        <form className='mt-8 max-w-lg'>
          <label htmlFor='name' className='block mb-2 font-medium'>Name</label>
          <input type='text' id='name' name='name' className='w-full border border-gray-300 rounded px-3 py-2 mb-4' required />

          <label htmlFor='email' className='block mb-2 font-medium'>Email</label>
          <input type='email' id='email' name='email' className='w-full border border-gray-300 rounded px-3 py-2 mb-4' required />

          <label htmlFor='message' className='block mb-2 font-medium'>Message</label>
          <textarea id='message' name='message' rows={5} className='w-full border border-gray-300 rounded px-3 py-2 mb-4' required></textarea>

          <button type='submit' className='btn-primary'>Send</button>
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Contact
