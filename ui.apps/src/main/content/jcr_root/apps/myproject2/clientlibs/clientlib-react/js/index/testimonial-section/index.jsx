import React, { useEffect, useRef } from 'react';
import '../../../css/styles.css';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

// Images
import Testimonial1 from '../../../assets/img/testimonials/testimonials-1.jpg'
import Testimonial2 from '../../../assets/img/testimonials/testimonials-2.jpg'
import Testimonial3 from '../../../assets/img/testimonials/testimonials-3.jpg'
import Testimonial4 from '../../../assets/img/testimonials/testimonials-4.jpg'
import Testimonial5 from '../../../assets/img/testimonials/testimonials-5.jpg'


const TestimonialSection = () => {
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
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    // Cleanup function
    return () => {
      $carousel.owlCarousel('destroy');
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.</p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-10">
            <div ref={carouselRef} className="owl-carousel testimonials-carousel">
              {[
                { img: Testimonial1, name: "Saul Goodman", role: "Ceo & Founder" },
                { img: Testimonial2, name: "Sara Wilsson", role: "Designer" },
                { img: Testimonial3, name: "Jena Karlis", role: "Store Owner" },
                { img: Testimonial4, name: "Matt Brandon", role: "Freelancer" },
                { img: Testimonial5, name: "John Larson", role: "Entrepreneur" }
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src={testimonial.img} className="testimonial-img" alt="" />
                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.role}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;