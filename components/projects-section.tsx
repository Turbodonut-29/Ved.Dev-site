import Link from "next/link"
import Image from "next/image"

const projectImages: Record<string, string> = {
  "ecommerce-platform": "/images/project-ecommerce.jpg",
  "fitness-tracker": "/images/project-fitness.jpg",
  "portfolio-builder": "/images/project-portfolio.jpg",
  "task-management": "/images/project-tasks.jpg",
  "weather-dashboard": "/images/project-weather.jpg",
  "social-media-analytics": "/images/project-analytics.jpg",
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  category: string
  color: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-featured online shopping experience with cart, checkout, and payment integration",
    category: "Web Development",
    color: "#FFD700",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    shortDescription: "Mobile-first fitness application with workout tracking and progress analytics",
    category: "App Development",
    color: "#4A90E2",
    technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
  },
  {
    id: "portfolio-builder",
    title: "Portfolio Builder",
    shortDescription: "Drag-and-drop portfolio creator with customizable templates and themes",
    category: "UI/UX Design",
    color: "#FF69B4",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma"],
  },
  {
    id: "task-management",
    title: "Task Management System",
    shortDescription: "Collaborative project management tool with real-time updates and team features",
    category: "Web Development",
    color: "#7ED321",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    shortDescription: "Interactive weather visualization with forecasts and location-based data",
    category: "3D Animation",
    color: "#4A90E2",
    technologies: ["Three.js", "React", "OpenWeather API", "D3.js"],
  },
  {
    id: "social-media-analytics",
    title: "Social Media Analytics",
    shortDescription: "Comprehensive analytics dashboard for tracking social media performance",
    category: "UI/UX Design",
    color: "#FF69B4",
    technologies: ["Angular", "Python", "PostgreSQL", "TensorFlow"],
  },
]

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="perspective-1000">
        <div
          className="preserve-3d relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 group-hover:border-transparent"
          style={{
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            {projectImages[project.id] ? (
              <Image
                src={projectImages[project.id]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                }}
              >
                <span
                  className="text-5xl font-bold opacity-20"
                  style={{ color: project.color }}
                >
                  0{index + 1}
                </span>
              </div>
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-card to-transparent"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: project.color + "20",
                  color: project.color,
                }}
              >
                {project.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Hover border gradient */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              border: `2px solid ${project.color}60`,
            }}
          />
        </div>
      </div>
    </Link>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Featured </span>
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my recent work showcasing creativity, technical expertise, and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
