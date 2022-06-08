import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="social btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            className="social btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <i className="fa fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="footer-text text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 1)"}}
      >
        kevinpeterglen@gmail.com
      </div>
    </footer>
  );
}
