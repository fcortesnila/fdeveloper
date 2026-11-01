import { Link } from 'react-router'
import Arrow from './Arrow'

function ContactBand() {
  return <section className="contact-band"><div className="section-wrap contact-band-inner"><div><p className="section-kicker">Next step <span>/ Full-stack & frontend roles</span></p><h2>Looking for a developer<br />with a <em>systems mindset?</em></h2><p className="contact-band-copy">Let’s talk about the role, team, or product you’re building.</p></div><Link className="button button-light" to="/contact">Discuss a role <Arrow /></Link></div></section>
}

export default ContactBand
