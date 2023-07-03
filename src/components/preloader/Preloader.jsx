import React from 'react';
import "./Preloader.css";
import Adarsh from "../../assets/Adarsh.png";

const Preloader = () => {
  return (
    <div className='Preloader'>
        <img src={Adarsh} alt="Preloader Image" className='preloader_image' />
    </div>
  )
}

export default Preloader
