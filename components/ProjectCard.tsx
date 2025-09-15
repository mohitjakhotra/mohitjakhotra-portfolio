type Project = {
  id: number
  title: string
  description: string
  techStack: string[]
  github?: string
  demo?: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between'>
      <div>
        <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
        <p className='text-gray-700 dark:text-gray-300 mb-4'>{project.description}</p>
        <div className='mb-4'>
          {project.techStack.map((tech) => (
            <span key={tech} className='inline-block mr-2 mb-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 text-xs font-medium px-2 py-1 rounded'>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-auto flex gap-4'>
        {project.github && (
          <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-indigo-600 dark:text-indigo-400 hover:underline'>GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} target='_blank' rel='noopener noreferrer' className='text-indigo-600 dark:text-indigo-400 hover:underline'>Live Demo</a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
