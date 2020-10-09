import React from 'react';

const Footer = ({ companyName = 'Company Name' }) => (
  <footer>
    <p>
      {companyName} &copy; {new Date().getFullYear()}{' '}
    </p>
  </footer>
);

export default Footer;
