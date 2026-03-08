import { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Arise Farms has been our primary supplier for fresh produce. The quality is exceptional and their delivery is always on time. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Organic Food Enthusiast',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'The organic fruits and vegetables from Arise Farms are simply amazing. You can truly taste the difference in quality. My family loves everything we\'ve ordered.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Health & Wellness Coach',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'As a wellness coach, I only recommend the best to my clients. Arise Farms\' commitment to sustainable farming aligns perfectly with my values. Fantastic service!'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Local Grocery Store Owner',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
      text: 'We\'ve been partnering with Arise Farms for over 2 years now. Their products fly off our shelves because customers know they\'re getting the best quality.'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      role: 'Home Cook',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      rating: 5,
      text: 'The freshness of Arise Farms produce is unmatched. My cooking has improved dramatically since I started buying from them. Thank you for bringing farm-fresh to our home!'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-description">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            ‹
          </button>
          
          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-quote">❝</div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

