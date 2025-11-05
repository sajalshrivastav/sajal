import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 sm:mb-6">
          About Me
        </h2>
        <div className="text-base sm:text-lg text-white/80 space-y-3 sm:space-y-4">
          <p>
            I'm a passionate software engineer with a deep love for creating
            intuitive and efficient solutions. My journey in tech began with a
            curiosity about how things work, and that same curiosity drives me
            to constantly learn and adapt to new technologies.
          </p>
          <p>
            I specialize in full-stack development with a particular focus on
            creating seamless user experiences using modern technologies and
            best practices.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
