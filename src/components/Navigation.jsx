import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Clues Game', path: '/clues' }
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mobile-menu-content ml-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-heading">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-surface-100 dark:hover:bg-surface-700"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-2">
                {navItems.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation