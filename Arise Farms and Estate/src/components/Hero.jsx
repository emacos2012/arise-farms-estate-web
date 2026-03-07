import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Welcome to Arise Farms</div>
        <h1 className="hero-title">
          Fresh From Our Farm
          <span className="title-highlight"> to Your Table</span>
        </h1>
        <p className="hero-description">
          Experience the finest quality farm produce and agricultural products. 
          We are dedicated to sustainable farming practices that deliver fresh, 
          nutritious food straight from our fields to your family.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
            Our Products
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Acres of Farmland</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

