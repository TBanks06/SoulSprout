import { Link } from 'react-router-dom';
import '../styles/home.css';

const ServicesSection = () => {
  const services = [
    { id: 1, title: "Yoga Therapy", icon: "🧘", description: "Personalized yoga sessions for healing" },
    { id: 2, title: "Nutrition Counseling", icon: "🍎", description: "Tailored dietary plans" },
    { id: 3, title: "Mindfulness Coaching", icon: "🌿", description: "Stress reduction techniques" },
  ];

  return (
    <section className="services-preview">
      <h2>Our Wellness Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Link to="/services" className="secondary-button">View All Services</Link>
    </section>
  );
};

export default ServicesSection;