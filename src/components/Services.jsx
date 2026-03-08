import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🚜',
      title: 'Farm Management',
      description: 'Professional farm management services including crop planning, soil management, and harvest optimization.',
      features: ['Crop Planning', 'Soil Testing', 'Harvest Management']
    },
    {
      id: 2,
      icon: '💧',
      title: 'Irrigation Systems',
      description: 'Modern irrigation solutions to ensure optimal water usage and crop yield throughout the year.',
      features: ['Drip Irrigation', 'Sprinkler Systems', 'Water Management']
    },
    {
      id: 3,
      icon: '🧪',
      title: 'Soil Analysis',
      description: 'Comprehensive soil testing and analysis to determine nutrient requirements and improve fertility.',
      features: ['Nutrient Testing', 'pH Analysis', 'Recommendations']
    },
    {
      id: 4,
      icon: '🌱',
      title: 'Organic Consulting',
      description: 'Expert guidance on transitioning to organic farming practices and maintaining organic certification.',
      features: ['Certification Support', 'Pest Management', 'Sustainable Practices']
    },
    {
      id: 5,
      icon: '📦',
      title: 'Product Distribution',
      description: 'End-to-end distribution services ensuring your farm products reach markets fresh and on time.',
      features: ['Cold Chain', 'Market Access', 'Logistics']
    },
    {
      id: 6,
      icon: '🎓',
      title: 'Training & Education',
      description: 'Workshops and training programs for farmers looking to improve their agricultural practices.',
      features: ['Hands-on Training', 'Modern Techniques', 'Industry Updates']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Comprehensive Agricultural Solutions</h2>
          <p className="section-description">
            We offer a wide range of farming and agricultural services to help you succeed
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-service">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

