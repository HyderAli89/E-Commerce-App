import React from 'react';
import './Office.css'; // Import the CSS file for styling
import officeImage from '../Assets/Frontend_Assets/office.png'; // Replace with actual image path

const Office = () => {
  return (
    <div className="office-container">
      <div className="office-content">
        <div className="office-image">
          <img src={officeImage} alt="Our Office" />
        </div>
        <div className="office-info">
          <h1>Our Office</h1>
          <p>
            Welcome to our headquarters! Located in the heart of the city, our office is designed to foster creativity, collaboration, and innovation. With state-of-the-art facilities and a dynamic work environment, we strive to create the perfect setting for our team to thrive.
          </p>
          <p>
            Our office reflects our commitment to growth, transparency, and excellence. We believe that a great work environment fuels great ideas, and we work hard to provide a space where our team feels inspired and empowered every day.
          </p>
          <p>
            If you're ever in the area, feel free to stop by and visit us. We’re always happy to connect with our clients, partners, and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Office;
