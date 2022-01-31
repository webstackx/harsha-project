import React, { useState } from "react";
import { ContactUsWrap } from "./../../styles/Home/ContactUsStyles";
import { FiPhone } from "react-icons/fi";
import { BiSend } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  console.log("aaaaaaaa : ", name, email, service, description);
  return (
    <ContactUsWrap>
      <div className="contact-header">Contact Us</div>
      <div className="contact-section">
        <div className="contact-section-basic">
          <div className="contact-section-basic-details">
            <FiPhone />
            <div className="contact-section-basic-details-data">
              <div className="contact-section-basic-details-data-header">
                Call Me
              </div>
              <div className="contact-section-basic-details-data-phone">
                +91 9876543210
              </div>
            </div>
          </div>
          <div className="contact-section-basic-details">
            <FaRegEnvelope />
            <div className="contact-section-basic-details-data">
              <div className="contact-section-basic-details-data-header">
                Email
              </div>
              <div className="contact-section-basic-details-data-phone">
                abc@gmail.com
              </div>
            </div>
          </div>
          <div className="contact-section-basic-details">
            <ImLocation2 />
            <div className="contact-section-basic-details-data">
              <div className="contact-section-basic-details-data-header">
                Location
              </div>
              <div className="contact-section-basic-details-data-phone">
                #301/284, XYZ complex, ABCD , Bangalore 64
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section-form">
          <div className="contact-section-form-input">
            <input
              className="contact-section-form-input-1"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e)}
            />
            <input
              className="contact-section-form-input-1"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e)}
            />
          </div>
          <select
            className="contact-section-form-input2"
            onChange=""
            placeholder="services"
            onChange={(e) => setService(e)}
          >
            <option className="contact-section-form-input2-text">
              Service 1
            </option>
            <option className="contact-section-form-input2-text">
              Service 2
            </option>
            <option className="contact-section-form-input2-text">
              Service 3{" "}
            </option>
            <option className="contact-section-form-input2-text">
              Service 4
            </option>
          </select>
          <textarea
            className="contact-section-form-input3"
            type="text"
            placeholder="Description"
            rows="10"
            onChange={(e) => setDescription(e)}
          />
          <button className="contact-section-form-button">
            SUBMIT{" "}
            <span>
              <BiSend />
            </span>
          </button>
        </div>
      </div>
    </ContactUsWrap>
  );
};

export default ContactUs;
