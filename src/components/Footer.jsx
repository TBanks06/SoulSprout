import { Link } from 'react-router-dom';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Wellness Center</h3>
          <p>Holistic approaches to health and wellbeing</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>123 Wellness Way</p>
          <p>City, State 12345</p>
          <p>info@wellnesscenter.com</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wellness Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;