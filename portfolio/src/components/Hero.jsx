import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import FixedInfo from './FixedInfo'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

const Hero = () => {
  const rightPaneRef = useRef(null)

  useEffect(() => {
    const el = rightPaneRef.current
    if (!el) return

    let last = el.scrollTop
    const onScroll = () => {
      const st = el.scrollTop
      const direction = st > last ? 'down' : st < last ? 'up' : 'none'
      window.dispatchEvent(
        new CustomEvent('hero-scroll', { detail: { direction } }),
      )
      last = st <= 0 ? 0 : st
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Listen for navbar clicks to scroll to a specific section inside the right pane
  useEffect(() => {
    const onScrollTo = (e) => {
      const id = e?.detail?.id
      if (!id) return
      const el = rightPaneRef.current
      if (!el) return
      const target = el.querySelector(`#${id}`)
      if (target) {
        // scroll the container so the target comes into view
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    window.addEventListener('hero-scroll-to', onScrollTo)
    return () => window.removeEventListener('hero-scroll-to', onScrollTo)
  }, [])

  return (
    <div className="min-h-screen no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          {/* Fixed left panel */}
          <div className="w-full lg:w-[360px] lg:fixed lg:left-auto">
            <div className="lg:sticky lg:top-8">
              <FixedInfo />
            </div>
          </div>
          {/* Main scrollable content with offset margin */}
          <div className="w-full lg:w-[calc(100%-360px)] lg:ml-[400px]">
            <div
              ref={rightPaneRef}
              className="space-y-16 lg:space-y-32 no-scrollbar"
            >
              {/* Intro Section */}
              <section
                id="home"
                className="min-h-[80vh] flex items-center scroll-mt-24"
              >
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1 text-white"
                >
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    SOFTWARE ENGINEER
                    <span className="block text-gray-700/80">FRONTEND</span>
                  </h1>

                  <p className="mt-6 text-gray-300 max-w-2xl text-lg">
                    I build clean, intuitive, and scalable web interfaces.
                    Focused on performance, user experience, and modern frontend
                    architectures — while growing full-stack capability through
                    the MERN stack.
                  </p>

                  <div className="mt-12 flex gap-12">
                    <div>
                      <div className="text-4xl md:text-5xl font-bold">+2</div>
                      <div className="text-xs text-gray-400 uppercase">
                        Years of experience
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold">+3</div>
                      <div className="text-xs text-gray-400 uppercase">
                        Projects completed
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold">2</div>
                      <div className="text-xs text-gray-400 uppercase">
                        Ongoing Projects
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* Dedicated section components */}
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
