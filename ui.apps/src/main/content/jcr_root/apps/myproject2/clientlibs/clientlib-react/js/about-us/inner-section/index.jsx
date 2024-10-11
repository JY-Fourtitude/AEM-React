import React from 'react';
import '../../../css/styles.css';

const InnerSection = () => {
  return (
    <section className="inner-page">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <p>
          At fourtitude.asia, we are experienced in creating solutions that help public organisations reach and serve the people effectively and securely, while in compliance with the most demanding and stringent requirements.
        </p>
        <p>
          Following the best practices for public sector hosting, data protection, network access and more, fourtitude.asia helps public institutions address mission-critical needs, achieve strategic goals, and run day-to-day operations more effectively. We are technology agnostic and have cloud and on-premise solutions that can support virtually any workload.
        </p>
        <p>
          Whether you are looking to develop custom applications or explore emerging capabilities, our Public Sector Practice team will help you strategise, build, implement and/or manage fully-integrated public sector solutions.
        </p>
      </div>
    </section>
  );
};

export default InnerSection;
