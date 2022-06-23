import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer class="my-4 text-muted border-top text-center">
      <div class="pt-4">
        <a
          href="https://github.com/howardt12345/seg3125-p1"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none text-muted"
        >
          &copy; {new Date().getFullYear()} Howard Tseng
        </a>
      </div>
    </footer>
  );
};

export default Footer;
