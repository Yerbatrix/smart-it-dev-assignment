import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <p>
        Thank you for exploring this application!
        <br />
        Feel free to visit my{" "}
      </p>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/rafalthedruid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span> | </span>
        <a
          href="https://github.com/Yerbatrix"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
