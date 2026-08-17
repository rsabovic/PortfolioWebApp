import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightToBracket,
  faHouseChimneyWindow,
  faGraduationCap,
  faCode,
  faPalette,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  faClipboard,
  faAddressCard,
} from '@fortawesome/free-regular-svg-icons'

function Directory() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <aside className="directory">
      <button
        className="directoryToggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} /> Menu
      </button>

      <nav className={`directoryLinks ${isOpen ? 'open' : ''}`}>
        <a href="https://authentik.sabovic.net" onClick={closeMenu}>
          <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In!
        </a>
        <NavLink to="/" onClick={closeMenu}>
          <FontAwesomeIcon icon={faHouseChimneyWindow} /> Home!
        </NavLink>
        <NavLink to="/experience" onClick={closeMenu}>
          <FontAwesomeIcon icon={faClipboard} /> Experience!
        </NavLink>
        <NavLink to="/education" onClick={closeMenu}>
          <FontAwesomeIcon icon={faGraduationCap} /> Education!
        </NavLink>
        <NavLink to="/projects" onClick={closeMenu}>
          <FontAwesomeIcon icon={faCode} /> Projects!
        </NavLink>
        <NavLink to="/contactMe" onClick={closeMenu}>
          <FontAwesomeIcon icon={faAddressCard} /> Contact Me!
        </NavLink>
        <NavLink to="/themes" onClick={closeMenu}>
          <FontAwesomeIcon icon={faPalette} /> Themes!
        </NavLink>
      </nav>
    </aside>
  )
}

export default Directory