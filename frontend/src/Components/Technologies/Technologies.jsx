
import React from 'react';
import './Technologies.css'; // Import the CSS file for styling

import reactLogo from '../Assets/Frontend_Assets/react.png'; 
import nodeLogo from '../Assets/Frontend_Assets/node.png';
import mongoLogo from '../Assets/Frontend_Assets/mongo.png';
import expressLogo from '../Assets/Frontend_Assets/express.png';

export const Technologies = () => {
  return (
    <div className="technologies-container">
      <div className="tech-card">
        <img src={reactLogo} alt="React" />
        <h2>React</h2>
      </div>
      <div className="tech-card">
        <img src={nodeLogo} alt="Node.js" />
        <h2>Node.js</h2>
      </div>
      <div className="tech-card">
        <img src={mongoLogo} alt="MongoDB" />
        <h2>MongoDB</h2>
      </div>
      <div className="tech-card">
        <img src={expressLogo} alt="Express.js" />
        <h2>Express.js</h2>
      </div>
    </div>
  );
}

export default Technologies;
