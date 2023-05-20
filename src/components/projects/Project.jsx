import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TvShows from '../../assets/img/tv_shows.png';
import Shop from '../../assets/img/shop.jpg';
import Budget from '../../assets/img/budget.jpg';
import NGCCongres from '../../assets/img/NGC_Congress.jpg';
import GithhubIcon from '../../assets/img/github_btn_icon.svg';
import './project.css';

const Project = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs_reveal').forEach((elem) => {
      gsap.set(elem, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => gsap.fromTo(elem, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 }),
        onEnterBack: () => gsap.fromTo(elem, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 }),
        onLeave: () => gsap.set(elem, { autoAlpha: 0 }),
      });
    });
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects">
        <div className="project">
          <div className="project-img gs_reveal gs_reveal_fromLeft">
            <img src={Shop} alt="shop" />
          </div>
          <div className="project-content">
            <h3 className="gs_reveal">E-commerce App</h3>
            <p className="gs_reveal">
              The app aims to provide customers with a seamless and convenient
              shopping experience by
              allowing them to browse and purchase items from an online
              store directly from their mobile devices.
              It combines user-friendly design, intuitive navigation, and secure transactions to
              enhance the overall shopping process.
            </p>
            <div className="project-built">
              <span>React</span>
              <span>Redux</span>
              <span>TailwindCSS</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="https://shop-comer.netlify.app/" target="_blank" rel="noreferrer">Live</a>
              <a className="source-link" href="https://github.com/SekoViper/ecommerce">
                {' '}
                <img src={GithhubIcon} alt="github icon" />
                {' '}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="project-img gs_reveal gs_reveal_fromLeft">
            <img src={TvShows} alt="Tv Shows" />
          </div>
          <div className="project-content">
            <h3 className="gs_reveal">TV Shows</h3>
            <p className="gs_reveal">
              A web application that allows users to search for their favorite TV
              shows and get details about them.
              It also allows users to create an account and save their favorite TV shows.
              This project was built using React, Redux, and the TV Maze API.
            </p>
            <div className="project-built">
              <span>React</span>
              <span>Redux</span>
              <span>API</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="https://sekoviper.github.io/Tv-Shows/dist/">Live</a>
              <a className="source-link" href="https://github.com/SekoViper/Tv-Shows">
                {' '}
                <img src={GithhubIcon} alt="github icon" />
                {' '}
                Source
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="project-img gs_reveal gs_reveal_fromLeft">
            <img src={Shop} alt="shop" />
          </div>
          <div className="project-content">
            <h3 className="gs_reveal">E-commerce App</h3>
            <p className="gs_reveal">
              The app aims to provide customers with a seamless and convenient
              shopping experience by
              allowing them to browse and purchase items from an online
              store directly from their mobile devices.
              It combines user-friendly design, intuitive navigation, and secure transactions to
              enhance the overall shopping process.
            </p>
            <div className="project-built">
              <span>React</span>
              <span>Redux</span>
              <span>TailwindCSS</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="https://shop-comer.netlify.app/" target="_blank" rel="noreferrer">Live</a>
              <a className="source-link" href="https://github.com/SekoViper/ecommerce">
                {' '}
                <img src={GithhubIcon} alt="github icon" />
                {' '}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="project-img gs_reveal gs_reveal_fromLeft">
            <img src={Budget} alt="shop" />
          </div>
          <div className="project-content">
            <h3 className="gs_reveal">Xpens App</h3>
            <p className="gs_reveal">
              This is an app that allows users to track their budget by
              keeping track of their transactions based on different
              catagories specified by the user.
            </p>
            <div className="project-built">
              <span>Ruby</span>
              <span>Rails</span>
              <span>PostgreSQL</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="https://bud-ppvp.onrender.com/">Live</a>
              <a className="source-link" href="https://github.com/SekoViper/bud">
                {' '}
                <img src={GithhubIcon} alt="github icon" />
                {' '}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="project">
          <div className="project-img gs_reveal gs_reveal_fromLeft">
            <img src={NGCCongres} alt="shop" />
          </div>
          <div className="project-content">
            <h3 className="gs_reveal">NGC Developers Congress</h3>
            <p className="gs_reveal">
              The NGC Developers event is a two-day conference designed for developers who
              want to learn about the latest Technologies and best coding practices.
              Attendees will have the opportunity to hear from the NGC team and other speakers,
              learn about new web development trends, and network with other developers.
            </p>
            <div className="project-built">
              <span>Javascript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="https://sekoviper.github.io/WorldDevCongress/">Live</a>
              <a className="source-link" href="https://github.com/SekoViper/WorldDevCongress">
                {' '}
                <img src={GithhubIcon} alt="github icon" />
                {' '}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
