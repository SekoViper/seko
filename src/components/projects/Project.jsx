import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TvShows from '../../assets/img/tv_shows.png';
import Shop from '../../assets/img/shop.jpg';
import Budget from '../../assets/img/budget.jpg';
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
              <a className="project-link" href="https://shop-comer.netlify.app/" target="_blank" rel="noreferrer">View Live</a>
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
