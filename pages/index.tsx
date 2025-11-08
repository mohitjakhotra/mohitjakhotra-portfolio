import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';

import Image from 'next/image'
import { ChevronDownIcon, CodeBracketIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Home: NextPage = () => {
  // Removed conflicting animation variants - PageTransition handles page-level animations
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       staggerChildren: 0.2
  //     }
  //   }
  // }

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0 }
  // }

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
        <motion.section
          className='text-center'
          // Removed conflicting animation props - PageTransition handles page-level animations
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
        >
          <motion.div className='mb-8' /* variants={itemVariants} */>
            <motion.div
              className='w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg overflow-hidden'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className='w-full h-full'
              >
                <Image
                  src='/profile.png'
                  alt='Mohit Jakhotra - Professional Photo'
                  width={128}
                  height={128}
                  className='w-full h-full object-cover rounded-full'
                  onError={(e) => {
                    // Hide the image and show MJ fallback
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.textContent = 'MJ';
                    fallback.className = 'text-white text-4xl font-bold flex items-center justify-center w-full h-full';
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
            {/* Static Name */}
            <motion.h1
              className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent'
              // variants={itemVariants}
            >
              Hi, I&apos;m Mohit Jakhotra
            </motion.h1>
            
            {/* Typewriter Animation for Roles */}
            <motion.div 
              className='mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React & Node.js Expert', 
                  2000,
                  'Kafka Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                speed={50}
                className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium'
                repeat={Infinity}
                cursor={true}
                style={{
                  display: 'inline-block',
                  minHeight: '1.5em'
                }}
              />
            </motion.div>
            
            {/* Static Tagline */}
            <motion.p
              className='text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto'
              // variants={itemVariants}
            >
              Building scalable web applications with modern technologies
            </motion.p>
          </motion.div> 

          <motion.div
            className='flex flex-col sm:flex-row justify-center gap-4 mb-12'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href='/projects' className='btn-primary inline-flex items-center gap-2'>
                View My Work
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href='/contact' className='btn-outline inline-flex items-center gap-2'>
                Get In Touch
                <ChevronDownIcon className='w-4 h-4' />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <motion.div
              className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className='text-lg font-semibold mb-2'>Current Role</h3>
              <p className='text-gray-600 dark:text-gray-300'>Full Stack Developer at IntVerse.io</p>
              <p className='text-sm text-gray-500 mt-1'>Remote - Hyderabad</p>
            </motion.div>
            <motion.div
              className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className='text-lg font-semibold mb-2'>Experience</h3>
              <p className='text-gray-600 dark:text-gray-300'>2+ Years</p>
              <p className='text-sm text-gray-500 mt-1'>Frontend & Backend Development</p>
            </motion.div>
            <motion.div
              className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className='text-lg font-semibold mb-2'>Education</h3>
              <p className='text-gray-600 dark:text-gray-300'>MCA (Ongoing)</p>
              <p className='text-sm text-gray-500 mt-1'>Vellore Institute of Technology</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Illustrations Section */}
        <motion.section
          className='py-16'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>What I Do</h2>
            <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Crafting digital experiences through code, creativity, and innovation
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {/* Coding Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className='relative mb-6'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  <CodeBracketIcon className='w-12 h-12 text-white' />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-gray-800'>{`</>`}</span>
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-3'>Frontend Development</h3>
              <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                Building responsive, interactive user interfaces with modern frameworks like React and Next.js
              </p>
            </motion.div>

            {/* Backend Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className='relative mb-6'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  <CpuChipIcon className='w-12 h-12 text-white' />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-white'>⚡</span>
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-3'>Backend Development</h3>
              <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                Creating robust server-side applications with Node.js, databases, and scalable architectures
              </p>
            </motion.div>

            {/* Global Collaboration Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className='relative mb-6'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-gray-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300'>
                  <GlobeAltIcon className='w-12 h-12 text-white' />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center'>
                  <span className='text-xs font-bold text-white'>🌍</span>
                </div>
              </div>
              <h3 className='text-xl font-semibold mb-3'>Full Stack Solutions</h3>
              <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                Delivering end-to-end solutions that connect users worldwide through seamless digital experiences
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}

export default Home
