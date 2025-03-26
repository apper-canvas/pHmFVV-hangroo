import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Home as HomeIcon, Award, Book, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home', icon: <HomeIcon size={18} /> },
  { path: '/leaderboard', label: 'Leaderboard', icon: <Award size={18} /> },
  { path: '/how-to-play', label: 'How to Play', icon: <Book size={18} /> },
  { path: '/about', label: 'About', icon: <Info size={18} /> }
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="p-2 rounded-full bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </motion.button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => 
              `nav-link flex items-center gap-2 ${isActive ? 'nav-link-active' : ''}`
            }
            end={link.path === '/'}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu-content"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-2xl font-bold font-heading text-kangaroo">
                  HangRoo
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-surface-100 dark:bg-surface-800 text-surface-700 dark:text-surface-200 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <nav className="flex flex-col space-y-2">
                {navLinks.map(link => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `nav-link flex items-center gap-3 px-4 py-3 ${isActive ? 'nav-link-active' : ''}`
                    }
                    end={link.path === '/'}
                    onClick={closeMenu}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-surface-200 dark:border-surface-700">
                <p className="text-sm text-surface-500 dark:text-surface-400">
                  © {new Date().getFullYear()} HangRoo Game
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation