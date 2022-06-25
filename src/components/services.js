import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { servicesList } from "../data/lists";
import "./services.css";

export const Services = () => {
  return (
    <div class="container">
      <div class="row">
        {servicesList.map((service) => (
          <div class="p-2 col-sm-6 col-xl-4">
            <a class="btn btn-outline-light card text-decoration-none" href={`booking/select?s=${service.id}`}>
              <div class="card-body">
                <img
                  src={service.img}
                  class="card-img-top mb-3"
                  alt={`Service ${service.name}`}
                />
                <div class="row service-row">
                  <h5 class="service-title">{service.title}</h5>
                  <h6 class="service-price">{`$${service.price}/hr`}</h6>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
