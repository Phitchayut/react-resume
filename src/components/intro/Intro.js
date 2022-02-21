import React, { useState, useEffect, useRef } from "react";
import "./Intro.css";
import Me from "../../img/me.png";
import Typical from "react-typical";
import AOS from 'aos'
import 'aos/dist/aos.css'


const Intro = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="i">
      <div data-aos="zoom-in-up" className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Beam Phitchayut</h1>
          <div className="typical-i">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Front End Developer",
                  1000,
                  "UX/UI Designer",
                  1000,
                  "Photographic",
                  1000,
                ]}
              />
            </h1>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
      
      </div>
      <div className="i-right">
        <div data-aos="fade-left" data-aos-duration="1000" className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
