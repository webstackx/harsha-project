import React, { Component } from "react";
import { FeatureWrap } from "../../styles/Home/FeatureStyle";
import hr from "../../images/b-track/Hr-service.jpg";
import Facility from "../../images/b-track/Facility.jpg";
import staff from "../../images/b-track/staff.jpg";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={
        window.screen.width > 700
          ? { ...style, display: "block", background: "red" }
          : { display: "none" }
      }
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={
        window.screen.width > 700
          ? { ...style, display: "block", background: "green" }
          : { display: "none" }
      }
      onClick={onClick}
    />
  );
}

class Features extends Component {
  constructor() {
    super();
    this.state = {
      serviceData: [
        {
          img: hr,
          heading: "HR Services",
          text: "Btrack provides payroll management to mobilize personnel resources effectively. Documentation of pay roll is application based to track attendance. Automated leave management ensures a transparent process and pay slip processing easy.",
          mobileText:
            "Btrack provides payroll management to mobilize personnel resources effectively.",
        },
        {
          img: Facility,
          heading: "Facility Management",
          text: "Btrack aims at providing trained Professionals, uncompromised on quality at affordable price. We are a reliable, dedicated team that strives to achieve our commitment.",
          mobileText:
            "Btrack aims at providing trained Professionals, uncompromised on quality at affordable price.",
        },
        {
          img: staff,
          heading: "Contract Staffing",
          text: "Btrack is committed to provide staffs/personnel to ensure continuous productivity. The hiring process is automated, and fast for immediate posting.",
          mobileText:
            "Btrack is committed to provide staffs/personnel to ensure continuous productivity.",
        },
      ],
    };
  }

  componentDidMount() {}

  render() {
    let { serviceData } = this.state;
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      cssEase: "linear",
      className: "sample",
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      <FeatureWrap>
        <div className="Feature">
          <div className="Feature-Heading">Services</div>
          <div className="Feature-SubHeading">
            Btrack aims at providing trained Professionals, uncompromised on
            quality at affordable price. We are a reliable, dedicated team that
            strives to achieve our commitment.{" "}
          </div>
          <Slider {...settings}>
            {serviceData.length
              ? serviceData.map((item, index) => {
                  return (
                    <div className="Feature-section" key={index}>
                      <div className="Feature-section-image">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="Feature-section-Content">
                        <div className="Feature-section-Content-Heading">
                          {item.heading}
                        </div>
                        <div className="Feature-section-Content-Subheading">
                          {window.screen.width > 700
                            ? item.text
                            : item.mobileText}
                        </div>
                        {/* <button className="Feature-section-Content-Btn">
                          View More
                          <span>
                            <FaArrowRight />
                          </span>
                        </button> */}
                      </div>
                    </div>
                  );
                })
              : ""}
          </Slider>
        </div>
      </FeatureWrap>
    );
  }
}

export default Features;
