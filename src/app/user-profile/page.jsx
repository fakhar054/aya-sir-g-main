"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./user-profile.css";
import { FaEdit } from "react-icons/fa";
import { UserContext } from "../userContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaMicrophone } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Page() {
  const [imagePerview, setImagePreview] = useState("/assets/person_img.png");

  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied or not supported.");
    }
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };
  const handleDeleteAudio = () => {
    setAudioURL(null);
    setIsRecording(false);
  };

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

  const [showForm, setShowForm] = useState(false);
  const { userInfo, userDetails, setUserDetails } = useContext(UserContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = () => {};

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
                        className="image_div"
                        onClick={handleImageClick}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          // src="/assets/person_img.png"
                          src={imagePerview}
                          alt="Profile"
                          className="w-32 h-32 rounded-full object-cover"
                        />
                        <FaEdit className="edit_icon" />
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
                          <label htmlFor="contact_no">Gender</label>
                          <select className="input_auth">
                            <option value="">--Select --</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="address">City</label>
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
                          <label htmlFor="cnic">CNIC Scan Copy</label>
                          <input
                            className="input_auth pad"
                            type="file"
                            name="cnicFront"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="address">Picture</label>
                          <input
                            className="input_auth pad"
                            id="cameraInput"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="disability">
                            Interested Locations
                          </label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Interested Locations"
                            name="locations"
                            id="disability"
                            onChange={handleChange}
                            // value={formData.contact_number}
                          />
                        </div>

                        <div>
                          <label htmlFor="experience">
                            Last Billing Addresss scan copy
                          </label>
                          <input
                            className="input_auth pad"
                            type="file"
                            name="cnicFront"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>

                      <div className="input_one_row">
                        <div>
                          <label htmlFor="disability">Fields</label>
                          <input
                            type="text"
                            className="input_auth"
                            placeholder="Fields"
                            name="disability"
                            id="disability"
                            onChange={handleChange}
                            // value={formData.contact_number}
                          />
                        </div>

                        <div>
                          <label htmlFor="experience">Description</label>
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

                      <div className="input_row_full">
                        <div className="audio_class">
                          <div>
                            <FaMicrophone className="audio_icon" />

                            {!isRecording ? (
                              <button
                                onClick={handleStartRecording}
                                className="btn btn-primary"
                              >
                                Start Recording
                              </button>
                            ) : (
                              <button
                                onClick={handleStopRecording}
                                className="btn btn-secondary"
                              >
                                Stop Recording
                              </button>
                            )}
                          </div>

                          {audioURL && (
                            <div
                              className="mt-4 listen_audio"
                              onClick={handleDeleteAudio}
                            >
                              <audio controls src={audioURL}></audio>
                              <MdDelete className="audio_icon" />
                            </div>
                          )}
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
