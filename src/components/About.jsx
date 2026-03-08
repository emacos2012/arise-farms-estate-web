import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-label">About Us</div>
          <h2 className="about-title">
            Cultivating Excellence in Agriculture
          </h2>
          <p className="about-description">
            At Arise Farms and Estate Management, we are passionate about 
            delivering the highest quality farm produce and agricultural products. 
            Our commitment to sustainable farming practices ensures that every product 
            we offer is fresh, nutritious, and environmentally responsible.
          </p>
          <p className="about-description">
            With over 10 years of experience in the agricultural industry, we have 
            built a reputation for excellence in farming, product quality, and 
            customer satisfaction. Our team of dedicated farmers and agricultural 
            experts work tirelessly to bring you the best that nature has to offer.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-icon">🌱</span>
              <div className="feature-text">
                <h4>Organic Farming</h4>
                <p>100% natural and chemical-free</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <div className="feature-text">
                <h4>Fast Delivery</h4>
                <p>Fresh from farm to your door</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⭐</span>
              <div className="feature-text">
                <h4>Premium Quality</h4>
                <p>Handpicked for excellence</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-image-container">
            <img src="/layout.jpeg.png" alt="Our Farm" className="about-image" />
          </div>
          <div className="about-decoration"></div>
        </div>
      </div>
    </section>
  );
}

export default About;

