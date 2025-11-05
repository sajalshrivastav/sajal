import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null })

    try {
      // Using Web3Forms - free service, no signup required
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY', // We'll get this for free
          name: formData.fullName,
          email: formData.email,
          company: formData.company || 'Not provided',
          phone: formData.phone || 'Not provided',
          message: formData.message,
          subject: `Portfolio Contact from ${formData.fullName}`,
          from_name: formData.fullName,
          replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Show success message
        setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null })
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            company: '',
            phone: '',
            message: '',
          })
          setSubmitStatus({ isSubmitting: false, isSubmitted: false, error: null })
        }, 4000)
      } else {
        throw new Error('Failed to send message')
      }

    } catch (error) {
      console.error('Form submission error:', error)
      
      // Fallback to mailto
      const subject = `Portfolio Contact: Message from ${formData.fullName}`
      const body = `Hi Sajal,

I'm reaching out through your portfolio website.

Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

Best regards,
${formData.fullName}`

      const mailtoLink = `mailto:ss.official2018@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink, '_blank')

      setSubmitStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Email service temporarily unavailable. Email client opened as backup.' 
      })
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6">
          Let's work together
        </h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6">
          <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
            We'd love to hear from you! Send us a message using the form below,
            or email us.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white/90 mb-2"
                >
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/90 mb-2"
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Max. 500 characters"
                maxLength={500}
              />
            </div>

            {/* <div>
              <label
                htmlFor="source"
                className="block text-sm font-medium text-white/90 mb-2"
              >
                How did you hear about us?
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div> */}

            {/* Success Message */}
            {submitStatus.isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Email client opened! Please send the pre-filled message to complete your inquiry.</span>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus.error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                <AlertCircle className="w-5 h-5" />
                <span>{submitStatus.error}</span>
              </motion.div>
            )}

            <div className="flex flex-row items-center gap-4 flex-wrap">
              <button
                type="submit"
                disabled={submitStatus.isSubmitting || submitStatus.isSubmitted}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {submitStatus.isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus.isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Direct contact info */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>or email directly:</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ss.official2018@gmail.com" 
                  target='_blank'
                  className="text-orange-400 relative top-[12px] hover:text-orange-300 transition-colors"
                >
                  ss.official2018@gmail.com
                </a>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
