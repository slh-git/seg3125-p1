import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const servicesList = [
  {
    name: "portrait",
    title: "Portrait",
    price: 50,
    img: "https://picsum.photos/id/996/300",
  },
  {
    name: "wedding",
    title: "Wedding",
    price: 100,
    img: "https://picsum.photos/id/1004/300",
  },
  {
    name: "family",
    title: "Family",
    price: 150,
    img: "https://picsum.photos/id/838/300",
  },
  {
    name: "baby",
    title: "Baby",
    price: 200,
    img: "https://picsum.photos/id/1066/300",
  },
  {
    name: "product",
    title: "Product",
    price: 300,
    img: "https://picsum.photos/id/252/300",
  },
  {
    name: "pet",
    title: "Pet",
    price: 50,
    img: "https://picsum.photos/id/1025/300",
  },
];

export const Services = () => {
  return (
    <div class="container">
      <div class="row">
        {servicesList.map((service, index) => (
          <div class="p-2 col-sm-6 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img
                  src={service.img}
                  class="card-img-top mb-3"
                  alt={`Image of ${service.name} service`}
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
