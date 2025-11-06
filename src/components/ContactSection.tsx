import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import Link from "next/link"

function ContactSection() {
  return (
    <div id="contact-section" className="container mx-auto mt-20">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-5">I have 5 years experience specializing in building responsive, user-friendly, and modern web interfaces.</p>
      <div className="flex items-center gap-4 text-4xl mt-5">
        <Link href="mailto:cavim1998@gmail.com" target="_blank">
          <MdEmail />
        </Link>
        <Link href="https://www.linkedin.com/in/calvin-halim-9559051a8/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="https://www.instagram.com/calvinhlm008/" target="_blank">
          <FaInstagram />
        </Link>
      </div>
    </div>
  )
}

export default ContactSection