import { useState, useEffect, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { BackToTop } from '@/react-app/components/MobileOptimizations'
import HeroPortfolio from '@/react-app/components/HeroPortfolio'

const AboutSection = lazy(() => import('@/react-app/components/AboutSection'))
const SkillsVisualization = lazy(() => import('@/react-app/components/SkillsVisualization'))
const ProjectShowcase = lazy(() => import('@/react-app/components/ProjectShowcase'))
const ServicesSection = lazy(() => import('@/react-app/components/ServicesSection'))
const ContactSection = lazy(() => import('@/react-app/components/ContactSection'))

import Navigation from '@/react-app/components/Navigation'
import MouseFollower from '@/react-app/components/MouseFollower'
import ScrollProgress from '@/react-app/components/ScrollProgress'
import InteractiveBackground from '@/react-app/components/InteractiveBackground'
import ResumeChatbot from '@/react-app/components/ResumeChatbot'
import { User, Code, Briefcase, Wrench, Mail } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  // Intersection Observer for section detection
  useEffect(() => {
    const sections = ['about', 'work', 'skills', 'services', 'contact']
    const observers: IntersectionObserver[] = []

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId)
            }
          },
          { threshold: 0.3 }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden relative">
      {/* Enhanced UI Components */}
      <MouseFollower />
      <ScrollProgress />
      <InteractiveBackground />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <HeroPortfolio />

      {/* About Section */}
      <section className="py-20 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
            <AboutSection />
          </Suspense>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 bg-white" id="work">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated selection of projects showcasing my expertise in web development, 3D experiences, and creative problem-solving
            </p>
          </motion.div>
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
            <ProjectShowcase />
          </Suspense>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4" id="skills">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
          <SkillsVisualization />
        </Suspense>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white" id="services">
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
          <ServicesSection />
        </Suspense>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something amazing together.
            </p>
          </motion.div>
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Loading...</div>}>
            <ContactSection />
          </Suspense>
        </div>
      </section>

      {/* Quick Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {[
          { id: 'about', icon: User, label: 'About' },
          { id: 'work', icon: Briefcase, label: 'Work' },
          { id: 'skills', icon: Code, label: 'Skills' },
          { id: 'services', icon: Wrench, label: 'Services' },
          { id: 'contact', icon: Mail, label: 'Contact' }
        ].map((item) => (
          <motion.button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id)
              const element = document.getElementById(item.id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className={`p-3 rounded-full transition-all duration-300 group relative ${activeSection === item.id
              ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
              : 'bg-white/80 border border-gray-200 text-gray-500 hover:bg-white hover:text-amber-500'
              }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon size={20} />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-white border border-gray-200 text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4">
                DevFolio
              </h3>
              <p className="text-gray-600 mb-4">
                Creating digital experiences that inspire and engage.
                Specializing in modern web development and 3D interactions.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:irfanshaikh110805@gmail.com" className="text-gray-500 hover:text-amber-500 transition-colors">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/irfan-shaikh-380461392?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-amber-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com" className="text-gray-500 hover:text-amber-500 transition-colors">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">3D Experiences</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#work" className="hover:text-amber-500 transition-colors">Portfolio</a></li>
                <li><a href="#skills" className="hover:text-amber-500 transition-colors">Skills</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>© 2024 Irfan Shaikh. All rights reserved. Crafted with passion and code.</p>
          </div>
        </div>
      </footer>

      {/* FAQ Chatbot */}
      <ResumeChatbot />

      {/* Mobile optimizations */}
      <BackToTop />
    </div>
  )
}
