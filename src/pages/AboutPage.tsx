import PageIntro from '../components/PageIntro'

function AboutPage() {
  return <section className="section-wrap routed-page about-page"><div className="about-aside"><PageIntro number="03" title={<>Hardware taught me to think in <em>systems.</em></>} subtitle="The through-line" /><div className="about-graphic" aria-hidden="true"><span>01</span><span>02</span><span>03</span><i /><i /><i /></div></div><div className="about-copy">
    <p>I’m a full-stack software developer at RBC Wealth Management, with more than two years of prior frontend experience. I build software across the stack, working with JavaScript, Node.js, APIs, CI/CD, and Microsoft Entra ID.</p>
    <p>My background in electronics engineering shaped how I approach software: understand the system, clarify the real requirements, and verify that the result works. I hold a bachelor’s degree in Electronics Engineering from Universidad Tecnológica de la Mixteca in Mexico and an Electronics Engineering Technician diploma from Durham College in Ontario.</p>
    <p>In my personal projects, I use OpenAI Codex to explore code, plan and implement changes, review diffs, and validate behavior. I take responsibility for checking the work and making sure it does what it should.</p>
    <p>I’m interested in useful software, thoughtful system design, and the ways technology can make everyday work easier. Outside of work, I follow space exploration and sustainable technology.</p>
    <div className="profile-focus"><p className="section-kicker">Professional focus <span>/ LinkedIn</span></p><div className="focus-tags"><span>Full-stack development</span><span>JavaScript</span><span>Node.js</span><span>APIs</span><span>CI/CD</span><span>Microsoft Entra ID</span><span>Electronics engineering</span><span>OpenAI Codex</span></div></div>
    <div className="about-values"><span><b>01</b> Understand the system</span><span><b>02</b> Clarify requirements</span><span><b>03</b> Verify the result</span></div>
  </div></section>
}

export default AboutPage
