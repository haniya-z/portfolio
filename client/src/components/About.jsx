import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With several years of experience in web development, I've worked on diverse projects ranging from 
              small startups to large-scale applications.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work. Now, I channel that curiosity 
              into building responsive, user-friendly web applications that make a real impact.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or enjoying the outdoors.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
