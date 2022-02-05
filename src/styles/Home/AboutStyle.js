import styled from "styled-components";

const media = {
  tab: "@media(max-width:992px)",
  mobile: "@media(max-width:600px)",
  iphone5: "@media(max-width:330px)",
};

export const AboutWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-bottom: 5rem;

  ${media.mobile} {
    width: 86vw;
  }
  ${media.iphone5} {
    width: 84vw;
  }
  .about-header {
    color: #ffffff;
    font-size: 2.5rem;
    text-align: center;
    padding: 3rem;
    ${media.mobile} {
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }

  .about-body {
    text-align: justify;
    line-height: 1.8;
    color: #ffffff;
    opacity: 0.7;
  }

  .about-button {
    display: flex;
    align-items: center;
    justify-content: center;
    &-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 150px;
      color: #fff;
      background-color: #0e76a8;
      border: none;
      padding: 0.8rem;
      font-size: 1.1rem;
      cursor: pointer;
      letter-spacing: 1px;
      margin: 1rem 0;
      border-radius: 5px;
      :hover {
        opacity: 0.9;
      }
    }

    &-2 {
      display: none;
    }
  }
  .about-fullbody {
    display: none;
  }
  .about-fullbody1 {
    text-align: justify;
    line-height: 1.8;
    color: #ffffff;
    opacity: 0.7;
  }
`;
