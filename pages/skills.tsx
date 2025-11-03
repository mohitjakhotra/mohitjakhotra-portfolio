import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CodeBracketIcon, ServerIcon, CircleStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Skills: NextPage = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Firebase', level: 75 },
        { name: 'PHP', level: 70 }
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'React Testing Library', level: 75 }
      ]
    },
    {
      title: 'Platforms & Frameworks',
      skills: [
        { name: 'Kafka', level: 80 },
        { name: 'Backstage.io', level: 75 },
        { name: 'ServiceNow', level: 70 },
        { name: 'Git', level: 85 }
      ]
    }
  ]

  const certifications = [
    {
      title: 'Cluster Operations with Redpanda',
      issuer: 'Redpanda',
      date: 'Oct 2023',
      credentialId: 'RP-2023-CO-001',
      description: 'Advanced Kafka-compatible streaming platform operations and management'
    },
    {
      title: 'Algorithmic Trading with Flink',
      issuer: 'Apache Flink Community',
      date: 'Sep 2023',
      credentialId: 'FLINK-2023-AT-002',
      description: 'Real-time data processing and algorithmic trading systems using Apache Flink'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const getProficiencyColor = (level: number) => {
    if (level >= 85) return 'bg-green-500'
    if (level >= 75) return 'bg-blue-500'
    if (level >= 65) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getProficiencyLabel = (level: number) => {
    if (level >= 85) return 'Expert'
    if (level >= 75) return 'Advanced'
    if (level >= 65) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <>
      <Head>
        <title>Skills & Certifications | Mohit Jakhotra</title>
        <meta name='description' content='Technical skills and certifications of Mohit Jakhotra - Full Stack Developer proficient in React, Node.js, Kafka, and modern web technologies.' />
        <meta name='keywords' content='Mohit Jakhotra skills, React developer, Node.js, Kafka, TypeScript, Full Stack certifications' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <motion.main
        className='min-h-screen max-w-6xl mx-auto px-4 py-12'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className='text-center mb-12'
          variants={itemVariants}
        >
          <motion.h1
            className='text-4xl font-bold mb-4'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Skills & Certifications
          </motion.h1>
          <motion.p
            className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive overview of my technical expertise and professional certifications
            in full-stack development and enterprise technologies.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className='text-xl font-semibold mb-6 flex items-center gap-3'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center'>
                    {category.title === 'Frontend Development' && <CodeBracketIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Backend Development' && <ServerIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Databases & Tools' && <CircleStackIcon className='w-5 h-5 text-white' />}
                    {category.title === 'Platforms & Frameworks' && <WrenchScrewdriverIcon className='w-5 h-5 text-white' />}
                  </div>
                  {category.title}
                </motion.h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-medium'>{skill.name}</span>
                        <span className='text-sm text-gray-500'>{getProficiencyLabel(skill.level)}</span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                        <motion.div
                          className={`h-2 rounded-full ${getProficiencyColor(skill.level)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.2 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className='flex items-start justify-between mb-4'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className='text-lg font-semibold mb-1'>{cert.title}</h3>
                    <p className='text-blue-600 dark:text-blue-400 font-medium'>{cert.issuer}</p>
                  </motion.div>
                  <motion.span
                    className='text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {cert.date}
                  </motion.span>
                </div>
                <motion.p
                  className='text-gray-600 dark:text-gray-300 mb-3'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {cert.description}
                </motion.p>
                <motion.p
                  className='text-sm text-gray-500'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className='font-medium'>Credential ID:</span> {cert.credentialId}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Additional Skills */}
        <motion.section
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-3xl font-semibold mb-8'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Additional Expertise
          </motion.h2>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-6'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Testing',
                description: 'Jest, React Testing Library, Integration Testing'
              },
              {
                title: 'DevOps',
                description: 'Docker, CI/CD, Version Control (Git)'
              },
              {
                title: 'Soft Skills',
                description: 'Problem Solving, Team Collaboration, Agile Development'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300'
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className='text-lg font-semibold mb-2'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p
                  className='text-gray-600 dark:text-gray-300'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className='text-gray-600 dark:text-gray-300 mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            Always learning and exploring new technologies
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href='/contact' className='btn-primary'>Discuss a Project</Link>
          </motion.div>
        </motion.div>
      </motion.main>
      <Footer />
    </>
  )
}

export default Skills