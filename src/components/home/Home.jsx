import React from 'react';
import './home.css';
import Project from '../projects/Project';
import profilePic from '../../assets/img/Seko _Dameh_Livingstone_about_img.png';
import GithubIcon from '../../assets/img/github_btn_icon.svg';
import TwitterIcon from '../../assets/img/twiter_icon.svg';
import LinkedinIcon from '../../assets/img/Linkedin_icon.svg';
import MediumIcon from '../../assets/img/medium_icon.svg';

const Home = () => (
  <>
    <main>
      <section className="home-container">
        <div>
          <h1>
            Hi I&apos;m &nbsp;
            <span className="firstname">Livingstone</span>
          </h1>
          <h2>Full-stack Developer</h2>
        </div>
        <p>
          A highly skilled and passionate full-stack developer
          hailing from the beautiful country of Ghana. With years of
          experience under his belt, Livingstone has a proven track
          record of delivering high-quality web and mobile
          applications that meet and exceed client expectations.
        </p>
        <div className="social-icons">
          <img src={GithubIcon} alt="Github" />
          <img src={TwitterIcon} alt="Twiter" />
          <img src={LinkedinIcon} alt="LinkedIn" />
          <img src={MediumIcon} alt="Medium" />
        </div>
      </section>

      <section className="about-section">
        <div className="img">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="content">
          <h2>About Me</h2>
          <p>
            Meet Livingstone, a highly skilled and passionate full-stack developer
            hailing from the beautiful country of Ghana. With years of experience under
            his belt, Livingstone has a proven track record of delivering high-quality web
            and mobile applications that meet and exceed client expectations.
          </p>
          <p>
            Livingstone’s passion for programming started at a young age and has only
            grown stronger over the years.
          </p>
          <p>Here are some of the technologies I use to build dynamic web apps:</p>
          <button className="btn-dorminant" type="button">get to know more</button>
        </div>
      </section>
      <Project />
    </main>
  </>
);

export default Home;
