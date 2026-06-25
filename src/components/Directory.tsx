import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightToBracket,
  faHouseChimneyWindow,
  faGraduationCap,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  faClipboard,
  faAddressCard,
  faNewspaper,
} from '@fortawesome/free-regular-svg-icons'

function Directory() {
  return (
    <aside className="directory">
      <a href="https://authentik.sabovic.net">
        <FontAwesomeIcon icon={faArrowRightToBracket} /> Log In!
      </a>
      <NavLink to="/">
        <FontAwesomeIcon icon={faHouseChimneyWindow} /> Home!
      </NavLink>
      <NavLink to="/experience">
        <FontAwesomeIcon icon={faClipboard} /> Experience!
      </NavLink>
      <NavLink to="/education">
        <FontAwesomeIcon icon={faGraduationCap} /> Education!
      </NavLink>
      <NavLink to="/projects">
        <FontAwesomeIcon icon={faCode} /> Projects!
      </NavLink>
      <NavLink to="/contactMe">
        <FontAwesomeIcon icon={faAddressCard} /> Contact Me!
      </NavLink>
      <NavLink to="/blog">
        <FontAwesomeIcon icon={faNewspaper} /> Blog!
      </NavLink>
    </aside>
  )
}

export default Directory
