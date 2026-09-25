import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JarvisChatbot from './components/JarvisChatbot'

export const metadata = {
  title: 'JARVIS Hackathon 4.0 | Shree L. R. Tiwari College Of Engineering',
  description: 'Official 24-Hour Hybrid Flagship Hackathon organized by SLRTCE Student Council & Technical Head Vaibhav Dubey on October 16–17, 2026.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
        <JarvisChatbot />
      </body>
    </html>
  )
}
