import React from 'react';
import "./About.css";
import File from "../../assets/files.svg";
import Profile from "../../assets/Profile4.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className='About'
      initial={{scale: 0.7}}
      whileInView={{scale: 1}}
      transition={{duration: 0.4}}
    >
      <div className='about_head'>
        <span className='about_head_title'>About Me</span>
        <span className='about_head_desc'>My Introduction</span>
      </div>

      <div className='about_f_container'>
      <div className='about_footer'>
        <div className='about_f_left'>
          <img src={Profile} alt="Profile Image" className='about_f_left_image'/>
        </div>

        <div className="about_f_right">
          <div className='about_f_right_show'>
            <div className='about_f_right_show_in'>
              <i className="uil uil-award-alt about_f_right_show_flex"></i>
              <span className='about_f_right_show_in_title'>Experience</span>
              <span className='about_f_right_show_in_total'>1+ Years</span>
            </div>

            <div className='about_f_right_show_in'>
              <i className="uil uil-shield about_f_right_show_flex"></i>
              <span className='about_f_right_show_in_title'>Completed</span>
              <span className='about_f_right_show_in_total'>15+ Projects</span>
            </div>

            <div className='about_f_right_show_in'>
              <i className="uil uil-head-side about_f_right_show_flex"></i>
              <span className='about_f_right_show_in_title'>Support</span>
              <span className='about_f_right_show_in_total'>Online 24/7</span>
            </div> 
          </div>
          <div className='about_f_right_text'>
            Hello, I'm <b>Adarsh Priyadarshi</b>, a passionate Full Stack Developer with 1+ years of experience in MERN Stack development. I specialize in creating innovative solutions using modern technologies like React, NextJS, NodeJS, and MongoDB. Currently working at Indian App Guy, I've developed various applications including AI-powered tools, Chrome extensions, and scalable web applications. I'm also the proud recipient of the National Merit-cum-Means Scholarship (NMMS) and enjoy contributing to open-source projects.
          </div>
          <div className='about_f_right_cv'>
            <a href='https://drive.google.com/file/d/1e_jVjGQcnkpCy-jvA7CBPjC_F5kQxhlP/view?usp=sharing' className='btn about_f_btn' title='Download Resume' target="_blank">
              <span className='about_f_btn_text'>Download CV</span>
              <img src={File} alt="Text file Image" className='about_f_btn_image'/>
            </a>
            <a href="https://drive.google.com/file/d/1C2ir-vZKPYpP0yLQB8B8vFrO966DgjON/view?usp=sharing" className='about_f_right_cv_video' target='_blank' title='Video Resume'>
             <i class="uil uil-play-circle about_f_right_cv_video_in"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
      <div id="skill"/>
    </motion.div>
  )
}

export default About
