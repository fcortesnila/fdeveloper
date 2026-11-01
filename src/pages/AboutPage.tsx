import PageIntro from '../components/PageIntro'

function AboutPage() {
  return <section className="section-wrap routed-page about-page"><div className="about-aside"><PageIntro number="03" title={<>Hardware taught me to think in <em>systems.</em></>} subtitle="The through-line" /><div className="about-graphic" aria-hidden="true"><span>01</span><span>02</span><span>03</span><i /><i /><i /></div></div><div className="about-copy">
    <p>I’m an engineer drawn to the meeting point of electronic circuits and software systems. I want to build technology that simplifies everyday tasks and expands what people can do.</p>
    <p>My path runs from a Bachelor’s degree in Electronics Engineering at Universidad Tecnológica de la Mixteca in Mexico (2006–2012) to an Electronics Engineering Technician diploma at Durham College in Ontario (2019–2021), and into full-stack software development.</p>
    <p>I collaborate with scientists, business owners, developers, and technicians to design and deliver software and electronic systems around real requirements. I bring a detail-oriented, analytical approach, a strong work ethic, and an adaptable style to that work.</p>
    <p>My interests include programming, software systems, web development, electronics R&D, PCB design, and IoT. Outside work I follow space exploration and interplanetary missions, and research alternative agriculture. Long term, I hope to contribute to sustainable spacecraft design.</p>
    <div className="profile-focus"><p className="section-kicker">Professional focus <span>/ LinkedIn</span></p><div className="focus-tags"><span>Full-stack development</span><span>AI-assisted engineering</span><span>JavaScript</span><span>Node.js</span><span>Microsoft Entra ID</span><span>CI/CD</span><span>PCB design</span><span>IoT</span></div></div>
    <div className="about-values"><span><b>01</b> Learn the real problem</span><span><b>02</b> Make the system clear</span><span><b>03</b> Ship with care</span></div></div></section>
}

export default AboutPage
