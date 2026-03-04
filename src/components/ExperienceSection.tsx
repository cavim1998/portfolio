import { CardExperienceProps } from "./ExperienceSection/CardExperience";
import CardExperience from "./ExperienceSection/CardExperience";

function ExperienceSection() {
  const experienceList: CardExperienceProps[] = [
    {
      title: "Freelance",
      startDate: "Apr 2025",
      endDate: "Now",
      description:
        "Engineered a comprehensive Workflow Management System using Vue 3 and Tailwind CSS to digitize corporate submission processes. Designed complex multi-step forms with robust client-side validation, successfully reducing data entry errors by 30%. Focused on optimizing application performance to ensure a seamless, responsive user experience across various devices.",
    },
    {
      title: "PT Kamoro Maxima Integra",
      startDate: "Dec 2022",
      endDate: "Dec 2024",
      description:
        "Spearheaded the development of scalable web interfaces using Vue 3 and TypeScript, ensuring strict type safety and maintainability. Successfully implemented a Micro Frontend architecture to improve development velocity and deployment efficiency. Collaborated closely with backend teams for seamless RESTful API integration and developed key internal features, including a dynamic custom calendar component for BUMA's employee portal.",
    },
    {
      title: "PT Mitra Pasifik Solusindo",
      startDate: "Apr 2019",
      endDate: "Dec 2022",
      description:
        "Developed and optimized high-performance, SEO-friendly web applications utilizing Vue.js (Vue 2) and Nuxt.js. Translated UI/UX wireframes into responsive, interactive interfaces while maintaining cross-browser compatibility. Delivered modular front-end solutions for diverse, complex projects, including a real-time Point of Sale (POS) system , a comprehensive accounting SaaS platform , and an interactive crowdfunding dashboard.",
    },
  ];
  return (
    <div
      id="experience-section"
      className="container mx-auto flex flex-col items-center mt-20"
    >
      <h2 className="text-2xl font-semibold bg-linear-to-t from-violet-600 to-violet-200 bg-clip-text text-transparent">
        EXPERIENCE
      </h2>

      <div className="space-y-4">
        {experienceList.map((item, index) => {
          return (
            <CardExperience
              key={index}
              title={item.title}
              startDate={item.startDate}
              endDate={item.endDate}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceSection;
