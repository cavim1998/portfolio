'use client'

import Image from 'next/image'

function HeroSection() {
  const goDownload = () => {
    const url = 'https://drive.google.com/file/d/1nZAkuKofM8V3PzaVY7lpstXE0tHx2Rjv/view?usp=drive_link'
    window.open(url, '_blank')
  }

  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div id="hero-section" className="container mx-auto mt-20">
      <div className='flex flex-col items-center'>
        <div className='overflow-hidden rounded-full w-[250px] h-[250px] bg-linear-to-r from-cyan-500 to-blue-500'>
          <Image src="/user.png" alt="user picture" width={250} height={223} />
        </div>
        <p className='mt-5 text-5xl font-bold'>Calvin Halim</p>
        <p className='mt-5 text-4xl'>Full-Stack Web Developer</p>
        <p className='mt-5'>I build stuff for the web — and make it awesome!</p>

        <div className='mt-10 space-x-4'>
          <button className='hover:border hover:border-white rounded-lg hover:cursor-pointer px-6 py-3 bg-white text-black hover:bg-black hover:text-white' onClick={scrollToContact}>Contact Me</button>
          <button className='border border-white rounded-lg hover:cursor-pointer px-6 py-3 hover:bg-white hover:text-black' onClick={goDownload}>Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection