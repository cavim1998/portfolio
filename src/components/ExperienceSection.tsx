import { CardExperienceProps } from "./ExperienceSection/CardExperience"
import CardExperience from './ExperienceSection/CardExperience'

function ExperienceSection() {
  const experienceList: CardExperienceProps[] = [
    {
      title: 'PT Kamoro Maxima Integra',
      startDate: 'Dec 2022',
      endDate: 'Dec 2024',
      description: 'Developed and optimized user interfaces for web-based applications using Vue 3 and TypeScript, implementing micro frontend architecture, collaborating with backend teams to ensure seamless API integration, and working closely with UI/UX designers to translate wireframes and mockups into responsive, user-friendly interfaces that deliver a consistent experience across devices.'
    },
    {
      title: 'PT Mitra Pasifik Solusindo',
      startDate: 'Apr 2019',
      endDate: 'Dec 2022',
      description: 'Developed and optimized user interfaces for web-based applications using Vue.js and Nuxt.js, collaborating with backend teams to ensure seamless API integration, and enhancing user experience through responsive design and efficient code implementation.'
    }
  ]
  return (
    <div id="experience-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-violet-600 to-violet-200 bg-clip-text text-transparent">EXPERIENCE</h2>
      
      <div className="space-y-4">
        {
          experienceList.map((item, index) => {
            return <CardExperience key={index} title={item.title} startDate={item.startDate} endDate={item.endDate} description={item.description} />
          })
        }
      </div>
    </div>
  )
}

export default ExperienceSection