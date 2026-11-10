import PageIntro from '../components/PageIntro'

function AboutPage() {
  return (
    <section className="section-wrap routed-page about-page">
      <div className="about-aside">
        <PageIntro number="03" title={<>Hardware taught me to think in <em>systems.</em></>} subtitle="The through-line" />
        <figure className="about-method">
          <pre aria-label="ASCII illustration connecting electronics engineering to full-stack software and verification" className="about-graphic" role="img">{`       .- ELECTRONICS -.
      (  o  )---.
       '---'     \\  CIRCUIT
                  \\   |
                   v  v
       .--------.  .--------.
       | FRONT  |->|  API   |
       '---+----'  '---+----'
           |           |
           '-----. .---'
                 v v
              .------.
              | DATA |
              '---+--'
                  |
       .----------v-----------.
       | TEST / TRACE / VERIFY|
       '----------------------'

          [ SYSTEMS THINKING ]`}</pre>
          <figcaption>Understand the system, clarify requirements, then verify the result.</figcaption>
        </figure>
      </div>
      <div className="about-copy">
        <p className="about-lead">When a feature crosses an interface, an API, and stored data, I trace how those pieces work together before changing one.</p>

        <section>
          <h2>From engineering to software</h2>
          <p>I’m a full-stack developer, after more than two years in frontend development. I hold a bachelor’s degree in Electronics Engineering from Universidad Tecnológica de la Mixteca in Mexico and an Electronics Engineering Technician diploma from Durham College in Ontario.</p>
        </section>

        <section>
          <h2>Building and checking real examples</h2>
          <p>In Avian Vet, the care-information assistant uses local retrieval, has no external model configured, and is neither clinically validated nor deployed. I documented those limits to make clear what the starter demonstrates—and what it does not.</p>
          <p>For personal projects, I use AI-assisted tools, then review changes and verify behavior myself.</p>
        </section>

        <div className="profile-focus">
          <p className="section-kicker">Professional focus <span>/ <a href="https://www.linkedin.com/in/fcortesnila/" rel="noreferrer" target="_blank">LinkedIn</a></span></p>
          <div className="focus-tags"><span>Full-stack development</span><span>JavaScript</span><span>Node.js</span><span>APIs</span><span>CI/CD</span><span>Microsoft Entra ID</span></div>
        </div>

        <section className="about-interests">
          <h2>Beyond software</h2>
          <p>I follow space exploration and sustainable technology—fields where working within real-world constraints makes good systems matter.</p>
        </section>

        <div aria-label="My approach" className="about-values"><span><b>01</b> Understand the system</span><span><b>02</b> Clarify requirements</span><span><b>03</b> Verify the result</span></div>
      </div>
    </section>
  )
}

export default AboutPage
