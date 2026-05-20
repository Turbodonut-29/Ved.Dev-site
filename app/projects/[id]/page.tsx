import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle, Lightbulb, Trophy } from "lucide-react"
import { projectDetails } from "@/lib/project-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/contact-section"

const projectImages: Record<string, string> = {
  "ecommerce-platform": "/images/project-ecommerce.jpg",
  "fitness-tracker": "/images/project-fitness.jpg",
  "portfolio-builder": "/images/project-portfolio.jpg",
  "task-management": "/images/project-tasks.jpg",
  "weather-dashboard": "/images/project-weather.jpg",
  "social-media-analytics": "/images/project-analytics.jpg",
}

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projectDetails.find((p) => p.id === resolvedParams.id)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Ved Portfolio`,
    description: project.shortDescription,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projectDetails.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  const currentIndex = projectDetails.findIndex((p) => p.id === project.id)
  const prevProject = currentIndex > 0 ? projectDetails[currentIndex - 1] : null
  const nextProject = currentIndex < projectDetails.length - 1 ? projectDetails[currentIndex + 1] : null

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12 text-center">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: project.color + "20",
                color: project.color,
              }}
            >
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.shortDescription}
            </p>
          </header>

          {/* Project Visual */}
          <div
            className="relative h-64 md:h-96 rounded-2xl mb-12 overflow-hidden"
          >
            {projectImages[project.id] ? (
              <Image
                src={projectImages[project.id]}
                alt={project.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                }}
              >
                <span
                  className="text-8xl md:text-9xl font-bold opacity-20"
                  style={{ color: project.color }}
                >
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
              </div>
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
            />
          </div>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Full Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Challenges */}
            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-accent-yellow" size={24} />
                <h2 className="text-xl font-semibold">Challenges</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-accent-yellow mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            {/* Solutions */}
            <section className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-accent-green" size={24} />
                <h2 className="text-xl font-semibold">Solutions</h2>
              </div>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="text-accent-green shrink-0 mt-0.5" size={16} />
                    {solution}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Outcomes */}
          <section className="bg-card rounded-2xl p-6 border border-border mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="text-primary" size={24} />
              <h2 className="text-xl font-semibold">Results & Outcomes</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/50"
                >
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  <span className="text-sm text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <nav className="flex items-center justify-between pt-8 border-t border-border">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline">{prevProject.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">{nextProject.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight size={18} />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  )
}
