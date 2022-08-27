import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="social btn-primary btn-floating m-1"
            id="linkedin-footer-icon"
            href="#!"
            role="button"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            className="social btn-primary btn-floating m-1"
            id="gitHub-footer-icon"
            href="#!"
            role="button"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="footer-text text-center p-3"
      >
        kevinpeterglen@gmail.com
      </div>
    </footer>
  );
}
