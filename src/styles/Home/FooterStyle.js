import styled from "styled-components";

const LightTheme = {
  BgColor: "#0e76a8",
  Color: "#fff",
};

const media = {
  mobile: "@media(max-width:700px)",
};

export const FooterWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: ${LightTheme.BgColor};
  color: ${LightTheme.Color};

  .Footer {
    display: flex;
    flex-direction: column;
    padding: 3rem 10%;

    ${media.mobile} {
      padding: 2rem 1.5rem;
    }
  }
  .Footer-Container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${media.mobile} {
      flex-direction: column;
      justify-content: center;
    }
  }
  .FooterLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;

    ${media.mobile} {
      margin-top: 0.1rem;
    }

    &-Text {
      font-size: 2rem;
      font-weight: bold;

      ${media.mobile} {
        font-size: 1.8rem;
      }
    }
    p {
      margin-top: 0.5rem;
      ${media.mobile} {
        margin-top: 0.3rem;
        font-size: 0.9rem;
      }
    }
  }
  .FooterNavLinks {
    display: flex;
    justify-content: space-between;

    ${media.mobile} {
      flex-direction: column;
      margin-top: 1rem;
    }

    &-Item {
      font-size: 1rem;
      margin: 0 1rem;
      cursor: pointer;
      height: 1.5rem;

      ${media.mobile} {
        margin: 0.3rem 0;
      }
    }
  }

  .Footer-Social {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* padding-top: 5rem; */

    ${media.mobile} {
      margin-top: 2.5rem;
    }
  }

  .Footer-Social-Fb,
  .Footer-Social-Insta,
  .Footer-Social-Twit,
  .Footer-Social-Mail {
    font-size: 1.5rem;
    padding: 0 1rem;
    cursor: pointer;

    .Social-Mail-Open {
      display: none;
    }
  }
  .Footer-Social-Link {
    font-size: 1.3rem;
    padding: 0 1rem;
    cursor: pointer;
  }
  /* .Footer-Social-Fb:hover {
    color: #3b5998;
  }
  .Footer-Social-Link:hover {
    color: #0e76a8;
  }
  .Footer-Social-Insta:hover {
    color: #e1306c;
  }
  .Footer-Social-Twit:hover {
    color: #00acee;
  } */
  .Footer-Social-Mail:hover {
    /* color: #bb001b; */

    .Social-Mail-Close {
      display: none;
    }
    .Social-Mail-Open {
      display: block;
    }
  }

  .Footer-Copyright {
    padding-top: 1rem;
    display: flex;
    justify-content: center;

    ${media.mobile} {
      text-align: center;
    }
  }

  .emailHref {
    text-decoration: none;
    color: #ffffff;

    /* &:hover {
      color: #bb001b;
    } */
  }

  .emailText {
    text-decoration: none;
    color: #e5e5e5;

    /* &:hover {
      color: #17aed4;
    } */
  }
`;
