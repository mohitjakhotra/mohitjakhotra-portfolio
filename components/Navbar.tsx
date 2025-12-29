import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, DocumentIcon, LinkIcon, CodeBracketIcon, NewspaperIcon } from '@heroicons/react/24/outline'
import { MEDIUM_PROFILE, GITHUB_PROFILE, LINKEDIN_PROFILE } from '../lib/constants'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    {
      href: LINKEDIN_PROFILE,
      icon: LinkIcon,
      label: 'LinkedIn'
    },
    {
      href: GITHUB_PROFILE,
      icon: CodeBracketIcon,
      label: 'GitHub'
    },
    {
      href: MEDIUM_PROFILE,
      icon: NewspaperIcon,
      label: 'Medium'
    }
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [router.pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (menuOpen && !target.closest('.mobile-menu-container')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <motion.nav
      className='bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <motion.div
            className='flex items-center'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href='/' className='text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-mono'>
              &lt;/&gt;
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className='hidden sm:flex sm:items-center sm:space-x-8'>
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className='flex items-center'
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200 relative group ${
                    router.pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                    router.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Resume and Social Links */}
          <div className='hidden sm:flex sm:items-center sm:space-x-4'>
            <motion.a
              href='/mohitjakhotra.pdf'
              download
              className='inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <DocumentIcon className='w-4 h-4 mr-2' />
              Resume
            </motion.a>
            
            <div className='flex items-center space-x-2'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800'
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                >
                  <social.icon className='w-5 h-5' />
                  <span className='sr-only'>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              type='button'
              className='bg-gray-100 dark:bg-gray-800 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors mobile-menu-container'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className='sr-only'>Open main menu</span>
              <AnimatePresence mode="wait">
                {!menuOpen ? (
                  <motion.div
                    key="open"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className='block h-6 w-6' />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className='block h-6 w-6' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='sm:hidden mobile-menu-container'
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 ${
                      router.pathname === item.href
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Resume Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
                className='pt-2 border-t border-gray-200 dark:border-gray-700'
              >
                <a
                  href='/mohitjakhotra.pdf'
                  download
                  className='flex items-center px-3 py-2 text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-md transition-all duration-200'
                  onClick={() => setMenuOpen(false)}
                >
                  <DocumentIcon className='w-5 h-5 mr-3' />
                  Download Resume
                </a>
              </motion.div>
              
              {/* Mobile Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.2 }}
                className='flex justify-center space-x-4 pt-2'
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'
                    onClick={() => setMenuOpen(false)}
                  >
                    <social.icon className='w-6 h-6' />
                    <span className='sr-only'>{social.label}</span>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
