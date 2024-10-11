import React from 'react';
import '../../../css/styles.css';

// Import the background image for local development
import heroBg from '../../../assets/img/hero-bg.jpg';

const HeroSection = () => {
  // // Check if we're in AEM environment
  // const isAEM = typeof Granite !== 'undefined';
  
  // // Use AEM DAM path in AEM environment, local path otherwise
  // const heroBg = isAEM 
  //   ? '/content/dam/myproject2/hero-bg.jpg'
  //   : heroBgLocal;

  const heroStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url("${heroBg}")`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    paddingTop: '82px',
  };
   
  return (
    <section id="hero" className="d-flex align-items-center" style={heroStyle}>
      <div className="container-fluid" data-aos="zoom-out" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row">
              <div className="col-xl-5">
                <h1>Better digital experience with Presento</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;