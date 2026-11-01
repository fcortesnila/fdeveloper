import { Link } from 'react-router'
import Arrow from '../components/Arrow'

function NotFoundPage() {
  return <section className="section-wrap routed-page contact-page"><p className="section-kicker">404 <span>/ Page not found</span></p><h1>That route isn’t <em>here.</em></h1><Link className="button button-primary" to="/">Return home <Arrow /></Link></section>
}

export default NotFoundPage
