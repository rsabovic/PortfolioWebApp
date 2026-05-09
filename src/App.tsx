import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import LogIn from './pages/LogIn'
import Directory from './components/Directory'

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">

        <Routes>
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Directory />
      </div>
    </BrowserRouter>
  )
}

export default App
