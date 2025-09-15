import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A web app that does amazing things.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourname/project-one',
    demo: 'https://project-one-demo.vercel.app'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Another cool project showing skills.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourname/project-two',
    demo: ''
  }
]

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects | Your Name</title>
        <meta name='description' content='Showcase of projects by Your Name, software developer.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <main className='min-h-screen max-w-5xl mx-auto px-4 py-12'>
        <h1 className='text-3xl font-bold mb-8'>Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Projects
