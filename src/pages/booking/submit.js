import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useSearchParams } from "react-router-dom";
import "./submit.css";
import { photographersList, servicesList } from "../../data/lists";

const Submit = () => {
  const [searchParams] = useSearchParams();
  const [service, setService] = useState(searchParams.get("s"));
  const [photographer, setPhotographer] = useState(searchParams.get("p"));

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("09:00");

  const photographerName = () =>
    photographersList.find((p) => p.id === photographer).name;

  const serviceName = () => servicesList.find((s) => s.id === service).title;

  const servicePrice = () => servicesList.find((s) => s.id === service).price;

  const tax = () => servicePrice() * 0.13;

  const total = () => servicePrice() + tax();

  return (
    <div class="app">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light text-center"
        id="booking-nav"
      >
        <div class="container-lg">
          <a class="btn btn-outline-secondary" href="javascript:history.back()">
            <i class="fa fa-angle-left" aria-hidden="true"></i> Back
          </a>
          <div></div>
        </div>
      </nav>
      <div class="row">
        <div class="col-12 col-md-5 offset-md-1 text-center">
          <h2 class="display-6 my-3">Select Date and Time</h2>
          <div class="col-10 mx-auto">
            <Form.Group class="text-start" id="date-time-form">
              <div class="my-3">
                <h6>Date</h6>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div class="my-3">
                <h6>Start time</h6>
                <Form.Control
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                  min="09:00"
                  max="16:00"
                />
              </div>
              <div class="my-3">
                <h6>End time</h6>
                <Form.Control
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                  min={startTime}
                  max="16:00"
                />
              </div>
              <button variant="primary" type="submit">
                Submit
              </button>{" "}
            </Form.Group>
          </div>
          <div>{(startTime - endTime).toString()}</div>
        </div>
        <div class="col-12 col-md-5 text-center">
          <h2 class="display-6 my-3">Confirm and Submit</h2>
          <div class="col-10 mx-auto">
            <h5>Your Order Details</h5>
            <div class="d-flex justify-content-between align-items-end my-2">
              <div class="text-start">
                <h6>{`${photographerName()}`}</h6>
                <h6 class="fw-normal">{`for ${serviceName()} photos`}</h6>
              </div>
              <h6>
                {servicePrice().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h6>
            </div>
            <div class="d-flex justify-content-between my-2">
              <div class="text-start">
                <h6 class="fw-normal">Tax</h6>
              </div>
              <h6>
                {tax().toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h6>
            </div>
            <hr class="mt-0" />
            <div class="d-flex justify-content-between mt-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
