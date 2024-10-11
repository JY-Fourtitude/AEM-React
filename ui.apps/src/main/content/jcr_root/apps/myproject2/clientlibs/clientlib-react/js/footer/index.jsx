import React from 'react';
import '../../css/styles.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Presento<span>.</span></h3>
              <p>
                A103 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="about-us.html">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="services.html">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="tnc.html">Terms of service</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="privacypolicy.html">Privacy policy</a></li>
              </ul>
            </div> 

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Others</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#services">Our Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#testimonials">Testimonials</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#pricing">Pricing</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#faq">FAQ</a></li>
              </ul>
            </div> 
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>Presento</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/presento-bootstrap-corporate-template/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;