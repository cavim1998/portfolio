import {
  IoLogoJavascript,
  IoLogoVue,
  IoLogoReact,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoCss3
} from "react-icons/io5"
import { BiLogoTypescript } from "react-icons/bi"
import {
  SiExpress,
  SiMysql
} from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc"

function SkillSection() {
  return (
    <div id="skill-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-sky-600 to-blue-200 bg-clip-text text-transparent">SKILL</h2>

      <div className="flex items-center flex-wrap gap-4 text-7xl mt-5 text-gray-400">
        <IoLogoHtml5 />
        <IoLogoCss3 />
        <IoLogoJavascript />
        <BiLogoTypescript />
        <IoLogoVue />
        <IoLogoReact />
        <SiExpress />
        <SiMysql />
        <IoLogoGithub />
        <VscAzureDevops />
      </div>
    </div>
  )
}

export default SkillSection