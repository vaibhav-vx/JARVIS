import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <Routes>
      {/* Landing = cinematic video intro, then auto-redirects to home */}
      <Route path="/" element={<LandingPage />} />
      {/* Main hackathon site */}
      <Route path="/home" element={<HomePage />} />
      {/* Team registration portal */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
