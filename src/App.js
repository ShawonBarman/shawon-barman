import React, { useState, useEffect, useRef } from 'react';
import { Code, FileCode, Database, BookOpen, Award, BriefcaseBusiness, Github, Linkedin, Mail, MapPin, Phone, ExternalLink, ArrowUpRight, Star } from 'lucide-react';
import myImage from './images/Shawon.jpg'
import projectImage1 from './images/project1.PNG'
import projectImage2 from './images/project2.PNG'
import projectImage3 from './images/project3.PNG'
import projectImage4 from './images/project4.PNG'
import projectImage5 from './images/project5.PNG'
import projectImage6 from './images/project6.PNG'

// Animated typing effect for job title
const JobTitle = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const titles = ["Software Engineer", "Full Stack Python Developer", "Web Developer", "Problem Solver"];
    const timeout = setTimeout(() => {
      // Current title
      const currentTitle = titles[index];
      
      if (!isDeleting) {
        // Typing forward
        setText(currentTitle.substring(0, text.length + 1));
        
        // If completed typing
        if (text === currentTitle) {
          // Pause at end
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setText(currentTitle.substring(0, text.length - 1));
        
        // If completed deleting
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 120);
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
  
  return (
    <span className="typed-text text-blue-400">{text}<span className="cursor">|</span></span>
  );
};

const HeroSection = ({ theme, isVisible, profileRef }) => {
  return (
    <section id="home" className={`pt-32 pb-20 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}>
        <div className={`container mx-auto px-4 flex flex-col items-center ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} transition-all duration-1000`}>
          <div className="relative group">
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-md opacity-70 group-hover:opacity-100 animate-spin-slow"
              style={{ animationDuration: '10s' }}
            ></div>
            <div ref={profileRef} className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-500 shadow-lg relative z-10">
              <img src={myImage} alt="Shawon Barman" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="inline-block animate-fadeLeft">Hi, I'm </span>
            <span className="inline-block text-blue-500 mx-3 animate-fadeRight">Shawon Barman</span>
          </h1>
          
          <div className="flex items-center h-16 mb-5 overflow-hidden">
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              <JobTitle />
            </h2>
          </div>
          
          <p className="text-xl max-w-3xl text-center mb-10 leading-relaxed animate-fadeUp">
            Software Engineer at TMSEZ with experience in Python, Django, Flask, and React. 
            Passionate about solving complex problems through innovative solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg hover:translate-y-1"
            >
              Contact Me <ArrowUpRight size={18} />
            </a>
            <a 
              href="#projects" 
              className={`px-8 py-3 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} font-medium rounded-lg border border-blue-500 transition-all flex items-center gap-2 shadow-lg hover:translate-y-1`}
            >
              My Projects <FileCode size={18} />
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github size={24} />, href: "https://github.com/ShawonBarman" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shawon-barman-688968176/" },
              { icon: <Mail size={24} />, href: "mailto:shawonbarmon34@gmail.com" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-all hover:scale-125"
                style={{ animation: `bounce 2s ease infinite ${index * 0.2}s` }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
  );
}

const AboutSection = ({ theme }) => {
  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
            <span className="relative inline-block pb-1">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 animate-fadeLeft">
              <p className="text-lg leading-relaxed mb-6">
                I'm a <span className="text-blue-500 font-semibold">Software Engineer</span> at TMSEZ, a California-based company, with over a year of professional experience. 
                I specialize in building scalable web applications with Python, Django, Flask, React, JavaScript, SQL, and modern CSS frameworks. I also create APIs and integrate third-party APIs, having worked with Google Document AI, Microsoft Azure AI, and Google Cloud.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My problem-solving skills are demonstrated by solving 
                <span className="text-blue-500 font-semibold relative px-2 group">
                  <span className="relative z-10">543</span>
                </span> 
                challenges on the Beecrowd Online Judge platform. I have published two research papers in machine learning and deep learning fields. Now I am learning generative AI. I am passionate about continuous learning and delivering innovative, high-quality solutions.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: <Mail className="text-blue-500" size={20} />, text: "shawon@tmsez.com" },
                  { icon: <Phone className="text-blue-500" size={20} />, text: "(+880) 1876156680" },
                  { icon: <MapPin className="text-blue-500" size={20} />, text: "Brahmonkitta Road, Keraniganj, Dhaka, Bangladesh" }
                ].map((item, index) => (
                  <div className="flex items-center gap-2 group" key={index}>
                    <div className="transform transition-transform group-hover:rotate-12">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 animate-fadeRight">
              <div className={`rounded-xl p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg transform transition-transform hover:scale-105`}>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="text-blue-500 animate-swing" />
                  Education
                </h3>
                
                <div className="mb-6 relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium">University of Asia Pacific</h4>
                  <p className="text-blue-500">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-sm text-gray-500">Oct 2018 – Jan 2023</p>
                  <p className="text-sm font-medium mt-1">CGPA - 3.82 of 4</p>
                </div>
                
                <div className="mb-6 relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium">Sheikh Burhanuddin Post Graduate College</h4>
                  <p className="text-blue-500">Higher Secondary School Certificate</p>
                  <p className="text-sm text-gray-500">2018</p>
                  <p className="text-sm font-medium mt-1">GPA - 3.42 of 5</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium">Parzowar Kalindi High School</h4>
                  <p className="text-blue-500">Secondary School Certificate</p>
                  <p className="text-sm text-gray-500">2016</p>
                  <p className="text-sm font-medium mt-1">GPA - 4.50 of 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

const SkillsSection = ({ theme }) => {
  const skillsRef = useRef(null);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const element = skillsRef.current; // Store ref value in a variable
  
    if (!element) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSkillsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
  
    observer.observe(element);
  
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="skills" ref={skillsRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
          <span className="relative inline-block pb-1">
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
              {
                icon: <Code size={24} className="text-blue-500 mr-3" />,
                title: "Programming Languages",
                skills: [
                  { name: "Python", percent: 90 },
                  { name: "JavaScript", percent: 85 },
                  { name: "C++", percent: 80 }
                ]
              },
              {
                icon: <FileCode size={24} className="text-blue-500 mr-3" />,
                title: "Web Technologies",
                skills: [
                  { name: "Django", percent: 95 },
                  { name: "Flask", percent: 85 },
                  { name: "React", percent: 80 }
                ]
              },
              {
                icon: <Database size={24} className="text-blue-500 mr-3" />,
                title: "Databases",
                skills: [
                  { name: "MySQL", percent: 85 },
                  { name: "PostgreSQL", percent: 80 },
                  { name: "SQLite", percent: 90 }
                ]
              },
              {
                icon: <Award size={24} className="text-blue-500 mr-3" />,
                title: "Problem Solving",
                content: (
                  <div className="p-4 text-center">
                    <div className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mb-4">
                      543 Problems Solved on Beecrowd
                    </div>
                    <div className="inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full mb-4 ml-2">
                      IDPC 2018 Contestant
                    </div>
                    <p className="mt-2">
                      Experienced in algorithmic problem solving, data structures, and competitive programming.
                    </p>
                  </div>
                )
              },
              {
                icon: <div className="text-blue-500 mr-3">🧠</div>,
                title: "Machine Learning",
                content: (
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Linear regression, Logistic regression</li>
                    <li>KNN, SVM algorithms</li>
                    <li>CNN, ANN, RNN neural networks</li>
                    <li>Pre-trained models implementation</li>
                    <li>NumPy, Pandas, Matplotlib, Scikit-learn</li>
                  </ul>
                )
              },
              {
                icon: <div className="text-blue-500 mr-3">💻</div>,
                title: "CSS Frameworks",
                skills: [
                  { name: "Bootstrap", percent: 95 },
                  { name: "Tailwind CSS", percent: 90 },
                  { name: "CSS3", percent: 85 }
                ]
              }
            ].map((skillCard, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg transition-all opacity-0 transform translate-y-8 animate-fadeUp`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{skillCard.title}</h3>
              {skillCard.skills ? (
                <div className="space-y-4">
                  {skillCard.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-right">{isSkillsVisible ? `${skill.percent}%` : '0%'}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isSkillsVisible ? `${skill.percent}%` : '0%',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                skillCard.content
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ theme, experienceRef }) => {
  return (
    <section id="experience" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
            <span className="relative inline-block pb-1">
              Experience
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
            </span>
          </h2>
          
          <div className="relative border-l-2 border-blue-500 ml-3 md:ml-6 pl-6 md:pl-8 space-y-12">
            {[
              {
                title: "Software Engineer at TMSEZ",
                period: "Jan 2024 - Present",
                tasks: [
                  "Develop and maintain scalable, secure web applications using Python, Django, React",
                  "Design and implement APIs for seamless integration with front-end and third-party services",
                  "Collaborate with cross-functional teams to gather requirements and deliver user-centric solutions",
                  "Ensure responsive design with Tailwind CSS and Bootstrap5",
                  "Debug and optimize code to enhance application performance and reliability"
                ]
              },
              {
                title: "Freelance Full Stack Developer at Upwork",
                period: "May 2023 - Feb 2024",
                tasks: [
                  "Designed and created full stack websites for various clients",
                  "Completed Python-related tasks and projects",
                  "Executed two machine learning projects"
                ]
              },
              {
                title: "Intern at BASIS Institute of Technology & Management",
                period: "Feb 2023 - Apr 2023",
                content: "Trained in PHP with Laravel Framework during a 3-month course"
              },
              {
                title: "Web Design Intern at PeopleNTech Bangladesh",
                period: "Aug 2022 - Oct 2022",
                content: "Focused on Web Design techniques and principles"
              }
            ].map((exp, index) => (
              <div 
                key={index}
                ref={el => experienceRef.current[index] = el}
                className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-6 shadow-lg relative opacity-0 transform translate-x-8`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <span className="absolute -left-12 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center animate-pulse-slow"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <BriefcaseBusiness className="mr-2 text-blue-500 animate-swing" size={20} />
                    {exp.title}
                  </h3>
                  <span className="text-blue-500 font-medium">{exp.period}</span>
                </div>
                {exp.tasks ? (
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="hover:translate-x-1 transition-transform">{task}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 hover:translate-x-1 transition-transform">{exp.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

const ProjectsSection = ({ theme, projectsRef }) => {
  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
            <span className="relative inline-block pb-1">
              My Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                "image": projectImage1,
                "title": "Emergency Medicine and Doctor Service",
                "desc": "A Django-based healthcare platform for booking doctor appointments, emergency medical aid, and accessing health records, ensuring quick and efficient medical assistance.",
                "tags": ["Django", "HTML5", "CSS3", "Bootstrap4"],
                "hasDemo": false,
                "githubLink": "#"
              },
              {
                "image": projectImage2,
                "title": "Blood and Platelet Management System",
                "desc": "A Django system for managing blood and platelet donations, allowing users to register as donors, request blood, and track availability for efficient blood bank operations.",
                "tags": ["Django", "HTML5", "CSS3", "Bootstrap4"],
                "hasDemo": false,
                "githubLink": "#"
              },
              {
                "image": projectImage3,
                "title": "Product Bidding System",
                "desc": "A full-stack Django platform where users can list products, place bids, and track auctions with real-time updates, offering a seamless and secure bidding experience.",
                "tags": ["Django", "HTML5", "CSS3", "Bootstrap5"],
                "hasDemo": false,
                "githubLink": "#"
              },
              {
                "image": projectImage4,
                "title": "React Weather App",
                "desc": "A React-based weather app fetching real-time data via OpenWeather API, offering forecasts, temperature details, and location-based updates in a clean and responsive UI.",
                "tags": ["React", "Bootstrap", "API"],
                "hasDemo": true,
                "githubLink": "https://github.com/ShawonBarman/react-weather-app",
                "demoLink": "https://react-weather-app-shawon.netlify.app/"
              },
              {
                "image": projectImage5,
                "title": "Project Task Manager",
                "desc": "A React task management app enabling users to create, track, and manage tasks with local storage support and notification alerts for an efficient workflow experience.",
                "tags": ["React", "localStorage", "Toastify"],
                "hasDemo": true,
                "githubLink": "https://github.com/ShawonBarman/project-task-manager-react-app",
                "demoLink": "https://project-task-manager-react-app.netlify.app/"
              },
              {
                "image": projectImage6,
                "title": "Tic Tac Toe Game",
                "desc": "A React-powered Tic-Tac-Toe game with interactive gameplay, a sleek UI, and built-in logic to determine winners in real-time, making it both fun and engaging.",
                "tags": ["React", "Game", "CSS"],
                "hasDemo": true,
                "githubLink": "https://github.com/ShawonBarman/react-tic-tac-toe-game",
                "demoLink": "https://react-tic-tac-toe-game-app.netlify.app/"
              }
            ].map((project, index) => (
              <div 
                key={index}
                ref={el => projectsRef.current[index] = el}
                className={`group ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all opacity-0 transform translate-y-8`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium transform hover:scale-105 transition-transform"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.githubLink} 
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 flex items-center text-sm font-medium hover:underline group"
                    >
                      <span>View Code</span>
                      <Github size={16} className="ml-1 group-hover:rotate-12 transition-transform" />
                    </a>
                    {project.hasDemo && (
                      <a 
                        href={project.demoLink} 
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 flex items-center text-sm font-medium hover:underline group"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/ShawonBarman" 
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-all shadow-lg hover:translate-y-1 animate-pulse-slow`}
            >
              <span>View More Projects</span>
              <Github size={18} className="ml-2 animate-spin-slow" />
            </a>
          </div>
        </div>
      </section>
  );
}

const PublicationSection = ({ theme }) => {
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
            <span className="relative inline-block pb-1">
              Publications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Convolutional Neural Network Based Automatic COVID-19 Detection",
                role: "First Author",
                desc: "This research paper presents a novel approach using Convolutional Neural Networks (CNNs) for the automatic detection of COVID-19 from medical imaging data. The study develops and evaluates deep learning models to improve diagnostic accuracy and speed, potentially reducing the burden on healthcare systems during pandemic situations. The proposed CNN architecture demonstrates significant improvements in sensitivity and specificity compared to conventional diagnostic methods.",
                link: "http://dx.doi.org/10.1109/DASA63652.2024.10836505"
              },
              {
                title: "A Comparative Analysis of Brain Atlases and DNN-based Autism Spectrum Disorder Detection",
                role: "Third Author",
                desc: "This research explores the use of deep neural networks (DNNs) for autism spectrum disorder (ASD) detection using functional MRI data. The study compares seven different brain atlases from the IMPAC dataset, with Craddock 200 (CC200) achieving the highest accuracy of 82.759%. The findings demonstrate that fMRI-based machine learning models can significantly improve the precision and efficacy of early ASD diagnosis, potentially enhancing outcomes through timely intervention.",
                link: "https://ieeexplore.ieee.org/document/10836505"
              }
            ].map((pub, index) => (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group animate-fadeIn`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{pub.title}</h3>
                <p className="text-blue-500 mb-4 flex items-center">
                  <Star size={16} className="mr-2 animate-spin-slow" /> {pub.role}
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{pub.desc}</p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center text-sm font-medium hover:underline group"
                >
                  <span>View Publication</span>
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}

const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
            <span className="relative inline-block pb-1">
              Contact Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fadeLeft">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-8 text-lg">
                Feel free to contact me for any help or suggestions. I'm always open to discussing about your projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-blue-500" size={20} />, title: "Email", value: "shawon@tmsez.com", link: "mailto:shawon@tmsez.com" },
                  { icon: <Phone className="text-blue-500" size={20} />, title: "Phone", value: "(+880) 1876156680", link: "tel:+8801876156680" },
                  { icon: <MapPin className="text-blue-500" size={20} />, title: "Location", value: "Brahmonkitta Road, Keraniganj, Dhaka, Bangladesh", link: null }
                ].map((contact, index) => (
                  <div 
                    key={index} 
                    className="flex items-center group"
                    style={{ animation: `fadeInLeft 0.5s ease-out ${index * 0.2 + 0.5}s both` }}
                  >
                    <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center mr-4 shadow-md group-hover:shadow-blue-500/30 transition-all transform group-hover:scale-110`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{contact.title}</p>
                      {contact.link ? (
                        <a href={contact.link} className="font-medium hover:text-blue-500 transition-colors">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-8">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/ShawonBarman" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shawon-barman-688968176/" },
                  { icon: <Mail size={20} />, href: "mailto:shawon@tmsez.com" }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all hover:scale-110 hover:text-blue-500`}
                    style={{ animation: `bounce 2s ease infinite ${index * 0.2}s` }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 shadow-lg transform transition-all hover:shadow-xl animate-fadeRight`}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div className="mb-4 group">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`} 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-4 group">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`} 
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-4 group">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`} 
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6 group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`} 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-blue-500/50 transform hover:translate-y-1 overflow-hidden relative group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const profileRef = useRef(null);
  const skillsRef = useRef([]);
  const experienceRef = useRef([]);
  const projectsRef = useRef([]);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      // Calculate scroll progress for progress bar
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Active section detection
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Animate elements when they come into view
      const animateOnScroll = (elements, className) => {
        elements.forEach(el => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight - 100;
          if (isInView) {
            el.classList.add(className);
          }
        });
      };
      
      // Animate skills cards
      if (skillsRef.current) {
        animateOnScroll(skillsRef.current, 'animate-fadeIn');
      }
      
      // Animate experience timeline
      if (experienceRef.current) {
        animateOnScroll(experienceRef.current, 'animate-slideRight');
      }
      
      // Animate project cards
      if (projectsRef.current) {
        animateOnScroll(projectsRef.current, 'animate-fadeUp');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            <span className="text-blue-500">S</span>hawon <span className="text-blue-500">B</span>arman
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`${activeSection === item.toLowerCase() ? 'text-blue-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors relative overflow-hidden group`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${i * 0.1}s both`
                }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:rotate-12 transition-transform duration-300`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4 py-2">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`block py-3 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={toggleTheme} 
              className={`my-3 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection theme={theme} isVisible={isVisible} profileRef={profileRef} />
      

      {/* About Section */}
      <AboutSection theme={theme} />
      

      {/* Skills Section */}
      <SkillsSection theme={theme} />

      {/* Experience Section */}
      <ExperienceSection theme={theme} experienceRef={experienceRef} />
      

      {/* Projects Section */}
      <ProjectsSection theme={theme} projectsRef={projectsRef} />

      {/* Publications Section */}
      <PublicationSection theme={theme} />

      {/* Contact Section */}
      <ContactSection theme={theme} />

      {/* Footer */}
      <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shawon Barman. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Software Engineer at TMSEZ</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a 
              href="#home"
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors animate-bounce-slow"
            >
              ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scaleRight {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: var(--target-width, 100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeLeft {
          animation: fadeLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeRight {
          animation: fadeRight 0.8s ease-out forwards;
        }
        
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .animate-scaleRight {
          animation: scaleRight 0.8s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-progress-bar {
          animation: progress-bar 1.5s ease-out forwards;
        }
        
        .animate-slideRight {
          animation: fadeRight 0.8s ease-out forwards;
        }
        
        .cursor {
          display: inline-block;
          width: 2px;
          animation: pulse-slow 1s infinite;
        }
        
        /* Count-up animation */
        .count-up {
          display: inline-block;
          counter-reset: count 0;
          animation: count 2s forwards ease;
        }
        
        .count-up::after {
          content: counter(count);
        }
        
        @keyframes count {
          0% { counter-increment: count 0; }
          10% { counter-increment: count 54; }
          20% { counter-increment: count 108; }
          30% { counter-increment: count 162; }
          40% { counter-increment: count 217; }
          50% { counter-increment: count 271; }
          60% { counter-increment: count 325; }
          70% { counter-increment: count 380; }
          80% { counter-increment: count 434; }
          90% { counter-increment: count 489; }
          100% { counter-increment: count 543; }
        }
        
        /* Counter animation */
        .counter-animation {
          counter-reset: percentage 0;
          animation: percentage 2s forwards;
        }
        
        .counter-animation::after {
          content: counter(percentage) '%';
        }
        
        @keyframes percentage {
          from { counter-increment: percentage 0; }
          to { counter-increment: percentage var(--percentage, 100); }
        }
      `}</style>
    </div>
  );
};

export default App;
