import Arrow from '../components/Arrow'
import FeaturedProjectVisual from '../components/FeaturedProjectVisual'
import PageIntro from '../components/PageIntro'
import ProjectVisual from '../components/ProjectVisual'
import { featuredProject, projects } from '../data/projects'

function WorkPage() {
  return <section className="section-wrap routed-page work-page">
    <PageIntro number="01" title={<>Selected projects <em>& experiments.</em></>} subtitle="Proof of practice" />
    <p className="page-lede">Selected public repositories, described from their READMEs. Each card links to the source so you can inspect the implementation and current scope.</p>
    <article className="featured-project">
      <div className="project-copy">
        <div className="project-label"><span className="project-index">{featuredProject.number}</span> {featuredProject.category}</div>
        <h2>{featuredProject.title}</h2>
        <p>{featuredProject.description}</p>
        <div aria-label="Technologies used" className="tag-list">{featuredProject.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        {featuredProject.links.map((link) => <a className="project-link" href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} <Arrow /></a>)}
      </div>
      <FeaturedProjectVisual />
    </article>
    {projects.map((project) => (
      <article className="mini-project" key={project.number}>
        <ProjectVisual type={project.visual} />
        <div className="mini-project-body">
          <p className="project-label"><span className="project-index">{project.number}</span> {project.category}</p>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div aria-label="Technologies used" className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          {project.links.map((link) => <a className={`project-link${link.secondary ? ' secondary-project-link' : ''}`} href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} <Arrow /></a>)}
        </div>
      </article>
    ))}
    <div className="project-note"><p className="section-kicker">Evidence <span>/ Public repositories</span></p><h2>Review the code. <em>See the scope.</em></h2><p>These projects show implementation practice, tests, and architectural thinking. Each card states its limits so you can assess what is built, what remains a starter, and what has not been deployed.</p><a className="text-link" href="https://github.com/fcortesnila?tab=repositories" rel="noreferrer" target="_blank">See all public repositories ↗</a></div>
  </section>
}

export default WorkPage
