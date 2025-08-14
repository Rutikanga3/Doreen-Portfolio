"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Users, Zap, CheckCircle, ArrowRight } from "lucide-react"
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

const designPrinciples = [
  {
    icon: Eye,
    title: "Visual Hierarchy",
    description: "Clear information architecture that guides users naturally through content",
  },
  {
    icon: Users,
    title: "User-Centered",
    description: "Every design decision validated through user research and testing",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimized designs that balance beauty with fast loading times",
  },
  {
    icon: CheckCircle,
    title: "Accessibility",
    description: "WCAG compliant designs ensuring inclusive experiences for all users",
  },
]

const caseStudies = [
  {
    id: "careconnect",
    title: "CareConnect: Healthcare Redesign",
    category: "Healthcare",
    challenge: "Complex medical workflows needed simplification without losing functionality",
    solution: "Streamlined interface with progressive disclosure and clear visual hierarchy",
    impact: "40% reduction in task completion time, 95% user satisfaction",
    beforeImage: "/healthcare-before-design.png",
    afterImage: "/healthcare-after-design.png",
    keyFeatures: ["Simplified Navigation", "Color-coded Priorities", "Accessible Forms", "Mobile-first Design"],
  },
  {
    id: "kuza",
    title: "Kuza Sports: Fan Engagement",
    category: "Entertainment",
    challenge: "Creating immersive sports experience while maintaining fast performance",
    solution: "Dynamic layouts with real-time data integration and micro-interactions",
    impact: "60% increase in user engagement, 25% longer session duration",
    beforeImage: "/sports-wireframe.png",
    afterImage: "/sports-final-design.png",
    keyFeatures: ["Real-time Updates", "Interactive Statistics", "Social Features", "Responsive Design"],
  },
]

export function DesignSection() {
  return (
    <section id="design" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">UI/UX Design Highlights</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the design process behind impactful user experiences, from initial concepts to polished
              implementations.
            </p>
          </motion.div>

          {/* Design Principles */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="font-serif text-2xl font-bold text-center mb-12">Design Philosophy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                        <principle.icon className="h-6 w-6 text-teal-600" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-3">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-2xl font-bold text-center mb-12">Design Case Studies</h3>
            <Tabs defaultValue="careconnect" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {caseStudies.map((study) => (
                  <TabsTrigger key={study.id} value={study.id} className="text-sm">
                    {study.title.split(":")[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {caseStudies.map((study) => (
                <TabsContent key={study.id} value={study.id}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-8 bg-muted/30">
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                            {study.category}
                          </Badge>
                          <h4 className="font-serif text-2xl font-bold">{study.title}</h4>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                          <div>
                            <h5 className="font-semibold mb-3 text-red-600">Challenge</h5>
                            <p className="text-sm text-muted-foreground">{study.challenge}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-3 text-blue-600">Solution</h5>
                            <p className="text-sm text-muted-foreground">{study.solution}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold mb-3 text-green-600">Impact</h5>
                            <p className="text-sm text-muted-foreground">{study.impact}</p>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h5 className="font-semibold mb-4">Key Features</h5>
                          <div className="flex flex-wrap gap-2">
                            {study.keyFeatures.map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Before/After Comparison */}
                      <div className="p-8">
                        <h5 className="font-semibold mb-6 text-center">Design Evolution</h5>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="text-center">
                            <h6 className="font-medium mb-4 text-muted-foreground">Initial Concept</h6>
                            <div className="aspect-video relative overflow-hidden rounded-lg border">
                              <Image
                                src={study.beforeImage || "/placeholder.svg"}
                                alt={`${study.title} - Before`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <h6 className="font-medium mb-4 text-teal-600">Final Implementation</h6>
                            <div className="aspect-video relative overflow-hidden rounded-lg border">
                              <Image
                                src={study.afterImage || "/placeholder.svg"}
                                alt={`${study.title} - After`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center mt-8">
                          <Button className="bg-teal-600 hover:bg-teal-700">
                            View Full Case Study
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Design Process */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="font-serif text-2xl font-bold text-center mb-12">My Design Process</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {["Research", "Ideate", "Design", "Prototype", "Test"].map((step, index) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h6 className="font-semibold">{step}</h6>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
