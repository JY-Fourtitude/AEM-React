import React, { useEffect, useState } from 'react';
import '../../../css/styles.css';

const CountSection = () => {
  const [countersInitialized, setCountersInitialized] = useState(false);

  useEffect(() => {
    // Load IcoFont CSS from CDN
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://cdn.jsdelivr.net/npm/@icon/icofont@1.0.1-alpha.1/icofont.min.css';
    document.head.appendChild(linkElement);

    // Load and initialize CountUp.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js';
    script.async = true;
    script.onload = () => {
      if (typeof jQuery !== 'undefined' && jQuery.fn.counterUp) {
        jQuery('[data-toggle="counter-up"]').counterUp({
          delay: 10,
          time: 1000
        });
        setCountersInitialized(true);
      }
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-simple-smile"></i>
              <span data-toggle="counter-up">232</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-document-folder"></i>
              <span data-toggle="counter-up">521</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-live-support"></i>
              <span data-toggle="counter-up">1,463</span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-users-alt-5"></i>
              <span data-toggle="counter-up">15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;