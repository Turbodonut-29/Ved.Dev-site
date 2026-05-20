"use client"

import { useRef, useState } from "react"
import { Box, Palette, Smartphone } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: string
  animationType: "cube" | "flip" | "perspective"
}

function ServiceCard({ title, description, icon, color, animationType }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = (e.clientY - centerY) / 10
    const rotateY = (centerX - e.clientX) / 10
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="preserve-3d p-8 rounded-2xl bg-card border border-border text-center transition-all duration-300 hover:border-primary/50"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? "translateZ(20px)" : ""}`,
        }}
      >
        {/* 3D Animation Container */}
        <div className="mb-6 relative h-24 flex items-center justify-center">
          {animationType === "cube" && (
            <div className="preserve-3d" style={{ animation: isHovered ? "spin 3s linear infinite" : "none" }}>
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: color + "30" }}
              >
                <div style={{ color }}>{icon}</div>
              </div>
            </div>
          )}
          {animationType === "flip" && (
            <div
              className="preserve-3d w-16 h-16 transition-transform duration-500"
              style={{ transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              <div
                className="absolute inset-0 backface-hidden rounded-lg flex items-center justify-center"
                style={{ backgroundColor: color + "30" }}
              >
                <div style={{ color }}>{icon}</div>
              </div>
              <div
                className="absolute inset-0 backface-hidden rounded-lg flex items-center justify-center"
                style={{ backgroundColor: color, transform: "rotateY(180deg)" }}
              >
                <div className="text-background">{icon}</div>
              </div>
            </div>
          )}
          {animationType === "perspective" && (
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center transition-transform duration-500"
              style={{
                backgroundColor: color + "30",
                transform: isHovered ? "perspective(500px) rotateX(-20deg) translateY(-10px)" : "perspective(500px)",
              }}
            >
              <div style={{ color }}>{icon}</div>
            </div>
          )}
        </div>

        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "3D Animation",
      description: "Creating immersive 3D experiences for modern web applications with WebGL and Three.js",
      icon: <Box size={32} />,
      color: "#4A90E2",
      animationType: "cube" as const,
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces with seamless user experiences and modern aesthetics",
      icon: <Palette size={32} />,
      color: "#FF69B4",
      animationType: "flip" as const,
    },
    {
      title: "App Development",
      description: "Building robust, scalable applications with modern frameworks and best practices",
      icon: <Smartphone size={32} />,
      color: "#7ED321",
      animationType: "perspective" as const,
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">My </span>
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering exceptional digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotateY(0deg) rotateX(0deg); }
          to { transform: rotateY(360deg) rotateX(360deg); }
        }
      `}</style>
    </section>
  )
}
