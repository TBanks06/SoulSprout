import './styles/home.css';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sarah J.", quote: "Transformed my approach to self-care", role: "Client since 2020" },
    { id: 2, name: "Michael T.", quote: "The nutrition plan changed my life", role: "Client since 2021" },
    { id: 3, name: "Priya K.", quote: "Best mindfulness coaching I've experienced", role: "Client since 2019" },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="name">{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;