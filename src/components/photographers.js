import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./photographers.css";
import { photographersList } from "../data/lists";

export const PhotographerListItem = ({
  photographer,
  index,
  showButton,
  halved = false,
}) => {
  return (
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class={`col-12 ${halved ? "" : "col-md-8 col-lg-9 col-xl-10"}`}>
            <div className="d-flex flex-row">
              <div class="me-3">
                <h5>{photographer.name}</h5>
              </div>
              <div class="photographer-star">
                {Array.from(Array(photographer.rating)).map(() => (
                  <i class="icon fa fa-star" aria-hidden="true"></i>
                ))}
                {Array.from(Array(5 - photographer.rating)).map(() => (
                  <i class="icon fa fa-star-o" aria-hidden="true"></i>
                ))}
              </div>
            </div>
            <p class="mb-2 photographer-desc">{photographer.description}</p>
            <div class="row">
              <div class="photographer-services col">
                {photographer.services.map((service) => (
                  <span class="badge rounded-pill bg-light text-dark mx-1">
                    {service}
                  </span>
                ))}
              </div>
              {showButton && (
                <div class="col-12 col-md-4 col-xl-3 text-center text-md-end">
                  <a
                    class="btn btn-sm btn-outline-primary"
                    href={`booking/select?p=${photographer.id}`}
                  >
                    {`Book ${photographer.name}`}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            class={`d-flex justify-content-center ${
              halved ? "" : "col-md-4 col-lg-3 col-xl-2"
            } mt-2 mt-md-0`}
          >
            <img
              src={photographer.img}
              class={`col-4 mt-2 ${halved ? "mt-3" : "col-md-12 mt-md-0"}`}
              alt={`Photograper ${photographer.name}`}
            />
          </div>
        </div>
        <div class="accordion mt-3" id={`#accordion-${photographer.id}`}>
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
                Show {photographer.name}'s portfolio
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
                    <div
                      class={`col-4 ${
                        halved ? "col-md-6 col-lg-4" : "col-lg-3 col-xl-2"
                      }`}
                    >
                      <img
                        src={`https://picsum.photos/300?random=${index * 10 +
                          i}`}
                        class="img-fluid m-2 border border-dark"
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
        <div class="my-4">
          <PhotographerListItem
            photographer={photographer}
            index={index}
            showButton={true}
          />
        </div>
      ))}
    </div>
  );
};
