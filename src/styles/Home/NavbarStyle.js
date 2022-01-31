import styled from "styled-components";

const media = {
  mobile: "@media(max-width:600px)",
};

export const NavbarWrap = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: transparent;

  ${media.mobile} {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .navbarContainer {
    background-color: #7b60d1;
    width: 45%;
    height: 100vh;
    padding: 0 1.3rem;

    &__header {
      margin: 1.3rem 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #ffffff;
      /* color: #000000; */
      font-size: 1.5rem;
      font-weight: 600;

      &--close {
        font-size: 1.5rem;
      }
    }

    &__contents {
      /* color: #222222; */
      color: #ffffff;

      &--para {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
