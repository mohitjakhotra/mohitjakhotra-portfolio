import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

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
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <motion.h2
          className='text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {project.title}
        </motion.h2>
        <motion.p
          className='text-gray-700 dark:text-gray-300 mb-4 leading-relaxed'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className='mb-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {project.techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className='inline-block mr-2 mb-2 bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-100 text-xs font-medium px-3 py-1 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-600 transition-colors cursor-default'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <motion.div
        className='mt-auto flex gap-3'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {project.github && (
          <motion.a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className='w-4 h-4' />
            GitHub
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowTopRightOnSquareIcon className='w-4 h-4' />
            Live Demo
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard
