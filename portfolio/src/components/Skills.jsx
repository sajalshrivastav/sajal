import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = {
"frontend": [
      "Angular",
      "Angular Material",
      "React.js",
      "Redux Toolkit",
      "RxJS",
      "PrimeNG",
      "Tailwind",
      "HTML5",
      "CSS3",
      "SCSS"
    ],
    "backend": [
      "Node.js",
      "Express.js",
      "MongoDB (Mongoose)",
      "REST APIs"
    ],
    "languages": [
      "TypeScript",
      "JavaScript (ES6+)"
    ],
    "tools": [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "Chrome DevTools"
    ],
    "concepts": [
      "Component-driven architecture",
      "Performance Optimization",
      "State Management",
      "WebSockets",
      "Authentication & Authorization"
    ]
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6">Skills</h2>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-lg font-medium text-white/80">{category}</h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="inline-flex px-3 py-1 text-sm text-white/90 bg-white/5 hover:bg-white/10 
                           border border-white/10 rounded-full cursor-default transition-colors
                           hover:border-white/20"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
