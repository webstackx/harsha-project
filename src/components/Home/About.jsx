import React, { useState } from "react";
import { AboutWrap } from "./../../styles/Home/AboutStyle";
import btrack from "./../../images/pdf/btack.pdf";
import { MdFileDownload } from "react-icons/md";

const About = () => {
  const [classname, setClassname] = useState("about-fullbody");
  const [classname1, setClassname1] = useState("about-button-1");

  const handleClick = () => {
    // setClassname("about-fullbody1");
    // setClassname1("about-button-2");
  };

  return (
    <AboutWrap>
      <div className="about-header">About Us</div>
      {/* <div className="about-body">
        BTrack well-known establishment for one-stop destination servicing
        customers both local and from other parts of Bangalore. Over the course
        of its journey, this business has established a firm foothold in it’s
        industry. The belief that customer satisfaction is as important as their
        products and services have helped this establishment garner a vast base
        of customers, which continues to grow by the day. This business employs
        individuals that are dedicated towards their respective roles and put in
        a lot of effort to achieve the common vision and larger goals of the
        company. <br />
        <br />
      </div> */}
      <div className="about-body">
        THE EQUALS strives to provide the best solutions to customers through
        innovation, commitment to quality, and strict compliance to standards.
        The service offered by us are a benchmark. We adhere to be our best and
        dedicate our service to create value to our customers.
      </div>
      <div className="about-button">
        <a href={btrack} download="BTrack">
          <button className="about-button-1" onClick={handleClick}>
            Download &nbsp;
            <MdFileDownload />
          </button>
        </a>
      </div>
      <div
        className={
          classname === "about-fullbody" ? "about-fullbody" : "about-fullbody1"
        }
      >
        In the near future, this business aims to expand its line of products
        and services and cater to a larger client base. In Bangalore, this
        establishment occupies a prominent location in Yelahanka. It is an
        effortless task in commuting to this establishment as there are various
        modes of transport readily available. It is known to provide top service
        in the following categories: Manpower Suppliers, Industrial Labour
        Contractors, Housekeeping Service, Security Service, Payroll Service,
        Statutory Compliance, Complete Labour Law related Service.
        <br />
        <br />
        “THE EQUALS Pvt Ltd”is a team of Experienced Professionalsinthe business
        of Human Resource Knowledge Processing Services.
        <br />
        <br />
        We are pleased to describe ourselves as a Expertise in the areas of
        Human Resource Management, Statutory Compliances, Labour Compliances
        related Solutions Company with a focus on Contract Labour Regulation,
        Flexi Staffing, Pay Roll Compliances and Pay Roll Services.
      </div>
    </AboutWrap>
  );
};

export default About;
