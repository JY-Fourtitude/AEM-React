// import React, { useEffect, useRef } from 'react';
// import '../../../css/styles.css';
// import $ from 'jquery';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'owl.carousel';



// const FAQSection = () => {

//   return (
//     <section id="faq" className="faq">
//       <div className="container" data-aos="fade-up">

//         <div className="section-title">
//           <h2>Frequently Asked Questions</h2>
//         </div>

//         <ul className="faq-list" data-aos="fade-up">

//           <li>
//             <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq1" className="collapse" data-parent=".faq-list">
//               <p>
//                 Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq2" className="collapse" data-parent=".faq-list">
//               <p>
//                 Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq3" className="collapse" data-parent=".faq-list">
//               <p>
//                 Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq4" className="collapse" data-parent=".faq-list">
//               <p>
//                 Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq5" className="collapse" data-parent=".faq-list">
//               <p>
//                 Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
//               </p>
//             </div>
//           </li>

//           <li>
//             <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-x icon-close"></i></a>
//             <div id="faq6" className="collapse" data-parent=".faq-list">
//               <p>
//                 Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
//               </p>
//             </div>
//           </li>

//         </ul>

//       </div>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from 'react';
import '../../../css/styles.css';
import faqItems from '../../../assets/json/faq.json'

const FAQSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };


  return (
    <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="underline"></div>
        </div>

        <ul className="faq-list" data-aos="fade-up">
          {faqItems.map((item) => (
            <li key={item.id}>
              <a 
                className={activeItem === item.id ? 'active' : 'collapsed'}
                onClick={() => toggleItem(item.id)}
                style={{cursor:'pointer'}}
              >
                {item.question}
                <i className={`bx ${activeItem === item.id ? 'bx-x icon-close' : 'bx-chevron-down icon-show'}`}></i>
              </a>
              <div className={`collapse ${activeItem === item.id ? 'show' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;