"use client";
import React, { useContext, useEffect, useState } from "react";
import "./user-profile.css";
import AddressForm from "../components/Address-form/AddressForm";
import { FaEdit } from "react-icons/fa";
import { UserContext } from "../userContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Page() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    contact_number: "",
    email: "",
    address: "",
  });
  const [showForm, setShowForm] = useState(false);
  const { userInfo, userDetails, setUserDetails } = useContext(UserContext);
  // const [userDetails, setUserDetails] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const token = userInfo?.api_token;
  // const baseUrl =
  //   process.env.NEXT_PUBLIC_BASE_URL ||
  //   "https://staging.hylanmaterialsupply.com";
  // const api = `${baseUrl}/api/update-profile`;

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(api, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({}),
  //     });

  //     const data = await res.json();
  //     setUserDetails(data.data);
  //   } catch (error) {
  //     console.error("Error posting token:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // useEffect(() => {}, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

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

                <FaEdit className="edit_icon" onClick={handleShow} />
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  // backdrop="static"
                  // keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <div className="input_one_row">
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="First Name"
                          id="first_name"
                          name="first_name"
                          onChange={handleChange}
                          value={formData.first_name}
                        />
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="Last Name"
                          id="last_name"
                          name="last_name"
                          onChange={handleChange}
                          value={formData.last_name}
                        />
                      </div>
                      <div className="input_one_row">
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="User Name"
                          id="username"
                          name="username"
                          onChange={handleChange}
                          value={formData.username}
                        />
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="Email Address"
                          name="email"
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>

                      <div className="input_one_row">
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="Phone Number"
                          name="contact_number"
                          id="contact_no"
                          onChange={handleChange}
                          value={formData.contact_number}
                        />
                        <input
                          type="text"
                          className="input_auth"
                          placeholder="Address"
                          name="address"
                          onChange={handleChange}
                          value={formData.address}
                        />
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary">Update</Button>
                  </Modal.Footer>
                </Modal>
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
            {/* <button className="new_address_btn mt-5" onClick={openForm}>
              Add New Address
            </button> */}
          </div>
        </div>
      </div>

      {/* {showForm && (
        <div className="address-form">
          <AddressForm onClose={closeForm} />
        </div>
      )} */}
    </section>
  );
}
