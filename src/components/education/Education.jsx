import React from 'react';
import { motion} from 'framer-motion';
import  { educationObj } from "../../constant/education";
import "./Education.css";

const Details = ({ position,company,startDate,endDate,location,content })=> {
  return (
    <motion.div className='Details'
      initial={{opacity: 0, rotate: -20, scale: 0}}
      whileInView={{opacity: 1, rotate: 0, scale: 1}}
      whileHover={{backgroundColor: 'white', borderRadius: 15, scale: 1.2}}
      transition={{duration: 0.5}}
    >
      <div className="details_wrapper">
        <div className='details_category'>{position}, <span className='details_company'>@{company}</span></div>
        <div className='details_desc'>{startDate} - {endDate} | {location}</div>
        <div className="details_content">{content}</div>
      </div>
      <motion.i class='bx bxs-circle details_circle' 
        initial={{opacity: 0}}
        whileInView={{scale: [1.5, 1], opacity: 1}}
        transition={{duration: 0.5}}
      />

    </motion.div>
  )
}
const Education = () => {

  return (
    <div className='Experience'>
      
      <div className='ex_header'  >
        <span className='ex_h_title'>Education</span>
      </div>

      <div className='ex_wrapper' >
      <div className='ex_footer'>
        <div className='ex_f_content'>
        {
          educationObj.map((index, i) => 
            <Details key={i}
              position={index.position}
              company={index.company} 
              startDate={index.startDate} 
              endDate={index.endDate} 
              location={index.location} 
              content={index.text}
            />
          )
        }
        </div>
      </div>
      </div>
      <div id="project"/>
    </div>
  )
}

export default Education
