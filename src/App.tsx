import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, User, Download, Facebook, Twitter, Sun, Moon } from 'lucide-react';
import profileImage from './assets/profile.jpg';
import aboutImage from './assets/about.png';
import { certificates, type Certificate } from './data/certificates';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);


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
      rootMargin: '50px'
    });

    // Observe all sections and animated elements
    document.querySelectorAll('.animate-on-scroll, #about, #skills, #projects, #achievements, #contact').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Flask', iconUrl: 'https://cdn.simpleicons.org/flask/000000' },
    { name: 'NumPy', iconUrl: 'https://cdn.simpleicons.org/numpy/013243' },
    { name: 'Pandas', iconUrl: 'https://cdn.simpleicons.org/pandas/150458' },
    { name: 'Matplotlib', iconUrl: '/certificates/logos/matplotlib.png' },
    { name: 'Excel', iconUrl: 'https://api.iconify.design/simple-icons:microsoftexcel.svg?color=%23217346' },
    { name: 'Scikit-learn', iconUrl: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
    { name: 'OpenCV', iconUrl: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Jupyter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
    { name: 'Prompt Engineering', iconUrl: '/certificates/logos/prompt-engineering.png' }
  ];

  const techCategories = [
    {
      title: 'Languages',
      subtitle: 'Programming fundamentals',
      items: [
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
        { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' }
      ]
    },
    {
      title: 'Databases',
      subtitle: 'Data storage',
      items: [
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' }
      ]
    },
    {
      title: 'Backend',
      subtitle: 'APIs & services',
      items: [
        { name: 'Flask', iconUrl: 'https://cdn.simpleicons.org/flask/000000' }
      ]
    },
    {
      title: 'Data Analytics',
      subtitle: 'Insights & visualization',
      items: [
        { name: 'NumPy', iconUrl: 'https://cdn.simpleicons.org/numpy/013243' },
        { name: 'Pandas', iconUrl: 'https://cdn.simpleicons.org/pandas/150458' },
        { name: 'Matplotlib', iconUrl: '/certificates/logos/matplotlib.png' },
        { name: 'Excel', iconUrl: 'https://api.iconify.design/simple-icons:microsoftexcel.svg?color=%23217346' },
        { name: 'Scikit-learn', iconUrl: 'https://cdn.simpleicons.org/scikitlearn/F7931E' }
      ]
    },
    {
      title: 'Tools',
      subtitle: 'Workflow & productivity',
      items: [
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
        { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Jupyter', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' }
      ]
    },
    {
      title: 'AI Skills',
      subtitle: 'Applied AI',
      items: [
        { name: 'Prompt Engineering', iconUrl: '/certificates/logos/prompt-engineering.png' },
        { name: 'OpenCV', iconUrl: 'https://cdn.simpleicons.org/opencv/5C3EE8' }
      ]
    }
  ];

  const focusAreas = [
    {
      title: 'Applied Machine Learning',
      description: 'Building and evaluating models for real-world problem solving.',
      items: ['Classification', 'Regression', 'Model evaluation']
    },
    {
      title: 'Data Analytics',
      description: 'Transforming data into insights with clean, explainable workflows.',
      items: ['Exploratory analysis', 'Visualization', 'Feature engineering']
    },
    {
      title: 'Developer Workflow',
      description: 'Organized, reproducible work with strong tooling and version control.',
      items: ['Git/GitHub', 'Jupyter', 'Docker basics']
    }
  ];

  const projects = [
    {
      title: 'Parking Slot Identification',
      description: 'Computer vision–based parking analysis using object detection for occupancy tracking.',
      tags: ['Python', 'YOLO v11n', 'Computer Vision'],
      caseStudy: {
        problem: 'Identifying occupied and available parking slots manually is inefficient at scale.',
        approach: 'Applied a YOLO v11n object detection model (VisDrone-based) to analyze video frames and detect parking slot occupancy.',
        outcome: 'Built a vision-based system that reliably identifies parking availability from visual data.'
      },
      imageSrc: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
      href: 'https://github.com/Anindya-Dev/Galaxy-Geeks'
    },
    {
      title: 'House Price Prediction',
      description: 'Predictive modeling on structured housing data with regression techniques.',
      tags: ['Python', 'Linear Regression', 'Data Analysis'],
      caseStudy: {
        problem: 'House prices vary due to multiple interacting factors, making estimation non-trivial.',
        approach: 'Used data preprocessing and feature engineering followed by Linear Regression to model price relationships.',
        outcome: 'Developed a regression model capable of predicting house prices from structured input data.'
      },
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
      href: 'https://github.com/Anindya-Dev/House_Price_Prediction'
    },
    {
      title: 'Customer Segmentation System',
      description: 'Unsupervised clustering to segment customer behavior patterns.',
      tags: ['Python', 'K-Means', 'Unsupervised Learning'],
      caseStudy: {
        problem: 'Understanding customer behavior is difficult without clear grouping patterns.',
        approach: 'Applied K-Means clustering on cleaned and normalized customer data to identify distinct segments.',
        outcome: 'Generated meaningful customer groups for analysis and data-driven decision-making.'
      },
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      href: 'https://github.com/Anindya-Dev/Customer_segmentation_system'
    },
    {
      title: 'Hand Gesture Identification',
      description: 'CNN-based gesture recognition using grayscale image inputs.',
      tags: ['Python', 'CNN', 'Computer Vision'],
      caseStudy: {
        problem: 'Hand gesture recognition is sensitive to noise, lighting, and background variations.',
        approach: 'Trained a CNN on grayscale hand gesture images to learn spatial features for classification.',
        outcome: 'Built a gesture recognition model capable of classifying gestures from image inputs.'
      },
      imageSrc: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1200&q=80',
      href: 'https://github.com/Anindya-Dev/Hand_Gesture_Recognition_System'
    },
    {
      title: 'Cat–Dog Image Classifier',
      description: 'Image classification pipeline using SVM for robust feature separation.',
      tags: ['Python', 'SVM', 'Machine Learning'],
      caseStudy: {
        problem: 'Image classification requires robust feature separation between visually similar classes.',
        approach: 'Extracted image features and trained an SVM classifier to distinguish between cats and dogs.',
        outcome: 'Developed an image classification system that correctly classifies unseen images.'
      },
      imageSrc: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
      href: 'https://github.com/Anindya-Dev/cat_vs_dogs_classifier'
    }
  ];

  const showcases = [
    {
      title: 'Parking Slot Identification',
      subtitle: 'Computer vision–based parking analysis',
      description: 'Designed a system to detect occupied and available parking slots using visual data.',
      features: [
        'Image/video frame processing',
        'Parking slot detection logic',
        'Occupancy status identification'
      ],
      tech: ['Python', 'YOLO', 'OpenCV', 'Computer Vision'],
      imageSrc: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80',
      href: 'https://github.com/Anindya-Dev/Galaxy-Geeks'
    },
    {
      title: 'House Price Prediction',
      subtitle: 'Predictive modeling on structured housing data',
      description: 'Developed a regression-based model to predict house prices using multiple numerical and categorical features.',
      features: [
        'Data cleaning and feature engineering',
        'Regression model training',
        'Price prediction analysis'
      ],
      tech: ['Python', 'Linear Regression', 'Data Analysis'],
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80',
      href: 'https://github.com/Anindya-Dev/House_Price_Prediction'
    },
    {
      title: 'Customer Segmentation System',
      subtitle: 'Unsupervised learning for customer analysis',
      description: 'Applied clustering techniques to group customers based on behavioral patterns and attributes.',
      features: [
        'Exploratory data analysis',
        'K-Means clustering on normalized data',
        'Visualization of customer segments'
      ],
      tech: ['Python', 'K-Means Clustering', 'Machine Learning'],
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      href: 'https://github.com/Anindya-Dev/Customer_segmentation_system'
    },
    {
      title: 'Hand Gesture Identification',
      subtitle: 'Grayscale CNN–based gesture recognition',
      description: 'Designed a convolutional neural network to identify hand gestures from grayscale images, focusing on classification accuracy and robustness.',
      features: [
        'Grayscale image preprocessing',
        'CNN-based gesture classification',
        'Model training and evaluation'
      ],
      tech: ['Python', 'CNN', 'Computer Vision'],
      imageSrc: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1400&q=80',
      href: 'https://github.com/Anindya-Dev/Hand_Gesture_Recognition_System'
    },
    {
      title: 'Cat–Dog Image Classifier',
      subtitle: 'Deep learning–based image classification',
      description: 'Built a convolutional neural network to classify images of cats and dogs with a focus on feature extraction and model evaluation.',
      features: [
        'Image preprocessing and augmentation',
        'CNN-based classification model',
        'Performance evaluation on unseen data'
      ],
      tech: ['Python', 'SVM', 'Machine Learning'],
      imageSrc: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80',
      href: 'https://github.com/Anindya-Dev/cat_vs_dogs_classifier'
    }
  ];

  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isShowcasePlaying, setIsShowcasePlaying] = useState(true);
  const [showcaseProgress, setShowcaseProgress] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [certificateImageError, setCertificateImageError] = useState(false);

  useEffect(() => {
    if (showcases.length <= 1 || !isShowcasePlaying) return;
    setShowcaseProgress(0);

    const duration = 4500;
    const start = performance.now();
    let frame = 0;

    const animate = (time: number) => {
      const elapsed = time - start;
      const pct = Math.min(elapsed / duration, 1);
      setShowcaseProgress(pct);

      if (pct < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setActiveShowcase((prev) => (prev + 1) % showcases.length);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [activeShowcase, isShowcasePlaying, showcases.length]);

  useEffect(() => {
    setCertificateImageError(false);
  }, [activeCertificate]);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      <div className="page-bg">
        <div className="bg-blob bg-blob--one" />
        <div className="bg-blob bg-blob--two" />
        <div className="bg-blob bg-blob--three" />
        <div className="bg-grid" />
      </div>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold brand-mark">AB</span>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#techstack" className="nav-link">Tech Stack</a>
              <a href="#projects" className="nav-link">Featured Projects</a>
              <a href="#certificates" className="nav-link">Certifications</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsDarkMode((prev) => !prev)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="md:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#techstack" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Tech Stack</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Featured Projects</a>
              <a href="#certificates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Certifications</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold shadow-sm">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for work
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-none">
                  Anindya<br />Bhattacharya
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  BTech CSE (AI/ML) Student
                </h2>
                <div className="flex items-center text-gray-500 text-lg">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Kolkata, India
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Building intelligent systems through machine learning and computer vision, with a focus on practical,
                real-world applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">View Projects</a>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg">
                <div className="stats-card hover-lift">
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="text-2xl font-bold text-gray-900">BTech CSE</p>
                </div>
                <div className="stats-card hover-lift">
                  <p className="text-sm text-gray-500">Specialization</p>
                  <p className="text-2xl font-bold text-gray-900">AI/ML</p>
                </div>
                <div className="stats-card hover-lift">
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="text-2xl font-bold text-gray-900">3rd</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="hero-portrait">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center space-x-3 hover-lift">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">AI & ML</p>
                    <p className="text-xs text-gray-500">Specialist</p>
                  </div>
                </div>
                <div className="absolute -top-6 right-6 glass-card px-4 py-3 hover-lift">
                  <p className="text-xs text-gray-500">Currently exploring</p>
                  <p className="text-sm font-semibold text-gray-900">Quant Strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="proof-strip">
            <div className="proof-item">
              <span className="proof-label">Focused on</span>
              <span className="proof-value">AI/ML • Applied Learning</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-label">Projects</span>
              <span className="proof-value">Published on GitHub</span>
            </div>
            <div className="proof-divider" />
            <div className="proof-item">
              <span className="proof-label">Certificates</span>
              <span className="proof-value">Learning milestones</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <div className="accent-line"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <img 
                src={aboutImage}
                alt="About portrait"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 animate-on-scroll delay-200">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-gray-700 text-sm font-medium shadow-sm">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Third-year BTech CSE (AI/ML) student
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                I’m a BTech CSE (AI/ML) student at Brainware University, currently in my third year. My academic focus
                is on artificial intelligence and machine learning, where I work on understanding core concepts and
                applying them to practical problem-solving scenarios.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                I build clean, testable prototypes and iterate with feedback, aiming for solutions that are practical,
                explainable, and ready for real-world use.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="info-card">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Current Focus</p>
                  <p className="text-sm font-semibold text-gray-900">Machine learning + CV</p>
                </div>
                <div className="info-card">
                  <p className="text-xs uppercase tracking-wide text-gray-400">Working Style</p>
                  <p className="text-sm font-semibold text-gray-900">Structured & reproducible</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="info-card">
                  <p className="text-sm text-gray-500">University</p>
                  <p className="text-base font-semibold text-gray-900">Brainware University</p>
                </div>
                <div className="info-card">
                  <p className="text-sm text-gray-500">Program</p>
                  <p className="text-base font-semibold text-gray-900">BTech CSE (AI/ML)</p>
                </div>
                <div className="info-card">
                  <p className="text-sm text-gray-500">Current Year</p>
                  <p className="text-base font-semibold text-gray-900">3rd Year</p>
                </div>
                <div className="info-card">
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="text-base font-semibold text-gray-900">AI/ML Projects</p>
                </div>
              </div>
              <div className="flex space-x-6 text-gray-400">
                <User size={24} />
                <Code size={24} />
                <Briefcase size={24} />
              </div>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">What I’m Building</h2>
            <div className="accent-line"></div>
            <p className="text-gray-600 text-lg">A clear view of the work I focus on and enjoy</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="feature-card hover-lift">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="feature-list">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Tech Stack</h2>
            <div className="accent-line"></div>
            <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techCategories.map((category) => (
              <div key={category.title} className="tech-card">
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div className="tech-pill" key={`${category.title}-${item.name}`}>
                      <img src={item.iconUrl} alt={item.name} className="tech-pill-icon" loading="lazy" />
                      <span className="tech-pill-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Marquee Section */}
      <section id="skills" className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="marquee marquee--full">
            <div
              className="marquee-track"
              style={{ ['--marquee-duration' as never]: '10s', ['--marquee-distance' as never]: '-33.333%' }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div className="marquee-item" key={`${skill.name}-${index}`}>
                  <img src={skill.iconUrl} alt={skill.name} className="marquee-icon" loading="lazy" />
                  <span className="marquee-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <div className="accent-line"></div>
            <p className="text-gray-600 text-lg">Selected AI/ML projects from my GitHub</p>
          </div>
          <div className="showcase">
            <div
              className="showcase-track"
              style={{ transform: `translateX(-${activeShowcase * 100}%)` }}
            >
              {showcases.map((project) => (
                <article key={project.title} className="showcase-card">
                  <div className="showcase-content">
                    <div className="showcase-pill">Project</div>
                    <h3 className="showcase-title">{project.title}</h3>
                    <p className="showcase-subtitle">{project.subtitle}</p>
                    <p className="showcase-description">{project.description}</p>
                    <div className="showcase-section">
                      <p className="showcase-section-title">Key Features</p>
                      <ul className="showcase-list">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="showcase-tech">
                      {project.tech.map((item) => (
                        <span key={item} className="showcase-tech-pill">{item}</span>
                      ))}
                    </div>
                    <div className="showcase-actions">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        View Code
                      </a>
                      <a href="#contact" className="btn-secondary">Let’s Talk</a>
                    </div>
                  </div>
                  <div className="showcase-media">
                    <img src={project.imageSrc} alt={project.title} loading="lazy" />
                  </div>
                </article>
              ))}
            </div>
            <div className="showcase-controls">
              <div className="showcase-control-pill">
                <div className="indicator-dots">
                  {showcases.map((project, index) =>
                    index === activeShowcase ? (
                      <button
                        key={project.title}
                        className="indicator-track"
                        onClick={() => setActiveShowcase(index)}
                        aria-label={`Show ${project.title}`}
                      >
                        <span className="indicator-fill" style={{ width: `${showcaseProgress * 100}%` }} />
                      </button>
                    ) : (
                      <button
                        key={project.title}
                        className="indicator-dot"
                        onClick={() => setActiveShowcase(index)}
                        aria-label={`Show ${project.title}`}
                      />
                    )
                  )}
                </div>
              </div>
              <button
                className="showcase-play"
                onClick={() => setIsShowcasePlaying((prev) => !prev)}
                aria-label={isShowcasePlaying ? 'Pause showcase' : 'Play showcase'}
              >
                {isShowcasePlaying ? (
                  <span className="showcase-pause">
                    <span />
                    <span />
                  </span>
                ) : (
                  <span className="showcase-play-triangle" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Case Study Snapshots</h2>
            <div className="accent-line"></div>
            <p className="text-gray-600 text-lg">Problem → Approach → Outcome, summarized</p>
          </div>
          <div className="case-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="case-card animate-on-scroll"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    GitHub
                  </a>
                </div>
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <p className="case-label">Problem</p>
                    <p className="case-value">{project.caseStudy.problem}</p>
                  </div>
                  <div>
                    <p className="case-label">Approach</p>
                    <p className="case-value">{project.caseStudy.approach}</p>
                  </div>
                  <div>
                    <p className="case-label">Outcome</p>
                    <p className="case-value">{project.caseStudy.outcome}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white text-gray-700 rounded-full text-xs font-medium border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Certificates</h2>
            <div className="accent-line"></div>
            <p className="text-gray-600 text-lg">Professional certifications and learning achievements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <div 
                key={cert.title}
                className="card p-8 animate-on-scroll hover:scale-105 transition-all duration-300"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  {cert.logos && cert.logos.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-3">
                      {cert.logos.map((logo) => (
                        <img
                          key={`${cert.title}-${logo.alt}`}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-10 w-10 object-contain"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : null}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2 text-gray-900 leading-tight">{cert.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="mx-2">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  {cert.imageSrc ? (
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setActiveCertificate(cert)}
                    >
                      View Certificate
                    </button>
                  ) : (
                    <p className="text-sm text-gray-500">Certificate image coming soon.</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={() => setActiveCertificate(null)}
            aria-label="Close certificate preview"
          />
          <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-sm text-gray-500">Certificate</p>
                <p className="text-lg font-semibold text-gray-900">{activeCertificate.title}</p>
              </div>
              <button
                type="button"
                className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition"
                onClick={() => setActiveCertificate(null)}
              >
                Close
              </button>
            </div>
            <div className="bg-gray-50">
              {certificateImageError ? (
                <div className="px-6 py-10 text-center text-gray-600">
                  Certificate image not found. Please check the file path.
                </div>
              ) : (
                <img
                  src={activeCertificate.imageSrc}
                  alt={`${activeCertificate.title} certificate`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onError={() => setCertificateImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <div className="accent-line"></div>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-on-scroll delay-200 text-lg leading-relaxed">
            Interested in working together? Let's connect and discuss your next project.
          </p>
          <div className="flex justify-center space-x-8 animate-on-scroll delay-400">
            <a href="https://github.com/Anindya-Dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/anindya-bhattacharya-83b68a254/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://x.com/dev_anindya" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://www.facebook.com/anindya.bhattacharya.50" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="mailto:anindyaholycross@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Anindya Bhattacharya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;