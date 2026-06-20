import './Skills.css'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'npm/yarn']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-card">
              <h3>{cat.category}</h3>
              <ul className="skill-list">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
