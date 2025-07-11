import '../styles/home.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Join Our Wellness Community</h2>
      <p>Subscribe to receive tips and special offers</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your email address" required />
        <button type="submit" className="primary-button">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;