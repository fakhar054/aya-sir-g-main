"use client";
import React, { useState } from "react";
import "./filter_bar.css";
import { IoFilter } from "react-icons/io5";

export default function Filter_bar() {
  const [active, setActive] = useState(false);
  const handleFilterBar = () => {
    setActive(!active);
  };

  return (
    <section className="filter_bar">
      <p
        id="filter_heading"
        className="p-2 filter_small"
        onClick={handleFilterBar}
      >
        <IoFilter />
        Filters
      </p>
      <p id="filter_heading" className="p-2 filter_greater">
        Filters
      </p>
      <div className={`boxes_parent_div ${active ? "active" : ""}`}>
        <div className="box py-2 px-3">
          <h3>Gender</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Male</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Female</label>
          </div>
        </div>
        <div className="box py-2 px-3">
          <h3>Age</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">20-35 Years</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">35-50 Years</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">50+ Years</label>
          </div>
        </div>
        <div className="box py-2 px-3">
          <h3>Gender</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Male</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Female</label>
          </div>
        </div>

        <div className="box py-2 px-3">
          <h3>Categories</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Maid</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Driver</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Security Guard</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Baby Sitters</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Gardener</label>
          </div>
        </div>
        <div className="box py-2 px-3 city">
          <h3>City</h3>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Karachi</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Lahore</label>
          </div>
          <div className="form_div">
            <input type="checkbox" id="gender_check_box" />
            <label htmlFor="gender_check_box">Islamabad</label>
          </div>
        </div>
      </div>
    </section>
  );
}
