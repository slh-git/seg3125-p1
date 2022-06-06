import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { servicesList } from "../data/lists";

export const Services = () => {
  return (
    <div class="container">
      <div class="row">
        {servicesList.map((service) => (
          <div class="p-2 col-sm-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img
                  src={service.img}
                  class="card-img-top mb-3"
                  alt={`Service ${service.name}`}
                />
                <div class="row justify-content-between align-items-center">
                  <h5 class="col card-title">{service.title}</h5>
                  <h6 class="col-auto text-muted">{`$${service.price}/hr`}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
