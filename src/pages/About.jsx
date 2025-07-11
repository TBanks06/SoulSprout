import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/about.css';

const About = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <h1>About Our Wellness Center</h1>
          <p>Our journey and commitment to your wellbeing</p>
        </section>
        
        <section className="our-story">
          <h2>Our Story</h2>
          <p>Founded in 2015, Wellness Center began with a simple mission: to provide holistic, personalized approaches to health and wellbeing. Our founder, Dr. Maya Patel, envisioned a space where traditional and modern wellness practices could come together to serve the whole person - body, mind, and spirit.</p>
          <p>What started as a small practice has grown into a comprehensive wellness center serving hundreds of clients each year, but our core values remain the same.</p>
        </section>
        
        <section className="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Dr. Maya Patel</h3>
              <p>Founder & Holistic Health Practitioner</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>James Wilson</h3>
              <p>Certified Yoga Therapist</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Sarah Chen</h3>
              <p>Nutrition Specialist</p>
            </div>
          </div>
        </section>
        
        <section className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Holistic Approach:</strong> We address all aspects of wellbeing</li>
            <li><strong>Personalized Care:</strong> Every plan is tailored to the individual</li>
            <li><strong>Evidence-Based:</strong> Combining traditional wisdom with modern science</li>
            <li><strong>Compassionate Service:</strong> We meet you where you are in your journey</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;