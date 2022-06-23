import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Select from "./select";
import Submit from "./submit";

const Booking = () => {
  return (
    <div class='app'>
      <Routes>
        <Route path="select" element={<Select />} />
        <Route path="submit" element={<Submit />} />
      </Routes>
    </div>
  );
};

export default Booking;
