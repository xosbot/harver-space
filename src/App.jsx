import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Technology from './components/Technology'
import Roadmap from './components/Roadmap'
import Market from './components/Market'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Roadmap />
      <Market />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
