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
        <title>Mohit Jakhotra | Software Engineer</title>
        <meta name='description' content='Mohit Jakhotra - Software Engineer specializing in React, Node.js, and Kafka applications. Based in Pune, India.' />
        <meta name='keywords' content='Mohit Jakhotra, Software Engineer, React, Node.js, Kafka, Pune, India' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />

      {/* Full-bleed subtle background overlays (cover entire viewport) */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]'></div>
      </div>

      <main className='min-h-screen max-w-5xl mx-auto px-4 py-12 relative'>
        <motion.section
          className='text-center relative z-10'
          // Removed conflicting animation props - PageTransition handles page-level animations
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
        >
          <motion.div className='mb-8' /* variants={itemVariants} */>
            <motion.div
              className='w-36 h-36 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl overflow-hidden relative'
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.35, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl'></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
                className='w-full h-full relative z-10'
              >
                <Image
                  src='/profile.png'
                  alt='Mohit Jakhotra - Professional Photo'
                  width={144}
                  height={144}
                  className='w-full h-full object-cover rounded-2xl'
                  onError={(e) => {
                    // Hide the image and show MJ fallback
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.textContent = 'MJ';
                    fallback.className = 'text-white text-5xl font-bold flex items-center justify-center w-full h-full rounded-2xl';
                    e.currentTarget.parentElement?.appendChild(fallback);
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
            {/* Static Name */}
            <motion.h1
              className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent'
              // variants={itemVariants}
            >
              Hi, I&apos;m Mohit Jakhotra
            </motion.h1>
            
            {/* Typewriter Animation for Roles */}
            <motion.div 
              className='mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer',
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
              className='text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed'
              // variants={itemVariants}
            >
              Building scalable web applications with modern technologies and turning complex problems into elegant solutions
            </motion.p>
          </motion.div> 

          <motion.div
            className='flex flex-col sm:flex-row justify-center gap-6 mb-20'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.35 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='group'
            >
              <Link href='/projects' className='inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-800'>
                <CodeBracketIcon className='w-5 h-5' />
                View My Work
                <motion.div
                  className='w-2 h-2 bg-white rounded-full'
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='group'
            >
              <Link href='/contact' className='inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 group-hover:shadow-lg'>
                Get In Touch
                <ChevronDownIcon className='w-5 h-5 group-hover:translate-y-1 transition-transform duration-300' />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div
              className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4'>
                <CodeBracketIcon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>Current Role</h3>
              <p className='text-gray-600 dark:text-gray-300 font-medium mb-1'>Software Engineer</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>IntVerse.io • Remote</p>
            </motion.div>
            <motion.div
              className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4'>
                <CpuChipIcon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>Experience</h3>
              <p className='text-gray-600 dark:text-gray-300 font-medium mb-1'>2+ Years</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>Full Stack Development</p>
            </motion.div>
            <motion.div
              className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4'>
                <GlobeAltIcon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white'>Education</h3>
              <p className='text-gray-600 dark:text-gray-300 font-medium mb-1'>MCA (Ongoing)</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>VIT Vellore</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Illustrations Section */}
        <motion.section
          className='py-16 relative z-10'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent'>What I Do</h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Crafting digital experiences through code, creativity, and innovation
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
            {/* Coding Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.02 }}
            >
              <div className='relative mb-8'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl'></div>
                  <CodeBracketIcon className='w-12 h-12 text-white relative z-10' />
                </div>
                <div className='absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg'>
                  <span className='text-sm font-bold text-gray-800'>{`</>`}</span>
                </div>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Frontend Development</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xs mx-auto'>
                Building responsive, interactive user interfaces with modern frameworks like React and Next.js
              </p>
            </motion.div>

            {/* Backend Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
            >
              <div className='relative mb-8'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-gray-500/25 transition-all duration-500 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl'></div>
                  <CpuChipIcon className='w-12 h-12 text-white relative z-10' />
                </div>
                <div className='absolute -top-3 -right-3 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center shadow-lg'>
                  <span className='text-sm font-bold text-white'>⚡</span>
                </div>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Backend Development</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xs mx-auto'>
                Creating robust server-side applications with Node.js, databases, and scalable architectures
              </p>
            </motion.div>

            {/* Global Collaboration Illustration */}
            <motion.div
              className='text-center group'
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className='relative mb-8'>
                <div className='w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 relative overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl'></div>
                  <GlobeAltIcon className='w-12 h-12 text-white relative z-10' />
                </div>
                <div className='absolute -top-3 -right-3 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center shadow-lg'>
                  <span className='text-sm font-bold text-white'>🌍</span>
                </div>
              </div>
              <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Full Stack Solutions</h3>
              <p className='text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xs mx-auto'>
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
