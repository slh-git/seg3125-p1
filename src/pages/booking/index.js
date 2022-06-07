import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Select from "./select";
import Submit from "./submit";
import Footer from "../../components/footer";

const Booking = () => {
  return (
    <div class='app'>
      <Routes>
        <Route path="select" element={<Select />} />
        <Route path="submit" element={<Submit />} />
      </Routes>

      <div class="px-3 container col-lg-8 p-2">
        <Footer />
      </div>
    </div>
  );
};

export default Booking;
