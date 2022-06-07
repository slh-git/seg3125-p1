import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Form from "react-bootstrap/Form";
import { Modal } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { photographersList, servicesList } from "../../data/lists";

const Submit = () => {
  // Getting the service and photographer from the url
  const [searchParams, setSearchParams] = useSearchParams();
  const [service] = useState(searchParams.get("s"));
  const [photographer] = useState(searchParams.get("p"));

  // Variables for the form fields
  const [date, setDate] = useState(
    searchParams.get("d")
      ? searchParams.get("d")
      : new Date().toISOString().split("T")[0]
  );
  const [startTime, setStartTime] = useState(
    searchParams.get("st") ? searchParams.get("st") : "09:00"
  );
  const [endTime, setEndTime] = useState(
    searchParams.get("et") ? searchParams.get("et") : "10:00"
  );
  const [name, setName] = useState(
    searchParams.get("n") ? searchParams.get("n") : ""
  );
  const [email, setEmail] = useState(
    searchParams.get("e") ? searchParams.get("e") : ""
  );

  // Variables for the form validation and confirm modal
  const [validated, setValidated] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Getters for service and photographer information
  const photographerName = () =>
    photographersList.find((p) => p.id === photographer).name;
  const serviceName = () => servicesList.find((s) => s.id === service).title;
  const servicePrice = () => servicesList.find((s) => s.id === service).price;

  // Functions for calculating costs
  const subTotal = () => hours() * servicePrice();
  const tax = () => subTotal() * 0.13;
  const total = () => subTotal() + tax();

  // Calculating the hours between the selected times
  const hours = () =>
    parseInt(endTime) - parseInt(startTime) > 0
      ? parseInt(endTime) - parseInt(startTime)
      : 0;

  // Functions for setting the time
  const setStartHours = (t) => setStartTime(t.split(":")[0] + ":00");
  const setEndHours = (t) => setEndTime(t.split(":")[0] + ":00");

  // Functions for checking whether the form variables are valid
  const hoursValid = () => hours() > 0;

  // Functions for opening and closing the form
  const handleOpenConfirm = () => setShowConfirm(true);
  const handleCloseConfirm = () => setShowConfirm(false);

  // Handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchParams({
      s: service,
      p: photographer,
      d: date,
      st: startTime,
      et: endTime,
      n: name,
      e: email,
    });

    const form = event.currentTarget;
    if (form.checkValidity() === false || !hoursValid()) {
      event.stopPropagation();
    } else {
      setValidated(true);
      handleOpenConfirm();
    }

    setValidated(true);
  };

  return (
    <div class="app">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light text-center"
        id="booking-nav"
      >
        <div class="container-lg">
          <a
            class="btn btn-outline-secondary"
            href={`select?s=${service}&p=${photographer}`}
          >
            <i class="fa fa-angle-left" aria-hidden="true"></i> Back
          </a>
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link"
                tabindex="-1"
                href={`select?s=${service}&p=${photographer}`}
              >
                Select
              </a>
            </li>
            <div class="d-flex align-items-center">
              <i class="fa fa-angle-right text-muted" aria-hidden="true"></i>
            </div>
            <li class="nav-item">
              <a
                class="nav-link disabled text-decoration-underline"
                href="#"
                aria-current="page"
              >
                Submit
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </nav>
      <div class="container-xl">
        <div class="row">
          <div class="col-12 col-md-5 offset-md-1 text-center px-4">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              class="col-10 mx-auto"
              id="submit-form"
            >
              <h2 class="display-6 my-3">Select Date &#38; Time</h2>
              <Form.Group class="my-2 text-start">
                <Form.Label class="h6">Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </Form.Group>
              <Form.Group class="my-2 text-start">
                <Form.Label class="h6">Start time</Form.Label>
                <Form.Control
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartHours(e.target.value)}
                  required
                  min="09:00"
                  max="15:00"
                  step="3600"
                />
                <Form.Control.Feedback type="invalid">
                  Start time must be between 9:00 and 15:00
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group class="my-2 text-start">
                <Form.Label class="h6">End time</Form.Label>
                <Form.Control
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndHours(e.target.value)}
                  required
                  min={`${parseInt(startTime.split(":")[0]) + 1}:00`}
                  max="16:00"
                  step="3600"
                />
                <Form.Control.Feedback type="invalid">
                  End time must be after Start time and between 10:00 and 16:00.
                </Form.Control.Feedback>
              </Form.Group>
              <h4 class="display-6 mt-4 mb-0 fs-4 fw-normal">
                Contact Information
              </h4>
              <Form.Group class="mb-2 text-start">
                <Form.Label class="h6">Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group class="my-2 text-start">
                <Form.Label class="h6">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>
            </Form>
          </div>
          <div class="col-12 col-md-5 text-center">
            <h2 class="display-6 my-3">Confirm and Submit</h2>
            <div class="col-10 mx-auto">
              <h6 class="display-6 fs-5 fw-normal">Your Order Details</h6>
              <div class="d-flex justify-content-between align-items-end my-2">
                <div class="text-start">
                  <h6>{`${photographerName()}`}</h6>
                  <h6 class="fw-normal">{`for ${serviceName()} photos`}</h6>
                </div>
                <h6>
                  {`${hours()} ${
                    hours() === 1 ? "hr" : "hrs"
                  } x ${servicePrice().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}`}
                </h6>
              </div>
              <div class="d-flex justify-content-between my-2">
                <div class="text-start">
                  <h6 class="fw-normal">Tax (13%)</h6>
                </div>
                <h6>
                  {tax().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h6>
              </div>
              <hr class="mt-0" />
              <div class="d-flex justify-content-between my-2">
                <div class="text-start">
                  <h6 class="fw-bold">Total</h6>
                </div>
                <h6>
                  {total().toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </h6>
              </div>
              <button
                class={`btn btn-primary`}
                form="submit-form"
                type="submit"
              >
                <i class="fa fa-check" aria-hidden="true"></i> Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showConfirm} onHide={handleCloseConfirm}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for booking!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <span>You've booked a </span>
            <strong>{serviceName()}</strong>
            <span> photography session with </span>
            <strong>{photographerName()}</strong>
            <span> on </span>
            <strong>{date}</strong>
            <span> between </span>
            <strong>{startTime}</strong>
            <span> and </span>
            <strong>{endTime}</strong>
            <span> for </span>
            <strong>
              {total().toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </strong>
            .
          </p>
          <hr />
          <p class="m-0">
            <span>Name: </span>
            <strong>{name}</strong>
          </p>
          <p class="m-0">
            <span>Email: </span>
            <strong>{email}</strong>
          </p>
          <hr />
          <p class="mb-2">Use this link to edit your session:</p>
          <Form.Control
            type="text"
            value={window.location.href}
            readOnly
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to clipboard!");
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <a class="btn btn-outline-primary" href="/">
            Return Home
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Submit;
