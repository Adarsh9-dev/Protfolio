import React from 'react';
import "./Skill.css";
import { skillsObj } from "../../constant/skill.js";
import { motion } from "framer-motion";

const skill = () => {
  return (
    <motion.div 
      className='Skill' 
      initial={{scale: 0.7}}
      whileInView={{scale: 1}}
      transition={{duration: 0.4}}
    >
      <div className='skill_header'>
        <span className='skill_h_title'>Skills</span>
        <span className="skill_h_main">My technical level</span>
      </div>

      <div className='skill_footer'>
        <div className='skill_f_s_container'>
        {
          skillsObj.map((index,keyNo) => 
            <div className='skill_f_skill' key={keyNo}>
              <div className='skill_f_s_top'>
                <i className='bx bxs-badge-check skill_f_s_t_icon'></i>
                <span className='skill_f_s_t_title'>{index.title}</span>
              </div>
              <span className='skill_f_s_bottom'>{index.desc}</span>
            </div>          
          )
        }
        </div>
      </div>
    </motion.div>
  )
}

export default skill
