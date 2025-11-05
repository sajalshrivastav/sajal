import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-orange-500 pl-4">
            <h3 className="text-xl text-white font-semibold">
              Senior Frontend Developer
            </h3>
            <p className="text-orange-400">2023 - Present</p>
            <p className="text-white/70 mt-2">
              Leading frontend development for enterprise applications, focusing
              on performance and scalability.
            </p>
          </div>
          <div className="border-l-2 border-orange-500 pl-4">
            <h3 className="text-xl text-white font-semibold">
              Full Stack Developer
            </h3>
            <p className="text-orange-400">2021 - 2023</p>
            <p className="text-white/70 mt-2">
              Developed and maintained full-stack applications using MERN stack.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
