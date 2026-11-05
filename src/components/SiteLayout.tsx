import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import Arrow from './Arrow'
import BrandLogo from './BrandLogo'
import { featuredProject, projects } from '../data/projects'

const navigationItems = [
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'About', to: '/about' },
]

const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/projects': 'Projects',
  '/experience': 'experience',
  '/about': 'about',
  '/contact': 'contact',
}

const currentYear = new Date().getFullYear()

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    const projectSlug = location.pathname.startsWith('/projects/') ? location.pathname.slice('/projects/'.length) : ''
    const project = [featuredProject, ...projects].find((entry) => entry.slug === projectSlug)
    const routeName = routeTitles[location.pathname] ?? project?.title ?? location.pathname.slice(1)
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
          {navigationItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
          <NavLink className={({ isActive }) => `nav-contact${isActive ? ' active' : ''}`} to="/contact" onClick={() => setMenuOpen(false)}>Get in touch <Arrow /></NavLink>
        </nav>
      </header>

      <main id="top"><Outlet /></main>

      <footer className="site-footer">
        <Link className="wordmark" to="/" aria-label="Fernando Cortes Nila, home"><BrandLogo /></Link>
        <p>Made with curiosity and care. <span>© {currentYear}</span></p>
        <Link to="/" className="back-to-top">Back to home ↑</Link>
      </footer>
    </div>
  )
}

export default SiteLayout
