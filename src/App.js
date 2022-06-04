import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-md navbar-light bg-light fixed-top"
        id="main-nav"
      >
        <div className="container-lg">
          <a className="navbar-brand" href="/#">
            Focus Photo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#photographers"
                >
                  Photographers
                </a>
              </li>
            </ul>
            <a
              className="btn btn-outline-primary btn"
              href="booking.html"
              role="button"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>
      <div
        className="px-3 col-lg-8 mx-auto"
        data-bs-spy="scroll"
        data-bs-target="#main-nav"
        data-bs-offset="0"
        tabIndex="0"
      >
        <header className="fill-height text-center justify-content-center align-items-center row">
          <div></div>
          <div></div>
          <div>
            <h1 className="display-1">Focus Photo</h1>
            <p className="font-weight-light py-2">
              Affordable studio photography service for all
            </p>
            <a
              className="btn btn-outline-primary btn"
              href="booking.html"
              role="button"
            >
              Book Now
            </a>
          </div>
          <p className="font-weight-light py-2">
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
        <section id="about">
          <div>
            <h2 className="display-5">About</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ac sem molestie, volutpat leo eget, molestie sem. Morbi odio
              purus, egestas non ornare a, vestibulum a sem. Nullam ac eros
              vitae odio aliquam vestibulum ut vel odio. Nulla est ligula,
              molestie eget elit vehicula, vestibulum sollicitudin purus. Nulla
              interdum elit in augue sagittis, id elementum mauris lacinia.
              Etiam finibus sodales nisi, eu varius velit ornare eu. Sed mi
              ante, pharetra quis faucibus a, malesuada vitae metus. Cras neque
              mi, hendrerit sed mauris sit amet, tempor consectetur metus. Morbi
              a ligula eget purus blandit porta nec et ex. Nam euismod finibus
              mauris, in cursus orci tempus vel. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam tempus eros vitae massa
              pharetra semper. Sed id ex volutpat felis facilisis sagittis quis
              vel dui. Donec sed volutpat dolor. Aliquam ut aliquet neque, eu
              facilisis elit.
            </p>
          </div>
        </section>
        <section id="services">
          <h2 className="display-5">Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem molestie, volutpat leo eget, molestie sem. Morbi odio purus,
            egestas non ornare a, vestibulum a sem. Nullam ac eros vitae odio
            aliquam vestibulum ut vel odio. Nulla est ligula, molestie eget elit
            vehicula, vestibulum sollicitudin purus. Nulla interdum elit in
            augue sagittis, id elementum mauris lacinia. Etiam finibus sodales
            nisi, eu varius velit ornare eu. Sed mi ante, pharetra quis faucibus
            a, malesuada vitae metus. Cras neque mi, hendrerit sed mauris sit
            amet, tempor consectetur metus. Morbi a ligula eget purus blandit
            porta nec et ex. Nam euismod finibus mauris, in cursus orci tempus
            vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus eros vitae massa pharetra semper. Sed id ex volutpat felis
            facilisis sagittis quis vel dui. Donec sed volutpat dolor. Aliquam
            ut aliquet neque, eu facilisis elit.
          </p>
        </section>
        <section id="photographers">
          <h2 className="display-5">Photographers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            sem molestie, volutpat leo eget, molestie sem. Morbi odio purus,
            egestas non ornare a, vestibulum a sem. Nullam ac eros vitae odio
            aliquam vestibulum ut vel odio. Nulla est ligula, molestie eget elit
            vehicula, vestibulum sollicitudin purus. Nulla interdum elit in
            augue sagittis, id elementum mauris lacinia. Etiam finibus sodales
            nisi, eu varius velit ornare eu. Sed mi ante, pharetra quis faucibus
            a, malesuada vitae metus. Cras neque mi, hendrerit sed mauris sit
            amet, tempor consectetur metus. Morbi a ligula eget purus blandit
            porta nec et ex. Nam euismod finibus mauris, in cursus orci tempus
            vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            tempus eros vitae massa pharetra semper. Sed id ex volutpat felis
            facilisis sagittis quis vel dui. Donec sed volutpat dolor. Aliquam
            ut aliquet neque, eu facilisis elit.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
