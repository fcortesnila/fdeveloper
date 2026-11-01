import { Fragment } from 'react'
import Arrow from '../components/Arrow'
import PageIntro from '../components/PageIntro'
import { education, experience, recognition } from '../data/experience'

function ExperiencePage() {
  return <section className="routed-page experience-page"><div className="section-wrap"><PageIntro number="02" title={<>Different systems.<br /><em>One curious engineer.</em></>} subtitle="Career, education & recognition" /><p className="page-lede">A career spanning full-stack and frontend development, web content, electronics infrastructure, and operations—with an electronics engineering foundation.</p><div className="experience-list">
    {experience.map((item) => (
      <article className="experience-row" key={item.number}>
        <div className="experience-number">{item.number}</div>
        <div className="experience-company"><h2>{item.company}</h2><p>{item.location}</p></div>
        <div className="experience-detail">{item.roles.map((role) => <Fragment key={role.title}><p>{role.title}</p><span>{role.period}</span></Fragment>)}</div>
        <Arrow />
      </article>
    ))}
    </div><div className="education-card"><p className="section-kicker">Technical foundation <span>/ Education</span></p>{education.map((item) => <div className="education-item" key={item.institution}><h2>{item.institution}</h2><p>{item.details}</p></div>)}</div><div className="recognition-card"><p className="section-kicker">Recognition & learning <span>/ Selected credentials</span></p>{recognition.map((item) => <p key={item.title}><strong>{item.title}</strong> · {item.details}</p>)}</div><p className="profile-source"><a className="text-link" href="https://www.linkedin.com/in/fcortesnila/" rel="noreferrer" target="_blank">View the full LinkedIn profile <Arrow /></a></p></div></section>
}

export default ExperiencePage
