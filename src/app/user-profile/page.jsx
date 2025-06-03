"use client";
import React, { useContext, useEffect, useState } from "react";
import "./user-profile.css";
import AddressForm from "../components/Address-form/AddressForm";
import { FaEdit } from "react-icons/fa";
import { UserContext } from "../userContext";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const { userInfo } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  const token = userInfo?.api_token;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const api = `${baseUrl}/api/update-profile`;

  const fetchData = async () => {
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const data = await res.json();
      setUserDetails(data.data);
      // console.log("Response:", data.data);
    } catch (error) {
      console.error("Error posting token:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {}, [userDetails]);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  //profile_image "/assets/profile.png"
  return (
    <section className="user_profile margin_navbar">
      <div className="container py-5">
        <div className="row profile_flex ">
          <div className="col-lg-9">
            <div className="profile_img_div py-5">
              <img
                src={userDetails?.profile_image || "/assets/profile.png"}
                alt="user image"
              />
              <div className="name_div d-flex">
                <h3>{userDetails?.display_name}</h3>

                <FaEdit className="edit_icon" />
              </div>
              <p id="city">Lahore</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Email Address:</h3>
              <p>{userDetails?.email}</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Phone Number: </h3>
              <p>{userDetails?.contact_number}</p>
            </div>
            <div className="flex_div mb-3 d-flex align-items-center">
              <h3>Current Address: </h3>
              <p>{userDetails?.address}</p>
            </div>
            <button className="new_address_btn mt-5" onClick={openForm}>
              Add New Address
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="address-form">
          <AddressForm onClose={closeForm} />
        </div>
      )}
    </section>
  );
}
