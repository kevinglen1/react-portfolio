import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import Resume from "../../../assets/Kevin_Glen_Resume.pdf"

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
              <a href="https://github.com/kevinglen1">
                <i className="fa fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
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
                    "Admin Automation",
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
            <a href={Resume} download>
              <button className="btn highlighted-btn">Download Resume / CV</button>
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
