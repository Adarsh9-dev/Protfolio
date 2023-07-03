import React, { useEffect, useState } from 'react'
import "./Work.css";
import Card from '../card/Card';
import { project } from '../../constant/project';
import { motion } from 'framer-motion';

const Work = () => {
  const [innerWidth, setInnerWidth] = useState()
  useEffect(()=> {
    setInnerWidth(window.innerWidth);
    window.addEventListener('resize', ()=> {
      setInnerWidth(window.innerWidth);
    })

  },[])
  return (
    <motion.div 
      className='Work'
      initial={{scale: 0.7}}
      whileInView={{scale: 1}}
      transition={{duration: 0.4}}
    >
      <div className="work_head">
        <span className='work_h_title'>Projects</span>
        <span className='work_h_desc'>My technical understand</span>
      </div>
      <div className='work_b_container'>
        <div className='work_bottom'>
        {
          project.map((index, i)=> 
            <Card 
              key={i} 
              profile={index.profile}
              title={index.title}
              techStack={index.techStack}
              feature={index.feature}
              github={index.gitHub}
              link={index.link}
              tabletMode={innerWidth > 1290 ? true : false}
            />
          )
        }
        </div>
      </div>
      <div id="contact"/>
    </motion.div>
  )
}

export default Work
