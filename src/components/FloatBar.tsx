'use client'

import { FaHome } from "react-icons/fa"
import { IoPersonCircleSharp } from "react-icons/io5"
import { PiTreeView } from "react-icons/pi"
import { AiTwotoneProject, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdContactPhone } from "react-icons/md"

function FloatBar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <div className="fixed border border-white rounded-full left-10 space-y-5 text-2xl py-4 px-2">
      <FaHome className="hover:cursor-pointer" onClick={() => scrollTo('hero-section')} />
      <IoPersonCircleSharp className="hover:cursor-pointer" onClick={() => scrollTo('about-section')} />
      <PiTreeView className="hover:cursor-pointer" onClick={() => scrollTo('skill-section')} />
      <AiTwotoneProject className="hover:cursor-pointer" onClick={() => scrollTo('project-section')} />
      <AiOutlineFundProjectionScreen className="hover:cursor-pointer" onClick={() => scrollTo('experience-section')} />
      <MdContactPhone className="hover:cursor-pointer" onClick={() => scrollTo('contact-section')} />
    </div>
  )
}

export default FloatBar