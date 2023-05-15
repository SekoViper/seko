import React from 'react';
import './project.css';
import TvShows from '../../assets/img/tv_shows.png';

const Project = () => (
  <section className="projects-section">
    <h2 className="projects-tiltle">Projects</h2>
    <div className="projects">
      <div className="project">
        <div className="project-img">
          <img src={TvShows} alt="Tv Shows" />
        </div>
        <div className="project-content">
          <h3>TV Shows</h3>
          <p>
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
        <div className="project-img">
          <img src={TvShows} alt="Tv Shows" />
        </div>
        <div className="project-content">
          <h3>TV Shows</h3>
          <p>
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
  </section>
);

export default Project;
