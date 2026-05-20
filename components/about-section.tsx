"use client"

import { useRef, useState } from "react"

interface SkillBoxProps {
  name: string
  percentage: number
  color: string
}

function SkillBox({ name, percentage, color }: SkillBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return
    const rect = boxRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = (e.clientY - centerY) / 8
    const rotateY = (centerX - e.clientX) / 8
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={boxRef}
      className="perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="preserve-3d relative p-6 rounded-xl border border-border bg-card transition-all duration-300 cursor-pointer overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          boxShadow: isHovered ? `0 20px 40px ${color}30` : "none",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
            opacity: isHovered ? 0.4 : 0.1,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div
            className="text-4xl font-bold mb-2 transition-all duration-300"
            style={{ color }}
          >
            {name}
          </div>

          {/* Percentage drop-down animation */}
          <div className="h-8 overflow-hidden">
            <div
              className="transition-transform duration-500 ease-out"
              style={{
                transform: isHovered ? "translateY(0)" : "translateY(-100%)",
              }}
            >
              <div
                className="text-2xl font-semibold"
                style={{ color }}
              >
                {percentage}%
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: isHovered ? `${percentage}%` : "0%",
                backgroundColor: color,
              }}
            />
          </div>
        </div>

        {/* 3D flip back panel */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: color,
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-background text-2xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export function AboutSection() {
  const skills = [
    { name: "Python", percentage: 70, color: "#4A90E2" },
    { name: "CSS", percentage: 73, color: "#FFD700" },
    { name: "JavaScript", percentage: 80, color: "#FF69B4" },
    { name: "HTML", percentage: 85, color: "#7ED321" },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">About </span>
            <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Personal introduction */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hello, I&apos;m Ved - a passionate developer with expertise in creating innovative digital solutions. 
              I transform ideas into functional, beautiful applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building responsive, user-friendly websites and applications with modern technologies. 
              From concept to deployment, I ensure every project exceeds expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My commitment to quality and attention to detail ensures every project meets client expectations. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m constantly learning and staying updated with the latest industry trends and best practices. 
              Technology evolves rapidly, and I evolve with it.
            </p>
          </div>

          {/* Right side - Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <SkillBox key={skill.name} {...skill} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Hover over skills to see proficiency levels
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
