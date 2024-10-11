import React, { useEffect, useRef } from 'react';
import '../../../css/styles.css';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

/*Images*/
import Client1 from '../../../assets/img/clients/client-1.png';
import Client2 from '../../../assets/img/clients/client-2.png';
import Client3 from '../../../assets/img/clients/client-3.png';
import Client4 from '../../../assets/img/clients/client-4.png';
import Client5 from '../../../assets/img/clients/client-5.png';
import Client6 from '../../../assets/img/clients/client-6.png';
import Client7 from '../../../assets/img/clients/client-7.png';
import Client8 from '../../../assets/img/clients/client-8.png';

const ClientSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const $carousel = $(carouselRef.current);
    $carousel.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 6
        }
      }
    });

    // Cleanup function
    return () => {
      $carousel.owlCarousel('destroy');
    };
  }, []);

  const clientImages = [
    Client1, Client2, Client3, Client4,
    Client5, Client6, Client7, Client8
  ];

  return (
 
      <section id="clients" className="clients">
        <div className="container-fluid" data-aos="zoom-in">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div ref={carouselRef} className="owl-carousel clients-carousel">
                {clientImages.map((image, index) => (
                  <img key={index} src={image} alt={`Client ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default ClientSection;