import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
}

const pageTransition = {
  type: 'tween' as const,
  ease: 'anticipate' as const,
  duration: 0.4
}

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait" initial={true}>
      <motion.div
        key={router.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition