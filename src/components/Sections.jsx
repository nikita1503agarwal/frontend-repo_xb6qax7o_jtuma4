export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a third‑year student specializing in Artificial Intelligence and Data Science. I love building projects that combine solid engineering with creative user experiences. My current interests are applied machine learning, data visualization, model deployment, and AI for productivity.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Stat label="GPA" value="8.7/10" />
            <Stat label="Hackathons" value="6+" />
            <Stat label="Publications" value="2" />
            <Stat label="Projects" value="12+" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 ring-1 ring-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">What I'm good at</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-gray-700 text-sm">
            {['Python','Pandas','NumPy','Scikit‑learn','TensorFlow','PyTorch','FastAPI','MongoDB','Docker','Git','Airflow','Weights & Biases'].map(s => (
              <li key={s} className="px-3 py-2 rounded-md bg-gray-50 ring-1 ring-gray-200">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-blue-50 ring-1 ring-gray-200">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  )
}

export function Skills() {
  const skills = [
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 70 },
    { name: 'Data Engineering', level: 75 },
    { name: 'MLOps', level: 65 },
    { name: 'Frontend (React)', level: 70 },
    { name: 'Backend (FastAPI)', level: 80 },
  ]
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map(s => (
            <div key={s.name} className="p-5 bg-white rounded-xl ring-1 ring-gray-200">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900">{s.name}</p>
                <span className="text-sm text-gray-600">{s.level}%</span>
              </div>
              <div className="h-2 rounded bg-gray-100">
                <div className="h-2 rounded bg-gradient-to-r from-indigo-600 to-blue-500" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      title: 'Real‑time Emotion Detection',
      desc: 'CNN + OpenCV pipeline deployed with FastAPI; visual dashboard with React.',
      tags: ['Python','TensorFlow','FastAPI','React'],
      link: '#'
    },
    {
      title: 'Recommendation System',
      desc: 'Content‑based + collaborative filtering with implicit feedback and ANN.',
      tags: ['PyTorch','Pandas','Faiss'],
      link: '#'
    },
    {
      title: 'Data Pipeline Automation',
      desc: 'Ingestion → validation → feature store with Airflow and MLflow tracking.',
      tags: ['Airflow','MLflow','Docker'],
      link: '#'
    },
  ]
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map(p => (
            <a key={p.title} href={p.link} className="group p-6 bg-white rounded-xl ring-1 ring-gray-200 hover:ring-indigo-300 hover:shadow-md transition">
              <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-100 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 ring-1 ring-gray-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { role: 'AI Intern', org: 'Tech Startup', time: 'May 2024 – Aug 2024', points: ['Built an inference API for object detection', 'Cut latency by 35% with model quantization', 'Automated training jobs with GitHub Actions'] },
    { role: 'Data Science Fellow', org: 'Open Source', time: 'Jan 2024 – Apr 2024', points: ['Led a team of 4 on an ETL project', 'Designed dashboards for stakeholder KPIs', 'Wrote documentation and tutorials'] },
  ]
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        <div className="mt-8 space-y-6">
          {items.map((item) => (
            <div key={item.role} className="p-6 bg-white rounded-xl ring-1 ring-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.role} • {item.org}</h3>
                <span className="text-sm text-gray-600">{item.time}</span>
              </div>
              <ul className="mt-3 list-disc list-inside text-gray-700 text-sm space-y-1">
                {item.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white rounded-xl ring-1 ring-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-gray-600">Always excited to collaborate on AI and data projects. Reach out anytime!</p>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <a href="mailto:your.email@example.com" className="p-4 rounded-lg bg-gray-50 ring-1 ring-gray-200 hover:ring-indigo-300">your.email@example.com</a>
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="p-4 rounded-lg bg-gray-50 ring-1 ring-gray-200 hover:ring-indigo-300">github.com/your-github</a>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="p-4 rounded-lg bg-gray-50 ring-1 ring-gray-200 hover:ring-indigo-300">linkedin.com/in/your-linkedin</a>
          </div>
        </div>
      </div>
    </section>
  )
}
