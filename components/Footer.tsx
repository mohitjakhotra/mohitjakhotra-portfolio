import Link from 'next/link'
import { motion } from 'framer-motion'
import { LinkIcon, CodeBracketIcon, NewspaperIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://linkedin.com/in/mohitjakhotra',
      icon: LinkIcon,
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/mohitjakhotra',
      icon: CodeBracketIcon,
      label: 'GitHub'
    },
    {
      href: 'https://medium.com/@mohitjakhotra',
      icon: NewspaperIcon,
      label: 'Medium'
    }
  ]

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' }
  ]

  const moreLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <motion.footer
      className='bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-12'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Brand */}
          <motion.div
            className='md:col-span-2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>Mohit Jakhotra</h3>
            <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
              Full Stack Developer passionate about creating efficient, scalable web applications
              and solving complex problems with modern technologies.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className='w-5 h-5' />
                  <span className='sr-only'>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className='text-sm font-semibold text-gray-900 dark:text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors'>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className='text-sm font-semibold text-gray-900 dark:text-white mb-4'>More</h4>
            <ul className='space-y-2'>
              {moreLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href} className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors'>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className='border-t border-gray-200 dark:border-gray-700 pt-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              © {currentYear} Mohit Jakhotra. All rights reserved.
            </p>
            <motion.p
              className='text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
              viewport={{ once: true }}
            >
              Built with Next.js & Tailwind CSS
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
