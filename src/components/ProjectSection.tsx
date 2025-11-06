import CardProject from "./ProjectSection/CardProject"

interface ProjectTypes {
  title: string
  image: string
  framework: string[]
  url?: string
}

function ProjectSection() {
  const listProject: ProjectTypes[] = [
    {
      title: 'BIS Accounting SaaS',
      image: '/thumbnail_bis.png',
      url: 'https://www.bisaccounting.com/',
      framework: ['Vue2', 'Nuxtjs']
    },
    {
      title: 'POS',
      image: '/thumbnail_pos.png',
      url: 'https://pos.mpssoft.co.id/',
      framework: ['Vue2', 'Nuxtjs']
    },
    {
      title: 'Bibit Baik',
      image: '/thumbnail_bibit_baik.png',
      url: 'https://bibitbaik.com/',
      framework: ['Vue2', 'Nuxtjs']
    },
    {
      title: 'BUMA',
      image: '/thumbnail_buma.png',
      url: '',
      framework: ['Vue3', 'Typescript']
    }
  ]

  return (
    <div id="project-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-orange-600 to-orange-200 bg-clip-text text-transparent">PROJECTS</h2>

      <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
        {
          listProject.map((item, index) => {
            return <CardProject
              key={index}
              title={item.title}
              image={item.image}
              url={item.url}
              framework={item.framework}
            />
          })
        }
        
      </div>
    </div>
  )
}

export default ProjectSection