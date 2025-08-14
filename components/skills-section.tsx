"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Wrench } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    skills: [
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
      { name: "JavaScript", icon: "🟨", level: "Expert" },
      { name: "HTML5", icon: "🌐", level: "Expert" },
      { name: "CSS3", icon: "🎭", level: "Expert" },
      { name: "Framer Motion", icon: "🎬", level: "Intermediate" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    skills: [
      { name: "Figma", icon: "🎨", level: "Expert" },
      { name: "Adobe XD", icon: "🔷", level: "Advanced" },
      { name: "Prototyping", icon: "🔗", level: "Advanced" },
      { name: "User Research", icon: "🔍", level: "Intermediate" },
      { name: "Wireframing", icon: "📐", level: "Advanced" },
      { name: "Design Systems", icon: "🧩", level: "Advanced" },
      { name: "Accessibility", icon: "♿", level: "Advanced" },
      { name: "Responsive Design", icon: "📱", level: "Expert" },
    ],
  },
  {
    title: "Workflow Tools",
    icon: Wrench,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900",
    skills: [
      { name: "Git", icon: "🌿", level: "Advanced" },
      { name: "GitHub", icon: "🐙", level: "Advanced" },
      { name: "VS Code", icon: "💙", level: "Expert" },
      { name: "npm/yarn", icon: "📦", level: "Advanced" },
      { name: "Webpack", icon: "📦", level: "Intermediate" },
      { name: "ESLint", icon: "🔍", level: "Advanced" },
      { name: "Prettier", icon: "✨", level: "Advanced" },
      { name: "Vercel", icon: "▲", level: "Advanced" },
    ],
  },
]

const levelColors = {
  Expert: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Advanced: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning frontend development, UI/UX design, and modern workflow tools to deliver
              exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-full ${category.bgColor} mr-4`}>
                        <category.icon className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <h3 className="font-serif text-xl font-bold">{category.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="group"
                        >
                          <div className="p-3 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer">
                            <div className="flex flex-col items-center text-center space-y-2">
                              <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                              <span className="text-sm font-medium">{skill.name}</span>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${levelColors[skill.level as keyof typeof levelColors]}`}
                              >
                                {skill.level}
                              </Badge>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">24+</div>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
