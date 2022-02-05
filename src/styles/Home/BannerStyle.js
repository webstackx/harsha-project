import styled from "styled-components";
import bg from "../../images/harsha/bannerImage.jpg";

const lightTheme = {
  bgColor: "#e8edff",
};

const media = {
  mobile: "@media(max-width:600px)",
  smallMobile: "@media(max-width: 370px)",
  iSmallMobile: "@media(max-width: 325px)",
  tabs: "@media(max-width: 1050px)",
};

export const BannerWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;

  ${media.tabs} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .container {
    padding: 0 9%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20%;

    ${media.mobile} {
      padding: 0;
      width: 86vw;
      padding-top: 6rem;
      padding-bottom: 4rem;
      flex-direction: column;
      justify-content: center;
    }
  }

  .bannerSocial {
    display: flex;
    flex-direction: column;
    width: 10%;

    ${media.mobile} {
      order: 3;
      flex-direction: row;
      align-items: center;
      width: 100%;
      margin-top: 2rem;
    }

    &__facebook,
    &__linkedIn,
    &__whatsApp {
      width: 2.5rem;
      margin-bottom: 1.2rem;

      ${media.mobile} {
        width: 8%;
        margin-bottom: 0;
        margin-right: 1.5rem;
      }
    }
  }

  .bannerQuote {
    color: #252d40;
    font-size: 2.5rem;
    font-style: 600;
    line-height: 170%;
    width: 45%;
    text-align: right;

    &__para1 {
      color: #ffffff;
      margin-bottom: 0.8rem;

      ${media.smallMobile} {
        font-size: 1.3rem;
      }

      ${media.iSmallMobile} {
        font-size: 1rem;
      }
    }

    &__para2 {
      font-size: 3.4rem;
      font-weight: 600;

      ${media.mobile} {
        font-size: 3rem;
        line-height: 100%;
      }

      ${media.smallMobile} {
        font-size: 2.3rem;
      }

      ${media.iSmallMobile} {
        font-size: 1.9rem;
      }
    }

    &__para3 {
      font-size: 2rem;
      line-height: 130%;
      margin-top: 2rem;
      color: #ffffff;

      ${media.mobile} {
        font-size: 1.5rem;
        line-height: 100%;
      }

      ${media.smallMobile} {
        font-size: 1.2rem;
      }

      ${media.iSmallMobile} {
        font-size: 0.9rem;
      }
    }

    &__button {
      font-family: "Ubuntu", sans-serif;
      background: #252d40;
      border: none;
      border-radius: 50px;
      color: #ffffff;
      padding: 15px 10px;
      width: 400px;
      font-size: 1.2rem;
      text-transform: uppercase;
      word-spacing: 0.2rem;
      font-weight: bold;
      margin-top: 3rem;
    }

    ${media.mobile} {
      order: 2;
      margin: 0;
      width: 100%;
      font-size: 1.5rem;
      margin-top: 3.5rem;
    }

    ${media.iSmallMobile} {
      margin-top: 1.5rem;
    }
  }

  .bannerIcon {
    width: 45%;

    ${media.mobile} {
      order: 1;
      width: 90%;
      padding-top: 1rem;
    }

    ${media.smallMobile} {
      order: 1;
      width: 70%;
      padding-top: 1rem;
    }

    &__img {
      width: 100%;
    }
  }

  .gifDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 6rem;
    transition: all 1s ease-in-out;

    ${media.tabs} {
      display: none;
    }

    &__Container {
      width: 53%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &--mouse,
      &--arrow {
        width: 2.6rem;
      }

      &--para {
        font-size: 1.3rem;
        color: #4f4f4f;
      }
    }
  }

  .bannerLabel {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 110%;
    margin-bottom: 24px;
    color: #17aed4;

    ${media.mobile} {
      font-size: 2.2rem;
    }
  }

  @keyframes text3 {
    0%,
    33%,
    66%,
    100% {
      width: 0px;
      display: none;
    }

    78%,
    88% {
      display: block;
      width: 100%;
    }
  }
  @keyframes text2 {
    0%,
    33%,
    66%,
    100% {
      display: none;
      width: 0px;
    }

    44%,
    55% {
      width: 100%;
      display: block;
    }
  }
  @keyframes text1 {
    0%,
    33%,
    66%,
    100% {
      width: 0px;
      display: none;
    }
    11%,
    22% {
      width: 100%;
      display: block;
    }
  }
  @keyframes caret {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }

  #TextField1 {
    animation: text1;
  }
  #TextField2 {
    animation: text2;
  }
  #TextField3 {
    animation: text3;
  }

  #TextField1,
  #TextField2,
  #TextField3 {
    position: absolute;
    left: 0;
    text-decoration: none !important;
    text-decoration-color: #000000 !important;
    text-decoration-thickness: 8px !important;
    -webkit-text-decoration-underline: underline !important;
    -webkit-text-decoration-color: #7000f6 !important;
    -webkit-text-decoration-thickness: 8px !important;
    margin-bottom: -8px;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    animation-duration: 6s;
    animation-timing-function: steps(7, end);
    animation-iteration-count: infinite;
  }

  #TextField1::after,
  #TextField2::after,
  #TextField3::after {
    content: "";
    position: absolute;
    right: 0;
    animation: caret infinite;
    animation-duration: 0.5s;
    animation-timing-function: steps(1, end);
  }
`;
