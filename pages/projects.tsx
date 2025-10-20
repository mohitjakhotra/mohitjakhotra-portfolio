import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
	{
		id: 1,
		title: 'Small Business QR Code Menu & Order System',
		description:
			'An open-source web application that streamlines customer onboarding and digital menu/payment services for local shops and cafeterias. Customers can scan QR codes to browse digital menus, place orders, and make payments digitally.',
		techStack: [
			'React',
			'Node.js',
			'MongoDB',
			'Express',
			'Stripe API',
			'QR Code Generation',
		],
		github: 'https://github.com/mohitjakhotra/qr-menu-system',
		demo: 'https://qr-menu-demo.vercel.app',
		featured: true,
		category: 'Full Stack Application',
	},
	{
		id: 2,
		title: 'Kafka UI Dashboard',
		description:
			'Modern web interface for monitoring and managing Kafka clusters. Built with React and TypeScript, featuring real-time topic monitoring, consumer group management, and message browsing capabilities.',
		techStack: [
			'React',
			'TypeScript',
			'Kafka REST API',
			'Chart.js',
			'Tailwind CSS',
		],
		github: 'https://github.com/mohitjakhotra/kafka-dashboard',
		demo: '',
		featured: true,
		category: 'Enterprise Tool',
	},
	{
		id: 3,
		title: 'Backstage Developer Portal Plugin',
		description:
			'Custom plugin for Backstage.io that provides developer experience enhancements including service catalog integration, CI/CD pipeline visualization, and automated documentation generation.',
		techStack: ['TypeScript', 'Backstage.io', 'React', 'Node.js', 'PostgreSQL'],
		github: 'https://github.com/mohitjakhotra/backstage-custom-plugin',
		demo: '',
		featured: false,
		category: 'Developer Tools',
	},
	{
		id: 4,
		title: 'ServiceNow Integration POC',
		description:
			'Proof-of-concept application demonstrating seamless integration between custom web applications and ServiceNow ticketing system. Includes automated ticket creation, status tracking, and workflow management.',
		techStack: ['Node.js', 'Express', 'ServiceNow API', 'JWT', 'Webhooks'],
		github: 'https://github.com/mohitjakhotra/servicenow-integration',
		demo: '',
		featured: false,
		category: 'Integration',
	},
	{
		id: 5,
		title: 'EduTech Learning Platform',
		description:
			'MVP for an educational technology platform featuring interactive courses, progress tracking, and collaborative learning tools. Built during internship with focus on user experience and rapid prototyping.',
		techStack: [
			'React',
			'Firebase',
			'Material-UI',
			'React Router',
			'Context API',
		],
		github: 'https://github.com/mohitjakhotra/edutech-platform',
		demo: '',
		featured: false,
		category: 'Web Application',
	},
]

const Projects: NextPage = () => {
	const featuredProjects = projects.filter((project) => project.featured)
	const otherProjects = projects.filter((project) => !project.featured)

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<>
			<Head>
				<title>Projects | Mohit Jakhotra</title>
				<meta
					name='description'
					content='Portfolio of projects by Mohit Jakhotra - Full Stack Developer. Featuring QR code menu system, Kafka dashboard, and enterprise integrations.'
				/>
				<meta
					name='keywords'
					content='Mohit Jakhotra projects, QR code menu, Kafka dashboard, Full Stack projects, React applications'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Navbar />
			<motion.main
				className='min-h-screen max-w-6xl mx-auto px-4 py-12'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.div className='text-center mb-12' variants={itemVariants}>
					<motion.h1
						className='text-4xl font-bold mb-4'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
					>
						My Projects
					</motion.h1>
					<motion.p
						className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
					>
						A showcase of my work in full-stack development, from enterprise
						applications to open-source tools
						<br className='hidden sm:inline' />
						that solve real-world problems.
					</motion.p>
				</motion.div>

				{/* Featured Projects */}
				<motion.section
					className='mb-12'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className='text-2xl font-semibold mb-6'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}
					>
						Featured Projects
					</motion.h2>
					<motion.div
						className='grid grid-cols-1 lg:grid-cols-2 gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
					>
						{featuredProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-2 border-indigo-200 dark:border-indigo-800'>
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
									<ProjectCard project={project} />
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				{/* Other Projects */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className='text-2xl font-semibold mb-6'
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						viewport={{ once: true }}
					>
						Other Projects
					</motion.h2>
					<motion.div
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
					>
						{otherProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								whileHover={{ y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<div className='mb-2'>
									<span className='bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium'>
										{project.category}
									</span>
								</div>
								<ProjectCard project={project} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				<motion.div
					className='mt-12 text-center'
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
						Interested in collaborating on a project?
					</motion.p>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link href='/contact' className='btn-primary'>
							Let&apos;s Work Together
						</Link>
					</motion.div>
				</motion.div>
			</motion.main>
			<Footer />
		</>
	)
}

export default Projects
