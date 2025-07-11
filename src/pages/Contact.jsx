import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </section>
        
        <div className="contact-container">
          <section className="contact-info">
            <h2>Get in Touch</h2>
            <p><strong>Address:</strong> 123 Wellness Way, City, State 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@wellnesscenter.com</p>
            <p><strong>Hours:</strong> Monday-Friday: 9am-7pm, Saturday: 10am-4pm</p>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
            </div>
          </section>
          
          <section className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
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
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
        </div>
        
        <section className="location-map">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            {/* Later to  embed Google Map */}
            <p>Map would display here</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;