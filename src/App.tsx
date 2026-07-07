import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Themes from './pages/Themes'
import Directory from './components/Directory'

function App() {
  return (
    <BrowserRouter>
        <div style={{ display: 'flex', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
        <Directory />
      </div>
    </BrowserRouter>
  )
}

export default App
