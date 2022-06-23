import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-md navbar-light bg-light fixed-top"
      id="main-nav"
    >
      <div class="container-lg">
        <a class="navbar-brand" href="/#">
          Focus Photo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#services"
              >
                Services
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#photographers"
              >
                Photographers
              </a>
            </li>
          </ul>
          <a
            class="btn btn-primary btn"
            href="booking/select"
            role="button"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
