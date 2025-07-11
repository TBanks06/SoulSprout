import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/services.css';

const Services = () => {
  const allServices = [
    { id: 1, title: "Yoga Therapy", description: "Customized yoga sessions for physical and mental wellbeing", duration: "60-90 mins", price: "$75/session" },
    { id: 2, title: "Nutrition Counseling", description: "Personalized dietary plans for optimal health", duration: "60 mins", price: "$90/session" },
    { id: 3, title: "Mindfulness Coaching", description: "Techniques to reduce stress and increase focus", duration: "45-60 mins", price: "$65/session" },
    { id: 4, title: "Massage Therapy", description: "Therapeutic massage for relaxation and pain relief", duration: "30-90 mins", price: "$60-$120" },
    { id: 5, title: "Meditation Classes", description: "Group sessions to cultivate mindfulness", duration: "45 mins", price: "$20/class" },
    { id: 6, title: "Holistic Health Assessment", description: "Comprehensive evaluation of your wellbeing", duration: "90 mins", price: "$150" },
  ];

  return (
    <>
      <Header />
      <main className="services-page">
        <section className="services-hero">
          <h1>Our Wellness Services</h1>
          <p>Tailored approaches to help you achieve your health goals</p>
        </section>
        
        <section className="all-services">
          {allServices.map(service => (
            <div key={service.id} className="service-detail">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="service-meta">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;