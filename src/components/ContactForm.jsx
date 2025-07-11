import React from 'react';
import './styles/contact.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>
        
        <div className="form-group">
          <label htmlFor="service">Service of Interest</label>
          <select id="service">
            <option value="">Select a service</option>
            <option value="yoga">Yoga Therapy</option>
            <option value="nutrition">Nutrition Counseling</option>
            <option value="mindfulness">Mindfulness Coaching</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;