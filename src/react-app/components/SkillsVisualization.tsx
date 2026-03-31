import { useState } from 'react'
import { motion } from 'framer-motion'

const getSkillColorClass = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    '#f97316': 'skill-orange',
    '#f59e0b': 'skill-amber',
    '#eab308': 'skill-yellow',
    '#d97706': 'skill-orange-dark',
    '#8b5cf6': 'skill-purple',
    '#059669': 'skill-green',
    '#dc2626': 'skill-red',
    '#ec4899': 'skill-pink'
  }
  return colorMap[color] || 'skill-blue'
}

// Helper function to get Tailwind gradient class for skill glow
const getGlowColorClass = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    '#f97316': 'from-orange-500',
    '#f59e0b': 'from-amber-500',
    '#eab308': 'from-yellow-500',
    '#d97706': 'from-orange-600',
    '#8b5cf6': 'from-purple-500',
    '#059669': 'from-green-500',
    '#dc2626': 'from-red-500',
    '#ec4899': 'from-pink-500'
  }
  return colorMap[color] || 'from-amber-500'
}

interface Skill {
  name: string
  level: number
  color: string
  category: string
}

const skills: Skill[] = [
  { name: 'Python', level: 90, color: '#f59e0b', category: 'Programming' },
  { name: 'Java', level: 85, color: '#f97316', category: 'Programming' },
  { name: 'C', level: 80, color: '#eab308', category: 'Programming' },
  { name: 'C++', level: 80, color: '#d97706', category: 'Programming' },
  { name: 'HTML', level: 92, color: '#f97316', category: 'Frontend' },
  { name: 'CSS', level: 90, color: '#f59e0b', category: 'Frontend' },
  { name: 'JavaScript', level: 88, color: '#eab308', category: 'Frontend' },
  { name: 'Bootstrap', level: 85, color: '#8b5cf6', category: 'Frontend' },
  { name: 'jQuery', level: 82, color: '#fbbf24', category: 'Frontend' },
  { name: 'Django', level: 88, color: '#059669', category: 'Backend' },
  { name: 'MySQL', level: 85, color: '#f59e0b', category: 'Databases' },
  { name: 'DBMS', level: 82, color: '#d97706', category: 'Databases' },
  { name: 'Git', level: 85, color: '#f97316', category: 'Tools' },
  { name: 'GitHub', level: 85, color: '#333', category: 'Tools' },
  { name: 'VS Code', level: 90, color: '#0078d4', category: 'Tools' }
]

export default function SkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Databases', 'Tools']

  const visibleSkills = skills.filter(skill => selectedCategory === 'All' || skill.category === selectedCategory)

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-xl text-gray-700 mb-6 md:mb-8">
          A visualization of my technical expertise and tools
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 ${selectedCategory === category
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-amber-300 uppercase text-xs font-semibold tracking-wider'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Premium 2D Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
      >
        {visibleSkills.map((skill, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            key={skill.name}
            className="group relative bg-white/80 rounded-xl p-5 md:p-6 border border-gray-200 hover:border-amber-300 transition-all duration-300 backdrop-blur-sm overflow-hidden shadow-sm"
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(245, 158, 11, 0.1)' }}
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${getGlowColorClass(skill.color)} to-transparent`} />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-50 border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <div className={`w-3 h-3 rounded-full ${getSkillColorClass(skill.color)} shadow-[0_0_10px_currentColor]`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-amber-600 transition-colors">{skill.name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">{skill.category}</span>
                  </div>
                </div>
                <span className="font-mono text-xl font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden p-[2px] border border-gray-200">
                <motion.div
                  className={`h-full rounded-full ${getSkillColorClass(skill.color)} shadow-[0_0_10px_currentColor]`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
