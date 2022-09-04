import React from 'react';
import headshot from '../../assets/images/mm_small.png';

const About = () => {
  return (
    <section className="flex-row about-container">
        <h2 className="primary-section-title">// About Me //</h2>
      <section className="flex-row section-info about-info">
        <section className="bio-img">
          <img
            src={headshot}
            alt="Official headshot of Milfred Martinez"
          />
        </section>
        <section className="bio-text">
          <p>
            Milfred Martinez will start working as a DevOps Engineer for Accenture. 
            My work will focus primarily on supporting, automating and optimizing mission critical deployments in AWS, leveraging configuration management, CI/CD, and DevOps processes.
            I am currently pursuing an advanced learning in computer programming at
            Valencia Community College.
          </p>
        </section>
      </section>
    </section>
  );
};

export default About;
