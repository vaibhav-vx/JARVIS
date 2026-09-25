import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JarvisChatbot from './components/JarvisChatbot'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProtocolsPage from './pages/ProtocolsPage'
import ArmorVaultPage from './pages/ArmorVaultPage'
import VisionPage from './pages/VisionPage'
import PrizesPage from './pages/PrizesPage'
import TimelinePage from './pages/TimelinePage'
import SponsorsPage from './pages/SponsorsPage'
import RulesPage from './pages/RulesPage'
import FaqPage from './pages/FaqPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div style={{ background: '#070709', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!isLanding && <Navbar />}

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
          <Route path="/armor-vault" element={<ArmorVaultPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/prizes" element={<PrizesPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      {!isLanding && <JarvisChatbot />}
      {!isLanding && <Footer />}
    </div>
  )
}
