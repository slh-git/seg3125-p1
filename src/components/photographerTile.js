import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./photographerTile.css";

const PhotographerTile = ({
  photographer,
  isSelected,
  onSelect,
  serviceSelected,
}) => {
  const hasService = () =>
    !serviceSelected || photographer.services.includes(serviceSelected);

  return (
    <div class="p-2 col-sm-6 col-lg-4 col-xl-3" onClick={onSelect}>
      <div
        class={`btn btn-outline-light card text-dark ${
          isSelected && hasService()
            ? "border-primary"
            : !hasService()
            ? "border-danger"
            : ""
        }`}
      >
        <div class="card-body">
          <img
            src={photographer.img}
            class={`card-img-top mb-3 ${isSelected &&
              !hasService() &&
              "grayscale"}`}
            alt={`Service ${photographer.name}`}
          />
          <div class="row">
            <h5 class="photographer-name col card-title m-0">{photographer.name}</h5>
            <div class="col text-end m-0">
              {Array.from(Array(photographer.rating)).map(() => (
                <i class="icon fa fa-star" aria-hidden="true"></i>
              ))}
              {Array.from(Array(5 - photographer.rating)).map(() => (
                <i class="icon fa fa-star-o" aria-hidden="true"></i>
              ))}
            </div>
          </div>
          <div class="align-items-center mt-2">
            {photographer.services.map((service) => (
              <span
                class={`badge rounded-pill ${
                  service === serviceSelected
                    ? "bg-primary text-light"
                    : "light text-dark"
                } mx-1`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerTile;
