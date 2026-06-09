import { NavLink } from 'react-router-dom'

function Directory() {
  return (
    <aside className="directory">
      <a href="https://authentik.sabovic.net"><i className="fa-solid fa-arrow-right-to-bracket"></i> Log In! </a>
      <NavLink to="/"><i className="fa-solid fa-house-chimney-window"></i> Home!</NavLink>
      <NavLink to="/experience"><i className="fa-regular fa-clipboard"></i> Experience!</NavLink>
      <NavLink to="/education"><i className="fa-solid fa-graduation-cap"></i> Education!</NavLink>
      <NavLink to="/projects"><i className="fa-solid fa-code"></i>Projects!</NavLink>
      <NavLink to="/contactMe"><i className="fa-regular fa-address-card"></i> Contact Me!</NavLink>
      <NavLink to="/blog"><i className="fa-regular fa-newspaper"></i> Blog!</NavLink>
    </aside>
  )
}

export default Directory
