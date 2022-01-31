import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const ScrollTopWrap = styled.div`
  position: fixed;
  bottom: 5.5rem;
  right: 2rem;
  cursor: pointer;

  ${media.mobile} {
    right: 1.2rem;
    bottom: 4.1rem;
  }

  .div {
    background: #7b60d1;
    border: 0.5px solid #ffffff;
    border-radius: 5px;
    padding: 0.5rem 0.6rem 0.4rem;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: bolder;
  }
`;
