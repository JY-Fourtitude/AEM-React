import React, { useEffect } from 'react';
import '../../../css/styles.css';

const BreadCrumb = () => {
 
  return (
    <section className="breadcrumbs">
    <div className="container">

      <ol>
        <li><a href="index.html">Home</a></li>
        <li>About Us</li>
      </ol>
      <h2>About Us</h2>

    </div>
  </section>
  );
};

export default BreadCrumb;