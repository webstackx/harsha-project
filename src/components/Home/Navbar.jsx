import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavbarWrap } from "../../styles/Home/NavbarStyle";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar(props) {
  const dataArr = [
    { name: "About", id: "About" },
    { name: "Services", id: "Services" },
    { name: "Contact", id: "Contact" },
  ];
  useEffect(() => {
    Aos.init({
      duration: 5000,
    });
  });
  return (
    <NavbarWrap
      onClick={props.toggleNavbar}
      data-aos="fade-left"
      data-aos-duration="500"
    >
      <div className="navbarContainer">
        <div className="navbarContainer__header">
          <div>Contents</div>
          {/* <img onClick={props.toggleNavbar} src={close} alt="close" /> */}
          <AiOutlineClose
            className="navbarContainer__header--close"
            style={{ color: "#ffffff" }}
          />
        </div>
        <div className="navbarContainer__contents">
          {dataArr.map((data, index) => {
            return (
              <div className="navbarContainer__contents--para" key={index}>
                <Link to={data.id} onClick={props.toggleNavbar} smooth={true}>
                  {data.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </NavbarWrap>
  );
}
