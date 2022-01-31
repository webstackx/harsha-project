import React from "react";
import workplace from "../../images/workplace.png";
import facebook from "../../images/facebook-f.svg";
import linkedinAlt from "../../images/linkedin-alt.svg";
import mouseAlt from "../../images/mouse-alt.svg";
import arrowDown from "../../images/arrow-down.svg";
import whatsapp from "../../images/whatsapp.svg";
import { BannerWrap } from "../../styles/Home/BannerStyle";

export default function Banner(props) {
  return (
    <BannerWrap>
      <div className="container">
        <div className="bannerSocial">
          <img src={facebook} alt="" className="bannerSocial__facebook" />
          <img src={linkedinAlt} alt="" className="bannerSocial__linkedIn" />
          <img src={whatsapp} alt="" className="bannerSocial__whatsApp" />
        </div>
        <div className="bannerQuote">
          <div className="bannerQuote__para1">Hi, Welcome to</div>
          <div className="bannerQuote__para2">COMPANY NAME</div>
          <div className="bannerQuote__para3">
            Solution for Semi & Un-Skilled Labours requirement
          </div>
        </div>
        <div className="bannerIcon">
          <img className="bannerIcon__img" src={workplace} alt="" />
        </div>
      </div>
      <div className="gifDiv">
        {!props.isBackground ? (
          <div className="gifDiv__Container">
            <img
              className="gifDiv__Container--mouse"
              src={mouseAlt}
              alt="swipe"
            />
            <div className="gifDiv__Container--para">Scroll down</div>
            <img
              className="gifDiv__Container--arrow"
              src={arrowDown}
              alt="swipe"
            />
          </div>
        ) : (
          ""
        )}
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
