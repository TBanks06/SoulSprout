import { Link } from 'react-router-dom';
import './styles/main.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Wellness Center</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className="cta-button">Book Appointment</button>
    </header>
  );
};

export default Header;