import React, { useEffect } from "react";
import success from "../../images/success2.gif";
import Aos from "aos";
import "aos/dist/aos.css";
import close from "../../images/closeW.png";
import { SuccessModalWrap } from "../../styles/Home/SuccessModalStyle";

export default function SuccessModal(props) {
  useEffect(() => {
    Aos.init({
      duration: 5000,
    });
  });

  return (
    <SuccessModalWrap>
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <img
          className="container__close"
          onClick={props.toggleSuccess}
          src={close}
          alt="close"
        />
        <div className="container__body">
          <img className="container__body--img" src={success} alt="success" />
          <div className="container__body--para">
            Our team will contact you within few hours
          </div>
        </div>
      </div>
    </SuccessModalWrap>
  );
}
