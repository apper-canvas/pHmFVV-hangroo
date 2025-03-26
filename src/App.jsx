import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import CluesPage from './pages/CluesPage'
import BackgroundElements from './components/BackgroundElements'

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
    <div className="min-h-screen bg-gradient-outback relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50"></div>
      <div className="absolute inset-0 pattern-kangaroo opacity-30"></div>
      
      <BackgroundElements />
      
      <div className="relative z-10">
        <header className="py-4 px-6 flex justify-between items-center backdrop-blur-sm bg-white/30 dark:bg-surface-900/30">
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold font-heading text-kangaroo dark:text-kangaroo-light text-shadow-sm"
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
              className="p-2 rounded-full bg-surface-100/80 dark:bg-surface-800/80 text-surface-700 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors backdrop-blur-sm"
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

        <footer className="py-4 px-6 text-center text-sm text-surface-500 dark:text-surface-400 backdrop-blur-sm bg-white/30 dark:bg-surface-900/30">
          <p>© {new Date().getFullYear()} HangRoo Game. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App