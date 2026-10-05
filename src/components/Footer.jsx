import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">Sanjay Duwal</span>
        <span>
          Designed &amp; built with React · Copyright &copy; {year} · All
          rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
