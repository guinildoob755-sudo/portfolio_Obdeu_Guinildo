import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: 'Hero', label: 'Accueil' },
    { to: 'About', label: 'À propos' },
    { to: 'Work', label: 'Projets' },
    { to: 'Contact', label: 'Contact' },
  ]

  return (
    <nav className="
      fixed top-0 left-0 w-full
      flex justify-between items-center
      px-8 py-4
      bg-black/80 backdrop-blur-md
      border-b border-[#FDBB2D]/30
      z-50
    ">

      {/* LOGO */}
      <h1 className="
        text-xl md:text-2xl
        font-bold
        tracking-widest
        text-[#FDBB2D]
        hover:scale-110
        transition-transform duration-300
        cursor-pointer
      ">
        GO_PORTFOLIO
      </h1>

      {/* LINKS */}
      <ul className="
        hidden md:flex
        gap-8
        items-center
      ">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              smooth
              duration={600}
              offset={-80}
              className="
                text-gray-300
                hover:text-[#FDBB2D]
                relative
                cursor-pointer
                transition-colors duration-300
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-[#FDBB2D]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button
        className="
          md:hidden
          flex flex-col gap-1
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-[#FDBB2D]" />
        <span className="w-6 h-0.5 bg-[#FDBB2D]" />
        <span className="w-6 h-0.5 bg-[#FDBB2D]" />
      </button>

    </nav>
  )
}