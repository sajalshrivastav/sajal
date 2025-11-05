import { motion } from 'framer-motion'
import { useState } from 'react'

const GradientSelector = ({ onGradientChange, currentGradient }) => {
  const [isOpen, setIsOpen] = useState(false)

  const gradients = [
    {
      id: 1,
      name: 'Dark Space',
      css: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      colors: ['#0f2027', '#203a43', '#2c5364'],
    },
    {
      id: 2,
      name: 'Midnight City',
      css: 'linear-gradient(to right, #232526, #414345)',
      colors: ['#232526', '#414345'],
    },
    {
      id: 3,
      name: 'Deep Purple',
      css: 'linear-gradient(to right, #000428, #004e92)',
      colors: ['#000428', '#004e92'],
    },
    {
      id: 4,
      name: 'Dark Ocean',
      css: 'linear-gradient(to right, #141e30, #243b55)',
      colors: ['#141e30', '#243b55'],
    },
    {
      id: 5,
      name: 'Tech Noir',
      css: 'linear-gradient(to right, #000000, #434343)',
      colors: ['#000000', '#434343'],
    },
    {
      id: 6,
      name: 'Royal Black',
      css: 'linear-gradient(to right, #16222A, #3A6073)',
      colors: ['#16222A', '#3A6073'],
    },
    {
      id: 7,
      name: 'Dark Matter',
      css: 'linear-gradient(to right, #1f1c2c, #928dab)',
      colors: ['#1f1c2c', '#928dab'],
    },
    {
      id: 8,
      name: 'Cyber Night',
      css: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      colors: ['#0f0c29', '#302b63', '#24243e'],
    },
  ]

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg"
      >
        🎨
      </motion.button>

      {/* Gradient Selector Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 right-0 w-80 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-4 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <h3 className="text-white font-semibold mb-4 text-center">
          Choose Background
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {gradients.map((gradient) => (
            <motion.button
              key={gradient.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onGradientChange(gradient)
                setIsOpen(false)
              }}
              className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                currentGradient?.id === gradient.id
                  ? 'border-white shadow-lg'
                  : 'border-white/30 hover:border-white/60'
              }`}
              style={{ backgroundImage: gradient.css }}
            >
              <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                <span className="text-white text-xs font-medium">
                  {gradient.name}
                </span>
              </div>

              {currentGradient?.id === gradient.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-green-500 text-sm">✓</span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Current Gradient Info */}
        {currentGradient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 p-3 bg-white/10 rounded-lg"
          >
            <p className="text-white text-sm font-medium mb-1">
              Current: {currentGradient.name}
            </p>
            <p className="text-white/70 text-xs font-mono break-all">
              {currentGradient.css}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default GradientSelector
