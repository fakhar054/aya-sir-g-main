"use client";
import React, { useState, useRef } from "react";
import "./hero.css";
import Dropdown from "react-bootstrap/Dropdown";
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  const [selectedServices, setSelectedServices] = useState("Services");
  const [selectedcity, setSelectedCity] = useState("All Cities");

  const handleSelectedCities = (eventKey) => {
    setSelectedCity(eventKey);
  };

  const secondDropdownRef = useRef(null);
  const handleSelectedServices = (eventKey) => {
    setSelectedServices(eventKey);
    if (secondDropdownRef.current) {
      secondDropdownRef.current.click();
    }
  };

  return (
    <section className="hero_section mb-5 d-flex flex-column justify-content-center align-items-center">
      <div className="position-relative  text-center">
        <h1 className="hero_heading" data-aos="fade-right">
          A Better Path to More
        </h1>
        <h1 className="hero_heading" data-aos="fade-right">
          Opportunity!
        </h1>
        <p className="fw-medium my-5" data-aos="fade-up">
          Changing the Way Working People Find Work
        </p>

        <div
          className="dropdown_parent d-flex justify-content-center align-items-center"
          data-aos="fade-up"
        >
          <Dropdown
            className="services_dropdown language"
            onSelect={handleSelectedServices}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className={
                selectedServices !== "Services" ? "selected_black" : ""
              }
            >
              {selectedServices}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Driver" className="drop_down_active">
                Driver
              </Dropdown.Item>
              <Dropdown.Item eventKey="Plumber">Plumber</Dropdown.Item>
              <Dropdown.Item eventKey="Electrician">Electrician</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="services_dropdown cities"
            onSelect={handleSelectedCities}
          >
            <Dropdown.Toggle
              variant="success"
              id="dropdown-city"
              ref={secondDropdownRef}
              className={selectedcity !== "All Cities" ? "selected_black" : ""}
            >
              {selectedcity}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
              <Dropdown.Item eventKey="Lahore">Lahore</Dropdown.Item>
              <Dropdown.Item eventKey="Karachi">Karachi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button className="search_btn">
            <IoSearch className="search_icon" />
          </button>
        </div>
      </div>
    </section>
  );
}
