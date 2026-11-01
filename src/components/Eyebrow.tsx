import type { ReactNode } from 'react'

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow"><span className="status-dot" />{children}</p>
}

export default Eyebrow
