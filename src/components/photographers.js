import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./photographers.css";
import { photographersList } from "../data/lists";

const PhotographerListItem = ({ photographer, index }) => {
  return (
    <div class="card my-4">
      <div class="card-body">
        <div class="row justify-content-between">
          <div class="col-12 col-md-8 col-lg-9 col-xl-10">
            <h5>{photographer.name}</h5>
            <p>{photographer.description}</p>
            <div class="row justify-content-between">
              <div class="col-3">
                {Array.from(Array(photographer.rating)).map(() => (
                  <i class="icon fa fa-star" aria-hidden="true"></i>
                ))}
                {Array.from(Array(5 - photographer.rating)).map(() => (
                  <i class="icon fa fa-star-o" aria-hidden="true"></i>
                ))}
              </div>
              <div class="col-6 text-center">
                {photographer.services.map((service) => (
                  <span class="badge rounded-pill bg-light text-dark mx-1">
                    {service}
                  </span>
                ))}
              </div>
              <div class="col-3 text-end">
                <a
                  class="btn btn-sm btn-outline-primary"
                  href={`booking/select?p=${photographer.id}`}
                >
                  {`Book ${photographer.name}`}
                </a>
              </div>
              <div />
            </div>
          </div>
          <div class="d-flex justify-content-center col-md-4 col-lg-3 col-xl-2 mt-2 mt-md-0">
            <img
              src={photographer.img}
              class="col-4 col-md-12"
              alt={`Photograper ${photographer.name}`}
            />
          </div>
        </div>
        <div class="accordion mt-4" id={`#accordion-${photographer.id}`}>
          <div class="accordion-item">
            <h2 class="accordion-header" id={`#heading-${photographer.id}`}>
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${photographer.id}`}
                aria-expanded="true"
                aria-controls={`collapse-${photographer.id}`}
              >
                Show {photographer.name}'s past photos
              </button>
            </h2>
            <div
              id={`collapse-${photographer.id}`}
              class="accordion-collapse collapse"
              aria-labelledby={`#heading-${photographer.id}`}
              data-bs-parent={`#accordion-${photographer.id}`}
            >
              <div class="accordion-body">
                <div class="row">
                  {Array.from(Array(10)).map((_, i) => (
                    <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                      <img
                        src={`https://picsum.photos/300?random=${index *
                          10 +
                          i}`}
                        class="img-fluid m-2"
                        alt={`Photograper ${photographer.name}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Photographers = () => {
  return (
    <div class="container p-0">
      {photographersList.map((photographer, index) => (
        <PhotographerListItem photographer={photographer} index={index} />
      ))}
    </div>
  );
};
