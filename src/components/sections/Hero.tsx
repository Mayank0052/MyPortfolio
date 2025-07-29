import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        {/* <div className="mb-8 flex justify-center">
          <Avatar className="w-24 h-24 ring-4 ring-primary/20">
            <AvatarImage src={profileAvatar} alt="Mayank Sharma" />
            <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
              MS
            </AvatarFallback>
          </Avatar>
        </div> */}

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Mayank Sharma
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              MCA Student at NIT Jamshedpur | Full Stack Developer
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild className="shadow-portfolio-md hover:shadow-glow transition-all duration-300">
              <a 
                href="https://drive.google.com/file/d/1GtzpHWjMZbba8zXtYM0IENwlignSz9TF/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Mayank0052" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/mayank-sharma-a5518128a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:ms6065879@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild>
            <a href="#about">
              <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}