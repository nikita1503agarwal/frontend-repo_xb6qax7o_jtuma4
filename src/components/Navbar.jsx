import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold text-lg tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">AI & Data Science</span>
            <span className="ml-2 text-gray-900">Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-indigo-600 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center gap-4 text-gray-600">
              <a href="mailto:your.email@example.com" aria-label="Email" className="hover:text-indigo-600"><Mail size={20} /></a>
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-indigo-600"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600"><Linkedin size={20} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-indigo-600">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600">Email</a>
              <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600">GitHub</a>
              <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-indigo-600">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
