import CardProject from "./ProjectSection/CardProject"

function ProjectSection() {
  return (
    <div id="project-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-orange-600 to-orange-200 bg-clip-text text-transparent">PROJECTS</h2>

      <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
        <CardProject title="BIS Accounting SaaS" image="/thumbnail_bis.png" url="https://www.bisaccounting.com/" />
        <CardProject title="POS" image="/thumbnail_pos.png" url="https://pos.mpssoft.co.id/" />
        <CardProject title="Bibit Baik" image="/thumbnail_bibit_baik.png" url="https://bibitbaik.com/" />
        <CardProject title="BUMA" image="/thumbnail_buma.png" />
      </div>
    </div>
  )
}

export default ProjectSection