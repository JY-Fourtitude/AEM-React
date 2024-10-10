import React from 'react';
import '../../css/styles.css';

const Header = () => {
  return (

    <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 d-flex align-items-center">
            <h1 className="logo mr-auto"><a href="index.html">Presento<span>.</span></a></h1>
           {/* Uncomment below if you prefer to use an image logo 
           <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt=""></a> */}
  
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="#header">Home</a></li>
                <li><a href="about-us.html">About</a></li>              
                <li><a href="blog.html">Blog</a></li>
                <li className="drop-down"><a href="">Drop Down</a>
                  <ul>
                    <li className="drop-down"><a href="#">Useful Links</a>
                      <ul>
                        <li className="active"><a href="#header">Home</a></li>
                        <li><a href="about-us.html">About us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="tnc.html">Terms of service</a></li>
                        <li><a href="privacypolicy.html">Privacy policy</a></li>    
                      </ul>
                    </li> 
                    <li className="drop-down"><a href="#">Others</a>
                      <ul>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#faq">FAQ</a></li> 
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                  </ul>
                </li>
                <li><a href="contactus.html">Contact</a></li>
              </ul>
            </nav>
  
            <a href="#about" className="get-started-btn scrollto">Get Started</a>
          </div>
        </div>
  
      </div>
    </header>
  );
};

export default Header;