import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitch } from "./LanguageSwitch";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Calendar, ExternalLink, Database, Code, BarChart3, Zap, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Portfolio = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const data = portfolioData[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {data.header.name}
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            {Object.entries(data.navigation).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
          <LanguageSwitch language={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-lg text-white/80 mb-4">{data.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {data.header.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
            {data.header.title}
          </h2>
          <p className="text-xl text-white/80 mb-8 font-medium">
            {data.header.subtitle}
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.hero.description}
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary hover:bg-white/90 shadow-elegant"
          >
            {data.hero.cta}
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {data.about.title}
          </h2>
          <Card className="bg-gradient-card shadow-elegant">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {data.about.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {data.skills.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.skills.categories).map(([key, category]) => (
              <Card key={key} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {key === 'languages' && <Code className="h-6 w-6 text-primary" />}
                    {key === 'etl' && <Zap className="h-6 w-6 text-primary" />}
                    {key === 'databases' && <Database className="h-6 w-6 text-primary" />}
                    {key === 'bi' && <BarChart3 className="h-6 w-6 text-primary" />}
                    {(key === 'frameworks' || key === 'integrations' || key === 'tools') && <ExternalLink className="h-6 w-6 text-primary" />}
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.items[key as keyof typeof data.skills.items]?.map((skill: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {data.experience.title}
          </h2>
          <div className="space-y-8">
            {data.experience.jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{job.company}</h3>
                      <h4 className="text-xl font-semibold text-foreground">{job.position}</h4>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{job.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {data.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.items.map((project, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                {data.education.title}
              </h2>
              <div className="space-y-6">
                {data.education.items.map((edu, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-primary">{edu.institution}</h3>
                      <p className="font-semibold text-foreground">{edu.degree}</p>
                      <p className="text-muted-foreground">{edu.period}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                {data.certifications.title}
              </h2>
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {data.certifications.items.map((cert, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">
            {data.contact.title}
          </h2>
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <MapPin className="h-6 w-6" />
                  <span className="text-lg">{data.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Mail className="h-6 w-6" />
                  <a 
                    href={`mailto:${data.contact.email}`}
                    className="text-lg hover:text-white/80 transition-colors"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center gap-6">
                <a 
                  href="https://www.linkedin.com/in/alexandrabona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/alebona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};