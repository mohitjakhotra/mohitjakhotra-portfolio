import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Experience: NextPage = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'IntVerse.io',
      period: 'Aug 2023 – Present',
      type: 'Full-time',
      location: 'Pune, Maharashtra',
      description: 'Developing scalable web applications and enterprise solutions',
      responsibilities: [
        'Developing user interfaces for Kafka applications and data streaming platforms',
        'Maintaining and developing in-house plugins using Backstage.io for developer experience',
        'Creating proofs-of-concept to integrate ServiceNow and ticketing services',
        'Implementing solutions for registering client services on the platform',
        'Writing comprehensive unit and integration tests with Jest and React Testing Library',
        'Collaborating with cross-functional teams to deliver high-quality software solutions'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'Kafka', 'Backstage.io', 'ServiceNow', 'Jest', 'Docker']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'DeepThought EduTech Ventures',
      period: 'Jul 2022 – Jul 2023',
      type: 'Internship',
      location: 'Remote',
      description: 'Building innovative web applications and MVPs for education technology',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Contributed to MVPs and innovative in-house applications for educational platforms',
        'Improved UI/UX designs resulting in better user engagement and experience',
        'Successfully launched beta-tested products with positive user feedback',
        'Collaborated with design and product teams to implement user-centric features',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML', 'Firebase']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
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
        <title>Experience | Mohit Jakhotra</title>
        <meta name='description' content='Professional experience of Mohit Jakhotra - Full Stack Developer with expertise in React, Node.js, and enterprise applications.' />
        <meta name='keywords' content='Mohit Jakhotra experience, Full Stack Developer, IntVerse.io, DeepThought EduTech' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-4xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className='text-4xl font-bold mb-8'
          variants={itemVariants}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Professional Experience
        </motion.h1>

        <motion.div className='space-y-8' variants={containerVariants}>
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className='flex flex-col md:flex-row md:justify-between md:items-start mb-4'>
                <div>
                  <motion.h2
                    className='text-2xl font-semibold mb-1'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {exp.title}
                  </motion.h2>
                  <motion.p
                    className='text-lg text-indigo-600 dark:text-indigo-400 mb-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p
                    className='text-sm text-gray-500 dark:text-gray-400 mb-2'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.period} • {exp.type} • {exp.location}
                  </motion.p>
                </div>
                <motion.div
                  className='mt-2 md:mt-0'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'Full-time'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {exp.type}
                  </span>
                </motion.div>
              </div>

              <motion.p
                className='text-gray-700 dark:text-gray-300 mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {exp.description}
              </motion.p>

              <motion.div
                className='mb-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className='text-lg font-medium mb-2'>Key Responsibilities:</h3>
                <ul className='list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400'>
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className='text-lg font-medium mb-2'>Technologies Used:</h3>
                <div className='flex flex-wrap gap-2'>
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className='bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + idx * 0.05, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-12 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-2xl font-semibold mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <motion.div
            className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-2xl mx-auto'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className='text-lg font-semibold mb-2'>Master of Computer Applications (MCA)</h3>
                <p className='text-indigo-600 dark:text-indigo-400 mb-1'>Vellore Institute of Technology</p>
                <p className='text-sm text-gray-500'>Aug 2024 - Ongoing</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className='text-lg font-semibold mb-2'>Bachelor of Computer Applications (BCA)</h3>
                <p className='text-indigo-600 dark:text-indigo-400 mb-1'>Brihan Maharashtra College of Commerce</p>
                <p className='text-sm text-gray-500'>Jul 2019 - May 2022</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='mt-8 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block mr-4'
          >
            <Link href='/projects' className='btn-primary'>View Projects</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'
          >
            <Link href='/contact' className='btn-outline'>Get In Touch</Link>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default Experience