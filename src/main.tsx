import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/stylesheet.css'
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
