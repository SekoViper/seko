import React from 'react';
import './home.css';

const Home = () => (
  <div className="home-container">
    <div>
      <h1>
        I&apos;m &nbsp;
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
    <div>
      <button type="button" className="btn-primary">Read More</button>
      <button type="button" className="btn-secondary">Download Resume</button>
    </div>
  </div>
);

export default Home;
