import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Projects, Experience, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Name — AI & Data Science Portfolio
      </footer>
    </div>
  )
}

export default App
