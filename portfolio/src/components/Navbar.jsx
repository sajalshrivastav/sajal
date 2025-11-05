import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  // hide when scrolling down in the hero right pane, show when scrolling up
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onHeroScroll = (e) => {
      const dir = e?.detail?.direction
      if (dir === 'down') setHidden(true)
      else if (dir === 'up') setHidden(false)
    }

    window.addEventListener('hero-scroll', onHeroScroll)
    return () => window.removeEventListener('hero-scroll', onHeroScroll)
  }, [])

  const navItems = [
    { id: 1, name: 'Home', target: 'home' },
    { id: 2, name: 'About', target: 'about' },
    { id: 3, name: 'Skills', target: 'skills' },
    { id: 4, name: 'Experience', target: 'experience' },
    { id: 5, name: 'Projects', target: 'projects' },
    { id: 6, name: 'Contact', target: 'contact' },
  ]

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-2">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ x: hidden ? '55%' : '0%', y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="bg-white/20 backdrop-blur-md border flex justify-center items-center border-white/30 rounded-full shadow-lg"
        >
          <div className="flex items-center gap-6">
            {navItems.map(({ id, name, target }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="button"
                tabIndex={0}
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('hero-scroll-to', {
                      detail: { id: target },
                    }),
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.dispatchEvent(
                      new CustomEvent('hero-scroll-to', {
                        detail: { id: target },
                      }),
                    )
                  }
                }}
                className="cursor-pointer text-white font-medium hover:text-orange-400 transition-colors duration-300 px-3 py-3 rounded-full hover:bg-white/10"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Navbar
