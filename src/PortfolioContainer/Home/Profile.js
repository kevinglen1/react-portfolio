import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/kevin-glen/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-namer">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Kevin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full-Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Admin Automation with Python",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Skilled in front-end and back-end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="KevinGlen.pdf" download="KevinGlen.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
