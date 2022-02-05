import React from "react";
import { Link } from "react-scroll";
import { HeaderWrap } from "../../styles/Home/HeaderStyle";
import { CgMoreO } from "react-icons/cg";

export default function Header(props) {
  const dataArr = [
    { name: "About", id: "About" },
    { name: "Services", id: "Services" },
  ];

  const dataArr1 = [
    { name: "Equals Twinteriors", id: "Services" },
    { name: "Equals Digital", id: "Contact" },
  ];

  return (
    <HeaderWrap isBackground={props.isBackground}>
      <div className="contents1">
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
      <div className="logoName">
        <div className="logoName__title">THE EQUALS</div>
      </div>
      <div className="contents">
        {dataArr1.map((data, index) => {
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
