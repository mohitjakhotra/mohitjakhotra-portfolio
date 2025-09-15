import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/' className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>
              YourName
            </Link>
          </div>
          <div className='hidden sm:flex sm:space-x-8'>
            <Link href='/' className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400'>Home</Link>
            <Link href='/about' className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400'>About</Link>
            <Link href='/projects' className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400'>Projects</Link>
            <Link href='/contact' className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400'>Contact</Link>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} type='button' className='bg-gray-100 dark:bg-gray-800 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='sr-only'>Open main menu</span>
              {!menuOpen ? (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              ) : (
                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-4 space-y-1'>
            <Link href='/' className='block pl-3 pr-4 py-2 text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-800'>Home</Link>
            <Link href='/about' className='block pl-3 pr-4 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'>About</Link>
            <Link href='/projects' className='block pl-3 pr-4 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'>Projects</Link>
            <Link href='/contact' className='block pl-3 pr-4 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
