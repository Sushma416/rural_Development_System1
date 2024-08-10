import React from 'react';
import '../Styles/About.css';
import Header1 from './Header1';
import Footer from './Footer';

const Feedback = () => {
  return (
    <div>
    <Header1/>
    <div className="about-us-container">
      
      
      <div className="section-container">
        <div className="text-container">
          <h2>Our Mission</h2>
          <p>Our mission is to improve the quality of life in rural areas by promoting sustainable development practices, enhancing access to essential services, and fostering economic opportunities. We aim to:</p>
          <ul>
            <li>Empower local communities through education and capacity-building programs.</li>
            <li>Promote environmentally sustainable agricultural practices.</li>
            <li>Improve infrastructure and access to clean water and sanitation.</li>
            <li>Facilitate access to healthcare and social services.</li>
            <li>Support small businesses and entrepreneurship in rural areas.</li>
          </ul>
        </div>
        <div className="image-container mission-image">
          <img src="https://img.freepik.com/free-vector/illustration-business-mission_53876-26964.jpg" alt="Mission" />
        </div>
      </div>

      <div className="section-container">
        <div className="image-container vision-image">
          <img src="https://roland.ac.in/site/wp-content/uploads/2019/04/Vision.png" alt="Vision"   />
        </div>
        <div className="text-container">
          <h2>Our Vision</h2>
          <p>Our vision is a world where all rural communities are empowered, self-sufficient, and thriving, with equitable access to opportunities and resources. We envision a future where:</p>
          <ul>
            <li>Every individual has access to quality education and vocational training.</li>
            <li>Sustainable agriculture ensures food security and environmental health.</li>
            <li>Robust infrastructure connects rural areas to broader economic opportunities.</li>
            <li>Healthcare services are accessible and affordable for all.</li>
            <li>Local economies are vibrant, diversified, and resilient.</li>
            <li>Community-led initiatives drive social and economic progress.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Feedback;
