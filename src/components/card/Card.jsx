import React from 'react';
import "./Card.css";
import Profile from "../../assets/Hotel2.png";
import { motion } from 'framer-motion';
import Github from "../../assets/github.png";
import Link from "../../assets/link.png";

const card = ({ profile, title, techStack, feature, github, link, tabletMode }) => {
  console.log(tabletMode)
  return (
    <>
    {
      tabletMode ?
        <motion.div className='Card'
          whileHover={{
            backgroundColor: 'black', 
            border: '1px solid black'
          }}
        >
          
          <motion.div className='card_top' >
            <img src={profile} alt="This is the part of image" className='card_t_image'/>
            <div className='card_top_black' />
          </motion.div>

          <div className='card_bottom'>
            <span className='card_b_title'>{title}</span>
            <div className='card_b_container'>
              <span className='card_b_head'><span className='card_b_bold'>Tech Stack:- </span>{techStack}</span>
              <span className='card_b_head'> <span className='card_b_bold'>Features:- </span>{feature}</span>
            </div>
          </div>

          <a href={github} target='_blank'>
            <motion.img src={Github} alt= "Github image" className='github_img' whileTap={{scale: 0.9}}/>
          </a>

          {
            link !== null &&
              <a href={link} target='_blank'>
                <motion.img src={Link} alt= "Link image" className='link_img' whileTap={{scale: 0.9}}/>
              </a>
          }

        </motion.div>
        :
        <motion.div className='Card card_show'
          animate={{
            backgroundColor: 'black', 
            border: '1px solid black'
          }}
        >
          
          <motion.div className='card_top' >
            <img src={profile} alt="This is the part of image" className='card_t_image image_show'/>
            <div className='card_top_black black_show' />
          </motion.div>

          <div className='card_bottom'>
            <span className='card_b_title title_show'>{title}</span>
            <div className='card_b_container'>
              <span className='card_b_head'><span className='card_b_bold tech_show'>Tech Stack:- </span>{techStack}</span>
              <span className='card_b_head'> <span className='card_b_bold tech_show'>Features:- </span>{feature}</span>
            </div>
          </div>

          <a href={github} target='_blank'>
            <motion.img src={Github} alt= "Github image" className='github_img git_show' whileTap={{scale: 0.9}}/>
          </a>

          {
            link !== null &&
              <a href={link} target='_blank'>
                <motion.img src={Link} alt= "Link image" className='link_img link_show' whileTap={{scale: 0.9}}/>
              </a>
          }
        </motion.div>  
    }
    </>
  )
}

export default card
