import React, { useState } from 'react';
import '../../../css/styles.css';

// Images
import Tab1 from '../../../assets/img/tabs-1.jpg'
import Tab2 from '../../../assets/img/tabs-2.jpg'
import Tab3 from '../../../assets/img/tabs-3.jpg'
import Tab4 from '../../../assets/img/tabs-4.jpg'

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const tabContent = {
    'tab-1': {
      title: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
      image: Tab1,
      content: (
        <>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </>
      )
    },
    'tab-2': {
      title: "Neque exercitationem debitis soluta quos debitis quo mollitia officia est",
      image: Tab2,
      content: (
        <>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
        </>
      )
    },
    'tab-3': {
      title: "Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut assumenda",
      image: Tab3,
      content: (
        <>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
          </ul>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </>
      )
    },
    'tab-4': {
      title: "Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum",
      image: Tab4,
      content: (
        <>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className="font-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <ul>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
          </ul>
        </>
      )
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="tabs" className="tabs">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row d-flex">
          <li className="nav-item col-3">
            <a
              className={`nav-link ${activeTab === 'tab-1' ? 'active show' : ''}`}
              onClick={() => handleTabClick('tab-1')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ri-gps-line"></i>
              <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a
              className={`nav-link ${activeTab === 'tab-2' ? 'active show' : ''}`}
              onClick={() => handleTabClick('tab-2')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ri-body-scan-line"></i>
              <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a
              className={`nav-link ${activeTab === 'tab-3' ? 'active show' : ''}`}
              onClick={() => handleTabClick('tab-3')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ri-sun-line"></i>
              <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
            </a>
          </li>
          <li className="nav-item col-3">
            <a
              className={`nav-link ${activeTab === 'tab-4' ? 'active show' : ''}`}
              onClick={() => handleTabClick('tab-4')}
              style={{ cursor: 'pointer' }}
            >
              <i className="ri-store-line"></i>
              <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" >
          <div className={`tab-pane ${activeTab === activeTab ? 'active show' : ''}`} id={activeTab} >
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                <h3>{tabContent[activeTab].title}</h3>
                {tabContent[activeTab].content}
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={tabContent[activeTab].image} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;