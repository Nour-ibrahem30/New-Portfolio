import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import { loadCSS } from './utils/loadCSS'

const Hero = lazy(() => import('./components/Hero'))
const Resume = lazy(() => import('./components/Resume'))

function App() {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadNonCriticalCSS = async () => {
      try {
        await Promise.all([
          loadCSS('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap')
        ])
      } catch (error) {
        console.warn('Failed to load non-critical CSS:', error)
      }
    }
    
    // Delay loading to not block initial render
    setTimeout(loadNonCriticalCSS, 100)
  }, [])

  return (
    <>
      <Navbar />
      <Suspense fallback={
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#000',
          color: '#fff'
        }}>
          Loading...
        </div>
      }>
        <Hero />
        <Resume />
      </Suspense>
    </>
  )
}

export default App