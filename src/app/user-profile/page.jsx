"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
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

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [showForm, setShowForm] = useState(false);
  const { userInfo, userDetails, setUserDetails } = useContext(UserContext);

  // console.log("User Detials are,,", userDetails);
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

  // ✨ Always call hooks at the top level, unconditionally
  useEffect(() => {
    if (userDetails) {
      setFormData({
        first_name: userDetails.first_name || "",
        last_name: userDetails.last_name || "",
        username: userDetails.username || "",
        contact_number: userDetails.contact_number || "",
        email: userDetails.email || "",
        address: userDetails.address || "",
      });
    }
  }, [userDetails]);

  if (!userDetails) {
    return <h1>loading</h1>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  console.log("user_dtails", userDetails);

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
                  className="user_update_model"
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                  </Modal.Header>

                  <Modal.Body className="model_body">
                    <form onSubmit={handleSubmit}>
                      <div
                        onClick={handleImageClick}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src="/assets/person_img.png"
                          // src={imagePreview}
                          alt="Profile"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: "none" }}
                      />

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="first_name">First Name</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="First Name"
                            id="first_name"
                            name="first_name"
                            onChange={handleChange}
                            value={formData.first_name}
                          />
                        </div>

                        <div>
                          <label htmlFor="last_name">Last Name</label>
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
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="username">User Name</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="User Name"
                            id="username"
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                          />
                        </div>

                        <div>
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Email Address"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="contact_no">Contact Number</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Phone Number"
                            name="contact_number"
                            id="contact_no"
                            onChange={handleChange}
                            value={formData.contact_number}
                          />
                        </div>

                        <div>
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Address"
                            name="address"
                            id="address"
                            onChange={handleChange}
                            value={formData.address}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="cnic">CNIC</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="CNIC"
                            name="contact_number"
                            id="cnic"
                            onChange={handleChange}
                            // value={formData.contact_number}
                          />
                        </div>

                        <div>
                          <label htmlFor="address">Age</label>
                          <input
                            type="number"
                            className="input_auth"
                            placeholder="Age"
                            name="age"
                            id="age"
                            onChange={handleChange}
                            // value={formData.address}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="disability">Disability</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Disability"
                            name="disability"
                            id="disability"
                            onChange={handleChange}
                            // value={formData.contact_number}
                          />
                        </div>

                        <div>
                          <label htmlFor="experience">Experience</label>
                          <input
                            type="number"
                            className="input_auth"
                            placeholder="Experience"
                            name="experience"
                            id="experience"
                            onChange={handleChange}
                            // value={formData.address}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        {/* <div>
                          <label htmlFor="image">Image</label>
                          <input
                            type="file"
                            className="input_auth"
                            placeholder="Image"
                            name="image"
                            id="image"
                            onChange={handleChange}
                            // value={formData.contact_number}
                          />
                        </div> */}

                        <div>
                          <label htmlFor="experience">Audio</label>
                          <input
                            type="file"
                            accept="audio/*"
                            className="input_auth"
                            placeholder="Experience"
                            name="audio"
                            id="audio"
                            onChange={handleChange}
                            // value={formData.address}
                          />
                        </div>
                      </div>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                          Update
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal.Body>
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
          </div>
        </div>
      </div>
    </section>
  );
}
