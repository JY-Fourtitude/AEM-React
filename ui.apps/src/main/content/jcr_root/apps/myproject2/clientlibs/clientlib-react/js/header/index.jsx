import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../css/styles.css';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 d-flex align-items-center">
            <h1 className="logo mr-auto"><Link to="/">Presento<span>.</span></Link></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <Link to="/" className="logo mr-auto"><img src="assets/img/logo.png" alt=""></Link> */}

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about-us" activeClassName="active">About</NavLink></li>              
                <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                <li className="drop-down">
                  <a href="#">Drop Down</a>
                  <ul>
                    <li className="drop-down">
                      <a href="#">Useful Links</a>
                      <ul>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName="active">About us</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                        <li><NavLink to="/tnc" activeClassName="active">Terms of service</NavLink></li>
                        <li><NavLink to="/privacy" activeClassName="active">Privacy policy</NavLink></li>    
                      </ul>
                    </li> 
                    <li className="drop-down">
                      <a href="#">Others</a>
                      <ul>
                        <li><a href="/#services">Our Services</a></li>
                        <li><a href="/#testimonials">Testimonials</a></li>
                        <li><a href="/#pricing">Pricing</a></li>
                        <li><a href="/#faq">FAQ</a></li> 
                      </ul>
                    </li>
                    <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              </ul>
            </nav>

            <Link to="/about-us" className="get-started-btn scrollto">Get Started</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;