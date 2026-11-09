function FeaturedProjectVisual() {
  return (
    <div aria-label="ASCII illustration of Avian Vet's app, care assistant, API, and database" className="project-visual matrix-visual featured-matrix-visual" role="img">
      <pre>{`  0101 0100 0101 0100 0101

       .----------------.
      /   AVIAN  VET   /|
     /----------------/ |
     |  React app     | |
     '-------+--------' |
             |          |
      .------v-------.  |
      | FastAPI      |  |
      | CARE ASSIST  |  |
      '------+-------'  |
             |          |
        .----v-----.    |
        | MariaDB  |----'
        '----------'

  LOCAL RETRIEVAL / CITED INFORMATION`}</pre>
    </div>
  )
}

export default FeaturedProjectVisual
