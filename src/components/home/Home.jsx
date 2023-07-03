import React, {useEffect, useState} from 'react';
import "./Home.css";
import Hand from "../../assets/hand.svg";
import Send from "../../assets/send.svg";
import Scroll from "../../assets/scroll.svg";
import ProfileImage from "../../assets/profile2.png";
import { motion } from "framer-motion";

const Home = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [insideWidth, setInsideWidth] = useState();

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
     setScrollValue(window.pageYOffset)

    })
    setInsideWidth(window.innerWidth);
    window.addEventListener('resize',()=> {
      setInsideWidth(window.innerWidth);
    })
  },[])
  return (
    <>
      {
        insideWidth > 1285 ?
          <div className='Home'>
          <div className='home_container'>
            <div className='left_home'>
              <motion.a href="https://www.instagram.com/adarshpriyadarshi.me"  target="_blank"className='left_home_img' 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <i className='bx bxl-instagram left_home_img_edit' ></i>
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/adarshpriyadarshi-7b58711a7"  target="_blank"className='left_home_img' 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <i className='bx bxl-linkedin-square left_home_img_edit' ></i>
              </motion.a>
              <motion.a href="https://github.com/Adarsh9-dev" target="_blank" className='left_home_img' 
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <i className='bx bxl-github left_home_img_edit' ></i>
              </motion.a>
            </div>
            
            <div className='middle_home'>
              
              <div className='middle_home_name'>
                <span className='middle_home_name_inner'>Adarsh Priyadarshi
                <img src={Hand} alt="Hii" className='middle_home_name_hand'/></span>
              </div>
              
              <div className='middle_home_about'>
                <span className='middle_home_about_line' ></span>
                <span className='middle_home_about_inner'>Full Stack Developer</span>
              </div>
              
              <div className='middle_home_desc'>
                <p className='middle_home_desc_inner'> Biocreater, Explorer, Learner, Critical thinker, Creative,  Techlover, Cyclist, Fitness fantasy, Raider, Pathetic dancer, Actor, NSS volunteer.</p>
              </div>
              
              <div className='middle_home_send'>
                <motion.a className='btn distance distance5'
                  whileTap={{scale: 0.9}}
                  whileHover={{backgroundColor: 'black',scale: 1.1} }
                  href="#contact"
                >
                  <span className='middle_home_send_inner'>Say Hello </span>
                  <img src={Send} alt="Send Image" className='send_hello'/>
                </motion.a>
              </div>

              <a href="#about" className='middle_home_scroll'>
                <img src={Scroll} className='middle_home_scroll_inner' alt="scroll" />
                <span className='middle_home_scroll_text'>Scroll down</span>
                <i className='bx bx-down-arrow-alt'/>
              </a>

            </div>
            
            <div className='right_home'>
              <img src={ProfileImage} alt="Profile Image" className='right_home_image'/>
            </div>

          </div>

          {
            scrollValue > (window.innerHeight/2) &&
              <motion.a href="#" className='header_arrow'
                whileTap={{color: "black", scale: 0.9}}
                whileHover={{scale: 1.1}}
              >
                <i class='bx bxs-up-arrow-square' ></i>
              </motion.a>
          }
          
          
          </div>
          :
          <div className='Home'>
          <div className='home_container'>
            <div className='home_inside_container'>
              <div className='left_home'>
                <motion.a href="https://www.instagram.com/adarshpriyadarshi.me"  target="_blank" className='left_home_img' 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  <i className='bx bxl-instagram left_home_img_edit' ></i>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/adarshpriyadarshi-7b58711a7"  target="_blank" className='left_home_img' 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  <i className='bx bxl-linkedin-square left_home_img_edit' ></i>
                </motion.a>

                <motion.a href="https://github.com/Adarsh9-dev" target="_blank"  className='left_home_img' 
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  <i className='bx bxl-github left_home_img_edit' ></i>
                </motion.a>
              </div>

              <div className='right_home1'>
                <img src={ProfileImage} alt="Profile Image" className='right_home_image'/>
              </div>
            </div>
            
            <div className='middle_home middle_home1'>
              
              <div className='middle_home_name'>
                <span className='middle_home_name_inner'>Adarsh Priyadarshi
                <img src={Hand} alt="Hii" className='middle_home_name_hand'/></span>
              </div>
              
              <div className='middle_home_about'>
                <span className='middle_home_about_line' ></span>
                <span className='middle_home_about_inner'>Full Stack Developer</span>
              </div>
              
              <div className='middle_home_desc'>
                <p className='middle_home_desc_inner'>Biocreater, Explorer, Learner, Critical thinker, Creative,  Techlover, Cyclist, Fitness fantasy, Raider, Pathetic dancer, Actor, NSS volunteer.</p>
              </div>
              
              <div className='middle_home_send'>
              <motion.a className='btn distance distance5'
                  whileTap={{scale: 0.9}}
                  whileHover={{backgroundColor: 'black',scale: 1.1} }
                  href="#contact1"
                >
                  <span className='middle_home_send_inner'>Say Hello </span>
                  <img src={Send} alt="Send Image" className='send_hello'/>
                </motion.a>
              </div>
            </div>
            

          </div>

          {
            scrollValue > (window.innerHeight/2) &&
              <motion.a href="#" className='header_arrow'
                whileTap={{color: "black", scale: 0.9}}
                whileHover={{scale: 1.1}}
              >
                <i class='bx bxs-up-arrow-square' ></i>
              </motion.a>
          }
          
          
          </div>

      }
      <div id="about"/>
    </>
  )
}

export default Home
