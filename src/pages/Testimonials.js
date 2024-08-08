import React, { useState, useEffect } from 'react';
import 'animate.css';
import '../cssFold/Testimonials.css'; // Ensure the correct path to the CSS file

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setTestimonials(data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s picture`}
                className="testimonial-image"
              />
            )}
            <blockquote>{testimonial.quote}</blockquote>
            <p className="author">{testimonial.author}</p>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
