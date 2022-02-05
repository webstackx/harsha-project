import React from "react";
import { FooterWrap } from "../../styles/Home/FooterStyle";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";

// ffb03b
function Footer() {
  return (
    <FooterWrap>
      <div className="Footer">
        <div className="Footer-Container">
          <div className="FooterLogo">
            <div className="FooterLogo-Text">THE EQUALS</div>
            <p>Future Employee Solutions</p>
          </div>
          <div className="FooterNavLinks">
            <div className="FooterNavLinks-Item">rabcsdfsdfs534@gmail.com</div>
            <div className="FooterNavLinks-Item">+91 9876543210</div>
            <div className="FooterNavLinks-Item">
              #301/284, XYZ complex, ABCD , Bangalore 64
            </div>
          </div>
          <div className="Footer-Social">
            <div className="FooterNavLinks2">
              <div className="FooterNavLinks-Item">
                Security & House Keeping
              </div>
              <div className="FooterNavLinks-Item">Payroll Management</div>
              <div className="FooterNavLinks-Item">Employee Contractor</div>
            </div>
            <div className="Footer-Social2">
              <div
                className="Footer-Social-Fb"
                onClick={() =>
                  window.open("https://www.facebook.com/WebstackX")
                }
              >
                <FaFacebookSquare />
              </div>
              <div
                className="Footer-Social-Insta"
                onClick={() =>
                  window.open("https://www.instagram.com/webstackx/")
                }
              >
                <RiInstagramFill />
              </div>
              <div className="Footer-Social-Mail">
                <a className="emailHref" href="mailto:contact@webstackx.com">
                  <span className="Social-Mail-Close">
                    <FaEnvelope />
                  </span>
                  <span className="Social-Mail-Open">
                    <FaEnvelopeOpen />
                  </span>
                </a>
              </div>
              <div
                className="Footer-Social-Link"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/webstack-x-4571b9207/"
                  )
                }
              >
                <ImLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="Footer-Copyright">
          © 2021 THE EQUALS Pvt. Ltd. All Rights Reserved .
        </div>
      </div>
    </FooterWrap>
  );
}

export default Footer;
