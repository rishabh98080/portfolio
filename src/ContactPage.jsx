
import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <section id="contact-page">
      <h2 className="contact-title">Contact Details</h2>
      <div className="contact-details-card">
        <div className="contact-row"><span className="contact-label">Email:</span><u><i>rishabh24273239padney@gmail.com</i></u></div>
        <div className="contact-row"><span className="contact-label">Phone:</span> <a href="tel:+1234567890">+91 XXXXXXXX</a></div>
        <div className="contact-row"><span className="contact-label">Location:</span> Panki,Palamu,Jharkhand,India - 822122</div>
        <div className="contact-row"><span className="contact-label">LinkedIn:</span> <a href="https://www.linkedin.com/in/rishabh-kumar-064409330/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rishabh-kumar-064409330/</a></div>
        <div className="contact-row"><span className="contact-label">GitHub:</span> <a href="https://github.com/rishabh98080" target="_blank" rel="noopener noreferrer">github.com/rishabh98080</a></div>
      </div>
    </section>
  );
}

export default ContactPage;
