"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, Send, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"

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

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/doreen",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/doreen",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:doreen@example.com",
    color: "hover:text-teal-600",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "doreen@example.com",
    href: "mailto:doreen@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda",
    href: null,
  },
  {
    icon: Phone,
    label: "Available",
    value: "Mon - Fri, 9AM - 6PM EAT",
    href: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Let's Build Something Great</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project and explore how we can create
              something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>

                  {submitStatus.type && (
                    <div
                      className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                          : "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <AlertCircle className="h-5 w-5" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always excited
                  to connect with fellow creators and innovators.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
                        <info.icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-muted-foreground hover:text-teal-600 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-card border rounded-full transition-colors ${link.color}`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via
                  email directly.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-20 pt-8 border-t text-center">
            <p className="text-muted-foreground mb-4">Built with passion using React, TypeScript, and Tailwind CSS</p>
            <p className="text-sm text-muted-foreground">© 2024 Umutoniwase Doreen. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
