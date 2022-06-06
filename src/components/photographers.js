import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./photographers.css";

export const photographersList = [
  {
    name: "John Doe",
    img: "https://xsgames.co/randomusers/avatar.php?g=male&s=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, dui, justo aliquet integer. Et donec arcu consequat ornare sit interdum non nulla nibh. Phasellus ultrices volutpat massa metus. Consectetur eu in et turpis volutpat nec volutpat, eget varius. Habitasse ultrices ac elementum fames eget arcu, egestas.",
    services: ["portrait", "family", "pet"],
    rating: 4,
  },
  {
    name: "Jane Doe",
    img: "https://xsgames.co/randomusers/avatar.php?g=female&s=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, dui, justo aliquet integer. Et donec arcu consequat ornare sit interdum non nulla nibh. Phasellus ultrices volutpat massa metus. Consectetur eu in et turpis volutpat nec volutpat, eget varius. Habitasse ultrices ac elementum fames eget arcu, egestas.",
    services: ["wedding", "family", "baby"],
    rating: 5,
  },
  {
    name: "Jack Doe",
    img: "https://xsgames.co/randomusers/avatar.php?g=male&s=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, dui, justo aliquet integer. Et donec arcu consequat ornare sit interdum non nulla nibh. Phasellus ultrices volutpat massa metus. Consectetur eu in et turpis volutpat nec volutpat, eget varius. Habitasse ultrices ac elementum fames eget arcu, egestas.",
    services: ["portrait", "product", "pet"],
    rating: 4,
  },
  {
    name: "Jill Doe",
    img: "https://xsgames.co/randomusers/avatar.php?g=female&s=2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor, dui, justo aliquet integer. Et donec arcu consequat ornare sit interdum non nulla nibh. Phasellus ultrices volutpat massa metus. Consectetur eu in et turpis volutpat nec volutpat, eget varius. Habitasse ultrices ac elementum fames eget arcu, egestas.",
    services: ["wedding", "product", "baby"],
    rating: 3,
  },
];

export const Photographers = () => {
  return (
    <div class="container p-0">
      {photographersList.map((photographer, index) => (
        <div class="card my-4">
          <div class="card-body row justify-content-between">
            <div class="col-12 col-md-8 col-lg-9 col-xl-10">
              <h5>{photographer.name}</h5>
              <p>{photographer.description}</p>
              <div class="row justify-content-between">
                <div class="col-auto">
                  {Array.from(Array(photographer.rating)).map(() => (
                    <i class="icon fa fa-star" aria-hidden="true"></i>
                  ))}
                  {Array.from(Array(5 - photographer.rating)).map(() => (
                    <i class="icon fa fa-star-o" aria-hidden="true"></i>
                  ))}
                </div>
                <div class="col-auto">
                  {photographer.services.map((service, index) => (
                    <span class="badge rounded-pill bg-light text-dark mx-1">
                      {service}
                    </span>
                  ))}
                </div>
                <div class="col-auto">
                  <button class="btn btn-sm btn-outline-primary">
                    {`Book ${photographer.name}`}
                  </button>
                </div>
                <div />
              </div>
            </div>
            <div class="d-flex justify-content-center col-md-4 col-lg-3 col-xl-2 mt-2 mt-md-0">
              <img
                src={photographer.img}
                class="col-4 col-md-12"
                alt={`Image of photograper ${photographer.name}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
