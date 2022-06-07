import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./select.css";
import { photographersList, servicesList } from "../../data/lists";
import { Link, useSearchParams } from "react-router-dom";
import PhotographerTile from "../../components/photographerTile";

const Select = () => {
  let [searchParams] = useSearchParams();
  const [service, setService] = useState(searchParams.get("s"));
  const [photographer, setPhotographer] = useState(searchParams.get("p"));

  const canSubmit = () => varsNotEmpty() && photographerHasService(service);

  const varsNotEmpty = () => service && photographer;

  const photographerHasService = (s) => {
    const p = photographersList.find((p) => photographer === p.id);
    return p && p.services.includes(s);
  };

  return (
    <div class="app">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light text-center"
        id="booking-nav"
      >
        <div class="container-lg">
          <a class="btn btn-outline-secondary" href="/">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </a>
          {canSubmit() && (
            <Link to="/booking/submit" class="btn btn-outline-primary">
              Continue
            </Link>
          )}
        </div>
      </nav>
      {/* Selecting service and photographer */}
      <div class="h-100 text-center">
        <h2 class="display-6 m-3">Select a Service</h2>
        <div class="scroll-menu mx-4">
          {servicesList.map((s, index) => (
            <div class="d-inline-block">
              <button
                class={`btn ${
                  // Primary button when service is selected
                  service === s.id ? "btn-primary" : "btn-outline-primary"
                }
                ${
                  // Disabled looking button when photographer doesn't have service
                  photographer && !photographerHasService(s.id)
                    ? " btn-outline-secondary"
                    : " "
                } ${
                  // Danger button when service selected and photographer doesn't have service
                  service === s.id &&
                  photographer &&
                  !photographerHasService(s.id)
                    ? "btn-danger text-light"
                    : ""
                } mx-2`}
                id={`service-btn-${index}`}
                onClick={() => setService(service !== s.id ? s.id : "")}
              >
                {s.title}
              </button>
            </div>
          ))}
        </div>
        <h2 class="display-6 m-3">Select a Photographer</h2>
        <div class="container">
          <div class="row">
            {photographersList
              .filter((p) =>
                service
                  ? p.services.includes(service) || photographer === p.id
                  : p
              )
              .map((p) => (
                <PhotographerTile
                  photographer={p}
                  isSelected={photographer === p.id}
                  onSelect={() =>
                    photographer !== p.id
                      ? setPhotographer(p.id)
                      : setPhotographer("")
                  }
                  serviceSelected={service}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
