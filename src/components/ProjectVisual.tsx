import type { ProjectVisualType } from '../data/projects'

const visualContent: Record<ProjectVisualType, { label: string; art: string }> = {
  contacts: {
    label: 'ASCII illustration of a contact book app',
    art: `  0101 0010 0101 0010 0101
      .-------------.
     /  CONTACTS   /|
    /-------------/ |
    |  +---------+ | |
    |  |  o  FC  | | |
    |  |  o  JD  | | /
    |  +---------+ |/
    '-------------'
     SEARCH / EDIT`,
  },
  api: {
    label: 'ASCII illustration of a phone directory API',
    art: `  0101 0100 0101 0100 0101
      .-----------.
      | DIRECTORY |
      +-----------+
      | GET    /  |----.
      | POST  /+  |--. |
      | PATCH /id |  | |
      | DELETE/id |  | |
      '-----------'  | |
       .-------------' |
       '---------------'
       JSON / TEST / API`,
  },
  game: {
    label: 'ASCII illustration of a Tic Tac Toe game',
    art: `  0101 0011 0101 0011 0101
       TIC TAC TOE
      .---+---+---.
      | X | O | X |
      +---+---+---+
      | O | X |   |
      +---+---+---+
      |   | O | X |
      '---+---+---'
       VUE / PLAY`,
  },
  rag: {
    label: 'ASCII illustration of document retrieval and grounded answers',
    art: `  0101 0010 0101 0010 0101
       .--------.       .------.
      / DOCUMENT/|      |VECTOR|
     /--------/ |      '---+--'
     | chunk  | |          |
     | chunk  | /       .--v---.
     '--------'        | TOP-K |
          '----------->'---+---'
                          |
                    .-----v-----.
                    | GROUNDED  |
                    |  ANSWER   |
                    '-----------'`,
  },
  scoop: {
    label: 'ASCII ice cream truck in a Matrix-inspired code scene',
    art: `  1 0 1 0 1 0 1 0 1 0 1 0
  | | | | | | | | | | | |
  v v v v v v v v v v v v

       .----------------.
  ____/   SCOOP   /|____|\\
 /  ICE CREAM   / | [] | \\
/______________/__|____|__\\
| [01] [10]       MENU    |
|_________________________|
     O                O

  01010011 01000011 01001111 01001111 01010000`,
  },
}

function ProjectVisual({ type }: { type: Exclude<ProjectVisualType, 'architecture'> }) {
  const visual = visualContent[type]

  return (
    <div aria-label={visual.label} className="mini-project-visual matrix-visual" role="img">
      <pre>{visual.art}</pre>
    </div>
  )
}

export default ProjectVisual
