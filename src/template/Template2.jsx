import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Template2.scss';

const Template2 = ({ name, description, project, about, image }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`template2-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <div className="header-content">
          {/* <a href="#home"> */}
            <h1>{name}</h1>
          {/* </a> */}
          <div className="header-details">
            <p>{description}</p>
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
          <h2>Home</h2>
          <p>{description}</p>
        </div>
        <div className="column right">
          <img src={image && URL.createObjectURL(image)} alt="Home" />
        </div>
      </section>
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>{about}</p>
      </section>
      <section id="project" className="project-section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>{project}</h3>
          <p>{about}</p>
        </div>
      </section>
      <footer>
        <p>&copy; Portfomeister</p>
      </footer>
    </div>
  );
};

export default Template2;
