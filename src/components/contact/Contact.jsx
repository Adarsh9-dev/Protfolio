import React, {useRef, useState} from 'react'
import "./Contact.css";
import Send from "../../assets/send.svg";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";


const Contact = () => {
  const myForm = useRef();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadder, setIsLoadder] = useState(false);
  

  const handelSubmit = async (e)=> {
    setIsLoadder(true);
    e.preventDefault();

    emailjs.sendForm(
      'service_63s3qt4',
      'template_n94lptt',
      myForm.current, 
      'CmODOLnVb83lrLUOr'
    )
      .then((result)=> {
        console.log(result.text);
        setIsLoadder(false);
        setName('');
        setEmail('');
        setMessage('');

        setIsSent(true)
        setTimeout(()=> {
          setIsSent(false);
        },5000)

      }, (error)=> {
        console.log(error.text)
        setIsError(true)
        setTimeout(()=> {
          setIsError(false);
        },5000)

      })

  }

  return (
    <motion.div 
      className='Contact'
      initial={{scale: 0.7}}
      whileInView={{scale: 1}}
      transition={{duration: 0.4}}
      id="contact1"
    >
    <div className='contact_container' >
      
      <div className='contact_head'>
        <span className='contact_h_title'>Contact Me</span>
      </div>

      <div className='contact_body'>

        <form className='contact_b_form' onSubmit={handelSubmit} ref={myForm}>
          <div className='contact_b_f_name'>
            <fieldset>
              <legend>Name</legend>
              <input type="text" name="name" className='form_input' value={name} onChange={(e)=>setName(e.target.value)} required/>
            </fieldset>
          </div>
          <div className='contact_b_f_email'>
            <fieldset>
              <legend>Email</legend>
              <input type="email" name="email" className='form_input' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </fieldset>
          </div>
          <div className='contact_b_f_content'>
            <fieldset>
              <legend>Message</legend>
              <textarea type="text" name="message" className='form_input form_message'  value={message} onChange={(e)=>setMessage(e.target.value)} required/>
            </fieldset>
          </div>
          <div className='contact_b_f_send'>
            <motion.button 
              type="submit" 
              className='btn distance distance1' 
              whileTap={{scale: 0.9}}
              whileHover={{scale: 1.1, backgroundColor: 'black'}}
            >
            {
              !isLoadder ?
                <>
                  <span className='form_submit_title'>Send Message</span>
                  <img src={Send} alt="Send image" className='send_hello' />
                </>:
                <ClipLoader 
                  color={'#fff'}  
                  loading={'true'}
                  size={"25px"}
                />

            }
            </motion.button>
          </div>
          <div className='contact_b_f_send1 distance2'>
            <motion.button 
              type="submit" 
              className='btn distance distance1' 
              whileTap={{scale: 0.9}}
              whileHover={{scale: 1.1, backgroundColor: 'black'}}
            >
              <span className='form_submit_title'>Send</span>
              <img src={Send} alt="Send image" className='send_hello' />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
    {
      isSent && 
        <motion.div 
          className='success_message'
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.3}}
        >
          <i class='bx bx-happy-heart-eyes emailjs_emoji'></i> 
          Email sent successfully!
        </motion.div>
    }
    {
      isError && 
        <motion.div 
          className='success_message color_change'
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.3}}
        >
          <i class='bx bx-sad emailjs_emoji'></i> 
          Failed to send email.
        </motion.div>
    }
    </motion.div>
  )
}

export default Contact
