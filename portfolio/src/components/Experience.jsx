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
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Work Experience</h2>
        <div className="space-y-6">

          {/* Software Engineer */}
          <div className="border-l-2 border-orange-500 pl-4">
            <h3 className="text-xl text-white font-semibold">Software Engineer — Digit Insurance</h3>
            <p className="text-orange-400">May 2024 — Present | Bangalore, India</p>
            <p className="text-white/70 mt-2">
              Leading UI architecture and performance improvements across core insurance applications, building reusable components and enhancing customer and internal workflows.
            </p>
            <ul className="list-disc ml-5 text-white/60 mt-2 space-y-1">
              <li>Modernized Health Claims V4 UI, improving claim processing efficiency by 20%.</li>
              <li>Re-architected MotorSelfSurvey workflow, reducing claim submission from 9 mins to 4 mins.</li>
              <li>Implemented WebSocket-based real-time tracking system improving issue resolution speed by ~30%.</li>
              <li>Developed secure image caching pipeline to preload 20+ images in seconds.</li>
            </ul>
          </div>

          {/* Graduate Trainee Engineer */}
          <div className="border-l-2 border-orange-500 pl-4">
            <h3 className="text-xl text-white font-semibold">Graduate Trainee Engineer — Digit Insurance</h3>
            <p className="text-orange-400">Jun 2023 — Apr 2024 | Bangalore, India</p>
            <p className="text-white/70 mt-2">
              Focused on enhancing existing UI modules, optimizing API communication, and standardizing reusable UI components across teams.
            </p>
            <ul className="list-disc ml-5 text-white/60 mt-2 space-y-1">
              <li>Improved page load performance by 25%, increasing user engagement.</li>
              <li>Developed reusable UI components adopted across multiple product teams.</li>
              <li>Integrated REST APIs efficiently to reduce data fetch time by 20%.</li>
              <li>Reduced network traffic by removing redundant service calls across modules.</li>
            </ul>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default Experience
