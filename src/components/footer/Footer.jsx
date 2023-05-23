import React from 'react';
import './footer.css';
import GithubIcon from '../../assets/img/github_btn_icon.svg';
import LinkedinIcon from '../../assets/img/Linkedin_icon.svg';
import MediumIcon from '../../assets/img/medium_icon.svg';

const Footer = () => (
  <div>
    <footer>
      <div>
        <h3>Livingstone Dameh</h3>
      </div>
      <div>
        <h4>Quick Links</h4>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="/contact">Contact</a>
      </div>
      <div>
        <h4>Connect with me</h4>
        <div className="social-icons">
          <a href="https://github.com/SekoViper" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github" className="social-icon" /></a>
          <a href="https://linkedin.com/in/livingstone-dameh-b755a5151" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="LinkedIn" className="social-icon" /></a>
          <a href="https://medium.com/@damehlivingstone1/vite-vs-create-reactapp-2ebbcd067d46" target="_blank" rel="noreferrer"><img src={MediumIcon} alt="Medium" className="social-icon" /></a>
        </div>
      </div>
    </footer>
    <hr />
    <div className="copy-right">© 2023 Livingstone. All rights reserved.</div>
  </div>
);

export default Footer;
