import type { ProjectVisualType } from '../data/projects'

const visualContent: Record<Exclude<ProjectVisualType, 'scoop'>, { className: string; cells: { text: string; className?: string }[] }> = {
  contacts: {
    className: 'mini-project-visual',
    cells: [
      { text: '⌕' }, { text: '＋' }, { text: '✎' }, { text: '⌕' },
      { text: 'FC' }, { text: '✎' }, { text: '＋' }, { text: 'FC' }, { text: '⌕' },
    ],
  },
  api: {
    className: 'mini-project-visual api-visual',
    cells: [
      { text: 'GET' }, { text: '/' }, { text: 'POST' }, { text: 'API' }, { text: '→' },
      { text: 'UUID' }, { text: 'JSON' }, { text: '✓' }, { text: 'TEST' },
    ],
  },
  game: {
    className: 'mini-project-visual',
    cells: [
      { text: '×', className: 'game-x' }, { text: '○', className: 'game-o' },
      { text: '×', className: 'game-x' }, { text: '○', className: 'game-o' },
      { text: '' }, { text: '' }, { text: '' },
      { text: '×', className: 'game-x' }, { text: '○', className: 'game-o' },
    ],
  },
  rag: {
    className: 'mini-project-visual rag-visual',
    cells: [
      { text: 'TEXT' }, { text: 'EMBED' }, { text: 'CHUNKS' },
      { text: 'INGEST' }, { text: 'VECTOR' }, { text: 'CHROMA' },
      { text: 'QUERY' }, { text: 'TOP-K' }, { text: 'SOURCES' },
    ],
  },
}

function ProjectVisual({ type }: { type: Exclude<ProjectVisualType, 'architecture'> }) {
  if (type === 'scoop') {
    return (
      <div aria-label="ASCII ice cream truck in a Matrix-inspired code scene" className="mini-project-visual scoop-visual" role="img">
        <pre>{`  1 0 1 0 1 0 1 0 1 0 1 0
  | | | | | | | | | | | |
  v v v v v v v v v v v v

       .----------------.
  ____/   SCOOP   /|____|\\
 /  ICE CREAM   / | [] | \\
/______________/__|____|__\\
| [01] [10]       MENU    |
|_________________________|
     O                O

  01010011 01000011 01001111 01001111 01010000`}</pre>
      </div>
    )
  }

  const visual = visualContent[type]

  return (
    <div aria-hidden="true" className={visual.className}>
      {visual.cells.map((cell, index) => <span className={cell.className} key={`${cell.text}-${index}`}>{cell.text}</span>)}
    </div>
  )
}

export default ProjectVisual
