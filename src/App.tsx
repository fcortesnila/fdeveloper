import { useEffect, useState, type ReactNode } from 'react'
import { HashRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router'
import './App.css'

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" /></svg>
}

const navItems = [
  { label: 'Work', to: '/work' },
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
        <Link className="wordmark" to="/" aria-label="Fernando Cortes Nila, home" onClick={() => setMenuOpen(false)}>
          <span className="wordmark-mark">FC</span><span>Fernando Cortes Nila</span>
        </Link>
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
        <Link className="wordmark" to="/"><span className="wordmark-mark">FC</span><span>Fernando Cortes Nila</span></Link>
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
        <Eyebrow>Full-stack software developer</Eyebrow>
        <h1>I build useful software, <em>from idea to interface.</em></h1>
        <p className="hero-intro">I’m Fernando, a developer with experience at RBC Wealth Management and Shopify. My electronics background gives me a systems-minded approach to solving problems across software and hardware.</p>
        <div className="hero-actions"><Link className="button button-primary" to="/work">Explore my work <Arrow /></Link><Link className="text-link" to="/contact">Let’s connect <span>↗</span></Link></div>
        <div className="hero-meta"><span className="location-icon">⌖</span><span>Peterborough, Ontario, Canada</span><span className="meta-divider" /><span>Software · Systems · Electronics</span></div>
      </div>
      <div aria-label="A visual motif inspired by software and circuit diagrams" className="hero-art"><div className="art-topline"><span>FIELD NOTES / 01</span><span>44°18′N 78°19′W</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="circuit circuit-a"><i /><i /><i /></div><div className="circuit circuit-b"><i /><i /></div><div className="art-core"><span>FCN</span><small>BUILD<br />WITH INTENT</small></div><div className="art-caption"><span>01—03</span><span>Curiosity meets craft</span></div></div>
    </section>
    <section aria-label="Career snapshot" className="signal-strip"><div className="signal-inner"><p><span>01</span> Full-stack development</p><p><span>02</span> Web development & content</p><p><span>03</span> Electronics engineering</p><p><span>04</span> Cross-functional experience</p></div></section>
    <section className="home-preview section-wrap"><div><p className="section-kicker">Start here <span>/ Navigate the portfolio</span></p><h2>Experience across disciplines.<br /><em>A focus on useful software.</em></h2></div><div className="route-cards"><Link to="/work"><span>01 / WORK</span><b>Selected projects</b><Arrow /></Link><Link to="/experience"><span>02 / EXPERIENCE</span><b>Roles & education</b><Arrow /></Link><Link to="/about"><span>03 / ABOUT</span><b>The story behind the work</b><Arrow /></Link></div></section>
    <ContactBand />
  </>
}

function Work() {
  return <section className="section-wrap routed-page work-page">
    <PageIntro number="01" title={<>Selected work <em>& experiments.</em></>} subtitle="Proof of practice" />
    <p className="page-lede">A growing collection of software work. Each project is presented with its purpose, implementation, and the decisions behind it.</p>
    <article className="featured-project"><div className="project-copy"><div className="project-label"><span className="project-index">01</span> IN PROGRESS</div><h2>Portfolio, rebuilt with purpose.</h2><p>A new home for my work and engineering story—designed to make the projects, experience, and craft easier to explore.</p><div aria-label="Technologies used" className="tag-list"><span>React</span><span>TypeScript</span><span>Vite</span><span>Tailwind CSS</span></div><a className="project-link" href="https://github.com/fcortesnila/fdeveloper" rel="noreferrer" target="_blank">View source on GitHub <Arrow /></a></div><PortfolioVisual /></article>
    <article className="mini-project"><div className="mini-project-visual" aria-hidden="true"><span className="game-x">×</span><span className="game-o">○</span><span className="game-x">×</span><span className="game-o">○</span><span /><span /><span /><span className="game-x">×</span><span className="game-o">○</span></div><div className="mini-project-body"><p className="project-label"><span className="project-index">02</span> INTERACTIVE WEB PROJECT</p><h2>Tic Tac Toe</h2><p>A compact browser game featured on my earlier portfolio. A small project with a clear, familiar interaction.</p><a className="project-link" href="https://fcortesnila.com/showcases" rel="noreferrer" target="_blank">View live project <Arrow /></a></div></article>
    <div className="project-note"><p className="section-kicker">Next up <span>/ Case studies</span></p><h2>More context. <em>More proof.</em></h2><p>I’m preparing detailed case studies that explain the problem, my contribution, technical choices, and outcomes—without sharing confidential work.</p><Link className="text-link" to="/contact">Ask me about my work ↗</Link></div>
  </section>
}

function PortfolioVisual() {
  return <div aria-hidden="true" className="project-visual portfolio-visual"><div className="browser-bar"><span /><span /><span /><b>fcortesnila.com</b></div><div className="visual-content"><div className="visual-sidebar"><i /><i /><i /><i /></div><div className="visual-main"><div className="visual-kicker" /><div className="visual-title" /><div className="visual-line" /><div className="visual-line short" /><div className="visual-cta" /><div className="visual-card"><span /><span /><span /></div></div></div><div className="visual-stamp">DESIGNED<br />TO BE USEFUL</div></div>
}

function Experience() {
  return <section className="routed-page experience-page"><div className="section-wrap"><PageIntro number="02" title={<>Different systems.<br /><em>One curious engineer.</em></>} subtitle="Selected roles" /><p className="page-lede">Experience across financial services, e-commerce, and electronics—shaped by collaboration with developers, business partners, scientists, and technicians.</p><div className="experience-list"><article className="experience-row"><div className="experience-number">01</div><div className="experience-company"><h2>RBC Wealth Management</h2><p>Financial services</p></div><div className="experience-detail"><p>Full Stack Developer · Web Developer · Web Content Developer</p><span>Experience across software development and web content.</span></div><Arrow /></article><article className="experience-row"><div className="experience-number">02</div><div className="experience-company"><h2>Shopify</h2><p>E-commerce</p></div><div className="experience-detail"><p>Internal Operations</p><span>Experience supporting the operations of a global commerce platform.</span></div><Arrow /></article></div><div className="education-card"><p className="section-kicker">Technical foundation <span>/ Education</span></p><p>Electronics engineering education at Durham College in Ontario and Universidad Tecnológica de la Mixteca in Mexico.</p><Link className="text-link" to="/about">More about my background <span>↗</span></Link></div></div></section>
}

function About() {
  return <section className="section-wrap routed-page about-page"><div className="about-aside"><PageIntro number="03" title={<>Hardware taught me to think in <em>systems.</em></>} subtitle="The through-line" /><div className="about-graphic" aria-hidden="true"><span>01</span><span>02</span><span>03</span><i /><i /><i /></div></div><div className="about-copy"><p>I studied electronics in Mexico and Ontario, where a natural curiosity about how things work grew into a career spanning circuits, web experiences, and software.</p><p>I enjoy making complex requirements understandable and turning them into practical solutions. I’ve worked with people across technical and business roles, in person and remotely.</p><p>Today, I’m focused on full-stack software development and building a portfolio that shows the care behind the work. Outside work, I’m drawn to space exploration, interplanetary missions, and sustainable technology.</p><div className="about-values"><span><b>01</b> Learn the real problem</span><span><b>02</b> Make the system clear</span><span><b>03</b> Ship with care</span></div></div><ContactBand /></section>
}

function Contact() {
  return <section className="section-wrap routed-page contact-page"><p className="section-kicker">Contact <span>/ Start a conversation</span></p><h1>Have a good problem<br />to work on? <em>Let’s talk.</em></h1><p className="page-lede">For conversations about full-stack development, software teams, or interesting technical challenges.</p><a className="button button-primary" href="mailto:fcortesnila@gmail.com">Email Fernando <Arrow /></a><div className="social-links"><a href="https://www.linkedin.com/in/fcortesnila/" rel="noreferrer" target="_blank">LinkedIn <Arrow /></a><a href="https://github.com/fcortesnila" rel="noreferrer" target="_blank">GitHub <Arrow /></a></div></section>
}

function ContactBand() {
  return <section className="contact-band"><div className="section-wrap contact-band-inner"><div><p className="section-kicker">Contact <span>/ Start a conversation</span></p><h2>Have a good problem<br />to work on? <em>Let’s talk.</em></h2></div><Link className="button button-light" to="/contact">Get in touch <Arrow /></Link></div></section>
}

function NotFound() {
  return <section className="section-wrap routed-page contact-page"><p className="section-kicker">404 <span>/ Page not found</span></p><h1>That route isn’t <em>here.</em></h1><Link className="button button-primary" to="/">Return home <Arrow /></Link></section>
}

function App() {
  return <HashRouter><Layout /></HashRouter>
}

export default App
