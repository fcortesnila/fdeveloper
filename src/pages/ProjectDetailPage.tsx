import { Link, useParams } from 'react-router'
import Arrow from '../components/Arrow'
import FeaturedProjectVisual from '../components/FeaturedProjectVisual'
import ProjectVisual from '../components/ProjectVisual'
import { featuredProject, projects } from '../data/projects'
import NotFoundPage from './NotFoundPage'

const projectEntries = [featuredProject, ...projects]

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projectEntries.find((entry) => entry.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <section className="section-wrap routed-page project-detail-page">
      <Link className="project-backlink" to="/projects">← All projects</Link>
      <header className="project-detail-header">
        <p className="project-label"><span className="project-index">{project.number}</span> {project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-intro">{project.description}</p>
        <div aria-label="Technologies used" className="tag-list">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </header>

      <div className="project-detail-grid">
        <article className="project-article">
          <div className="project-detail-visual">
            {project.visual === 'architecture'
              ? <FeaturedProjectVisual />
              : <ProjectVisual type={project.visual} />}
          </div>
          <div className="project-article-copy">
            {project.details.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <div className="project-article-links">
              {project.links.map((link) => (
                <a className="project-link" href={link.href} key={link.href} rel="noreferrer" target="_blank">
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>
        </article>

        <aside aria-label="Project details" className="project-detail-aside">
          <p className="section-kicker">Project notes <span>/ {project.number}</span></p>
          <p className="project-detail-category">{project.category}</p>
          <h2>Built with</h2>
          <ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          {project.links.map((link) => (
            <a className="project-link" href={link.href} key={link.href} rel="noreferrer" target="_blank">
              {link.label} <Arrow />
            </a>
          ))}
        </aside>
      </div>
    </section>
  )
}

export default ProjectDetailPage
