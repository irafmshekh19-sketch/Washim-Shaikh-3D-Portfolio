import { motion } from 'framer-motion'
import { Award, Coffee, Heart, Zap, Target } from 'lucide-react'
import Timeline3D from './Timeline3D'
import { memo } from 'react'

// Helper function to get CSS class name for achievement colors
const getAchievementColorClass = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    '#f59e0b': 'achievement-amber',
    '#eab308': 'achievement-purple',
    '#d97706': 'achievement-green',
    '#fbbf24': 'achievement-orange',
    '#f97316': 'achievement-red'
  }
  return colorMap[color] || 'achievement-amber'
}

// Helper function to get CSS class name for stat colors
const getStatColorClass = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    '#f59e0b': 'stat-amber',
    '#eab308': 'stat-purple',
    '#fbbf24': 'stat-green',
    '#f97316': 'stat-orange'
  }
  return colorMap[color] || 'stat-amber'
}

const achievements = [
  {
    icon: Award,
    title: 'State-Level Karate Player',
    description: 'Represented as a State-Level Karate Player, demonstrating discipline and dedication.',
    year: 'Achievement',
    color: '#f59e0b'
  },
  {
    icon: Zap,
    title: 'Internship Certifications',
    description: 'Completed internships in AI with Python, Machine Learning with Python, and Full Stack Development.',
    year: '2024-2025',
    color: '#eab308'
  },
  {
    icon: Target,
    title: 'Active Participant',
    description: 'Active participant in hackathons, workshops, and technical events.',
    year: 'Ongoing',
    color: '#d97706'
  }
]

const philosophy = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'Every project is crafted with genuine enthusiasm and dedication to excellence.'
  },
  {
    icon: Coffee,
    title: 'Detail-Oriented',
    description: 'Meticulous attention to every pixel, animation, and user interaction.'
  },
  {
    icon: Zap,
    title: 'Innovation-Focused',
    description: 'Always exploring cutting-edge technologies and creative solutions.'
  }
]

const AboutSection = memo(function AboutSection() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="heading-lg mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="body-lg text-gray-700 max-w-3xl mx-auto font-light">
          A passionate developer who transforms ideas into <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-medium">extraordinary digital experiences</span> through creativity and cutting-edge technology
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h3 className="heading-sm text-gray-900 mb-6">My Journey</h3>

            <div className="space-y-6 text-gray-700 body-md">
              <p className="leading-loose">
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-semibold text-lg">Hi! I'm Washim Shaikh</span>, an enthusiastic Computer Science Engineering fresher with strong <span className="font-semibold text-amber-600">problem-solving skills</span> and hands-on experience in Python, web development, and database management.
                My journey is driven by a passion for building and deploying web applications that solve real-world challenges.
              </p>

              <p className="leading-loose">
                Currently pursuing my <span className="font-semibold text-amber-700">Bachelor of Engineering (B.E.) in Computer Science and Engineering</span> at <span className="font-semibold text-amber-600">Beary's Institute of Technology (BIT), Mangalore</span> (2022-2026) with a <span className="font-semibold text-amber-600">CGPA of 7.87/10</span>. I'm skilled in building web applications, managing data, and applying analytical approaches to solve challenges.
              </p>

              <p className="leading-loose">
                I specialize in <span className="mono-text text-amber-700 bg-amber-50 px-2 py-1 rounded">Python</span>, <span className="mono-text text-green-700 bg-green-50 px-2 py-1 rounded">Java</span>, <span className="mono-text text-orange-700 bg-orange-50 px-2 py-1 rounded">C/C++</span>, and <span className="mono-text text-yellow-700 bg-yellow-50 px-2 py-1 rounded">Django</span>, with experience in <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent font-semibold">web development and database management</span>.
                I'm proficient in emerging areas such as <span className="font-semibold text-amber-600">Software Development, Web Applications, Data Analysis, and Prompt Engineering</span>, seeking opportunities as a Software Engineer, Web Developer, or Data Analyst.
              </p>
            </div>



          </div>

          {/* Philosophy */}
          <div className="space-y-4">
            <h3 className="heading-sm text-gray-900">My Philosophy</h3>
            {philosophy.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-sm"
                >
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <Icon size={22} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 mb-2 text-lg">{item.title}</h4>
                    <p className="body-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Achievements & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
            <h3 className="heading-sm text-gray-900 mb-6">Key Achievements</h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full group-hover:scale-110 transition-transform duration-300 bg-dynamic-alpha-25 shadow-dynamic ${getAchievementColorClass(achievement.color)}`}>
                      <Icon size={22} className={`text-dynamic ${getAchievementColorClass(achievement.color)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-display font-semibold text-gray-900 text-lg group-hover:text-amber-600 transition-colors duration-300">{achievement.title}</h4>
                        <span className="caption text-gray-600 bg-gray-200 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="body-sm text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '5+', label: 'Major Projects', color: '#f59e0b' },
              { number: '100%', label: 'Dedicated Focus', color: '#eab308' },
              { number: 'B.E.', label: 'CSE Student', color: '#fbbf24' },
              { number: '24/7', label: 'Support', color: '#f97316' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 text-center hover:border-gray-300 transition-all duration-300 group shadow-sm"
              >
                <div className={`text-4xl font-display font-black mb-2 group-hover:scale-110 transition-transform duration-300 text-dynamic whitespace-nowrap ${getStatColorClass(stat.color)}`}>
                  {stat.number}
                </div>
                <div className="caption text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-5 md:p-6 text-center hover:from-amber-100 hover:to-yellow-100 transition-all duration-300 shadow-sm"
          >
            <h4 className="font-display text-xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Languages</h4>
            <p className="body-md text-gray-700 leading-relaxed">
              I speak <span className="font-bold text-amber-600">English</span>, <span className="font-bold text-yellow-600">Hindi</span>, <span className="font-bold text-orange-600">Urdu</span>, and <span className="font-bold text-green-600">Kannada</span>, enabling me to collaborate effectively with diverse teams and clients.
              <span className="text-2xl ml-2">🌍💬</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 3D Scrollable Career Timeline */}
      <Timeline3D />
    </div>
  )
})

export default AboutSection
