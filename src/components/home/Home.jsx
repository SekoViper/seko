import React from 'react';
import './home.css';
import profilePic from '../../assets/img/Seko _Dameh_Livingstone_about_img.png';

const Home = () => (
  <>
    <main className="home-container">
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
    </main>

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
          grown stronger over the years. He has a deep understanding of programming
          languages such as JavaScript, Python, and Ruby...
        </p>
        <button className="btn-dorminant" type="button">get to know more</button>
      </div>
    </section>
  </>
);

export default Home;
