import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Template2.scss';

const Template2 = ({ name, description, project, about, image }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const workInfoData = [
    {
      // image: PickMeals,
      title: "Project 1",
      text:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        linktoproject:"click here to view the project"
    },
    {
      // image: DeliveryMeals,
      title: "Project 2",
      text:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      linktoproject:"click here to view the project"
    },
  ];

  return (
    <div className={`template2-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="header-content">
          {/* <a href="#home"> */}
            <h1>{name}</h1>
          {/* </a> */}
          <div className="header-details">
            {/* <p>{description}</p> */}
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <>
                  <FontAwesomeIcon icon={faSun} />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faMoon} />
                </>
              )}
            </button>
          </div>
        </div>
        <nav>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
          </div>
        </nav>
      </header>
      <section id="home" className="home-section">
        <div className="column left">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="column right">
          <img src={image && URL.createObjectURL(image)} />
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>{about}</p>
        {/* <a className="btn" href={resume} target="_blank" rel="noreferrer">
            My Resume
          </a> */}
      </section>
      <section id="project" className="project-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h4>{project}</h4>
          {/* <p>{about}</p> */}
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              {/* <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div> */}
              <h2>{data.title}</h2>
              <p>{data.text}</p>
              <p>{data.linktoproject}</p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>&copy; Portfomeister</p>
      </footer>
    </div>
  );
};

export default Template2;
