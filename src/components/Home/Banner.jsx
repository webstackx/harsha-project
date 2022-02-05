import React from "react";
import workplace from "../../images/harsha/bannerImage.gif";
import facebook from "../../images/facebook-f.svg";
import linkedinAlt from "../../images/linkedin-alt.svg";
import mouseAlt from "../../images/mouse-alt.svg";
import arrowDown from "../../images/harsha/downArrow.gif";
import whatsapp from "../../images/whatsapp.svg";
import { Link } from "react-scroll";
import { BannerWrap } from "../../styles/Home/BannerStyle";
import BannerImage from "../../images/harsha/bannerImage.jpg";

export default function Banner(props) {
  return (
    <BannerWrap>
      <div className="container">
        <div className="bannerQuote">
          <div className="bannerQuote__para1">Hi, Welcome to</div>
          <div className="bannerQuote__para2">THE EQUALS</div>
          <div className="bannerQuote__para3">
            Solution for Semi & Un-Skilled Labours requirement
          </div>
          <button className="bannerQuote__button">
            <Link to={"Contact"} smooth={true}>
              Book an appointment
            </Link>
          </button>
        </div>
      </div>
    </BannerWrap>
  );
}

{
  /* <div className="bannerLabel">
        <span id="TextField1">concentration</span>
        <span id="TextField2">innovation</span>
        <span id="TextField3">organization</span>
    </div> */
}

// <div className="gifDiv__Container">
//   <img
//     className="gifDiv__Container--mouse"
//     src={mouseAlt}
//     alt="swipe"
//   />
//   <div className="gifDiv__Container--para">Scroll down</div>
//   <img
//     className="gifDiv__Container--arrow"
//     src={arrowDown}
//     alt="swipe"
//   />
// </div>
