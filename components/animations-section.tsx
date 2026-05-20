"use client"

import { useRef, useEffect, useState } from "react"

function Cube3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationId: number
    let angle = 0

    const animate = () => {
      angle += 0.5
      setRotation({ x: angle * 0.5, y: angle })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div ref={containerRef} className="w-32 h-32 perspective-1000">
      <div
        className="w-full h-full preserve-3d relative"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 border-2 border-accent-blue bg-accent-blue/20"
          style={{ transform: "translateZ(64px)" }}
        />
        {/* Back */}
        <div
          className="absolute inset-0 border-2 border-accent-pink bg-accent-pink/20"
          style={{ transform: "translateZ(-64px) rotateY(180deg)" }}
        />
        {/* Right */}
        <div
          className="absolute inset-0 border-2 border-accent-yellow bg-accent-yellow/20"
          style={{ transform: "translateX(64px) rotateY(90deg)" }}
        />
        {/* Left */}
        <div
          className="absolute inset-0 border-2 border-accent-green bg-accent-green/20"
          style={{ transform: "translateX(-64px) rotateY(-90deg)" }}
        />
        {/* Top */}
        <div
          className="absolute inset-0 border-2 border-accent-blue bg-accent-blue/20"
          style={{ transform: "translateY(-64px) rotateX(90deg)" }}
        />
        {/* Bottom */}
        <div
          className="absolute inset-0 border-2 border-accent-pink bg-accent-pink/20"
          style={{ transform: "translateY(64px) rotateX(-90deg)" }}
        />
      </div>
    </div>
  )
}

function InteractiveCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="w-48 h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="w-full h-full preserve-3d relative transition-transform duration-700"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-accent-pink/30 to-accent-blue/30 border border-border flex items-center justify-center">
          <span className="text-foreground font-semibold">Click to Flip</span>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br from-accent-yellow/30 to-accent-green/30 border border-border flex items-center justify-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-foreground font-semibold">Interactive!</span>
        </div>
      </div>
    </div>
  )
}

function FloatingShapes() {
  return (
    <div className="relative w-48 h-48">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-accent-yellow/40 animate-float"
      />
      <div
        className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-accent-pink/40 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-14 h-14 bg-accent-blue/40 animate-float"
        style={{ animationDelay: "1s", clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded bg-accent-green/40 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}

function HoverDepthCard() {
  const [transform, setTransform] = useState("")

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(`perspective(500px) rotateX(${-y * 20}deg) rotateY(${x * 20}deg) translateZ(20px)`)
  }

  const handleMouseLeave = () => {
    setTransform("")
  }

  return (
    <div
      className="w-48 h-32 rounded-xl bg-gradient-to-br from-accent-green/20 to-accent-blue/20 border border-border flex items-center justify-center cursor-pointer transition-transform duration-200"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-foreground font-semibold text-sm">Hover Me</span>
    </div>
  )
}

export function AnimationsSection() {
  return (
    <section id="animations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">3D </span>
            <span className="text-primary">Animations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interactive demonstrations of 3D animation capabilities for modern web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Rotating Cube */}
          <div className="text-center">
            <div className="flex justify-center mb-6 h-40 items-center">
              <Cube3D />
            </div>
            <h3 className="text-lg font-semibold mb-2">Rotating 3D Cube</h3>
            <p className="text-muted-foreground text-sm">
              Continuous CSS 3D rotation with multiple colored faces
            </p>
          </div>

          {/* Interactive Card */}
          <div className="text-center">
            <div className="flex justify-center mb-6 h-40 items-center">
              <InteractiveCard />
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive 3D Card</h3>
            <p className="text-muted-foreground text-sm">
              Click to flip with smooth 3D transformation
            </p>
          </div>

          {/* Floating Shapes */}
          <div className="text-center">
            <div className="flex justify-center mb-6 h-40 items-center">
              <FloatingShapes />
            </div>
            <h3 className="text-lg font-semibold mb-2">Floating Elements</h3>
            <p className="text-muted-foreground text-sm">
              Animated floating shapes with staggered timing
            </p>
          </div>

          {/* Hover Depth */}
          <div className="text-center">
            <div className="flex justify-center mb-6 h-40 items-center">
              <HoverDepthCard />
            </div>
            <h3 className="text-lg font-semibold mb-2">Hover Depth Effect</h3>
            <p className="text-muted-foreground text-sm">
              Mouse-tracking perspective transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
