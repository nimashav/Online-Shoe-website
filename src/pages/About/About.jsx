import React from 'react';
import './About.css';
import companyImage from '../../assets/companyImage.jpg';

const About = () => {

  return (
    <div className="about-us">
      <section className="company-history">
        <div className="history-content">
          <div className="history-text">
            <h2>Our History</h2>
            <br />
            <p>Founded in 1999, our company has been at the forefront of innovation, delivering high-quality products and services to our customers...</p>
            <br />
          </div>
          <div className="history-image">
            <img src={companyImage} alt="Company History" />
          </div>
        </div>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <br />
        <p>To provide the best services and solutions to our customers, fostering a culture of innovation and excellence...</p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <br />
        <p>Integrity, Excellence, Innovation, Customer Focus, Teamwork...</p>
      </section>
    </div>
  );
};

export default About;
