import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import CluesPage from './pages/CluesPage'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-outback-sand/30 to-white dark:from-secondary-dark dark:to-secondary transition-colors duration-300">
      <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold font-heading text-kangaroo"
          >
            HangRoo
          </motion.div>
          <span className="bg-kangaroo text-white text-xs px-2 py-0.5 rounded-full">BETA</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Navigation />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clues" element={<CluesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="py-4 px-6 text-center text-sm text-surface-500 dark:text-surface-400">
        <p>© {new Date().getFullYear()} HangRoo Game. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App