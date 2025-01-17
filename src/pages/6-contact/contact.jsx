import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_grkb8ct', 'template_cgqb4o5', form.current, '91j3zMi9qTcErZ-x1')
      .then((result) => {
          console.log('Message sent:', result.text);
          alert('تم إرسال رسالتك بنجاح!');
      }, (error) => {
          console.log('Error:', error.text);
          alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Kontaktieren Sie uns</h1>
          <p className="contact-subtitle">Wir freuen uns auf Ihre Nachricht!</p>
        </div>
      </div>
      <div className="container contact-content">
        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" className="input-field" placeholder="Name" name="user_name" required />
            </div>
            <div className="form-group">
              <input type="text" className="input-field" placeholder="Telefonnummer" name="user_phone" required />
            </div>
            <div className="form-group">
              <input type="email" className="input-field" placeholder="E-Mail-Adresse" name="user_email" required />
            </div>
            <div className="form-group">
              <textarea className="textarea-field" placeholder="Nachricht" rows="5" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Senden</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src="ai-generated-8919314.png" className="contact-image" alt="Kontaktieren Sie uns" />
        </div>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.8945637814345!2d7.308868777248488!3d47.140331671150854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e1f4c5b8b4529%3A0x9bbcbb8bf9039742!2sLindenstrasse%2021%2C%202552%20Orpund!5e0!3m2!1sde!2sch!4v1737143131379!5m2!1sde!2sch"
          frameBorder="0"
          allowFullScreen
          title="Standortkarte"
          className="map-frame"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
