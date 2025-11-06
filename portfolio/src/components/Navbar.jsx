import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  // hide when scrolling down in the hero right pane, show when scrolling up
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onHeroScroll = (e) => {
      const dir = e?.detail?.direction
      if (dir === 'down') setHidden(true)
      else if (dir === 'up') setHidden(false)
    }

    window.addEventListener('hero-scroll', onHeroScroll)
    return () => window.removeEventListener('hero-scroll', onHeroScroll)
  }, [])

  const handleNavClick = (target) => {
    window.dispatchEvent(
      new CustomEvent('hero-scroll-to', {
        detail: { id: target },
      }),
    )
    setMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const navItems = [
    { id: 1, name: 'Home', target: 'home' },
    { id: 2, name: 'About', target: 'about' },
    { id: 3, name: 'Skills', target: 'skills' },
    { id: 4, name: 'Experience', target: 'experience' },
    { id: 5, name: 'Projects', target: 'projects' },
    // { id: 6, name: 'Contact', target: 'contact' }, // Commented out for now
  ]

  // Mobile: Show first 2 items directly, rest in dropdown
  const mobileVisibleItems = navItems.slice(0, 2) // Home, About
  const mobileDropdownItems = navItems.slice(2) // Skills, Experience, Projects

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-2">
        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ x: hidden ? '55%' : '0%', y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-lg"
        >
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-6 px-6 py-3">
            {navItems.map(({ id, name, target }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="button"
                tabIndex={0}
                onClick={() => handleNavClick(target)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleNavClick(target)
                  }
                }}
                className="cursor-pointer text-white font-medium hover:text-orange-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10"
              >
                {name}
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation - Properly contained */}
          <div className="md:hidden flex items-center justify-center px-4 py-2.5 relative">
            {/* Show first 2 navigation items */}
            <div className="flex items-center gap-2">
              {mobileVisibleItems.map(({ id, name, target }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavClick(target)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleNavClick(target)
                    }
                  }}
                  className="cursor-pointer text-white font-medium hover:text-orange-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  {name}
                </motion.div>
              ))}
            </div>

            {/* Hamburger menu - positioned inside the container */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className=" right-3 text-white hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-white/10"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Dropdown - Only remaining items */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="py-2">
                {mobileDropdownItems.map(({ id, name, target }) => (
                  <motion.div
                    key={id}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleNavClick(target)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNavClick(target)
                      }
                    }}
                    className="cursor-pointer text-white font-medium hover:text-orange-400 transition-colors duration-300 px-6 py-3 block border-b border-white/10 last:border-b-0"
                  >
                    {name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
