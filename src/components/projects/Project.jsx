import React from 'react';
import './project.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TvShows from '../../assets/img/tv_shows.png';
import Shop from '../../assets/img/shop.jpg';
import Budget from '../../assets/img/budget.jpg';

const Project = () => {
  function animateFrom(elem, direction) {
    const animDirection = direction || 1;
    let x = 0;
    let y = animDirection * 100;
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';
    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    });
  }

  function hide(elemenemt) {
    gsap.set(elemenemt, { autoAlpha: 0 });
  }

  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs_reveal').forEach((elem) => {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter() { animateFrom(elem); },
        onEnterBack() { animateFrom(elem, -1); },
        onLeave() { hide(elem); },
      });
    });
  });

  return (
    <section className="projects-section">
      <h2 className="projects-tiltle">Projects</h2>
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
              <a className="project-link" href="#!">View Live</a>
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
            <h3 className="gs_reveal">E-cormernce App</h3>
            <p className="gs_reveal">
              A web application that allows users to search for their favorite TV
              shows and get details about them.
              It also allows users to create an account and save their favorite TV shows.
              This project was built using React, Redux, and the TV Maze API.
            </p>
            <div className="project-built">
              <span>React</span>
              <span>Redux</span>
              <span>TailwindCSS</span>

            </div>
            <div className="project-links">
              <a className="project-link" href="https://shop-comer.netlify.app/" target='_blank'>View Live</a>
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
              A web application that allows users to search for their favorite TV
              shows and get details about them.
              It also allows users to create an account and save their favorite TV shows.
              This project was built using React, Redux, and the TV Maze API.
            </p>
            <div className="project-built">
              <span>Ruby</span>
              <span>Rails</span>
              <span>PostgreSQL</span>
            </div>
            <div className="project-links">
              <a className="project-link" href="#!">View Live</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
