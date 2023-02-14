import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const Footer = function () {
  return (
    <footer>
      <p>Copyright &#xA9; {currentYear}</p>
    </footer>
  );
};

export default Footer;