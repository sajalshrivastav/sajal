import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Finance Manager Dashboard',
      tech: 'Angular, TypeScript, Chart.js, Firebase',
      desc: 'A personal finance tool to track expenses, visualize spending patterns, and set budget limits using clean UI components and real-time data sync.',
    },
    {
      title: 'Code Learning Platform',
      tech: 'React, Node.js, Express, MongoDB',
      desc: 'An interactive learning platform with code execution, topic-wise lessons, and progress tracking for developers improving technical skills.',
    },
    {
      title: 'PrepAI - Interview Preparation Suite',
      tech: 'React, Tailwind CSS, OpenAI API',
      desc: 'Generated AI-based interview questions, tailored difficulty levels, and instant feedback to help users strengthen interview readiness.',
    },
    {
      title: 'Resume Builder Web App',
      tech: 'React, Zustand, HTML to PDF',
      desc: 'A professional resume generator that lets users create, edit, preview, and download resumes in clean, ATS-friendly templates.',
    },
    {
      title: 'DSA Notes & Practice App',
      tech: 'React, Local Storage, Custom Hooks',
      desc: 'A structured DSA notes application enabling users to bookmark, revise, and organize problem-solving topics with an easy-to-navigate UI.',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 hover:bg-white/15 transition-colors"
            >
              <h3 className="text-lg text-white font-semibold">
                {project.title}
              </h3>
              <p className="text-orange-400 text-sm mt-1">{project.tech}</p>
              <p className="text-white/70 mt-2">{project.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
