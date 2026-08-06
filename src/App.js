import React, { useState, useEffect, useRef } from 'react';
import {
  Code, FileCode, Database, BriefcaseBusiness, Github, Linkedin,
  Mail, MapPin, Phone, ExternalLink, ArrowUpRight, Star, Sparkles, Bot,
  MessageSquare, Truck, Navigation, CreditCard, ScanText, Server, Cpu,
  Zap, ShieldCheck, GraduationCap, Trophy
} from 'lucide-react';
import myImage from './images/Shawon.jpg';
import projectImage1 from './images/project1.PNG';
import projectImage2 from './images/project2.PNG';
import projectImage3 from './images/project3.PNG';
import projectImage4 from './images/project4.PNG';
import projectImage5 from './images/project5.PNG';
import projectImage6 from './images/project6.PNG';

// Animated typing effect for job title
const JobTitle = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = [
      "Founding Engineer @ TMSEZ",
      "AI Systems Builder",
      "Full-Stack Engineer",
      "Real-Time & Data Engineering"
    ];
    const timeout = setTimeout(() => {
      const currentTitle = titles[index];

      if (!isDeleting) {
        setText(currentTitle.substring(0, text.length + 1));
        if (text === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentTitle.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 110);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="typed-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {text}<span className="cursor text-blue-400">|</span>
    </span>
  );
};

const HeroSection = ({ theme, isVisible, profileRef }) => {
  return (
    <section id="home" className={`pt-32 pb-16 relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}>
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className={`container mx-auto px-4 flex flex-col items-center relative z-10 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'} transition-all duration-1000`}>
        <div className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${theme === 'dark' ? 'bg-gray-800/60 border-blue-500/40 text-blue-300' : 'bg-white border-blue-300 text-blue-700'} backdrop-blur-md`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Building AI-powered logistics SaaS · Open to opportunities
        </div>

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

        <div className="flex items-center h-14 mb-5 overflow-hidden">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            <JobTitle />
          </h2>
        </div>

        <p className="text-lg md:text-xl max-w-3xl text-center mb-10 leading-relaxed animate-fadeUp">
          Founding engineer at a US-based trucking &amp; logistics SaaS, building end-to-end from
          Dhaka — <span className="text-blue-500 font-semibold">AI copilots</span>, real-time systems,
          and data infrastructure that moves the numbers: a <span className="text-blue-500 font-semibold">99.94%</span> database
          footprint cut and <span className="text-blue-500 font-semibold">92.4%</span> fewer GPS writes, in production.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#work"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1"
          >
            Explore My Work <ArrowUpRight size={18} />
          </a>
          <a
            href="#contact"
            className={`px-8 py-3 ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} font-medium rounded-lg border border-blue-500 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1`}
          >
            Get In Touch <Mail size={18} />
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: <Github size={24} />, href: "https://github.com/ShawonBarman" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shawon-barman-688968176/" },
            { icon: <Mail size={24} />, href: "mailto:shawon@tmsez.com" }
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
};

const StatsSection = ({ theme }) => {
  const stats = [
    { value: "99.94%", label: "DB footprint reduced", sub: "TimescaleDB migration" },
    { value: "92.4%", label: "Fewer GPS writes", sub: "Redis dedup pipeline" },
    { value: "543", label: "Problems solved", sub: "BeeCrowd · World Rank #293" },
    { value: "2", label: "IEEE publications", sub: "Deep learning research" },
    { value: "3.82", label: "CGPA / 4.00", sub: "VC's & Dean's Awards" }
  ];
  return (
    <section className={`py-14 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} border-y ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center rounded-xl p-5 ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-white'} shadow-lg hover:-translate-y-1 transition-transform`}
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 font-semibold text-sm">{s.label}</div>
              <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
              I'm a <span className="text-blue-500 font-semibold">Founding Engineer at TMSEZ</span>, a
              California-based trucking &amp; logistics SaaS company, working remotely from Bangladesh.
              I'm the primary full-stack developer behind the platform's core products — the
              dispatch portal, billing portal, OCR agent, EZ Mailbox and EZ Bills.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My work spans <span className="text-blue-500 font-semibold">applied AI</span> (LLM-powered
              copilots, document intelligence), <span className="text-blue-500 font-semibold">real-time
              systems</span> (chat, live GPS tracking, push notifications) and
              <span className="text-blue-500 font-semibold"> data engineering</span> at scale. I build with
              Python, Django, Flask, React, PostgreSQL/TimescaleDB and Redis, and integrate deeply with
              third-party platforms — Google Document AI, Azure AI, Gemini, Stripe, Mapbox, Samsara and Motive.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Outside product work I'm a competitive programmer (<span className="text-blue-500 font-semibold">543</span> problems
              solved on BeeCrowd, world rank <span className="text-blue-500 font-semibold">#293</span>), a
              published deep-learning researcher, and a 45th ICPC World Finals volunteer. I'm passionate about
              generative AI, clean systems, and shipping things that measurably move the needle.
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
                <GraduationCap className="text-blue-500 animate-swing" />
                Education &amp; Honors
              </h3>

              <div className="mb-6 relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg font-medium">University of Asia Pacific</h4>
                <p className="text-blue-500">B.Sc. in Computer Science &amp; Engineering</p>
                <p className="text-sm text-gray-500">Oct 2018 – Jan 2023</p>
                <p className="text-sm font-medium mt-1">CGPA 3.82 / 4.00 · Vice Chancellor's &amp; Dean's Awards</p>
              </div>

              <div className="mb-6 relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg font-medium">Sheikh Burhanuddin Post Graduate College</h4>
                <p className="text-blue-500">Higher Secondary School Certificate</p>
                <p className="text-sm text-gray-500">2018</p>
                <p className="text-sm font-medium mt-1">GPA 3.42 / 5.00</p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                <h4 className="text-lg font-medium">Parzowar Kalindi High School</h4>
                <p className="text-blue-500">Secondary School Certificate</p>
                <p className="text-sm text-gray-500">2016</p>
                <p className="text-sm font-medium mt-1">GPA 4.50 / 5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkSection = ({ theme }) => {
  const systems = [
    {
      icon: <Bot size={22} />,
      tag: "Applied AI",
      title: "EZRI — AI Copilot Suite",
      desc: "LLM-powered assistant across the dispatch platform: a missing-POD finder that surfaces documents automatically, an analytics dashboard, and quick-prompt workflows that turn natural language into answers over live operational data.",
      stack: ["LLM / Gemini", "RAG", "Analytics", "Python"]
    },
    {
      icon: <ScanText size={22} />,
      tag: "Document Intelligence",
      title: "OCR Agent",
      desc: "Automated document-processing pipeline that extracts structured data from freight paperwork using Google Document AI and Azure AI — removing hours of manual data entry from the billing workflow.",
      stack: ["Google Document AI", "Azure AI", "Python"]
    },
    {
      icon: <MessageSquare size={22} />,
      tag: "Real-Time",
      title: "Real-Time Chat Platform",
      desc: "Full messaging system: 1:1 and group chat, reactions, message forwarding, pinned messages (personal & everyone scope), broadcasts, and FCM push. Includes AI 'Polish Message' (LanguageTool + Gemini) and inline Translate.",
      stack: ["WebSockets", "FCM", "Gemini", "LanguageTool"]
    },
    {
      icon: <Navigation size={22} />,
      tag: "Geospatial",
      title: "Live Tracking (Mapbox Rebuild)",
      desc: "Rebuilt real-time fleet tracking on Mapbox with road-snapped GPS trails and smooth live vehicle movement — a ground-up migration for accuracy and performance.",
      stack: ["Mapbox", "GPS", "React", "Redis"]
    },
    {
      icon: <Truck size={22} />,
      tag: "Integrations",
      title: "ELD Integrations — Samsara & Motive",
      desc: "OAuth-based integrations with Samsara and Motive electronic logging devices: webhook ingestion, live location feeds, and road-snapped trip trails feeding the tracking and dispatch systems.",
      stack: ["OAuth 2.0", "Webhooks", "Samsara", "Motive"]
    },
    {
      icon: <Database size={22} />,
      tag: "Data Engineering",
      title: "TimescaleDB + Redis at Scale",
      desc: "Migrated high-volume GPS telemetry to TimescaleDB for a 99.94% table-size reduction, and built a Redis-based GPS de-duplication layer that cut database writes by 92.4% — major cost and performance wins.",
      stack: ["TimescaleDB", "PostgreSQL", "Redis", "Python"]
    },
    {
      icon: <CreditCard size={22} />,
      tag: "Payments",
      title: "Billing Portal",
      desc: "Django + Stripe billing platform handling webhook-driven payments, ACH and card processing, and fee calculation — powering the company's invoicing and revenue flows.",
      stack: ["Django", "Stripe", "Webhooks", "ACH"]
    },
    {
      icon: <ShieldCheck size={22} />,
      tag: "Platform",
      title: "SSO & Session Auth",
      desc: "Designed session-based single sign-on to replace JWT across services, integrated with the internal ez-agent service for a unified, secure authentication experience.",
      stack: ["SSO", "Sessions", "Security", "Python"]
    }
  ];

  return (
    <section id="work" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fadeUp">
          <span className="relative inline-block pb-1">
            What I Build at TMSEZ
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
          Production systems I designed and shipped as the platform's primary full-stack engineer —
          spanning AI, real-time infrastructure, integrations and data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border ${theme === 'dark' ? 'border-gray-700/60' : 'border-gray-100'} overflow-hidden`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {sys.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400">
                  {sys.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors">{sys.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{sys.desc}</p>
              <div className="flex flex-wrap gap-2">
                {sys.stack.map((s, i) => (
                  <span key={i} className={`text-xs px-2 py-1 rounded-md ${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = ({ theme }) => {
  const skillsRef = useRef(null);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  useEffect(() => {
    const element = skillsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSkillsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const bars = [
    {
      icon: <Code size={22} className="text-blue-500 mr-3" />,
      title: "Languages",
      skills: [
        { name: "Python", percent: 92 },
        { name: "JavaScript", percent: 85 },
        { name: "C++", percent: 80 }
      ]
    },
    {
      icon: <Server size={22} className="text-blue-500 mr-3" />,
      title: "Backend & APIs",
      skills: [
        { name: "Django / DRF", percent: 95 },
        { name: "Flask", percent: 85 },
        { name: "REST APIs & Webhooks", percent: 90 }
      ]
    },
    {
      icon: <FileCode size={22} className="text-blue-500 mr-3" />,
      title: "Frontend",
      skills: [
        { name: "React", percent: 85 },
        { name: "Tailwind CSS", percent: 90 },
        { name: "Bootstrap", percent: 95 }
      ]
    },
    {
      icon: <Database size={22} className="text-blue-500 mr-3" />,
      title: "Data & Infra",
      skills: [
        { name: "PostgreSQL / TimescaleDB", percent: 88 },
        { name: "Redis", percent: 85 },
        { name: "MySQL / SQLite", percent: 85 }
      ]
    }
  ];

  const cards = [
    {
      icon: <Sparkles size={22} className="text-blue-500 mr-3" />,
      title: "AI & Generative AI",
      items: [
        "LLM integration & prompt engineering (Gemini)",
        "Document AI — Google Document AI, Azure AI",
        "RAG & AI copilots over operational data",
        "Deep learning: CNN, RNN, ANN · scikit-learn"
      ]
    },
    {
      icon: <Cpu size={22} className="text-blue-500 mr-3" />,
      title: "Platforms & Integrations",
      items: [
        "Stripe (payments, ACH, webhooks)",
        "Mapbox (geospatial, live tracking)",
        "Samsara & Motive (ELD, OAuth)",
        "Firebase Cloud Messaging (push)"
      ]
    },
    {
      icon: <Trophy size={22} className="text-blue-500 mr-3" />,
      title: "Problem Solving",
      items: [
        "543 problems solved on BeeCrowd",
        "World Rank #293",
        "45th ICPC World Finals — Volunteer",
        "Algorithms, data structures, competitive programming"
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
          <span className="relative inline-block pb-1">
            Skills &amp; Toolkit
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {bars.map((card, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-6 shadow-lg`}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">{card.icon}{card.title}</h3>
              <div className="space-y-4">
                {card.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>{isSkillsVisible ? `${skill.percent}%` : '0%'}</span>
                    </div>
                    <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isSkillsVisible ? `${skill.percent}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-6 shadow-lg`}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center">{card.icon}{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Zap size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ theme, experienceRef }) => {
  return (
    <section id="experience" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
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
              title: "Founding Engineer — TMSEZ, Inc.",
              period: "Jan 2024 – Present",
              tasks: [
                "Primary full-stack engineer for the dispatch and billing portals, OCR agent, EZ Mailbox and EZ Bills",
                "Built EZRI, an LLM-powered copilot suite (missing-POD finder, analytics dashboard, quick prompts) over live operational data",
                "Designed a full real-time chat platform: group chat, reactions, pins, broadcasts, FCM push, AI 'Polish Message' and Translate",
                "Migrated GPS telemetry to TimescaleDB (99.94% table-size reduction) and built a Redis dedup layer (92.4% fewer writes)",
                "Integrated Samsara & Motive ELDs (OAuth + webhooks) and rebuilt live fleet tracking on Mapbox with road-snapped trails",
                "Built the Django + Stripe billing portal (webhook payments, ACH/card) and led SSO/session-auth migration away from JWT"
              ]
            },
            {
              title: "Freelance Full-Stack Developer — Upwork",
              period: "May 2023 – Feb 2024",
              tasks: [
                "Designed and delivered full-stack websites for international clients",
                "Completed Python development projects and two machine-learning projects"
              ]
            },
            {
              title: "Intern — BASIS Institute of Technology & Management",
              period: "Feb 2023 – Apr 2023",
              content: "Completed a 3-month professional training in PHP with the Laravel framework."
            },
            {
              title: "Web Design Intern — PeopleNTech Bangladesh",
              period: "Aug 2022 – Oct 2022",
              content: "Focused on web design techniques and front-end principles."
            }
          ].map((exp, index) => (
            <div
              key={index}
              ref={el => experienceRef.current[index] = el}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg relative animate-fadeUp`}
              style={{ animationDelay: `${index * 0.15}s` }}
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
};

const ProjectsSection = ({ theme, projectsRef }) => {
  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fadeUp">
          <span className="relative inline-block pb-1">
            Selected Personal Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14">
          A sample of independent builds — full-stack apps and React front-ends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              "image": projectImage1,
              "title": "Emergency Medicine & Doctor Service",
              "desc": "A Django healthcare platform for booking doctor appointments, emergency medical aid, and accessing health records.",
              "tags": ["Django", "Bootstrap", "MySQL"],
              "hasDemo": false,
              "githubLink": "https://github.com/ShawonBarman"
            },
            {
              "image": projectImage2,
              "title": "Blood & Platelet Management System",
              "desc": "A Django system for managing blood and platelet donations — donor registration, requests, and availability tracking.",
              "tags": ["Django", "Bootstrap", "SQL"],
              "hasDemo": false,
              "githubLink": "https://github.com/ShawonBarman"
            },
            {
              "image": projectImage3,
              "title": "Product Bidding System",
              "desc": "A full-stack Django auction platform where users list products, place bids, and track auctions with real-time updates.",
              "tags": ["Django", "Bootstrap5", "SQL"],
              "hasDemo": false,
              "githubLink": "https://github.com/ShawonBarman"
            },
            {
              "image": projectImage4,
              "title": "React Weather App",
              "desc": "A React weather app fetching real-time data via the OpenWeather API with forecasts and location-based updates.",
              "tags": ["React", "API", "Bootstrap"],
              "hasDemo": true,
              "githubLink": "https://github.com/ShawonBarman/react-weather-app",
              "demoLink": "https://react-weather-app-shawon.netlify.app/"
            },
            {
              "image": projectImage5,
              "title": "Project Task Manager",
              "desc": "A React task manager to create, track, and manage tasks with persistence and notification alerts.",
              "tags": ["React", "Toastify"],
              "hasDemo": true,
              "githubLink": "https://github.com/ShawonBarman/project-task-manager-react-app",
              "demoLink": "https://project-task-manager-react-app.netlify.app/"
            },
            {
              "image": projectImage6,
              "title": "Tic Tac Toe Game",
              "desc": "A React Tic-Tac-Toe game with interactive gameplay, a clean UI, and real-time win detection logic.",
              "tags": ["React", "Game", "CSS"],
              "hasDemo": true,
              "githubLink": "https://github.com/ShawonBarman/react-tic-tac-toe-game",
              "demoLink": "https://react-tic-tac-toe-game-app.netlify.app/"
            }
          ].map((project, index) => (
            <div
              key={index}
              ref={el => projectsRef.current[index] = el}
              className={`group ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all animate-fadeUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                <p className="text-gray-500 mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
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
            className={`inline-flex items-center px-6 py-3 rounded-lg ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-all shadow-lg hover:-translate-y-1`}
          >
            <span>View More on GitHub</span>
            <Github size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

const PublicationSection = ({ theme }) => {
  return (
    <section id="research" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
          <span className="relative inline-block pb-1">
            Research &amp; Publications
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Deep Convolutional Neural Network Based Automatic COVID-19 Detection",
              role: "First Author · IEEE",
              desc: "A CNN-based approach for automatic COVID-19 detection from medical imaging, with deep-learning models that improve diagnostic accuracy and speed, achieving significant gains in sensitivity and specificity over conventional methods.",
              link: "http://dx.doi.org/10.1109/DASA63652.2024.10836505"
            },
            {
              title: "A Comparative Analysis of Brain Atlases and DNN-based Autism Spectrum Disorder Detection",
              role: "Co-Author · IEEE",
              desc: "Deep neural networks for autism spectrum disorder detection using fMRI data, comparing seven brain atlases from the IMPAC dataset — with CC200 reaching 82.76% accuracy — to improve early ASD diagnosis.",
              link: "https://ieeexplore.ieee.org/document/10836505"
            }
          ].map((pub, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group animate-fadeIn`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{pub.title}</h3>
              <p className="text-blue-500 mb-4 flex items-center">
                <Star size={16} className="mr-2" /> {pub.role}
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
};

const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-fadeUp">
          <span className="relative inline-block pb-1">
            Let's Connect
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-scaleRight"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeLeft">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="mb-8 text-lg">
              I'm always open to discussing interesting engineering problems, AI projects, and new
              opportunities. Feel free to reach out — I'll get back to you.
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
                  <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center mr-4 shadow-md group-hover:shadow-blue-500/30 transition-all transform group-hover:scale-110`}>
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
                  className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all hover:scale-110 hover:text-blue-500`}
                  style={{ animation: `bounce 2s ease infinite ${index * 0.2}s` }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-8 shadow-lg transform transition-all hover:shadow-xl animate-fadeRight`}>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form className="space-y-4" action="mailto:shawon@tmsez.com" method="post" encType="text/plain">
              <div className="mb-4 group">
                <label htmlFor="name" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Your Name</label>
                <input
                  type="text" id="name" name="name"
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`}
                  placeholder="Jane Doe"
                />
              </div>

              <div className="mb-4 group">
                <label htmlFor="email" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Your Email</label>
                <input
                  type="email" id="email" name="email"
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`}
                  placeholder="jane@example.com"
                />
              </div>

              <div className="mb-4 group">
                <label htmlFor="subject" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6 group">
                <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">Message</label>
                <textarea
                  id="message" name="message" rows="4"
                  className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform focus:scale-[1.01]`}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-blue-500/50 transform hover:-translate-y-1 overflow-hidden relative group"
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
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const profileRef = useRef(null);
  const experienceRef = useRef([]);
  const projectsRef = useRef([]);

  const navItems = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Projects', 'Research', 'Contact'];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map(i => i.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }

      const animateOnScroll = (elements, className) => {
        elements.forEach(el => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) el.classList.add(className);
        });
      };

      if (experienceRef.current) animateOnScroll(experienceRef.current, 'animate-slideRight');
      if (projectsRef.current) animateOnScroll(projectsRef.current, 'animate-fadeUp');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            <span className="text-blue-500">S</span>hawon <span className="text-blue-500">B</span>arman
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${activeSection === item.toLowerCase() ? 'text-blue-500' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors relative overflow-hidden group text-sm`}
                style={{ animation: `fadeIn 0.5s ease-out ${i * 0.08}s both` }}
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

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
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

      <HeroSection theme={theme} isVisible={isVisible} profileRef={profileRef} />
      <StatsSection theme={theme} />
      <AboutSection theme={theme} />
      <WorkSection theme={theme} />
      <SkillsSection theme={theme} />
      <ExperienceSection theme={theme} experienceRef={experienceRef} />
      <ProjectsSection theme={theme} projectsRef={projectsRef} />
      <PublicationSection theme={theme} />
      <ContactSection theme={theme} />

      {/* Footer */}
      <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shawon Barman. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Founding Engineer @ TMSEZ · Building AI-powered logistics</p>
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
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleRight { from { transform: scaleX(0); transform-origin: left; } to { transform: scaleX(1); transform-origin: left; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes swing { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(5deg); } 75% { transform: rotate(-5deg); } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fadeLeft { animation: fadeLeft 0.8s ease-out forwards; }
        .animate-fadeRight { animation: fadeRight 0.8s ease-out forwards; }
        .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }
        .animate-scaleRight { animation: scaleRight 0.8s ease-out forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-slideRight { animation: fadeRight 0.8s ease-out forwards; }
        .cursor { display: inline-block; width: 2px; animation: pulse-slow 1s infinite; }
      `}</style>
    </div>
  );
};

export default App;
