import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MessageCircle, Gamepad2, Mic } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Real-time Chat App",
      description: "MERN stack chat application with JWT authentication, Socket.IO messaging, and theme switching.",
      icon: MessageCircle,
      tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
      liveLink: "https://echochat-0ife.onrender.com/",
      githubLink: "https://github.com/Mayank0052"
    },
    {
      title: "AI Voice Interview Platform",
      description: "Full-stack application with real-time AI voice processing and comprehensive evaluation summaries.",
      icon: Mic,
      tech: ["Next.js", "MongoDB", "Express.js", "AI Integration"],
      githubLink: "https://github.com/Mayank0052"
    },
    {
      title: "Hangman Game",
      description: "Interactive game with responsive design and real-time UI updates.",
      icon: Gamepad2,
      tech: ["HTML", "CSS", "JavaScript", "React"],
      liveLink: "https://hangman-p248.onrender.com/",
      githubLink: "https://github.com/Mayank0052"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveLink && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}