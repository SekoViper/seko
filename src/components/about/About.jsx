import React from 'react';
import './about.css';
import ProfileImg from '../../assets/img/Seko Dameh Livingstone.jpg';
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

const About = () => (
  <section className="about-sect">
    <h1>Get to know more about me</h1>
    <div className="about-container">
      <div>
        <img src={ProfileImg} alt="about" />
      </div>
      <div className="about-content">
        <p>
          I am Livingstone, an exceptionally talented and dedicated
          full-stack developer originating from the captivating nation of Ghana.
          With an extensive background in the field, Livingstone boasts a
          remarkable portfolio, consistently surpassing client expectations
          by delivering top-notch web and mobile applications.
        </p>
        <p>
          Fueling his unwavering commitment to programming is Livingstone&apos;s
          lifelong ardor, which ignited during his formative years and has
          continued to flourish ever since.
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
      </div>
    </div>
  </section>
);

export default About;
