"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Figma } from "lucide-react"
import Image from "next/image"

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

const projects = [
  {
    id: 1,
    title: "Rwanda Avocados",
    category: "Agriculture",
    description:
      "A comprehensive platform connecting avocado farmers with global markets, featuring real-time pricing, quality tracking, and sustainable farming practices.",
    image: "/avocado-farming-dashboard.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    type: "live",
  },
  {
    id: 2,
    title: "Kuza Sports",
    category: "Entertainment",
    description:
      "Dynamic sports entertainment platform delivering live scores, player statistics, and immersive fan experiences with real-time updates and social features.",
    image: "/modern-sports-website.png",
    techStack: ["React", "Next.js", "Framer Motion", "API Integration", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
    type: "live",
  },
  {
    id: 3,
    title: "CareConnect WebApp",
    category: "Healthcare",
    description:
      "Intuitive healthcare management system focusing on patient-provider communication, appointment scheduling, and accessible medical record management.",
    image: "/placeholder-mwivb.png",
    techStack: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Accessibility"],
    figmaUrl: "#",
    type: "design",
  },
]

const categoryColors = {
  Agriculture: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Entertainment: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Healthcare: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing impactful solutions across diverse industries, from agriculture to healthcare, each crafted
              with user-centered design and technical excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                      <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <div className="aspect-video relative overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      </div>

                      <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                        <div className="mb-4">
                          <Badge className={`mb-3 ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                            {project.category}
                          </Badge>
                          <h3 className="font-serif text-2xl font-bold mb-3">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          {project.type === "live" ? (
                            <>
                              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                              <Button size="sm" variant="outline">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            </>
                          ) : (
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                              <Figma className="h-4 w-4 mr-2" />
                              View Design
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
