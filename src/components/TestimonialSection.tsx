import Image from "next/image"

function TestimonialSection() {
  return (
    <div id="testimonial-section" className="container mx-auto flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold bg-linear-to-t from-green-600 to-green-200 bg-clip-text text-transparent">Testimonial</h2>
      <div className="grid gap-8 md:grid-cols-3 mt-5">
        <div className="bg-gray-700 p-6 rounded-2xl shadow">
          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Johnson"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-4"
            unoptimized
          />
          <p className="text-white italic">
            &quot;Working with Calvin was an absolute pleasure. He has a great eye for design and always delivers clean, efficient code ahead of schedule.&quot;
          </p>
          <h4 className="mt-4 font-semibold text-white">Sarah Johnson</h4>
          <span className="text-sm text-gray-300">Project Manager at BrightTech Solutions</span>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Michael Tan"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-4"
            unoptimized
          />
          <p className="text-white italic">
            &quot;He turned our vision into a modern, user-friendly web app that our clients love. Professional, responsive, and highly skilled.&quot;
          </p>
          <h4 className="mt-4 font-semibold text-white">Michael Tan</h4>
          <span className="text-sm text-gray-300">Founder of Tan Digital Agency</span>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow">
          <Image
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Emily Chen"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-4"
            unoptimized
          />
          <p className="text-white italic">
            &quot;His attention to detail and collaboration skills made the entire development process smooth and enjoyable. Highly recommended!&quot;
          </p>
          <h4 className="mt-4 font-semibold text-white">Emily Chen</h4>
          <span className="text-sm text-gray-300">UX Lead at Nova Creative</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection