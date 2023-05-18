import React from 'react';
import './contact.css';

const Contact = () => (
  <>
    <div className="container">
      <h1>Get Intouch With Me</h1>
      <div>
        <form action="">
          <input type="text" required name="name" id="name" placeholder="Name" />
          <input type="email" required name="email" id="email" placeholder="Email" />
          <textarea name="message" required id="message" cols="30" rows="10" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </>
);

export default Contact;
