import React from "react";
import { ScrollTopWrap } from "../../styles/Home/ScrollTopStyle";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollTop(props) {
  return (
    <ScrollTopWrap>
      <div className="div" onClick={props.gotoTop}>
        <AiOutlineArrowUp />
      </div>
    </ScrollTopWrap>
  );
}
