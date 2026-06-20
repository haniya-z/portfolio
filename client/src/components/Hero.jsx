import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Haniya</h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Coder</p>
          <p className="hero-description">
            I build beautiful and functional web applications. 
            Specialized in React, JavaScript, and modern web technologies.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollTo('contact')}
            >
              Get In Touch
            </button>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
