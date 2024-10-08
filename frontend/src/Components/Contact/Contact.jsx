import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import Swal from 'sweetalert2'; // Import SweetAlert

const Contact = () => {
  // Function to handle form submission and trigger the SweetAlert
  const handleSubmit = (e) => {
    e.preventDefault();

    // Triggering the SweetAlert
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out to us. We will get back to you shortly!',
      icon: 'success',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#ff6347'
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about our products, need support, or want to give feedback, feel free to reach out to us using the form below or via our contact details.
      </p>
      <div className="contact-info">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Our Contact Details</h2>
          <p>Email: contact@email.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123, SG Highway, Ahmedabad , India</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
