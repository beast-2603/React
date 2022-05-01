import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsjszec', 'template_heiw7fn', form.current, 'h2UkSoeLLW18TMVWX')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>senapati.sohan@gmail.com</h5>
            <a rel="noreferrer" href="mailto:senapati.sohan@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Sohan Senapati</h5>
            <a rel="noreferrer" href="https://m.me/sohan.senapati.7186" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>************</h5>
            <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=+919078283132" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your FeedBack' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact