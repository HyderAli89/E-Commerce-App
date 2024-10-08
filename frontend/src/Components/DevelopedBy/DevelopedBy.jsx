import React from 'react';
import './DevelopedBy.css'; 

import developerImage from "../Assets/Frontend_Assets/developer_image.JPG"
const DevelopedBy = () => {
  return (
    <div className="developedBy-container">
      <div className="image-section">
        <img src={developerImage} alt="Developer" />
      </div>
      <div className="text-section">
        <h1>Developed By</h1>
        <p>
          Hi, I'm HyderAli, the developer of this project. I have built this
          e-commerce application using modern technologies like React, Node.js,
          MongoDB, and Express.js. I am very passionate about technology and
          always ready to take on challenges with a learning mindset. This
          project has sharpened my skills in full-stack development, enhanced my
          ability to solve complex problems, and deepened my understanding of
          creating scalable and efficient web applications.
<br></br>
          if you have any query related to this project please contact me my mail is : hydaralibhatt89@gmail.com
        </p>
      </div>
    </div>
  );
};

export default DevelopedBy;
