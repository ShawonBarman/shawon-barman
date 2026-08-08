import React, { useState, useEffect, useRef } from 'react';
import {
  Code, FileCode, Database, BriefcaseBusiness, Github, Linkedin,
  Mail, MapPin, Phone, ExternalLink, ArrowUpRight, Star, Sparkles, Bot,
  MessageSquare, Truck, Navigation, CreditCard, ScanText, Server, Cpu,
  Zap, GraduationCap, Trophy, ChevronDown, Receipt, Users, KeyRound
} from 'lucide-react';
import myImage from './images/Shawon.jpg';
import projectImage1 from './images/project1.PNG';
import projectImage2 from './images/project2.PNG';
import projectImage3 from './images/project3.PNG';
import projectImage4 from './images/project4.PNG';
import projectImage5 from './images/project5.PNG';
import projectImage6 from './images/project6.PNG';

/* ---------- Reusable scroll-reveal wrapper ---------- */
const Reveal = ({ children, className = '', delay = 0, y = 28, once = true, as: Tag = 'div' }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, '--reveal-y': `${y}px` }}
    >
      {children}
    </Tag>
  );
};

/* ---------- Animated count-up number ---------- */
const CountUp = ({ target, decimals = 0, prefix = '', suffix = '', duration = 1600, start }) => {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return <>{prefix}{val.toFixed(decimals)}{suffix}</>;
};

/* ---------- Mouse-tilt wrapper for cards ---------- */
const TiltCard = ({ children, className = '', max = 6 }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-6px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} className={`tilt ${className}`}>
      {children}
    </div>
  );
};

/* ---------- Infinite scrolling tech marquee ---------- */
const TechMarquee = ({ theme }) => {
  const items = [
    "Python", "Django", "Flask", "React", "PostgreSQL", "TimescaleDB", "Redis",
    "QuickBooks API", "MyCarrierPackets", "Stripe", "Firebase Auth", "Google OAuth",
    "WebSockets", "REST APIs", "LLMs / RAG", "OCR", "Tailwind CSS"
  ];
  const row = [...items, ...items];
  return (
    <div className={`marquee-wrap py-5 overflow-hidden border-y ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="marquee">
        {row.map((t, i) => (
          <span key={i} className="mx-4 inline-flex items-center gap-2 text-sm font-medium text-gray-400 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Section heading with gradient + animated underline ---------- */
const SectionHeading = ({ children, sub }) => (
  <div className="text-center mb-14">
    <Reveal>
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-3">
        <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          {children}
        </span>
        <span className="uline absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={120}>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4">{sub}</p>
      </Reveal>
    )}
  </div>
);

/* ---------- Typing effect for the hero title ---------- */
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
        if (text === currentTitle) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setText(currentTitle.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 45 : 105);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <span className="gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {text}<span className="cursor text-blue-400">|</span>
    </span>
  );
};

const HeroSection = ({ theme }) => {
  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Animated aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-blue-600/25 blur-3xl"></div>
        <div className="aurora absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-purple-600/25 blur-3xl" style={{ animationDelay: '-4s' }}></div>
        <div className="aurora absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full bg-cyan-500/20 blur-3xl" style={{ animationDelay: '-8s' }}></div>
        <div className="grid-overlay absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <Reveal>
          <div className={`mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border ${theme === 'dark' ? 'bg-gray-800/60 border-blue-500/40 text-blue-300' : 'bg-blue-50 border-blue-300 text-blue-700'} backdrop-blur-md`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Building AI-powered logistics SaaS · Open to opportunities
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative group floaty mx-auto w-40 h-40 mb-8">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-lg opacity-70 group-hover:opacity-100 animate-spin-slow"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/70 shadow-2xl z-10">
              <img src={myImage} alt="Shawon Barman" className="w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 tracking-tight">
            Hi, I'm <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Shawon Barman</span>
          </h1>
        </Reveal>

        <div className="flex items-center h-14 mb-6 overflow-hidden">
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            <JobTitle />
          </h2>
        </div>

        <Reveal delay={300}>
          <p className="text-lg md:text-xl max-w-3xl text-center mb-10 leading-relaxed text-gray-400">
            Founding engineer at a US-based trucking &amp; logistics SaaS, building end-to-end from
            Dhaka — <span className="text-blue-400 font-semibold">AI copilots</span>,
            <span className="text-blue-400 font-semibold"> real-time systems</span>, deep
            <span className="text-blue-400 font-semibold"> third-party integrations</span> and data
            infrastructure across the full logistics stack.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#work" className="btn-shine px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:-translate-y-1">
              Explore My Work <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className={`px-8 py-3 ${theme === 'dark' ? 'bg-gray-800/70 hover:bg-gray-800' : 'bg-white hover:bg-gray-100'} font-medium rounded-lg border border-blue-500/60 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1 backdrop-blur-md`}>
              Get In Touch <Mail size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <Github size={24} />, href: "https://github.com/ShawonBarman" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/shawon-barman-688968176/" },
              { icon: <Mail size={24} />, href: "mailto:shawon@tmsez.com" }
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all hover:scale-125 hover:-translate-y-1">
                {item.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-blue-400 transition-colors">
        <ChevronDown size={28} className="animate-bounce-slow" />
      </a>
    </section>
  );
};

const StatsSection = ({ theme }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStart(true); ob.unobserve(el); } }, { threshold: 0.3 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  const stats = [
    { target: 10, decimals: 0, suffix: "+", label: "Production systems", sub: "AI · real-time · data" },
    { target: 5, decimals: 0, label: "Core products owned", sub: "Dispatch, billing, OCR & more" },
    { target: 543, decimals: 0, label: "Problems solved", sub: "BeeCrowd · World Rank #293" },
    { target: 2, decimals: 0, label: "IEEE publications", sub: "Deep-learning research" },
    { target: 3.82, decimals: 2, label: "CGPA / 4.00", sub: "VC's & Dean's Awards" }
  ];

  return (
    <section ref={ref} className={`py-16 ${theme === 'dark' ? 'bg-gray-950/40' : 'bg-gray-50'} border-y ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className={`text-center rounded-2xl p-5 h-full ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-white'} shadow-lg hover:-translate-y-1.5 transition-transform duration-300 border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'}`}>
                <div className="text-3xl md:text-4xl font-extrabold gradient-text bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  <CountUp target={s.target} decimals={s.decimals} suffix={s.suffix || ''} start={start} />
                </div>
                <div className="mt-2 font-semibold text-sm">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = ({ theme }) => {
  return (
    <section id="about" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <Reveal className="w-full md:w-1/2" y={0}>
            <p className="text-lg leading-relaxed mb-6">
              I'm a <span className="text-blue-400 font-semibold">Founding Engineer at TMSEZ</span>, a
              California-based trucking &amp; logistics SaaS company, working remotely from Bangladesh.
              I'm the primary full-stack developer behind the platform's core products — the
              dispatch portal, billing portal, OCR agent, EZ Mailbox and EZ Bills.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My work spans <span className="text-blue-400 font-semibold">applied AI</span> (LLM-powered
              copilots, document intelligence), <span className="text-blue-400 font-semibold">real-time
              systems</span> (chat, live GPS tracking, push notifications) and
              <span className="text-blue-400 font-semibold"> data engineering</span> at scale — including a
              time-series migration that cut our database footprint by <span className="text-blue-400 font-semibold">99.94%</span> and
              a Redis de-duplication layer that reduced GPS writes by <span className="text-blue-400 font-semibold">92.4%</span>. I build
              with Python, Django, Flask, React, PostgreSQL, TimescaleDB and Redis.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I've shipped deep <span className="text-blue-400 font-semibold">third-party integrations</span> across
              the platform — a <span className="text-blue-400 font-semibold">QuickBooks</span> accounting sync (import
              invoices, bills, payments, vendor credits and credit memos, with full management of customers,
              vendors and payment methods), a <span className="text-blue-400 font-semibold">MyCarrierPackets</span>-powered
              carriers-management portal, <span className="text-blue-400 font-semibold">Stripe</span> payments, and
              multiple authentication flows (Firebase, Google, SSO and customer auth).
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Outside product work I'm a competitive programmer (<span className="text-blue-400 font-semibold">543</span> problems
              solved on BeeCrowd, world rank <span className="text-blue-400 font-semibold">#293</span>), a
              published deep-learning researcher, and a 45th ICPC World Finals volunteer. I'm passionate about
              generative AI, clean systems, and shipping things that measurably move the needle.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
              {[
                { icon: <Mail className="text-blue-400" size={20} />, text: "shawon@tmsez.com" },
                { icon: <Phone className="text-blue-400" size={20} />, text: "(+880) 1876156680" },
                { icon: <MapPin className="text-blue-400" size={20} />, text: "Brahmonkitta Road, Keraniganj, Dhaka, Bangladesh" }
              ].map((item, i) => (
                <div className="flex items-center gap-2 group" key={i}>
                  <div className="transform transition-transform group-hover:rotate-12">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="w-full md:w-1/2" delay={150}>
            <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'} shadow-xl transition-transform hover:scale-[1.02]`}>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="text-blue-400 animate-swing" />
                Education &amp; Honors
              </h3>

              {[
                { school: "University of Asia Pacific", degree: "B.Sc. in Computer Science & Engineering", period: "Oct 2018 – Jan 2023", note: "CGPA 3.82 / 4.00 · Vice Chancellor's & Dean's Awards" },
                { school: "Sheikh Burhanuddin Post Graduate College", degree: "Higher Secondary School Certificate", period: "2018", note: "GPA 3.42 / 5.00" },
                { school: "Parzowar Kalindi High School", degree: "Secondary School Certificate", period: "2016", note: "GPA 4.50 / 5.00" }
              ].map((ed, i) => (
                <div key={i} className={`${i < 2 ? 'mb-6' : ''} relative pl-6 border-l-2 border-blue-500 hover:border-l-4 transition-all`}>
                  <div className="absolute -left-2 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-lg font-medium">{ed.school}</h4>
                  <p className="text-blue-400">{ed.degree}</p>
                  <p className="text-sm text-gray-500">{ed.period}</p>
                  <p className="text-sm font-medium mt-1">{ed.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const WorkSection = ({ theme }) => {
  const systems = [
    {
      icon: <Bot size={22} />, tag: "Applied AI", title: "EZRI — AI Copilot Suite",
      desc: "LLM-powered assistant across the dispatch platform: a missing-document finder that surfaces paperwork automatically, an analytics dashboard, and quick-prompt workflows that turn natural language into answers over live operational data.",
      stack: ["LLM", "RAG", "Analytics", "Python"]
    },
    {
      icon: <ScanText size={22} />, tag: "Document Intelligence", title: "OCR Agent",
      desc: "Automated document-processing pipeline that extracts structured data from freight paperwork using OCR and document-intelligence models — removing hours of manual data entry from the billing workflow.",
      stack: ["OCR", "Document Intelligence", "NLP", "Python"]
    },
    {
      icon: <MessageSquare size={22} />, tag: "Real-Time", title: "Real-Time Chat Platform",
      desc: "Full messaging system: 1:1 and group chat, reactions, message forwarding, pinned messages (personal & everyone scope), broadcasts and push notifications — plus AI-assisted message polishing and inline translation.",
      stack: ["WebSockets", "Push", "LLM", "Real-Time"]
    },
    {
      icon: <Receipt size={22} />, tag: "Integrations", title: "QuickBooks Accounting Sync",
      desc: "Users connect their QuickBooks account via OAuth to import invoices, bills, payments received, vendor credits and credit memos — with full view, edit and delete across customers, vendors, payments and payment methods.",
      stack: ["QuickBooks API", "OAuth", "Accounting", "Django"]
    },
    {
      icon: <Users size={22} />, tag: "Logistics", title: "Carriers Management Portal",
      desc: "A customer-facing portal where users link their MyCarrierPackets account (via company DOT number) to view and manage all of their carriers — powered by extensive MyCarrierPackets API integrations and a rich feature set.",
      stack: ["MyCarrierPackets API", "REST", "DOT", "Django"]
    },
    {
      icon: <Navigation size={22} />, tag: "Geospatial", title: "Live Fleet Tracking",
      desc: "Rebuilt real-time fleet tracking on a modern mapping engine with road-snapped GPS trails and smooth live vehicle movement — a ground-up migration for accuracy and performance.",
      stack: ["Mapping", "GPS", "React", "Redis"]
    },
    {
      icon: <Truck size={22} />, tag: "Integrations", title: "ELD & Telematics",
      desc: "OAuth-based integrations with major ELD / telematics providers: webhook ingestion, live location feeds and road-snapped trip trails feeding the tracking and dispatch systems.",
      stack: ["OAuth 2.0", "Webhooks", "Telematics", "REST"]
    },
    {
      icon: <CreditCard size={22} />, tag: "Payments", title: "Billing & Payments",
      desc: "Django + Stripe billing platform handling webhook-driven payments, ACH and card processing, and fee calculation — powering the company's invoicing and revenue flows.",
      stack: ["Django", "Stripe", "Webhooks", "ACH"]
    },
    {
      icon: <KeyRound size={22} />, tag: "Platform", title: "Authentication & SSO",
      desc: "Multiple authentication flows across the platform — session-based single sign-on (replacing JWT), plus Firebase, Google and customer authentication — for a unified, secure experience across services and connected accounts.",
      stack: ["SSO", "Firebase", "Google OAuth", "Sessions"]
    }
  ];

  return (
    <section id="work" className={`py-24 ${theme === 'dark' ? 'bg-gray-950/40' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading sub="Production systems I designed and shipped as the platform's primary full-stack engineer — spanning AI, real-time infrastructure, integrations and data.">
          What I Build at TMSEZ
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((sys, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <TiltCard className="h-full">
              <div className={`card group relative h-full rounded-2xl p-6 ${theme === 'dark' ? 'bg-gray-800/60' : 'bg-white'} shadow-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-shadow duration-300 hover:ring-1 hover:ring-blue-500/40 border ${theme === 'dark' ? 'border-gray-700/50' : 'border-gray-100'} overflow-hidden`}>
                <div className="card-bar absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {sys.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300">{sys.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{sys.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{sys.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sys.stack.map((s, j) => (
                    <span key={j} className={`text-xs px-2 py-1 rounded-md ${theme === 'dark' ? 'bg-gray-900/80 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>{s}</span>
                  ))}
                </div>
              </div>
              </TiltCard>
            </Reveal>
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
    const observer = new IntersectionObserver(([entry]) => setIsSkillsVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, []);

  const bars = [
    { icon: <Code size={22} className="text-blue-400 mr-3" />, title: "Languages", skills: [{ name: "Python", percent: 92 }, { name: "JavaScript", percent: 85 }, { name: "C++", percent: 80 }] },
    { icon: <Server size={22} className="text-blue-400 mr-3" />, title: "Backend & APIs", skills: [{ name: "Django / DRF", percent: 95 }, { name: "Flask", percent: 85 }, { name: "REST APIs & Webhooks", percent: 90 }] },
    { icon: <FileCode size={22} className="text-blue-400 mr-3" />, title: "Frontend", skills: [{ name: "React", percent: 85 }, { name: "Tailwind CSS", percent: 90 }, { name: "Bootstrap", percent: 95 }] },
    { icon: <Database size={22} className="text-blue-400 mr-3" />, title: "Data & Infra", skills: [{ name: "PostgreSQL / TimescaleDB", percent: 88 }, { name: "Redis", percent: 85 }, { name: "MySQL / SQLite", percent: 85 }] }
  ];

  const cards = [
    { icon: <Sparkles size={22} className="text-blue-400 mr-3" />, title: "AI & Generative AI", items: ["LLM integration & prompt engineering", "Document intelligence & OCR pipelines", "RAG & AI copilots over live data", "Deep learning: CNN, RNN, ANN · scikit-learn"] },
    { icon: <Cpu size={22} className="text-blue-400 mr-3" />, title: "Platforms & Integrations", items: ["QuickBooks API — invoices, bills, payments, credits", "MyCarrierPackets — carrier management APIs", "Stripe payments · ACH, cards, webhooks", "Auth: Firebase, Google OAuth, SSO, ELD / telematics"] },
    { icon: <Trophy size={22} className="text-blue-400 mr-3" />, title: "Problem Solving", items: ["543 problems solved on BeeCrowd", "World Rank #293", "45th ICPC World Finals — Volunteer", "Algorithms, data structures, contests"] }
  ];

  return (
    <section id="skills" ref={skillsRef} className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading>Skills &amp; Toolkit</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {bars.map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'} rounded-2xl p-6 shadow-lg h-full`}>
                <h3 className="text-lg font-semibold mb-4 flex items-center">{card.icon}{card.title}</h3>
                <div className="space-y-4">
                  {card.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span>{isSkillsVisible ? `${skill.percent}%` : '0%'}</span>
                      </div>
                      <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: isSkillsVisible ? `${skill.percent}%` : '0%', transitionDelay: `${j * 120}ms` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'} rounded-2xl p-6 shadow-lg h-full`}>
                <h3 className="text-lg font-semibold mb-4 flex items-center">{card.icon}{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Zap size={14} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ theme }) => {
  const roles = [
    {
      title: "Founding Engineer — TMSEZ, Inc.", period: "Jan 2024 – Present",
      tasks: [
        "Primary full-stack engineer for the dispatch and billing portals, OCR agent, EZ Mailbox and EZ Bills",
        "Built EZRI, an LLM-powered copilot suite (missing-document finder, analytics dashboard, quick prompts) over live operational data",
        "Designed a full real-time chat platform: group chat, reactions, pins, broadcasts, push notifications, AI-assisted message polishing and translation",
        "Built a QuickBooks integration to import invoices, bills, payments, vendor credits and credit memos, with full management of customers, vendors and payment methods",
        "Developed a MyCarrierPackets-powered carriers-management portal (DOT-based account linking) for customers to manage their carriers",
        "Integrated Stripe payments and multiple auth flows (Firebase, Google, SSO); rebuilt live fleet tracking and scaled GPS telemetry via a time-series + Redis pipeline"
      ]
    },
    {
      title: "Freelance Full-Stack Developer — Upwork", period: "May 2023 – Feb 2024",
      tasks: ["Designed and delivered full-stack websites for international clients", "Completed Python development projects and two machine-learning projects"]
    },
    { title: "Intern — BASIS Institute of Technology & Management", period: "Feb 2023 – Apr 2023", content: "Completed a 3-month professional training in PHP with the Laravel framework." },
    { title: "Web Design Intern — PeopleNTech Bangladesh", period: "Aug 2022 – Oct 2022", content: "Focused on web design techniques and front-end principles." }
  ];

  return (
    <section id="experience" className={`py-24 ${theme === 'dark' ? 'bg-gray-950/40' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative border-l-2 border-blue-500/60 ml-3 md:ml-6 pl-6 md:pl-8 space-y-10">
          {roles.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-white'} rounded-2xl p-6 shadow-lg relative`}>
                <span className="absolute -left-[2.6rem] md:-left-[3.1rem] top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 animate-pulse-slow"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-xl font-bold flex items-center">
                    <BriefcaseBusiness className="mr-2 text-blue-400" size={20} />{exp.title}
                  </h3>
                  <span className="text-blue-400 font-medium text-sm">{exp.period}</span>
                </div>
                {exp.tasks ? (
                  <ul className="mt-3 space-y-2">
                    {exp.tasks.map((task, j) => (
                      <li key={j} className="flex items-start gap-2 hover:translate-x-1 transition-transform">
                        <Zap size={14} className="text-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2">{exp.content}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ theme }) => {
  const projects = [
    { image: projectImage1, title: "Emergency Medicine & Doctor Service", desc: "A Django healthcare platform for booking doctor appointments, emergency medical aid, and accessing health records.", tags: ["Django", "Bootstrap", "MySQL"], hasDemo: false, githubLink: "https://github.com/ShawonBarman" },
    { image: projectImage2, title: "Blood & Platelet Management System", desc: "A Django system for managing blood and platelet donations — donor registration, requests, and availability tracking.", tags: ["Django", "Bootstrap", "SQL"], hasDemo: false, githubLink: "https://github.com/ShawonBarman" },
    { image: projectImage3, title: "Product Bidding System", desc: "A full-stack Django auction platform where users list products, place bids, and track auctions with real-time updates.", tags: ["Django", "Bootstrap5", "SQL"], hasDemo: false, githubLink: "https://github.com/ShawonBarman" },
    { image: projectImage4, title: "React Weather App", desc: "A React weather app fetching real-time data via a public weather API with forecasts and location-based updates.", tags: ["React", "API", "Bootstrap"], hasDemo: true, githubLink: "https://github.com/ShawonBarman/react-weather-app", demoLink: "https://react-weather-app-shawon.netlify.app/" },
    { image: projectImage5, title: "Project Task Manager", desc: "A React task manager to create, track, and manage tasks with persistence and notification alerts.", tags: ["React", "Toastify"], hasDemo: true, githubLink: "https://github.com/ShawonBarman/project-task-manager-react-app", demoLink: "https://project-task-manager-react-app.netlify.app/" },
    { image: projectImage6, title: "Tic Tac Toe Game", desc: "A React Tic-Tac-Toe game with interactive gameplay, a clean UI, and real-time win detection logic.", tags: ["React", "Game", "CSS"], hasDemo: true, githubLink: "https://github.com/ShawonBarman/react-tic-tac-toe-game", demoLink: "https://react-tic-tac-toe-game-app.netlify.app/" }
  ];

  return (
    <section id="projects" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading sub="A sample of independent builds — full-stack apps and React front-ends.">
          Selected Personal Projects
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 100}>
              <TiltCard className="h-full" max={4}>
              <div className={`group h-full ${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-shadow duration-300 hover:ring-1 hover:ring-blue-500/40`}>
                <div className="h-48 bg-gray-700 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-400 flex items-center text-sm font-medium hover:underline group">
                      <span>View Code</span><Github size={16} className="ml-1 group-hover:rotate-12 transition-transform" />
                    </a>
                    {project.hasDemo && (
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-blue-400 flex items-center text-sm font-medium hover:underline group">
                        <span>Live Demo</span><ExternalLink size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Reveal>
            <a href="https://github.com/ShawonBarman" target="_blank" rel="noopener noreferrer"
              className="btn-shine inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
              <span>View More on GitHub</span><Github size={18} className="ml-2" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const PublicationSection = ({ theme }) => {
  const pubs = [
    { title: "Deep Convolutional Neural Network Based Automatic COVID-19 Detection", role: "First Author · IEEE", desc: "A CNN-based approach for automatic COVID-19 detection from medical imaging, with deep-learning models that improve diagnostic accuracy and speed, achieving significant gains in sensitivity and specificity over conventional methods.", link: "http://dx.doi.org/10.1109/DASA63652.2024.10836505" },
    { title: "A Comparative Analysis of Brain Atlases and DNN-based Autism Spectrum Disorder Detection", role: "Co-Author · IEEE", desc: "Deep neural networks for autism spectrum disorder detection using fMRI data, comparing seven brain atlases from the IMPAC dataset — with CC200 reaching 82.76% accuracy — to improve early ASD diagnosis.", link: "https://ieeexplore.ieee.org/document/10836505" }
  ];

  return (
    <section id="research" className={`py-24 ${theme === 'dark' ? 'bg-gray-950/40' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading>Research &amp; Publications</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pubs.map((pub, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className={`${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-white'} rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all hover:-translate-y-1 group h-full`}>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{pub.title}</h3>
                <p className="text-blue-400 mb-4 flex items-center"><Star size={16} className="mr-2" /> {pub.role}</p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{pub.desc}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 flex items-center text-sm font-medium hover:underline group">
                  <span>View Publication</span><ExternalLink size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <SectionHeading>Let's Connect</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="h-full">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="mb-8 text-lg text-gray-400">
                I'm always open to discussing interesting engineering problems, AI projects, and new
                opportunities. Feel free to reach out — I'll get back to you.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-blue-400" size={20} />, title: "Email", value: "shawon@tmsez.com", link: "mailto:shawon@tmsez.com" },
                  { icon: <Phone className="text-blue-400" size={20} />, title: "Phone", value: "(+880) 1876156680", link: "tel:+8801876156680" },
                  { icon: <MapPin className="text-blue-400" size={20} />, title: "Location", value: "Brahmonkitta Road, Keraniganj, Dhaka, Bangladesh", link: null }
                ].map((contact, i) => (
                  <div key={i} className="flex items-center group">
                    <div className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} flex items-center justify-center mr-4 shadow-md group-hover:shadow-blue-500/30 transition-all group-hover:scale-110`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{contact.title}</p>
                      {contact.link ? (
                        <a href={contact.link} className="font-medium hover:text-blue-400 transition-colors">{contact.value}</a>
                      ) : (<p className="font-medium">{contact.value}</p>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 mt-8">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/ShawonBarman" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shawon-barman-688968176/" },
                  { icon: <Mail size={20} />, href: "mailto:shawon@tmsez.com" }
                ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} flex items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all hover:scale-110 hover:-translate-y-1 hover:text-blue-400`}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className={`${theme === 'dark' ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-50'} rounded-2xl p-8 shadow-xl transition-all hover:shadow-2xl h-full`}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4" action="mailto:shawon@tmsez.com" method="post" encType="text/plain">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Doe" },
                  { id: "email", label: "Your Email", type: "email", placeholder: "jane@example.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "Project Inquiry" }
                ].map((f) => (
                  <div className="group" key={f.id}>
                    <label htmlFor={f.id} className="block text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors">{f.label}</label>
                    <input type={f.type} id={f.id} name={f.id} placeholder={f.placeholder}
                      className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform focus:scale-[1.01]`} />
                  </div>
                ))}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors">Message</label>
                  <textarea id="message" name="message" rows="4" placeholder="Your message here..."
                    className={`w-full px-4 py-2 rounded-lg ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform focus:scale-[1.01]`}></textarea>
                </div>
                <button type="submit" className="btn-shine w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-md shadow-blue-600/30 hover:-translate-y-1">
                  <span className="relative z-10">Send Message</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = ['Home', 'About', 'Work', 'Skills', 'Experience', 'Projects', 'Research', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      const sections = navItems.map(i => i.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 130 && rect.bottom >= 130) { setActiveSection(section); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }}></div>

      <header className={`fixed top-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-gray-900/70 border-b border-gray-800/60' : 'bg-white/70 border-b border-gray-200'} backdrop-blur-md transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            <span className="text-blue-500">S</span>hawon <span className="text-blue-500">B</span>arman
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className={`${activeSection === item.toLowerCase() ? 'text-blue-400' : theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-400 transition-colors relative group text-sm`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
            <button onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-700'} hover:rotate-45 transition-transform duration-300`}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`block py-3 ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
            <button onClick={toggleTheme} className={`my-3 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <HeroSection theme={theme} />
      <StatsSection theme={theme} />
      <TechMarquee theme={theme} />
      <AboutSection theme={theme} />
      <WorkSection theme={theme} />
      <SkillsSection theme={theme} />
      <ExperienceSection theme={theme} />
      <ProjectsSection theme={theme} />
      <PublicationSection theme={theme} />
      <ContactSection theme={theme} />

      <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-950/60 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shawon Barman. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Founding Engineer @ TMSEZ · Building AI-powered logistics</p>
          <div className="mt-4 flex justify-center">
            <a href="#home" className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform animate-bounce-slow">↑</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 80px; }

        .reveal { opacity: 0; transform: translateY(var(--reveal-y, 28px)); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); will-change: opacity, transform; }
        .reveal-in { opacity: 1; transform: translateY(0); }

        .uline { transform: scaleX(0); transform-origin: left; transition: transform .8s .15s cubic-bezier(.2,.7,.2,1); }
        .reveal-in .uline { transform: scaleX(1); }

        @keyframes aurora {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(40px,-30px) scale(1.12); }
          66%  { transform: translate(-30px,25px) scale(.94); }
          100% { transform: translate(0,0) scale(1); }
        }
        .aurora { animation: aurora 16s ease-in-out infinite; }

        .grid-overlay {
          background-image: linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(ellipse at center, #000 0%, transparent 72%);
          mask-image: radial-gradient(ellipse at center, #000 0%, transparent 72%);
        }

        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .gradient-text { background-size: 200% auto; animation: gradientShift 6s linear infinite; }

        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .floaty { animation: floaty 6s ease-in-out infinite; }

        .btn-shine { position: relative; overflow: hidden; }
        .btn-shine::after {
          content: ''; position: absolute; top: 0; left: -120%; width: 60%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,.35), transparent);
          transform: skewX(-20deg); transition: left .6s ease;
        }
        .btn-shine:hover::after { left: 130%; }

        @keyframes swing { 0%,100% { transform: rotate(0); } 25% { transform: rotate(8deg); } 75% { transform: rotate(-8deg); } }
        .animate-swing { animation: swing 2.5s ease-in-out infinite; }

        @keyframes spin-slow { from { transform: rotate(0); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @keyframes bounce-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }

        @keyframes pulse-slow { 0%,100% { opacity: 1; } 50% { opacity: .5; } }
        .animate-pulse-slow { animation: pulse-slow 2.5s ease-in-out infinite; }

        .cursor { display: inline-block; width: 2px; animation: pulse-slow 1s infinite; }

        .tilt { transform-style: preserve-3d; transition: transform .25s cubic-bezier(.2,.7,.2,1); }

        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee { display: flex; width: max-content; animation: marquee 32s linear infinite; }
        .marquee-wrap:hover .marquee { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; }
          .tilt { transform: none !important; }
          .aurora, .floaty, .gradient-text, .animate-swing, .animate-spin-slow, .animate-bounce-slow, .animate-pulse-slow, .marquee { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default App;
