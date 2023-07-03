import React, {useEffect, useState} from 'react'
import "./Header.css";

const Header = () => {
  const [isButton, setIsButton] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      const innerHeight = window.innerHeight;
      const innerWidth = window.innerWidth;
      const scrollHeight = window.pageYOffset;
      const totalHeight = document.getElementById("root").offsetHeight;
      if (scrollHeight > 20 && innerWidth > 1300) {
        document.getElementById("Header").classList.add("scroll_shadow");
      }
      if (scrollHeight < 10 && innerWidth > 1300 || innerWidth === 1300) {
        document.getElementById("Header").classList.remove("scroll_shadow");
      }
      if (innerHeight+scrollHeight >= totalHeight && innerWidth <= 1300) {
        setIsButton(true);
      }
      else {
        setIsButton(false);
      }
    })
  },[])
  
  return ( 
    <>
    {!isButton &&
    <div className='Header' id="Header">
      <div className='Nav'>
    
        <div className='left_nav'>
          <a href="#" className='logo'>Adarsh</a>
        </div>

        <div className='right_nav'>
          <ul className='nav_list'>
            
            <li className='nav_list_item'>
              <a href="#" className='nav_list_link'>
                <i className='bx bx-home nav_list_link_icon'></i>
                <span className='nav_link_title'>Home</span>
              </a>
            </li>

            <li className='nav_list_item'>
              <a href="#about" className='nav_list_link'>
                <i className='bx bx-user nav_list_link_icon'></i>
                <span className='nav_link_title'>About</span>
              </a>
            </li>


            <li className='nav_list_item'>
              <a href="#skill" className='nav_list_link'>
                <i className='bx bx-file nav_list_link_icon'></i>
                <span className='nav_link_title'>Skills</span>
                
              </a>
            </li>

            <li className='nav_list_item'>
              <a href="#project" className='nav_list_link'>
                <i className='bx bx-code nav_list_link_icon'></i>
                <span className='nav_link_title'>Projects</span>
              </a>
            </li>

            <li className='nav_list_item'>
              <a href="#contact1" className='nav_list_link'>
                <i className='bx bx-send nav_list_link_icon'></i>
                <span className='nav_link_title'>Contact</span>
              </a>
            </li>

          </ul>
        </div>

      </div> 
    </div>
    }
    </>
  )
}

export default Header;
