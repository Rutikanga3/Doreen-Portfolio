"use client"

import { motion, easeInOut } from "framer-motion"
import { ArrowDown, Code, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
}

const floatingIconVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easeInOut,
    },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-background to-blue-50/30 dark:from-teal-950/20 dark:via-background dark:to-blue-950/20" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute top-20 left-10 text-teal-200 dark:text-teal-800"
        >
          <Code className="h-8 w-8" />
        </motion.div>
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute top-32 right-16 text-blue-200 dark:text-blue-800"
          style={{ animationDelay: "2s" }}
        >
          <Palette className="h-6 w-6" />
        </motion.div>
        <motion.div
          variants={floatingIconVariants}
          animate="animate"
          className="absolute bottom-32 left-20 text-teal-300 dark:text-teal-700"
          style={{ animationDelay: "4s" }}
        >
          <Sparkles className="h-7 w-7" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
            >
              Doreen
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-teal-600 font-medium">Frontend Developer & UI/UX Designer</p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting accessible, elegant, and user-centered digital experiences that bridge the gap between beautiful
            design and functional excellence.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
