import type { ReactNode } from 'react'

type PageIntroProps = {
  number: string
  title: ReactNode
  subtitle: string
}

function PageIntro({ number, title, subtitle }: PageIntroProps) {
  return <div className="page-intro"><p className="section-kicker">{number} <span>/ {subtitle}</span></p><h1>{title}</h1></div>
}

export default PageIntro
