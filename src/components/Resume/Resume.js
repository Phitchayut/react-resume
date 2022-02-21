import React from 'react';
import { BrowserRouter, Link, Route, Routes, Outlet, NavLink } from 'react-router-dom';
import './Resume.css'
import Education from '../Resume/pages/Education'
import Work from '../Resume/pages/Work'
import Skill from '../Resume/pages/Skill'
import Interest from '../Resume/pages/Interest'
import { FaAtlassian , FaBimobject } from "react-icons/fa";



const Resume = () => {

    let activeStyle = {"background":"linear-gradient(to right,#f64f59, #c471ed,#12c2e9)",
    "boxShadow":"0 0 10px #c471ed",
    "textShadow":"0 0 5px #eaeaea",
    "color":"#eaeaea"};
    
      let activeClassName = "underline"
  return (
      <BrowserRouter>
    <div className='r'>
        <div data-aos="zoom-in-up" className="resume-title"><h1>Resume</h1></div>
        <div className="navbar-resume">
        <nav>
            <ul>
                <li data-aos="flip-right" data-aos-duration="1000">
                    <NavLink className='btn-resume' to="/" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Education</NavLink>
                </li>
                <li data-aos="flip-right" data-aos-duration="1000">
                    <NavLink className='btn-resume' to="/workhistory" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Work History</NavLink>
                </li>
                <li data-aos="flip-left" data-aos-duration="1000">
                    <NavLink className='btn-resume' to="/skills" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Skills</NavLink>
                </li>
                <li data-aos="flip-left" data-aos-duration="1000">
                    <NavLink className='btn-resume' to="/interest" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Interest</NavLink>
                </li>
            </ul>

        </nav>

        <Outlet />
            <div className="resume-content">
            <Routes>
            <Route index element={<Education />}></Route>
            <Route  path="/workhistory" element={<Work />}></Route>
            <Route  path="/skills" element={<Skill />}></Route>
            <Route  path="/interest" element={<Interest />}></Route>
        </Routes>
            </div>
        </div>




    </div>
    </BrowserRouter>
  );
};

export default Resume;
