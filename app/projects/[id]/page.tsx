import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Code2, Sparkles } from "lucide-react"
import { projectDetails } from "@/lib/project-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/contact-section"

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
        <div className="max-w-5xl mx-auto px-6">
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
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground">
              <Sparkles size={16} className="text-accent-yellow" />
              Developed as a fun personal project
            </div>
          </header>

          {/* App Screens Gallery */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">App Screens</h2>
            <div className="space-y-12">
              {project.screens.map((screen, index) => (
                <div
                  key={index}
                  className="group"
                >
                  {/* Screen Image */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-border bg-card">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: project.color + "30",
                          color: project.color,
                        }}
                      >
                        Screen {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Screen Info */}
                  <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold mb-3" style={{ color: project.color }}>
                      {screen.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Technologies Used</h2>
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
            <h2 className="text-2xl font-semibold mb-6 text-center">About This Project</h2>
            <div className="bg-card rounded-2xl p-8 border border-border">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <Code2 
                    className="shrink-0 mt-0.5" 
                    size={18} 
                    style={{ color: project.color }} 
                  />
                  <span className="text-sm text-foreground">{feature}</span>
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
