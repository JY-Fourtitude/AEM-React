// import React, { useState, useEffect } from 'react';
// import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'icofont/dist/icofont.min.css';



// /*AOS*/
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// /*Internal Components*/
// import Header from './header'
// import Index from './index';
// import Footer from './footer';

// const App = () => {

//   /*AOS - Animated on Scroll*/
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });

//     // Load Remix Icon and Icofont CSS
//     const iconStyles = [
//       'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css',
//       'https://cdn.jsdelivr.net/npm/@icon/icofont@1.0.1-alpha.1/icofont.min.css'
//     ];

//     const links = iconStyles.map(href => {
//       const link = document.createElement('link');
//       link.href = href;
//       link.rel = 'stylesheet';
//       document.head.appendChild(link);
//       return link;
//     });

//     // Cleanup function
//     return () => {
//       links.forEach(link => document.head.removeChild(link));
//     };

//   }, []);


//   return (
//     <React.StrictMode>
//        <Header />
//        <Index/>
//        <Footer/>
//     </React.StrictMode>
//   );
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const rootElement = document.getElementById('react-root');
//   if (rootElement) {
//     try {
//       const root = createRoot(rootElement);
//       root.render(<App />);
//       console.log('React app successfully rendered');
//     } catch (error) {
//       console.error('Error rendering React app:', error);
//     }
//   } else {
//     console.error('Failed to find the root element with id "react-root"');
//   }
// });

import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'icofont/dist/icofont.min.css';

/*AOS*/
import AOS from 'aos';
import 'aos/dist/aos.css';

/*Internal Components*/
import Header from './header';
import Index from './index';
import Footer from './footer';
import AboutUs from './about-us'; 
import ContactUs from './contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const iconStyles = [
      'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css',
      'https://cdn.jsdelivr.net/npm/@icon/icofont@1.0.1-alpha.1/icofont.min.css'
    ];

    const links = iconStyles.map(href => {
      const link = document.createElement('link');
      link.href = href;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach(link => document.head.removeChild(link));
    };
  }, []);

  return (
    <Router basename="/content/myproject2/en">
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          {/* Add more routes as needed */}
          <Route component={Index} /> {/* This will catch all other routes and render Index */}
        </Switch>
        <Footer />
      </React.StrictMode>
    </Router>
  );
};

const AppWrapper = () => {
  return (
    <Router basename="/content/myproject2/en">
      <App />
    </Router>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('react-root');
  if (rootElement) {
    try {
      const root = createRoot(rootElement);
      root.render(<AppWrapper />);
      console.log('React app successfully rendered');
    } catch (error) {
      console.error('Error rendering React app:', error);
    }
  } else {
    console.error('Failed to find the root element with id "react-root"');
  }
});

export default AppWrapper;