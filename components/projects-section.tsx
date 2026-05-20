import Link from "next/link"
import Image from "next/image"
import { projectDetails } from "@/lib/project-data"

// Map project IDs to their first screen image
const getProjectImage = (projectId: string) => {
  const project = projectDetails.find(p => p.id === projectId)
  return project?.screens[0]?.image || ""
}

interface ProjectCardProps {
  project: typeof projectDetails[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const projectImage = getProjectImage(project.id)
  
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
            {projectImage ? (
              <Image
                src={projectImage}
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
            {/* Screen count badge */}
            <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground backdrop-blur-sm">
              {project.screens.length} screens
            </div>
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
            Personal projects built for fun and learning - click any project to explore different screens and features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectDetails.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
