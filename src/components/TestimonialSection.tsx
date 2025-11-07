'use client'

import { useEffect } from 'react'
import { useTestimonials } from '@/stores/Testimonials'
import { listUserStaticTypes } from '@/types/Testimonials'
import Image from "next/image"

function TestimonialSection() {
  const storeTestimonials = useTestimonials()

  const ListText: listUserStaticTypes[] = [
    {
      message: 'Working with Calvin was an absolute pleasure. He has a great eye for design and always delivers clean, efficient code ahead of schedule.',
      jobLocation: 'Project Manager at BrightTech Solutions'
    },
    {
      message: 'He turned our vision into a modern, user-friendly web app that our clients love. Professional, responsive, and highly skilled.',
      jobLocation: 'Founder of Tan Digital Agency'
    },
    {
      message: 'His attention to detail and collaboration skills made the entire development process smooth and enjoyable. Highly recommended!',
      jobLocation: 'UX Lead at Nova Creative'
    }
  ]

  useEffect(() => {
    storeTestimonials.getUsers()
  }, [])

  return (
    <div id="testimonial-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-green-600 to-green-200 bg-clip-text text-transparent">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-3 mt-5">
        {
          storeTestimonials.listUsers.map((user, index) => {
            return (
              <div key={index} className="bg-gray-700 p-6 rounded-2xl shadow">
                <Image
                  src={user.picture.large}
                  alt={user.name.first}
                  width={64}
                  height={64}
                  className="rounded-full mx-auto mb-4"
                  unoptimized
                />
                <p className="text-white italic">
                  &quot;{ListText[index].message}&quot;
                </p>
                <h4 className="mt-4 font-semibold text-white">{`${user.name.first} ${user.name.last}`}</h4>
                <span className="text-sm text-gray-300">{ListText[index].jobLocation}</span>
              </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default TestimonialSection