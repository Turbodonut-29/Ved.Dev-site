import { Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-foreground">Get in </span>
          <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
          {"Have a project in mind? Let's work together to create something amazing."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:vedwork291@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            vedwork291@gmail.com
          </a>
          <a
            href="https://www.fiverr.com/s/6YBeWWP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full font-medium hover:border-primary/50 transition-colors text-foreground"
          >
            <ExternalLink size={20} />
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold text-primary">
            Ved
          </Link>
          <p className="text-muted-foreground text-sm mt-1">
            Developer & Designer
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-6">
            <a
              href="mailto:vedwork291@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              vedwork291@gmail.com
            </a>
            <a
              href="https://www.fiverr.com/s/6YBeWWP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Fiverr
            </a>
          </div>
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Ved. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
