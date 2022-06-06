import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "../components/footer";
import { Services } from "../components/services";
import { Photographers } from "../components/photographers";
import Nav from "../components/nav";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <div class="App">
      <Nav />
      <Header />
      <div
        class="px-3 container col-lg-8 p-2"
        data-bs-spy="scroll"
        data-bs-target="#main-nav"
        data-bs-offset="0"
        tabIndex="0"
      >
        <section id="about">
          <div>
            <h2 class="display-5">About</h2>
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
          <h2 class="display-5">Services</h2>
          <Services />
        </section>
        <section id="photographers">
          <h2 class="display-5">Photographers</h2>
          <Photographers />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
