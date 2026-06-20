import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React frontend and Node.js backend',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with location search and forecasting',
    tags: ['React', 'API Integration', 'Charts'],
    link: '#'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'Content management system for blogging with markdown support',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
