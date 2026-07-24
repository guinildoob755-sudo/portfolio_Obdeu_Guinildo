import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import logoOrange from '../../assets/logo_orange.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: 'Hero', label: 'Accueil' },
    { to: 'About', label: 'À propos' },
    { to: 'Skills', label: 'Skills' },
    { to: 'Projects', label: 'Projets' },
    { to: 'Contact', label: 'Contact' },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md border-b border-[#FDBB2D]/30 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-3 cursor-pointer group">
        <img src={logoOrange} alt="GO Portfolio Logo" className="h-10 md:h-12 group-hover:scale-110 transition-transform duration-300" />
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#FDBB2D] group-hover:scale-110 transition-transform duration-300">
          PORTFOLIO
        </h1>
      </div>

      {/* LINKS - DESKTOP */}
      <ul className="hidden md:flex gap-8 items-center">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to} smooth duration={600} offset={-80}
              className="text-gray-300 hover:text-[#FDBB2D] relative cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#FDBB2D] hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button className="md:hidden flex flex-col gap-1.5 z-50 relative" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <span className={`w-6 h-0.5 bg-[#FDBB2D] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#FDBB2D] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[#FDBB2D] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div className={`md:hidden fixed inset-0 top-0 left-0 flex flex-col items-center justify-center gap-8 bg-black backdrop-blur-md transition-all duration-300 ${isOpen ? 'opacity-100 visible z-40' : 'opacity-0 invisible -z-10'}`}>
        {links.map(({ to, label }) => (
          <Link key={to} to={to} smooth duration={600} offset={-80} onClick={() => setIsOpen(false)}
            className="text-2xl  bg-black/50 text-gray-300 hover:text-[#FDBB2D] cursor-pointer transition-colors duration-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}