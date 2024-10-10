import React, { useEffect, useRef } from 'react';
import '../../../css/styles.css';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

/*Images*/
// Import images for local development
// import client1 from '../../assets';
// import client2 from '../assets/img/clients/client-2.png';
// import client3 from '../assets/img/clients/client-3.png';
// import client4 from '../assets/img/clients/client-4.png';
// import client5 from '../assets/img/clients/client-5.png';
// import client6 from '../assets/img/clients/client-6.png';
// import client7 from '../assets/img/clients/client-7.png';
// import client8 from '../assets/img/clients/client-8.png';

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

    const imagePaths = [
        '/content/dam/myproject2/clients/client-1.png',
        '/content/dam/myproject2/clients/client-2.png',
        '/content/dam/myproject2/clients/client-3.png',
        '/content/dam/myproject2/clients/client-4.png',
        '/content/dam/myproject2/clients/client-5.png',
        '/content/dam/myproject2/clients/client-6.png',
        '/content/dam/myproject2/clients/client-7.png',
        '/content/dam/myproject2/clients/client-8.png'
      ];


  return (
    <>
   
    <main id="main">
    {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" className="clients">
      <div className="container-fluid" data-aos="zoom-in">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div ref={carouselRef}  className="owl-carousel clients-carousel">
            {/* <img src="../assets/img/clients/client-1.png" alt="Client 1"/> */}

            {imagePaths.map((path, index) => (
                                    <img key={index} src={path} alt={`Client ${index + 1}`} />
                                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- End Clients Section --> */}
    </main>
    

    </>
  );
};

export default ClientSection;