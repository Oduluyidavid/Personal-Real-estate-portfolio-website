/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Headline from '../shared/Headline';

// motion animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
      setIsLoading(true)
  
      emailjs
        .sendForm(
          "service_47xfsjb",
          "template_2pwilsw",
          form.current,
          "IaX_K9eE27hll44TG",
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsLoading(false)
            alert("Email Sent");
          },
          (error) => {
            setIsLoading(false)
            console.log(error.text);
          }
        );
    };


    return (
        <div className='contact mx-auto mt-8 px-7' id='contact'>
            <Headline title={'CONTACT'} subtitle={'Feel free to Contact Me by Submitting the form below and I will get back to you as soon as possible'} />

            <motion.div className='md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32'
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            >
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                    <label htmlFor=''>Name:</label>
                    <input type='text' name='name' id='name' placeholder='Enter your name' className='p-5' required />
                    <label htmlFor=''>Email:</label>
                    <input type='email' name='email' id='email' placeholder='Enter your Email Address' className='p-5' required />
                    <label htmlFor=''>Message:</label>
                    <textarea name='message' id='message' cols='80' rows='10' placeholder='Enter your message' className='p-5 mb-8' required></textarea>
                    <button type="Sumbit"
                      disabled={isLoading}
                      value="send"
                      onClick={(e) => sendEmail(e)}
                      className="btn px-14 py-4 shadow-sm">{isLoading ? "loading..." : "Submit"}
                    </button>
                </form>
            </motion.div>
            </div>
        
        
    );
};

export default Contact;