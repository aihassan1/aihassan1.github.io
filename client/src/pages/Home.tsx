import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2, Database, Server, GitBranch } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">AI</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-primary transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('certifications')} className="text-sm hover:text-primary transition-colors">Certifications</button>
              <button onClick={() => scrollToSection('volunteering')} className="text-sm hover:text-primary transition-colors">Volunteering</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary text-sm font-medium">Backend Developer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Abdelrahman Ibrahim Hassan
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Backend Developer with experience building scalable systems using Node.js, NestJS, MongoDB, and PostgreSQL. 
              Skilled in API design and service-layer architecture for high-traffic applications (~20K+ users). 
              Strong team collaborator focusing on clean, maintainable code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/aihassan1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/abdelrahman-ibrahim-hassan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a dedicated Backend Developer specializing in building robust, scalable systems that power modern applications. 
                With expertise in Node.js, NestJS, and database technologies like PostgreSQL and MongoDB, I focus on creating 
                efficient API architectures that serve thousands of users.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My approach emphasizes clean code, modular design, and collaborative teamwork. I have successfully contributed 
                to multiple high-traffic platforms, optimizing backend performance and ensuring maintainability across complex systems.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Mail className="w-4 h-4" />
                <span>abdelrahmanibrahimm46@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+201157299898</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Arabic</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-full w-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">English</span>
                    <span className="text-sm text-muted-foreground">Fluent</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-full w-[90%] bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">Backend Engineer</CardTitle>
                    <CardDescription className="text-base">Sahl Solution (Full-Time)</CardDescription>
                  </div>
                  <Badge variant="secondary">Dec 2024 – Present</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Built and maintained scalable backend systems using NestJS, MongoDB, and PostgreSQL, supporting thousands of concurrent user interactions for high-traffic platforms</li>
                  <li>• Partnered with frontend developers, QA, and tech leads to ensure end-to-end delivery of backend features across ~3 functional teams per project</li>
                  <li>• Designed and improved ~60 backend API endpoints with a focus on clean architecture, modularity, and future maintainability across multiple ongoing projects</li>
                  <li>• Collaborated with a cross-functional team of 4 to refactor and optimize the Saldwich app, serving ~20K users/month, over 6 months to improve scalability and backend efficiency</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">Software Engineer – Backend Intern</CardTitle>
                    <CardDescription className="text-base">ALX Program (Remote)</CardDescription>
                  </div>
                  <Badge variant="secondary">Jul 2023 – Aug 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Completed a 12-month, 50+ hour/week full-stack engineering program focused on backend technologies and real-world project applications</li>
                  <li>• Developed proficiency in JavaScript, Python, and C programming languages</li>
                  <li>• Gained hands-on experience with backend frameworks, including Flask and Express.js</li>
                  <li>• Acquired strong skills in database management using MySQL and MongoDB</li>
                  <li>• Built secure RESTful APIs, including an AI-powered financial data API using 2 integrated sources</li>
                  <li>• Designed APIs with role-based authentication, encryption of sensitive data, and compliance with REST API security standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">CLO - E-commerce Platform</CardTitle>
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>Mobile e-commerce backend with third-party integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed the backend for a new e-commerce mobile application with integration layers for Shopify and WooCommerce APIs 
                  to synchronize product catalogs, inventory, and order status. Built secure APIs with JWT/OAuth authentication and 
                  comprehensive business logic for product browsing, search, and transactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">NestJS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">TypeORM</Badge>
                  <Badge variant="outline">Shopify API</Badge>
                  <Badge variant="outline">WooCommerce</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Online Travel Agency (OTA)</CardTitle>
                    <a href="https://shop.ota.mtjrsahl-ksa.com/en" target="_blank" rel="noopener noreferrer" className="text-xs text-primary flex items-center gap-1 mt-1">
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>Digital travel package booking platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Designed and implemented a scalable relational database schema with 25–30 entities for geolocation-based, multilingual 
                  travel services. Built secure RESTful APIs with RBAC, JWT authentication, and file upload capabilities. 
                  Owned the full backend cycle from planning to deployment as the sole backend engineer.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">NestJS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">TypeORM</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">Swagger</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Saldwich Application</CardTitle>
                    <a href="https://saldwich.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary flex items-center gap-1 mt-1">
                      View Live <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>Healthy food delivery platform serving 20K+ users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Refactored legacy backend architecture with clean, modular NestJS structure as part of a 2-person backend team. 
                  Improved API efficiency through restructured endpoint logic and database query optimizations. 
                  Implemented secure JWT-based authentication and enhanced backend modularity to support 20K+ monthly active users.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">NestJS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Mongoose</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">PM2</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Gold & Exchange Rate Tracker API</CardTitle>
                    <a href="https://github.com/aihassan1/GoldExchangeTracker" target="_blank" rel="noopener noreferrer" className="text-xs text-primary flex items-center gap-1 mt-1">
                      View on GitHub <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <GitBranch className="w-5 h-5 text-primary" />
                </div>
                <CardDescription>AI-powered financial data API with ML forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  REST API delivering gold and currency exchange rates using live data and machine learning forecasting. 
                  Integrated two external data sources with secure endpoints and used Google Cloud Vertex AI to forecast pricing trends. 
                  Implemented JWT-based authentication for secure access.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">NestJS</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">Google Cloud AI</Badge>
                  <Badge variant="outline">External APIs</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Python</Badge>
                  <Badge>C</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>NestJS</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>Flask</Badge>
                  <Badge>Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>TypeORM</Badge>
                  <Badge>Mongoose</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Linux</Badge>
                  <Badge variant="outline">RESTful APIs</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">OAuth</Badge>
                  <Badge variant="outline">Swagger</Badge>
                  <Badge variant="outline">PM2</Badge>
                  <Badge variant="outline">Multer</Badge>
                  <Badge variant="outline">Nodemailer</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-card/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Education & Certifications</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bachelor of Civil Engineering</CardTitle>
                    <CardDescription>Helwan University</CardDescription>
                  </div>
                  <Badge variant="secondary">Sep 2016 - Sep 2021</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Google Project Management Certificate</CardTitle>
                    <CardDescription>Google</CardDescription>
                  </div>
                  <Badge variant="secondary">May 2022 – Nov 2022</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Learn How to Learn</CardTitle>
                    <CardDescription>Coursera</CardDescription>
                  </div>
                  <Badge variant="secondary">2023</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Introduction to Negotiation</CardTitle>
                    <CardDescription>Yale University</CardDescription>
                  </div>
                  <Badge variant="secondary">2021</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Volunteer Work</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">Speak Up Project Manager</CardTitle>
                    <CardDescription className="text-base">SYS, Cairo</CardDescription>
                  </div>
                  <Badge variant="secondary">Nov 2020 - Nov 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Provided English courses for participants through well-trained English instructors</li>
                  <li>• Re-invented the way people learn by giving students effective and creative methods to learn through</li>
                  <li>• Led a 20-member team to organize multiple university-level events and conversation clubs, reaching and engaging approximately 150 students across Cairo campuses</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">English Team Member</CardTitle>
                    <CardDescription className="text-base">SYS, Cairo</CardDescription>
                  </div>
                  <Badge variant="secondary">Dec 2020 - Oct 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learned and practiced new techniques and ways of teaching</li>
                  <li>• Moderated online conversation clubs with 10 participants per club</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl">Public Relations Member</CardTitle>
                    <CardDescription className="text-base">Rescale Team, Helwan University</CardDescription>
                  </div>
                  <Badge variant="secondary">Sep 2016 - May 2017</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Built and maintained a positive public image for the team as a public relations specialist</li>
                  <li>• Organized and oversaw PR activities and ensured effective communication with the media and the public</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Email</p>
                  <a href="mailto:abdelrahmanibrahimm46@gmail.com" className="text-xs text-muted-foreground hover:text-primary">
                    abdelrahmanibrahimm46@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Phone</p>
                  <a href="tel:+201157299898" className="text-xs text-muted-foreground hover:text-primary">
                    +201157299898
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium mb-1">Location</p>
                  <p className="text-xs text-muted-foreground">Cairo, Egypt</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:abdelrahmanibrahimm46@gmail.com">Send Email</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/abdelrahman-ibrahim-hassan/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Abdelrahman Ibrahim Hassan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

