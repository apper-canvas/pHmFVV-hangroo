import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-kangaroo mb-2">404</h1>
        <h2 className="text-2xl font-heading text-secondary dark:text-outback-sand mb-6">
          Crikey! This page is lost in the outback.
        </h2>
        
        <div className="max-w-md mx-auto mb-8">
          <p className="text-surface-600 dark:text-surface-300">
            The page you're looking for seems to have hopped away. Let's get you back to the main trail.
          </p>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium shadow-md hover:bg-primary-dark transition-colors"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-surface-400 dark:text-surface-500"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
          <path 
            d="M60,20 C70,10 85,15 90,25 C95,35 90,45 85,50 C80,55 75,60 75,70 C75,80 80,85 85,90 C90,95 85,105 75,105 C65,105 60,100 55,95 C50,90 45,85 40,85 C35,85 30,90 25,95 C20,100 10,95 15,85 C20,75 30,70 35,65 C40,60 45,55 45,45 C45,35 50,30 60,20 Z" 
            className="fill-kangaroo/20 dark:fill-kangaroo/10 stroke-kangaroo stroke-2"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default NotFound