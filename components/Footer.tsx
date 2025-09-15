const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12'>
      <div className='max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400'>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
