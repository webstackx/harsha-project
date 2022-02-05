import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const SuccessModalWrap = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .container {
    position: relative;
    background-color: #000000;
    width: 25%;
    margin: auto;
    border-radius: 10px;

    ${media.mobile} {
      width: 100%;
      border-radius: 50px 50px 0 0;
      position: fixed;
      bottom: 0;
    }

    &__close {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;

      &:hover {
        cursor: pointer;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      &--img {
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        height: auto;

        ${media.mobile} {
          border-radius: 50px 50px 0 0;
        }
      }

      &--para {
        color: #5cd672;
        font-size: 1.2rem;
        padding: 2rem;
        font-weight: 500;
        line-height: 130%;
      }
    }
  }
`;
