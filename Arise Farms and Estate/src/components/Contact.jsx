import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [paymentAmount, setPaymentAmount] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  // Pi Payment Integration
  const initiatePiPayment = async () => {
    setIsProcessing(true);
    setPaymentStatus('processing');

    try {
      // Check if Pi SDK is available
      if (window.Pi) {
        const pi = window.Pi;
        
      // Authenticate user (Pi SDK authentication)
      // Note: In production, you'd use the authenticated user's info
      await pi.authenticate({
        scopes: ['payments']
      });
        
        // Create payment
        const payment = await pi.createPayment({
          amount: paymentAmount,
          memo: 'Arise Farms Order',
          metadata: { orderId: 'order_' + Date.now() }
        });
        
        // Complete payment
        await payment.complete();
        
        setPaymentStatus('success');
        alert('Payment successful! Thank you for supporting Arise Farms!');
      } else {
        // Fallback: Simulate payment for demo
        await new Promise(resolve => setTimeout(resolve, 2000));
        setPaymentStatus('success');
        alert(`Demo: Payment of π ${paymentAmount} simulated successfully!`);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('error');
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Have questions? We'd love to hear from you. Send us a message or make a payment.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Farm Location</h4>
                <p>123 Agricultural Road<br />Rural District, State<br />Country</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+1 (234) 567-890<br />+1 (234) 567-891</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Email</h4>
                <p>info@arisefarms.com<br />sales@arisefarms.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div className="info-content">
                <h4>Hours</h4>
                <p>Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-forms">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send us a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Message Subject"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>

            {/* Pi Payment Section */}
            <div className="payment-section">
              <h3>💰 Make a Payment with Pi</h3>
              <p>Support Arise Farms by making a payment in Pi cryptocurrency</p>
              
              <div className="payment-form">
                <div className="form-group">
                  <label htmlFor="paymentAmount">Amount (π)</label>
                  <input
                    type="number"
                    id="paymentAmount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(parseFloat(e.target.value) || 0)}
                    min="0.1"
                    step="0.1"
                  />
                </div>
                
                <button 
                  className={`btn-payment ${isProcessing ? 'processing' : ''}`}
                  onClick={initiatePiPayment}
                  disabled={isProcessing || paymentAmount <= 0}
                >
                  {isProcessing ? (
                    <span>Processing...</span>
                  ) : (
                    <span>Pay with Pi 🔵</span>
                  )}
                </button>
                
                {paymentStatus === 'success' && (
                  <div className="payment-success">
                    ✓ Payment Successful!
                  </div>
                )}
                
                {paymentStatus === 'error' && (
                  <div className="payment-error">
                    ✗ Payment Failed. Please try again.
                  </div>
                )}
              </div>
              
              <div className="pi-info">
                <p>🔵 Pi is a new cryptocurrency for everyday people.</p>
                <p>Learn more at <a href="https://minepi.com" target="_blank" rel="noopener noreferrer">minepi.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

