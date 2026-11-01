import { Link } from 'react-router'
import Arrow from '../components/Arrow'
import ContactBand from '../components/ContactBand'
import Eyebrow from '../components/Eyebrow'

function HomePage() {
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

export default HomePage
