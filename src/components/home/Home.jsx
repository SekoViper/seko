import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Project from '../projects/Project';
import Contact from '../contact/Contact';
import profilePic from '../../assets/img/Seko _Dameh_Livingstone_about_img.png';
import GithubIcon from '../../assets/img/github_btn_icon.svg';
import LinkedinIcon from '../../assets/img/Linkedin_icon.svg';
import MediumIcon from '../../assets/img/medium_icon.svg';
import Tailwind from '../../assets/stacks/ARC.png';
import CSS from '../../assets/stacks/CSS.png';
import Ruby from '../../assets/stacks/Diamond.png';
import JS from '../../assets/stacks/js.png';
import HTML from '../../assets/stacks/HTML.png';
import ReactIcon from '../../assets/stacks/SEKO 1.png';
import PostgreSQL from '../../assets/stacks/PostgreSQL.png';
import Rails from '../../assets/stacks/RAILS.png';
import Redux from '../../assets/stacks/Redux.png';
import Jest from '../../assets/stacks/JEST.png';

const Home = () => (
  <>
    <main>
      <section className="home-container">
        <div>
          <h1>
            Hi I&apos;m &nbsp;
            {' '}
            <br />
            <span className="firstname">Livingstone</span>
          </h1>
          <h2>A full-stack developer</h2>
        </div>
        <p>
          A highly skilled and passionate full-stack developer.
          Hailing from a beautiful country called Ghana,
          with years of experience under my belt, I have a proven
          track record of delivering high-quality web and mobile
          applications that meet and exceed client expectations.
        </p>
        <h4>Let&apos;s connect</h4>
        <div className="social-icons">
          <a href="https://github.com/SekoViper" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github" className="social-icon" /></a>
          <a href="https://linkedin.com/in/livingstone-dameh-b755a5151" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="LinkedIn" className="social-icon" /></a>
          <a href="https://medium.com/@damehlivingstone1/vite-vs-create-reactapp-2ebbcd067d46" target="_blank" rel="noreferrer"><img src={MediumIcon} alt="Medium" className="social-icon" /></a>
        </div>
      </section>

      <section className="about-section">
        <div className="img">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="content">
          <h2>About Me</h2>
          <p>
            I am a highly skilled and passionate full-stack developer
            with years of experience under my belt, I have a proven
            track record of delivering high-quality web and
            mobile applications that meet and exceed client
            expectations.
          </p>
          <p>
            My passion for programming started at a young age and
            has only grown stronger over the years.
          </p>
          <div className="stacks">
            Here are some of the technologies I use to build dynamic web apps:
            {' '}
            <br />
            <div className="stacks-list">
              <img src={Rails} alt="Rails" />
              <img src={Ruby} alt="Ruby" />
              <img src={CSS} alt="CSS" />
              <img src={Tailwind} alt="Taillwind" />
              <img src={HTML} alt="HTML" />
              <img src={JS} alt="JS" />
              <img src={Redux} alt="Redux" />
              <img src={PostgreSQL} alt="Postgresql" />
              <img src={ReactIcon} alt="React" />
              <img src={Jest} alt="Jest" />
            </div>
          </div>
          <br />
          <div className="contact-btns">
            <NavLink className="btn-abt" exact to="/about">
              Read more
            </NavLink>
            <NavLink className="btn-contact" exact to="/contact">
              Contact me
            </NavLink>
          </div>
        </div>
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Contact />
      </section>
    </main>
    <div className="animated-background" />
  </>
);

export default Home;
