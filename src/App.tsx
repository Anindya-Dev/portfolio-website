import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Download, Award,  Facebook, Twitter } from 'lucide-react';
import profileImage from './assets/IMG-20240922-WA0232.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll animation observer
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    // Create stars
    const createStars = () => {
      const starsContainer = document.querySelector('.stars-container');
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create new stars
      const numberOfStars = 200;
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.setProperty('--twinkle-duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--twinkle-delay', `${Math.random() * 3}s`);
        star.style.setProperty('--twinkle-opacity', `${Math.random() * 0.7 + 0.3}`);
        
        starsContainer.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', createStars);
    };
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'C Programming', level: 70 },
    { name: 'DSA', level: 65 },
    { name: 'Prompt Engineering', level: 60 },
  ];

  const achievements = [
    {
      title: 'Introduction to Generative AI- Art of the possible',
      date: '2025',
      icon: Award
    },
    {
      title: 'Introduction to Prompt Engineering for GEN AI',
      date: '2025',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="stars-container" />
      <div className="cosmic-gradient" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold gradient-text">Portfolio</span>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white">Projects</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-300 hover:text-white">Achievements</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-on-scroll">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto border-2 border-white/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 gradient-text animate-on-scroll">
            AI & ML Enthusiast | Software Developer
          </h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/80 animate-on-scroll delay-100">
             Anindya Bhattacharya
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto animate-on-scroll delay-200">
              Exploring the intersection of AI, software development, and finance.
          </p>
          <div className="mt-8 animate-on-scroll delay-300">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title animate-on-scroll">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Workspace"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6 animate-on-scroll delay-200">
              <p className="text-gray-300 text-lg">
              I'm an AI & ML enthusiast passionate about automation in financial markets.
              I focus on AI-driven trading strategies, predictive models, and quantitative finance,
              leveraging data and automation to optimize financial decision-making."
              </p>
              <div className="flex space-x-4">
                <User size={24} className="text-gray-400" />
                <Code size={24} className="text-gray-400" />
                <Briefcase size={24} className="text-gray-400" />
              </div>
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-lg text-gray-300">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div 
                key={project} 
                className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors animate-on-scroll"
                style={{ transitionDelay: `${project * 200}ms` }}
              >
                <img 
                  src={`https://images.unsplash.com/photo-151030${project}856882-6384d4649718?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-400 mb-4">Brief project description showcasing the key features and technologies used.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-white/10 rounded-full text-sm">React</span>
                    <span className="px-2 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-white hover:text-gray-300">
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title animate-on-scroll">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="flex items-start space-x-4 bg-black/40 p-6 rounded-lg border border-white/10 animate-on-scroll"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <achievement.icon size={24} className="text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title animate-on-scroll">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto animate-on-scroll delay-200">
            Interested in working together? Let's connect and discuss your next project.
          </p>
          <div className="flex justify-center space-x-6 animate-on-scroll delay-400">
            <a href="https://github.com/Anindya-Dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/anindya-bhattacharya-83b68a254/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/dev_anindya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://www.facebook.com/anindya.bhattacharya.50" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="mailto:anindyaholycross@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anindya Bhattacharya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;