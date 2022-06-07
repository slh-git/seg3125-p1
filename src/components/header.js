import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  return (
    <header class="fill-height text-center justify-content-center align-items-center row header">
      <div></div>
      <div></div>
      <div>
        <h1 class="display-1">Focus Photo</h1>
        <p class="font-weight-light py-2">
          Affordable studio photography service for all
        </p>
        <a
          class="btn btn-primary btn"
          href="booking/select"
          role="button"
        >
          Book Now
        </a>
      </div>
      <p class="font-weight-light py-2">
        2357 Front Street
        <br />
        Toronto, Ontario M5J 2N1
        <br />
        (416) 816-6753
        <br />
        <br />
        Opening Hours:
        <br />
        9:00am to 4:00pm
      </p>
    </header>
  );
};

export default Header;
