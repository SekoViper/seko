import React from 'react';
import './contact.css';

const Contact = () => (
  <>
    <div className="container">
      <h1>Get In Touch With Me</h1>
      <p>I'm always interested in hearing about new projects, 
        so if you'd like to chat please get in touch.</p>
      <div>
        <form
          id="fs-frm"
          name="simple-contact-form"
          acceptCharset="utf-8"
          action="https://formspree.io/f/mdojgyyj"
          method="post"
        >
          <input type="text" required name="name" id="name" placeholder="Name" />
          <input type="email" required name="_replyto" id="email" placeholder="Email" />
          <textarea name="message" required id="message" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </>
);

export default Contact;
