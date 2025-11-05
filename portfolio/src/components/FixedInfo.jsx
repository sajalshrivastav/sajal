import { motion } from 'framer-motion'
import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  PhoneCall,
} from 'lucide-react'
import TooltipBubble from './TooltipBubble'

const FixedInfo = () => {
  // Resume download function
  const handleResumeDownload = () => {
    // Option 1: Direct link to resume file in public folder
    const resumeUrl = '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Sajal_Shrivastav_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      href: 'https://github.com/sajalshrivastav',
      Icon: Github,
    },
    {
      id: 2,
      name: 'Instagram',
      href: 'https://www.instagram.com/_sahil.shrivastav_/',
      Icon: Instagram,
    },
    {
      id: 3,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sajalshrivastav/',
      Icon: Linkedin,
    },
    {
      id: 4,
      name: 'Mail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ss.official2018@gmail.com',
      Icon: Mail,
    },
    {
      id: 5,
      name: 'Phone',
      href: 'tel:+919068799683',
      Icon: PhoneCall,
    },
  ]
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -20 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1.7, ease: 'easeOut' }}
      className="w-full md:w-[360px]"
    >
      <div className="bg-white rounded-2xl p-6 shadow-2xl">
        <div className="rounded-xl overflow-hidden bg-orange-600">
          {/* Replace src with your portrait image path in /src/assets */}
          <img
            src="/image-removebg-preview.png"
            alt="Sajal Shrivastav"
            className="w-full h-72 object-scale-down rounded-lg"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          Sajal Shrivastav
        </h2>
        <div className="mt-4 text-gray-600 text-sm">
          I build elegant, user-first interfaces and am actively leveling up in
          the MERN stack to deliver seamless full-stack experiences.
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <div className="relative group">
            <button
              onClick={handleResumeDownload}
              className="bg-zinc-800 inline-flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <Download size={18} className="text-orange-500" />
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              <TooltipBubble
                text="Resume"
                position="left"
                bgColor="#222"
                textColor="#fff"
                arrowColor="#222"
                borderRadius="12px"
                fontSize="12px"
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            {socialLinks.map(({ id, name, href, Icon }) => (
              <div key={id} className="relative group">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                >
                  <Icon size={20} color="orange" />
                </a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  <TooltipBubble
                    text={name}
                    position="left"
                    bgColor="#222"
                    textColor="#fff"
                    arrowColor="#222"
                    borderRadius="12px"
                    fontSize="12px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default FixedInfo
