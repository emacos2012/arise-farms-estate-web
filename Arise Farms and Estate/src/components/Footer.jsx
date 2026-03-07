import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">🌾</span>
              <span className="logo-text">Arise Farms</span>
            </div>
            <p className="footer-description">
              Your trusted source for fresh, organic farm products. 
              Committed to sustainable agriculture and delivering the 
              finest quality produce directly from our farm to your table.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="YouTube">📹</a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Our Products</h4>
              <ul>
                <li><a href="#products">Fresh Vegetables</a></li>
                <li><a href="#products">Organic Fruits</a></li>
                <li><a href="#products">Farm Eggs</a></li>
                <li><a href="#products">Raw Honey</a></li>
                <li><a href="#products">Dairy Products</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Farm Management</a></li>
                <li><a href="#services">Irrigation Systems</a></li>
                <li><a href="#services">Soil Analysis</a></li>
                <li><a href="#services">Organic Consulting</a></li>
                <li><a href="#services">Training Programs</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Arise Farms and Estate Management. All rights reserved.</p>
          </div>
          <div className="footer-payments">
            <span className="payment-label">Accepted Payments:</span>
            <span className="payment-icon">💳</span>
            <span className="payment-icon">🔵 Pi Network</span>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

