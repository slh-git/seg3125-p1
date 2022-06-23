import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
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
              Focus Photo is a professional studio photography service, aiming
              to provide accessible studio photography to all since 2010. We
              have a team of highly qualified and experienced photographers who
              are dedicated to providing the best studio photography service to
              our clients. We believe that everyone should be able to have
              access to professional studio photography services, and we're
              always looking for talented and experienced photographers to join
              our team to further expand our services.
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
      </div>
    </div>
  );
};

export default IndexPage;
