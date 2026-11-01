import { useEffect, useState, type ReactNode } from 'react'
import { HashRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router'
import './App.css'

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" /></svg>
}

function BrandLogo() {
  return <svg aria-hidden="true" className="brand-logo" viewBox="0 0 132 40" fill="none">
    <g className="brand-emblem" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M20 3.5 35 12v16L20 36.5 5 28V12L20 3.5Z" />
      <path d="M12 25V15h11m-11 5h8" />
      <circle cx="35" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="5" cy="28" r="2" fill="currentColor" stroke="none" />
    </g>
    <path className="brand-wordmark" d="M49 29V11h17v4H54v3.5h10v4H54V29h-5ZM70 20c0-5.6 3.8-9.4 9.3-9.4 4.5 0 7.6 2.4 8.5 6.1h-5c-.6-1.4-1.8-2.2-3.6-2.2-2.5 0-4.1 2.1-4.1 5.5s1.6 5.5 4.1 5.5c1.9 0 3.1-.9 3.7-2.5h5c-.8 4-4 6.4-8.7 6.4-5.5 0-9.2-3.8-9.2-9.4ZM91 29V11h4.6l8.4 10.7V11h4.9v18h-4.6l-8.4-10.8V29H91Z" fill="currentColor" />
    <path className="brand-subtitle" d="M49 36h3.1v.8h-2.2v.9h2v.8h-2v1h2.3v.8H49V36Zm4.3 0h1l1.7 2.7V36h.9v4.3H56l-1.7-2.7v2.7h-.9V36Zm4.5 0h3.5v.8H60v.9h2v.8h-2v1h2.3v.8h-3.2V36Zm4.4 0h1l1.1 3 1.1-3h1l-1.7 4.3h-.9L64.2 36Zm5.1 0h3.1v.8h-2.2v.9h2v.8h-2v1h2.3v.8h-3.2V36Zm4 0h.9v3.5h2.1v.8h-3V36Zm3.4 2.1c0-1.3.9-2.2 2.2-2.2 1.3 0 2.2.9 2.2 2.2s-.9 2.2-2.2 2.2c-1.3 0-2.2-.9-2.2-2.2Zm3.5 0c0-.9-.5-1.4-1.3-1.4s-1.3.5-1.3 1.4.5 1.4 1.3 1.4 1.3-.5 1.3-1.4Zm1.8-2.1h1.8c1 0 1.6.5 1.6 1.4s-.6 1.4-1.6 1.4h-.9v1.5H82V36Zm1.7 2c.5 0 .8-.2.8-.6s-.3-.6-.8-.6h-.8v1.2h.8Zm2.4-2h.9v4.3h-.9V36Zm1.9 0h1l1.7 2.7V36h.9v4.3h-.9L88 37.6v2.7h-.9V36Z" fill="currentColor" />
  </svg>
}

const navItems = [
  { label: 'Projects', to: '/work' },
  { label: 'Experience', to: '/experience' },
  { label: 'About', to: '/about' },
]
const currentYear = new Date().getFullYear()

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    const routeName = location.pathname === '/' ? 'Home' : location.pathname.slice(1)
    document.title = `${routeName} | Fernando Cortes Nila — Full-Stack Software Developer`
  }, [location.pathname])

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Fernando Cortes Nila, home" onClick={() => setMenuOpen(false)}><BrandLogo /></Link>
        <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} type="button">
          <span /><span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
          <NavLink className={({ isActive }) => `nav-contact${isActive ? ' active' : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>Get in touch <Arrow /></NavLink>
        </nav>
      </header>

      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="experience" element={<Experience />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <Link className="wordmark" to="/" aria-label="Fernando Cortes Nila, home"><BrandLogo /></Link>
        <p>Made with curiosity and care. <span>© {currentYear}</span></p>
        <Link to="/" className="back-to-top">Back to home ↑</Link>
      </footer>
    </div>
  )
}

function Eyebrow({ children }: { children: string }) {
  return <p className="eyebrow"><span className="status-dot" />{children}</p>
}

function PageIntro({ number, title, subtitle }: { number: string; title: ReactNode; subtitle: string }) {
  return <div className="page-intro"><p className="section-kicker">{number} <span>/ {subtitle}</span></p><h1>{title}</h1></div>
}

function Home() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <Eyebrow>Full-stack developer · JavaScript & Node · AI-assisted engineering</Eyebrow>
        <h1>Full-stack software, <em>with an engineer’s eye for systems.</em></h1>
        <p className="hero-intro">I’m a Full Stack Developer at a wealth management institution, following more than two years as a Frontend Developer there. Electronics engineering training and public projects across React, Vue, and Python inform how I approach software from interface to API.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/work">Explore my work <Arrow /></Link><Link className="text-link" to="/contact">Let’s connect <span>↗</span></Link></div>
        <div className="hero-meta"><span>Software · Systems · Electronics</span></div>
      </div>
      <div aria-label="A visual motif inspired by software and circuit diagrams" className="hero-art"><div className="art-topline"><span>FIELD NOTES / 01</span><span>44°18′N 78°19′W</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="circuit circuit-a"><i /><i /><i /></div><div className="circuit circuit-b"><i /><i /></div><div className="art-core"><span>FCN</span><small>BUILD<br />WITH INTENT</small></div><div className="art-caption"><span>01—03</span><span>Curiosity meets craft</span></div></div>
    </section>
    <section aria-label="Career snapshot" className="signal-strip"><div className="signal-inner"><p><span>01</span> Full-stack development</p><p><span>02</span> Frontend development</p><p><span>03</span> API design, tests & CI</p><p><span>04</span> Electronics engineering background</p></div></section>
    <section className="home-preview section-wrap"><div><p className="section-kicker">Start here <span>/ Navigate the portfolio</span></p><h2>Experience across disciplines.<br /><em>A focus on useful software.</em></h2></div><div className="route-cards"><Link to="/work"><span>01 / PROJECTS</span><b>Selected projects</b><Arrow /></Link><Link to="/experience"><span>02 / EXPERIENCE</span><b>Career, education & recognition</b><Arrow /></Link><Link to="/about"><span>03 / ABOUT</span><b>The story behind the work</b><Arrow /></Link></div></section>
    <ContactBand />
  </>
}

function Work() {
  return <section className="section-wrap routed-page work-page">
    <PageIntro number="01" title={<>Selected projects <em>& experiments.</em></>} subtitle="Proof of practice" />
    <p className="page-lede">Selected public repositories, described from their READMEs. Each card links to the source so you can inspect the implementation and current scope.</p>
    <article className="featured-project"><div className="project-copy"><div className="project-label"><span className="project-index">01</span> FULL-STACK STARTER</div><h2>Avian Vet</h2><p>A clinic software starter for appointments and patient records, with a citation-grounded care information assistant. The README describes system boundaries, safety controls, and release gates. The assistant uses a local retrieval baseline with no external model configured; the product is neither clinically validated nor deployed.</p><div aria-label="Technologies used" className="tag-list"><span>React</span><span>TypeScript</span><span>FastAPI</span><span>MariaDB</span><span>Docker Compose</span><span>Terraform</span></div><a className="project-link" href="https://github.com/fcortesnila/avian-vet" rel="noreferrer" target="_blank">Review source, architecture & scope <Arrow /></a></div><PortfolioVisual /></article>
    <article className="mini-project"><div className="mini-project-visual" aria-hidden="true"><span>⌕</span><span>＋</span><span>✎</span><span>⌕</span><span>FC</span><span>✎</span><span>＋</span><span>FC</span><span>⌕</span></div><div className="mini-project-body"><p className="project-label"><span className="project-index">02</span> CONTACT MANAGEMENT DEMO</p><h2>Phone Book</h2><p>Search, add, edit, and delete contacts. The React frontend persists to localStorage; a separate FastAPI service uses SQLite. They are not connected, so their data does not sync. This is a local demo for synthetic data.</p><div aria-label="Technologies used" className="tag-list"><span>React</span><span>Vite</span><span>Tailwind CSS</span><span>FastAPI</span><span>SQLite</span></div><a className="project-link" href="https://github.com/fcortesnila/phone-book" rel="noreferrer" target="_blank">Review source & frontend/API scope <Arrow /></a></div></article>
    <article className="mini-project"><div className="mini-project-visual api-visual" aria-hidden="true"><span>GET</span><span>/</span><span>POST</span><span>API</span><span>→</span><span>UUID</span><span>JSON</span><span>✓</span><span>TEST</span></div><div className="mini-project-body"><p className="project-label"><span className="project-index">03</span> BACKEND API</p><h2>Basic Phone Directory API</h2><p>A FastAPI directory API with list, get, create, edit, and delete endpoints. The repo includes field validation, pytest coverage, Docker support, and a GitHub Actions workflow. Storage is in memory and resets on restart.</p><div aria-label="Technologies used" className="tag-list"><span>Python</span><span>FastAPI</span><span>pytest</span><span>Docker</span><span>GitHub Actions</span></div><a className="project-link" href="https://github.com/fcortesnila/basic-api" rel="noreferrer" target="_blank">View source on GitHub <Arrow /></a><a className="project-link secondary-project-link" href="https://github.com/fcortesnila/basic-api/actions/runs/40998575101" rel="noreferrer" target="_blank">View passing test run <Arrow /></a></div></article>
    <article className="mini-project"><div className="mini-project-visual" aria-hidden="true"><span className="game-x">×</span><span className="game-o">○</span><span className="game-x">×</span><span className="game-o">○</span><span /><span /><span /><span className="game-x">×</span><span className="game-o">○</span></div><div className="mini-project-body"><p className="project-label"><span className="project-index">04</span> EARLIER WEB EXPERIMENT</p><h2>Tic Tac Toe in Vue</h2><p>A small browser game built with Vue 3 and the Composition API. The profile also includes an earlier Java terminal version, showing practice across frameworks and interfaces.</p><div aria-label="Technologies used" className="tag-list"><span>Vue 3</span><span>JavaScript</span><span>Composition API</span></div><a className="project-link" href="https://github.com/fcortesnila/ticTacToc" rel="noreferrer" target="_blank">Explore Vue repository <Arrow /></a></div></article>
    <div className="project-note"><p className="section-kicker">Evidence <span>/ Public repositories</span></p><h2>Review the code. <em>See the scope.</em></h2><p>These projects show implementation practice, tests, and architectural thinking. Each card states its limits so you can assess what is built, what remains a starter, and what has not been deployed.</p><a className="text-link" href="https://github.com/fcortesnila?tab=repositories" rel="noreferrer" target="_blank">See all public repositories ↗</a></div>
  </section>
}

function PortfolioVisual() {
  return <div aria-label="Illustrative architecture diagram showing the Avian Vet web app, API, assistant, and database" className="project-visual portfolio-visual"><p className="system-map-label">AVIAN VET / SYSTEM MAP</p><div className="system-map"><span>React web app</span><i /><span>FastAPI</span><i /><span>MariaDB</span><b>Care information assistant</b></div><small>Illustrative architecture · see repository docs</small></div>
}

function Experience() {
  return <section className="routed-page experience-page"><div className="section-wrap"><PageIntro number="02" title={<>Different systems.<br /><em>One curious engineer.</em></>} subtitle="Career, education & recognition" /><p className="page-lede">A career spanning full-stack and frontend development, web content, electronics infrastructure, and operations—with an electronics engineering foundation.</p><div className="experience-list">
    <article className="experience-row"><div className="experience-number">01</div><div className="experience-company"><h2>RBC Wealth management</h2><p>Toronto</p></div><div className="experience-detail"><p>Full Stack Developer · Permanent, full-time</p><span>January 2025 — Present</span><p>Frontend Developer · Permanent, full-time</p><span>July 2022 — January 2025</span></div><Arrow /></article>
    <article className="experience-row"><div className="experience-number">02</div><div className="experience-company"><h2>WaveStar Networks Inc.</h2><p>Greater Toronto Area</p></div><div className="experience-detail"><p>Headend Technician · Permanent, full-time</p><span>March 2022 — July 2022</span></div><Arrow /></article>
    <article className="experience-row"><div className="experience-number">03</div><div className="experience-company"><h2>Shopify</h2><p>Greater Ottawa Metropolitan Area</p></div><div className="experience-detail"><p>Internal Operations</p><span>July 2017 — May 2019</span></div><Arrow /></article>
    <article className="experience-row"><div className="experience-number">04</div><div className="experience-company"><h2>Nordstrom</h2><p>Ottawa, Ontario</p></div><div className="experience-detail"><p>Food Specialist · Permanent, full-time</p><span>September 2016 — June 2017</span></div><Arrow /></article>
    </div><div className="education-card"><p className="section-kicker">Technical foundation <span>/ Education</span></p><div className="education-item"><h2>Durham College</h2><p>Electronics Engineering Technician · Electrical and Electronics Engineering · 2019–2021</p></div><div className="education-item"><h2>Universidad Tecnológica de la Mixteca</h2><p>Bachelor’s degree · Electronics Engineering · 2006–2012</p></div></div><div className="recognition-card"><p className="section-kicker">Recognition & learning <span>/ Selected credentials</span></p><p><strong>President’s Honour Roll, Durham College</strong> · Fall 2019, Winter 2020, Fall 2020, Winter 2021</p><p><strong>Build Web Apps with Vue JS 3 & Firebase</strong> · Udemy certificate, May 2021</p><p><strong>Associate Member</strong> · Ontario Association of Certified Engineering Technicians and Technologists (OACETT), May 2021</p></div><p className="profile-source"><a className="text-link" href="https://www.linkedin.com/in/fcortesnila/" rel="noreferrer" target="_blank">View the full LinkedIn profile <Arrow /></a></p></div></section>
}

function About() {
  return <section className="section-wrap routed-page about-page"><div className="about-aside"><PageIntro number="03" title={<>Hardware taught me to think in <em>systems.</em></>} subtitle="The through-line" /><div className="about-graphic" aria-hidden="true"><span>01</span><span>02</span><span>03</span><i /><i /><i /></div></div><div className="about-copy">
    <p>I’m an engineer drawn to the meeting point of electronic circuits and software systems. I want to build technology that simplifies everyday tasks and expands what people can do.</p>
    <p>My path runs from a Bachelor’s degree in Electronics Engineering at Universidad Tecnológica de la Mixteca in Mexico (2006–2012) to an Electronics Engineering Technician diploma at Durham College in Ontario (2019–2021), and into full-stack software development.</p>
    <p>I collaborate with scientists, business owners, developers, and technicians to design and deliver software and electronic systems around real requirements. I bring a detail-oriented, analytical approach, a strong work ethic, and an adaptable style to that work.</p>
    <p>My interests include programming, software systems, web development, electronics R&D, PCB design, and IoT. Outside work I follow space exploration and interplanetary missions, and research alternative agriculture. Long term, I hope to contribute to sustainable spacecraft design.</p>
    <div className="profile-focus"><p className="section-kicker">Professional focus <span>/ LinkedIn</span></p><div className="focus-tags"><span>Full-stack development</span><span>AI-assisted engineering</span><span>JavaScript</span><span>Node.js</span><span>Microsoft Entra ID</span><span>CI/CD</span><span>PCB design</span><span>IoT</span></div></div>
    <div className="about-values"><span><b>01</b> Learn the real problem</span><span><b>02</b> Make the system clear</span><span><b>03</b> Ship with care</span></div></div></section>
}

function Contact() {
  return <section className="section-wrap routed-page contact-page"><p className="section-kicker">Contact <span>/ Roles & collaboration</span></p><h1>Let’s talk about<br /><em>your next software challenge.</em></h1><p className="page-lede">I’m interested in full-stack and frontend opportunities involving JavaScript, Node.js, APIs, and thoughtful systems design. Send a note about the role, team, or project.</p><a className="button button-primary" href="mailto:fcortesnila@gmail.com?subject=Full-stack%20software%20opportunity">Email me about a role <Arrow /></a><div className="social-links"><a href="https://www.linkedin.com/in/fcortesnila/" rel="noreferrer" target="_blank">LinkedIn <Arrow /></a><a href="https://github.com/fcortesnila" rel="noreferrer" target="_blank">GitHub <Arrow /></a></div></section>
}

function ContactBand() {
  return <section className="contact-band"><div className="section-wrap contact-band-inner"><div><p className="section-kicker">Next step <span>/ Full-stack & frontend roles</span></p><h2>Looking for a developer<br />with a <em>systems mindset?</em></h2><p className="contact-band-copy">Let’s talk about the role, team, or product you’re building.</p></div><Link className="button button-light" to="/contact">Discuss a role <Arrow /></Link></div></section>
}

function NotFound() {
  return <section className="section-wrap routed-page contact-page"><p className="section-kicker">404 <span>/ Page not found</span></p><h1>That route isn’t <em>here.</em></h1><Link className="button button-primary" to="/">Return home <Arrow /></Link></section>
}

function App() {
  return <HashRouter><Layout /></HashRouter>
}

export default App
