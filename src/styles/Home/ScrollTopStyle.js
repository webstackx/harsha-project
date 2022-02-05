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
    background: #88bbeb;
    border: 2px solid #171c28;
    border-radius: 5px;
    padding: 0.5rem 0.6rem 0.4rem;
    color: #171c28;
    font-size: 1.6rem;
    font-weight: bolder;
  }
`;
