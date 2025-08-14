"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Zap, Target } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const values = [
  {
    icon: Heart,
    title: "Accessibility First",
    description: "Every design decision considers users of all abilities, ensuring inclusive digital experiences.",
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Deep empathy for user needs drives every interface, creating intuitive and delightful interactions.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Beautiful designs mean nothing without speed. I optimize for both aesthetics and performance.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every pixel serves a purpose, balancing visual appeal with functional excellence.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate Frontend Developer and UI/UX Designer who believes that great design isn't just about
                  how something looks—it's about how it works for everyone. My journey began with a simple question:{" "}
                  <span className="text-teal-600 font-medium">"How can technology be more human?"</span>
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  With every project, I strive to bridge the gap between beautiful aesthetics and functional excellence.
                  I craft interfaces that don't just catch the eye, but create meaningful connections between users and
                  digital experiences. My approach combines technical precision with creative intuition, always keeping
                  accessibility and usability at the forefront.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding or designing, you'll find me exploring the intersection of technology and social
                  impact, constantly learning new ways to make the web more inclusive and delightful for everyone.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Creative Thinker
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                  >
                    Detail Oriented
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    User Advocate
                  </Badge>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-serif font-bold text-teal-600 mb-4">3+</div>
                    <p className="text-lg font-medium text-muted-foreground">Years of Experience</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Crafting digital experiences across agriculture, entertainment, and healthcare sectors
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold text-center mb-12">My Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                        <value.icon className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
