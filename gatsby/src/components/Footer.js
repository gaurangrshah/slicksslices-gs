import React from "react";

const Footer = ({ companyName = "Company Name" }) => (
  <footer>
    <p className="center">
      {companyName} &copy; {new Date().getFullYear()}{" "}
    </p>
  </footer>
);

export default Footer;
