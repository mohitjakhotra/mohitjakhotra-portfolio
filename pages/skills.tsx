import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
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
      <main className='min-h-screen max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Skills & Certifications</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            A comprehensive overview of my technical expertise and professional certifications
            in full-stack development and enterprise technologies.
          </p>
        </div>

        {/* Skills Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-8'>Technical Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {skillCategories.map((category, index) => (
              <div key={index} className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
                <h3 className='text-xl font-semibold mb-6'>{category.title}</h3>
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='font-medium'>{skill.name}</span>
                        <span className='text-sm text-gray-500'>{getProficiencyLabel(skill.level)}</span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                        <div
                          className={`h-2 rounded-full ${getProficiencyColor(skill.level)} transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-8'>Certifications</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {certifications.map((cert, index) => (
              <div key={index} className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-indigo-500'>
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <h3 className='text-lg font-semibold mb-1'>{cert.title}</h3>
                    <p className='text-indigo-600 dark:text-indigo-400 font-medium'>{cert.issuer}</p>
                  </div>
                  <span className='text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full'>
                    {cert.date}
                  </span>
                </div>
                <p className='text-gray-600 dark:text-gray-300 mb-3'>{cert.description}</p>
                <p className='text-sm text-gray-500'>
                  <span className='font-medium'>Credential ID:</span> {cert.credentialId}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Skills */}
        <section className='mb-16'>
          <h2 className='text-3xl font-semibold mb-8'>Additional Expertise</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center'>
              <h3 className='text-lg font-semibold mb-2'>Testing</h3>
              <p className='text-gray-600 dark:text-gray-300'>Jest, React Testing Library, Integration Testing</p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center'>
              <h3 className='text-lg font-semibold mb-2'>DevOps</h3>
              <p className='text-gray-600 dark:text-gray-300'>Docker, CI/CD, Version Control (Git)</p>
            </div>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center'>
              <h3 className='text-lg font-semibold mb-2'>Soft Skills</h3>
              <p className='text-gray-600 dark:text-gray-300'>Problem Solving, Team Collaboration, Agile Development</p>
            </div>
          </div>
        </section>

        <div className='text-center'>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Always learning and exploring new technologies
          </p>
          <Link href='/contact' className='btn-primary'>Discuss a Project</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Skills