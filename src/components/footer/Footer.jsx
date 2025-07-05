import React from 'react';
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className='Footer'>
    
      <div className='footer_1st'>
        <span className='footer_1st_title'>Adarsh</span>
      </div>
      
      <div className='footer_2nd'>
        <span className='footer_2nd_quote'> "Full Stack Developer | AI Enthusiast | Problem Solver" </span>
        <span className='footer_2nd_quote1'> "Full Stack Developer | AI Enthusiast" </span>
        <span className='footer_2nd_quote2'> "Full Stack Developer" </span>
      </div>
      
      <div className='footer_3rd'>
        <motion.a href="mailto:adarshpriyadarshi001@gmail.com" target='_blank' className='left_home_img' 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <i class='bx bxs-envelope left_home_img_edit'></i>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/adarshpriyadarshi-7b58711a7" target='_blank' className='left_home_img' 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <i className='bx bxl-linkedin-square left_home_img_edit' ></i>
        </motion.a>
        <motion.a href="https://github.com/Adarsh9-dev" target='_blank' className='left_home_img' 
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
        >
          <i className='bx bxl-github left_home_img_edit' ></i>
        </motion.a>
      </div>
      
      <div className='footer_4th'>
        <span className='footer_4th_desc'>© Copyright. All Rights Reserved</span>
      </div>

    </div>
  )
}

export default Footer
