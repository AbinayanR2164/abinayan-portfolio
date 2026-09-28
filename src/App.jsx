import { useEffect, useState } from 'react';

const skills = [
  'Python', 'Java', 'C', 'PHP', 'JavaScript', 'SQL', 'HTML5', 'CSS3',
  'React.js', 'Node.js', 'Express.js', 'FastAPI', 'MySQL', 'MongoDB',
  'REST APIs', 'Git', 'GitHub', 'Postman', 'XAMPP', 'Machine Learning',
  'Generative AI', 'Data Structures & Algorithms'
];

const projects = [
  {
    title: 'Smart Campus Suite',
    subtitle: 'College Management Web App',
    date: 'Feb 2025',
    tech: ['React.js','PHP', 'MySQL', 'HTML', 'CSS'],
    description: 'A full-stack college management platform with role-based admin login, safety alerts, online fee payment and canteen ordering. Built with SDLC and end-to-end debugging practices.',
    tag: 'Full Stack',
  },
  {
    title: 'Advanced Resume Builder',
    subtitle: 'Dynamic Web Application',
    date: 'Sep 2025',
    tech: ['React.js','PHP', 'MySQL', 'HTML', 'CSS'],
    description: 'An interactive resume-generation platform with database-driven user profiles, dynamic templates and CRUD operations for content management.',
    tag: 'Web App',
  },
  {
    title: 'MagicDine AI',
    subtitle: 'Restaurant Growth Assistant',
    date: '2026',
    tech: ['React.js','FastAPI', 'Python', 'MySQL', 'Groq', 'JavaScript'],
    description: 'An AI-powered restaurant assistant that analyzes orders, revenue, average order value and sales channels to provide practical business recommendations.',
    tag: 'AI / GenAI',
    live: 'https://magic-dine-restaurant-ai-1.onrender.com',
  },
  {
    title: 'Heart Attack Detection System',
    subtitle: 'IoT Health Monitoring',
    date: 'Jun 2025',
    tech: ['ESP32', 'GPS', 'GSM', 'IoT'],
    description: 'An IoT health-monitoring system designed to detect abnormal heart activity and falls, triggering real-time SMS, call and GPS alerts.',
    tag: 'IoT',
  }
];

const experience = [
  {
    company: '7 Dreamz',
    location: 'Madurai',
    role: 'Web Development Intern',
    duration: '8 Months',
    bullets: [
      'Contributed to live web development projects using PHP, MySQL, HTML and CSS, handling both front-end and back-end logic.',
      'Collaborated with the development team on debugging, feature implementation and version control, gaining exposure to real client requirements.'
    ]
  }
];

const education = [
  ['SRM TRP Engineering College, Trichy', 'B.E. — Electronics and Communication Engineering', '2022–2026', 'CGPA: 8.0 / 10.0'],
  ["St. Antony’s Higher Secondary School", 'HSC', '2022', '76.17%'],
  ["St. Antony’s Higher Secondary School", 'SSLC', '2020', '88.4%']
];

const achievements = [
  '1st Prize — Project Expo, Francis Xavier Engineering College, Tirunelveli — Smart Campus Suite web application.',
  '2nd Prize — Web Development, National Engineering College, Kovilpatti — Built a website under time constraints.',
  'Smart India Hackathon 2024 — On-campus round participant.'
];

const certifications = [
  ['Microsoft Azure AI Fundamentals', 'AI-900'],
  ['Google Cloud', 'Data Innovation with GCP'],
  ['NPTEL', 'Introduction to Machine Learning']
];

function Icon({ children }) {
  return <span className="icon" aria-hidden="true">{children}</span>;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenu(false);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go('home')} aria-label="Go to home">
            <span className="brand-mark">RA</span>
            <span>R. Abinayan</span>
          </button>

          <div className={`nav-links ${menu ? 'open' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button key={item} className={active === item ? 'active' : ''} onClick={() => go(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? '☼' : '☾'}
            </button>
            <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">☰</button>
            <button className="nav-cta" onClick={() => go('contact')}>Let's Talk <span>↗</span></button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
            <h1>Building digital products that <span>solve real problems.</span></h1>
            <p className="hero-text">Hi, I'm <strong>R. Abinayan</strong> — a Full Stack Developer and AI/ML enthusiast focused on practical web applications, automation and intelligent systems.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go('projects')}>View My Work <span>↗</span></button>
              <a className="ghost-btn" href="mailto:abinayanramalingam2020@gmail.com">Email Me</a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/AbinayanR2164" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/abinayan-r" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://leetcode.com/u/AbinayanR/" target="_blank" rel="noreferrer">LeetCode ↗</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="profile-card">
              <div className="profile-glow" />
              <img src="/profile.jpg" alt="R. Abinayan" className="profile-img" />
              <div className="profile-info">
                <div><strong>R. Abinayan</strong><span>Full Stack Developer</span></div>
                <span className="mini-badge">2026</span>
              </div>
            </div>
            <div className="floating-card fc-one"><Icon>⌘</Icon><div><b>Full Stack</b><small>Web Development</small></div></div>
            <div className="floating-card fc-two"><Icon>✦</Icon><div><b>AI / ML</b><small>Practical Solutions</small></div></div>
          </div>
        </section>

        <section id="about" className="section container section-pad">
          <div className="section-heading"><span>01 / ABOUT</span><h2>From engineering<br /><em>to building.</em></h2></div>
          <div className="about-grid">
            <div className="about-text">
              <p className="lead">I'm an Electronics & Communication Engineering graduate who enjoys turning ideas into working software.</p>
              <p>My experience spans full-stack development, database-backed applications, REST APIs, AI-assisted products and IoT systems. I like understanding the complete problem — from user experience and backend logic to deployment and debugging.</p>
              <p>I'm currently focused on opportunities where I can contribute as a software developer while continuing to grow across full-stack engineering, AI/ML and real-world product development.</p>
            </div>
            <div className="stats-grid">
              <div className="stat"><strong>8.0</strong><span>CGPA / 10</span></div>
              <div className="stat"><strong>8+</strong><span>Months Internship</span></div>
              <div className="stat"><strong>4</strong><span>Featured Projects</span></div>
              <div className="stat"><strong>3</strong><span>Certifications</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted-section section-pad">
          <div className="container">
            <div className="section-heading compact"><span>02 / SKILLS</span><h2>Tools I use to<br /><em>build things.</em></h2></div>
            <div className="skills-wrap">
              {skills.map((skill, i) => <span className="skill-pill" key={skill} style={{ '--i': i }}>{skill}</span>)}
            </div>
            <div className="skill-groups">
              <div><b>AI / ML</b><span>Machine Learning Fundamentals · Generative AI · Data Analysis</span></div>
              <div><b>Backend</b><span>REST API Development · Node.js · Express.js · FastAPI · PHP</span></div>
              <div><b>Databases</b><span>MySQL · MongoDB · SQL</span></div>
              <div><b>Tools</b><span>Git · GitHub · VS Code · Postman · XAMPP · Debugging</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section container section-pad">
          <div className="section-heading row-heading"><div><span>03 / PROJECTS</span><h2>Selected <em>work.</em></h2></div><p>Projects where software meets practical problems.</p></div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top"><span className="project-number">0{index + 1}</span><span className="project-tag">{project.tag}</span></div>
                <div className="project-content">
                  <div className="project-date">{project.date}</div>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <div className="tech-list">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                  {project.live && <a className="project-link" href={project.live} target="_blank" rel="noreferrer">Live Demo <span>↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section muted-section section-pad">
          <div className="container">
            <div className="section-heading compact"><span>04 / EXPERIENCE</span><h2>Where I've<br /><em>worked.</em></h2></div>
            <div className="timeline">
              {experience.map((job) => (
                <div className="timeline-item" key={job.company}>
                  <div className="timeline-dot" />
                  <div className="timeline-date">{job.duration}</div>
                  <div className="timeline-main"><div className="company-row"><h3>{job.company}</h3><span>{job.location}</span></div><h4>{job.role}</h4><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
                </div>
              ))}
            </div>

            <div className="subsection-title">Education</div>
            <div className="education-list">
              {education.map((e) => <div className="education-row" key={e[1]}><div><b>{e[0]}</b><span>{e[1]}</span></div><div><b>{e[2]}</b><span>{e[3]}</span></div></div>)}
            </div>

            <div className="two-col-bottom">
              <div><div className="subsection-title">Achievements</div><ul className="clean-list">{achievements.map(a => <li key={a}>{a}</li>)}</ul></div>
              <div><div className="subsection-title">Certifications</div><div className="cert-list">{certifications.map(c => <div className="cert" key={c[0]}><span>✓</span><div><b>{c[0]}</b><small>{c[1]}</small></div></div>)}</div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="container contact-inner">
            <div><span className="contact-kicker">05 / CONTACT</span><h2>Have a project,<br /><em>role or idea?</em></h2><p>I'm open to software development, full-stack, AI/ML and related opportunities.</p></div>
            <div className="contact-card">
              <span>Start a conversation</span>
              <a href="mailto:abinayanramalingam2020@gmail.com">abinayanramalingam2020@gmail.com</a>
              <div className="contact-actions"><a href="mailto:abinayanramalingam2020@gmail.com" className="primary-btn">Send Email ↗</a><a href="tel:+918613610507" className="ghost-btn">Call Me</a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} R. Abinayan</span><span>Built with React · Designed for the web</span><a href="#home">Back to top ↑</a></div></footer>
    </div>
  );
}

export default App;
