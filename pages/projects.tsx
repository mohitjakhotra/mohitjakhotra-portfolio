import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Small Business QR Code Menu & Order System',
    description: 'An open-source web application that streamlines customer onboarding and digital menu/payment services for local shops and cafeterias. Customers can scan QR codes to browse digital menus, place orders, and make payments digitally.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'QR Code Generation'],
    github: 'https://github.com/mohitjakhotra/qr-menu-system',
    demo: 'https://qr-menu-demo.vercel.app',
    featured: true,
    category: 'Full Stack Application'
  },
  {
    id: 2,
    title: 'Kafka UI Dashboard',
    description: 'Modern web interface for monitoring and managing Kafka clusters. Built with React and TypeScript, featuring real-time topic monitoring, consumer group management, and message browsing capabilities.',
    techStack: ['React', 'TypeScript', 'Kafka REST API', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com/mohitjakhotra/kafka-dashboard',
    demo: '',
    featured: true,
    category: 'Enterprise Tool'
  },
  {
    id: 3,
    title: 'Backstage Developer Portal Plugin',
    description: 'Custom plugin for Backstage.io that provides developer experience enhancements including service catalog integration, CI/CD pipeline visualization, and automated documentation generation.',
    techStack: ['TypeScript', 'Backstage.io', 'React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/mohitjakhotra/backstage-custom-plugin',
    demo: '',
    featured: false,
    category: 'Developer Tools'
  },
  {
    id: 4,
    title: 'ServiceNow Integration POC',
    description: 'Proof-of-concept application demonstrating seamless integration between custom web applications and ServiceNow ticketing system. Includes automated ticket creation, status tracking, and workflow management.',
    techStack: ['Node.js', 'Express', 'ServiceNow API', 'JWT', 'Webhooks'],
    github: 'https://github.com/mohitjakhotra/servicenow-integration',
    demo: '',
    featured: false,
    category: 'Integration'
  },
  {
    id: 5,
    title: 'EduTech Learning Platform',
    description: 'MVP for an educational technology platform featuring interactive courses, progress tracking, and collaborative learning tools. Built during internship with focus on user experience and rapid prototyping.',
    techStack: ['React', 'Firebase', 'Material-UI', 'React Router', 'Context API'],
    github: 'https://github.com/mohitjakhotra/edutech-platform',
    demo: '',
    featured: false,
    category: 'Web Application'
  }
]

const Projects: NextPage = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <>
      <Head>
        <title>Projects | Mohit Jakhotra</title>
        <meta name='description' content='Portfolio of projects by Mohit Jakhotra - Full Stack Developer. Featuring QR code menu system, Kafka dashboard, and enterprise integrations.' />
        <meta name='keywords' content='Mohit Jakhotra projects, QR code menu, Kafka dashboard, Full Stack projects, React applications' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-6xl mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>My Projects</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            A showcase of my work in full-stack development, from enterprise applications to open-source tools
            that solve real-world problems.
          </p>
        </div>

        {/* Featured Projects */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-6'>Featured Projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {featuredProjects.map(project => (
              <div key={project.id} className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-indigo-200 dark:border-indigo-800'>
                <div className='flex justify-between items-start mb-4'>
                  <span className='bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium'>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className='bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium'>
                      Featured
                    </span>
                  )}
                </div>
                <ProjectCard key={project.id} project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className='text-2xl font-semibold mb-6'>Other Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {otherProjects.map(project => (
              <div key={project.id}>
                <div className='mb-2'>
                  <span className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium'>
                    {project.category}
                  </span>
                </div>
                <ProjectCard key={project.id} project={project} />
              </div>
            ))}
          </div>
        </section>

        <div className='mt-12 text-center'>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Interested in collaborating on a project?
          </p>
          <Link href='/contact' className='btn-primary'>Let&apos;s Work Together</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Projects
