import { Link } from 'react-router'
import Arrow from '../components/Arrow'
import ContactBand from '../components/ContactBand'
import Eyebrow from '../components/Eyebrow'
import { featuredProject } from '../data/projects'

function HomePage() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <Eyebrow>Full-stack developer · JavaScript & Node · AI-assisted engineering</Eyebrow>
        <h1>Full-stack software, <em>with an engineer’s eye for systems.</em></h1>
        <p className="hero-intro">I’m a Full Stack Developer at a wealth management institution, following more than two years as a Frontend Developer there. Electronics engineering training and public projects across React, Vue, and Python inform how I approach software from interface to API.</p>
        <Link aria-label={`Explore featured project: ${featuredProject.title}`} className="featured-project-entry" to={`/projects/${featuredProject.slug}`}>
          <span className="featured-project-entry-label">Featured project</span>
          <strong>{featuredProject.title}</strong>
          <span className="featured-project-entry-summary">Clinic workflows with a cited care-information assistant</span>
          <Arrow />
        </Link>
        <div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <Arrow /></Link><Link className="text-link" to="/contact">Let’s connect <span>↗</span></Link></div>
        <div className="hero-meta"><span>Software · Systems · Electronics</span></div>
      </div>
      <div aria-label="PCB-inspired circuit board with a central microcontroller, component pads, and routed traces" className="hero-art" role="img">
        <div className="art-topline"><span>PCB STUDY / 01</span><span>SIGNALS / SYSTEMS</span></div>
        <svg aria-hidden="true" className="hero-pcb" viewBox="0 0 600 520">
          <rect className="pcb-outline" height="418" rx="18" width="520" x="40" y="50" />
          <path className="pcb-trace" d="M200 180h5m-5 10h5m-5 10h5m-5 10h5m190-30h5m-5 10h5m-5 10h5m-5 10h5M200 278h5m-5 10h5m-5 10h5m-5 10h5m190-30h5m-5 10h5m-5 10h5m-5 10h5" />
          <path className="pcb-trace" d="M122 124v22H62v32h8M490 101v45h-84v32h6M156 130h28v-22h98V96h82v-8M300 341v53h-90v26M530 298h16v83h-58M70 298H54v43" />
          <path className="pcb-trace pcb-trace-accent" d="M156 130h-32M382 88h28M210 402v18M444 130h34M110 341h-18" />
          <g className="pcb-pad"><circle cx="90" cy="130" r="9" /><circle cx="184" cy="108" r="4" /><circle cx="184" cy="170" r="4" /><circle cx="448" cy="170" r="4" /><circle cx="448" cy="146" r="4" /><circle cx="510" cy="130" r="9" /><circle cx="488" cy="381" r="4" /><circle cx="210" cy="420" r="9" /><circle cx="410" cy="88" r="9" /></g>
          <g className="pcb-component">
            <rect height="42" rx="4" width="72" x="86" y="82" />
            <path d="M98 82V72m12 10V72m12 10V72m12 10V72m12 10V72m12 10V72" />
            <text x="104" y="108">R1</text>
          </g>
          <g className="pcb-component pcb-capacitor">
            <path d="M470 101h40m-30-10v20m20-20v20" />
            <text x="480" y="82">C1</text>
          </g>
          <g className="pcb-dev-module">
            <text className="module-name" textAnchor="middle" x="132" y="165">FRONTEND</text>
            <rect className="module-body" height="38" rx="4" width="112" x="76" y="173" />
            <path className="module-pin" d="M70 180h6m-6 10h6m-6 10h6m-6 10h6m112-30h12m-12 10h12m-12 10h12m-12 10h12" />
            <text className="module-id" textAnchor="middle" x="132" y="198">U2</text>
          </g>
          <g className="pcb-dev-module">
            <text className="module-name" textAnchor="middle" x="132" y="263">DATA</text>
            <rect className="module-body" height="38" rx="4" width="112" x="76" y="271" />
            <path className="module-pin" d="M70 278h6m-6 10h6m-6 10h6m-6 10h6m112-30h12m-12 10h12m-12 10h12m-12 10h12" />
            <text className="module-id" textAnchor="middle" x="132" y="296">U3</text>
          </g>
          <g className="pcb-component pcb-connector">
            <rect height="38" rx="3" width="36" x="48" y="341" />
            <path d="M84 348h8m-8 12h8m-8 12h8" />
            <text x="54" y="365">J1</text>
          </g>
          <g className="pcb-dev-module">
            <text className="module-name" textAnchor="middle" x="468" y="165">API</text>
            <rect className="module-body" height="38" rx="4" width="112" x="412" y="173" />
            <path className="module-pin" d="M400 180h12m-12 10h12m-12 10h12m-12 10h12m112-30h6m-6 10h6m-6 10h6m-6 10h6" />
            <text className="module-id" textAnchor="middle" x="468" y="198">U4</text>
          </g>
          <g className="pcb-dev-module">
            <text className="module-name" textAnchor="middle" x="468" y="263">TESTS</text>
            <rect className="module-body" height="38" rx="4" width="112" x="412" y="271" />
            <path className="module-pin" d="M400 278h12m-12 10h12m-12 10h12m-12 10h12m112-30h6m-6 10h6m-6 10h6m-6 10h6" />
            <text className="module-id" textAnchor="middle" x="468" y="296">U5</text>
          </g>
          <g className="pcb-chip">
            <rect className="chip-body" height="172" rx="10" width="160" x="220" y="154" />
            <rect className="chip-inset" height="118" rx="4" width="108" x="246" y="181" />
            <path className="chip-pin" d="M240 139v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15M240 326v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15m20-15v15M205 180h15m-15 10h15m-15 10h15m-15 10h15m-15 20h15m-15 20h15m-15 28h15m-15 10h15m-15 10h15m-15 10h15M380 180h15m-15 10h15m-15 10h15m-15 10h15m-15 20h15m-15 20h15m-15 28h15m-15 10h15m-15 10h15m-15 10h15" />
            <text className="chip-mark" textAnchor="middle" x="300" y="230">FCN</text>
            <text className="chip-label" textAnchor="middle" x="300" y="256">FULL-STACK</text>
            <circle className="chip-pin-one" cx="350" cy="181" r="4" />
          </g>
          <g className="pcb-component pcb-led">
            <circle cx="488" cy="398" r="17" />
            <circle className="led-core" cx="488" cy="398" r="6" />
            <text x="465" y="432">D1</text>
          </g>
          <g className="pcb-screw-holes"><circle cx="66" cy="76" r="7" /><circle cx="534" cy="76" r="7" /><circle cx="66" cy="442" r="7" /><circle cx="534" cy="442" r="7" /></g>
        </svg>
        <div className="art-caption"><span>TRACE / ROUTE / CONNECT</span><span>Electronics engineering</span></div>
      </div>
    </section>
    <section aria-label="Career snapshot" className="signal-strip"><div className="signal-inner"><p><span>01</span> Full-stack development</p><p><span>02</span> Frontend development</p><p><span>03</span> API design, tests & CI</p><p><span>04</span> Electronics engineering background</p></div></section>
    <section className="home-preview section-wrap"><div><p className="section-kicker">Start here <span>/ Navigate the portfolio</span></p><h2>Experience across disciplines.<br /><em>A focus on useful software.</em></h2></div><div className="route-cards"><Link to="/projects"><span>01 / PROJECTS</span><b>Selected projects</b><Arrow /></Link><Link to="/experience"><span>02 / EXPERIENCE</span><b>Career, education & recognition</b><Arrow /></Link><Link to="/about"><span>03 / ABOUT</span><b>The story behind the work</b><Arrow /></Link></div></section>
    <ContactBand />
  </>
}

export default HomePage
