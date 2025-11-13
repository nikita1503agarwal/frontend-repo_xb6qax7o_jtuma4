import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-white via-indigo-50/60 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-indigo-600" /> 3rd year • AI & Data Science
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Turning data into intelligent products
          </h1>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            I build end‑to‑end AI solutions — from clean data pipelines to interactive apps. Passionate about machine learning, MLOps, and human‑centered design.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-white text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 transition">Contact Me</a>
            <a href="/resume.pdf" target="_blank" className="px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition">Download Resume</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 h-[420px] md:h-[520px] rounded-xl overflow-hidden ring-1 ring-gray-200 bg-white/60 backdrop-blur">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
