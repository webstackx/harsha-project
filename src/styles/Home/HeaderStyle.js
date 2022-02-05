import styled from "styled-components";

const lightTheme = {
  bgColor: "rgba(0, 0, 0, 0.9)",
  logoColor: "#FFFFFF",
  navColor: "#e0e0e0",
};

const media = {
  mobile: "@media(max-width:600px)",
};

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  /* width: 100%; */
  padding: 0.8rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.isBackground ? "#171c28" : "rgba(23, 28, 40, 0.6)"};
  transition: all 0.5s ease-in-out;
  transform: translateY(-0.2rem);
  box-shadow: 6px 1px 8px rgba(0, 0, 0, 0.4);

  .logoName {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &__img {
      width: 33%;
      margin-left: 8%;

      ${media.mobile} {
        width: 100%;
        margin-left: 0;
      }
    }

    &__title {
      margin-left: 24%;
      padding: 1rem 0;
      font-size: 2rem;
      font-weight: 600;
      color: #ffffff;

      ${media.mobile} {
        padding: 0.2rem 0;
        margin-left: 10%;
      }
    }
  }

  .contents {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: ${lightTheme.navColor};
    margin-right: 3%;

    ${media.mobile} {
      display: none;
    }

    &__para {
      transition: all 0.5s ease-in-out;
      &:hover {
        /* color: #0e76a8; */
        cursor: pointer;
        transform: scale(1.15);
      }
    }
  }

  .contents1 {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: ${lightTheme.navColor};
    margin-left: 3%;

    ${media.mobile} {
      display: none;
    }

    &__para {
      transition: all 0.5s ease-in-out;
      &:hover {
        /* color: #0e76a8; */
        cursor: pointer;
        transform: scale(1.15);
      }
    }
  }

  .navbarIcon {
    display: none;

    ${media.mobile} {
      width: 60%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      color: ${lightTheme.logoColor};
    }

    &__img {
      width: 25px;
      height: 25px;
      margin-right: 8%;
    }
  }
`;
