import React from "react";
import { Link } from "react-scroll";
import { HeaderWrap } from "../../styles/Home/HeaderStyle";
import { CgMoreO } from "react-icons/cg";

export default function Header(props) {
  const dataArr = [
    { name: "About", id: "About" },
    { name: "Services", id: "Services" },
    { name: "Contact", id: "Contact" },
  ];

  return (
    <HeaderWrap isBackground={props.isBackground}>
      <div className="logoName">
        {/* <img
          className="logoName__img"
          src={props.isBackground ? logo1 : logo}
          aly="logo"
        /> */}
        <div className="logoName__title">COMPANY NAME</div>
      </div>
      <div className="contents">
        {dataArr.map((data, index) => {
          return (
            <div className="contents__para" key={index}>
              <Link to={data.id} smooth={true}>
                {data.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="navbarIcon">
        <CgMoreO className="navbarIcon__img" onClick={props.toggleNavbar} />
      </div>
    </HeaderWrap>
  );
}
