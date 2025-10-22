import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LightBulbIcon, HeartIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Head>
        <title>About Me | Mohit Jakhotra</title>
        <meta name='description' content='About Mohit Jakhotra - Full Stack Developer passionate about building scalable web applications and modern user experiences.' />
        <meta name='keywords' content='Mohit Jakhotra, Full Stack Developer, React, Node.js, Kafka, Pune' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-4xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className='mb-12' variants={itemVariants}>
          <motion.h1
            className='text-4xl font-bold mb-6'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className='prose prose-lg dark:prose-invert max-w-none'
            variants={itemVariants}
          >
            <motion.p
              className='text-xl leading-relaxed mb-6'
              variants={itemVariants}
            >
              Hi, I&apos;m <strong>Mohit Jakhotra</strong>, a passionate Full Stack Developer based in Hyderabad.
              With over 2 years of experience in web development, I specialize in creating efficient, scalable applications
              that solve real-world problems.
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              My Journey
            </motion.h2>
            <motion.p variants={itemVariants}>
              My journey in software development began with a Bachelor&apos;s in Computer Applications from Brihan Maharashtra
              College of Commerce. Currently, I&apos;m pursuing my Master of Computer Applications (MCA) at Vellore Institute
              of Technology, where I continue to deepen my technical knowledge and problem-solving skills.
            </motion.p>

            <motion.p variants={itemVariants}>
              I started my professional career as a Frontend Developer at DeepThought EduTech Ventures, where I worked on
              innovative web applications using React and Node.js. This experience taught me the importance of user-centric
              design and rapid prototyping for MVPs.
            </motion.p>

            <motion.p variants={itemVariants}>
              Currently, I work as a Full Stack Developer at IntVerse.io, where I develop user interfaces for Kafka applications,
              maintain in-house plugins using Backstage.io, and create proofs-of-concept for integrating ServiceNow and
              ticketing services. I believe in writing clean, testable code and implementing solutions that make a tangible
              impact on business operations.
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              What Drives Me
            </motion.h2>
            <motion.p variants={itemVariants}>
              I&apos;m passionate about leveraging technology to streamline processes and create meaningful user experiences.
              Whether it&apos;s developing a QR code menu system for local businesses or integrating complex enterprise systems,
              I enjoy the challenge of turning complex problems into simple, elegant solutions.
            </motion.p>

            <motion.p variants={itemVariants}>
              When I&apos;m not coding, you can find me writing technical blogs on Medium, exploring new technologies,
              or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the
              developer community.
            </motion.p>

            <motion.h2
              className='text-2xl font-semibold mt-8 mb-4'
              variants={itemVariants}
            >
              Core Values
            </motion.h2>
            
            {/* Illustrations Section */}
            <motion.div 
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-8'
              variants={itemVariants}
            >
              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <LightBulbIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Innovation</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Always exploring new technologies and creative solutions.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <HeartIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Passion</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Driven by love for clean code and meaningful impact.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <RocketLaunchIcon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>Growth</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Continuous learning and pushing boundaries forward.</p>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group'
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Collaboration</h3>
                <p className='text-gray-600 dark:text-gray-300 text-sm'>Building together with teams and communities.</p>
              </motion.div>
            </motion.div>

            <div className='mt-8 text-center'>
              <Link href='/experience' className='btn-primary mr-4'>View My Experience</Link>
              <Link href='/projects' className='btn-outline'>See My Projects</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default About
