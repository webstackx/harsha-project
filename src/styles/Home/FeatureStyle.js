import styled from "styled-components";

const LightTheme = {
  BgColor: "#fff",
  Color: "black",
};

const media = {
  mobile: "@media(max-width:700px)",
  iphone5:"@media(max-width:330px)",
  phone425:"@media(max-width:425px)",
  phone375:"@media(max-width:375px)",
  // tab:"@media(max-width:800px)",
  tabPro:"@media(max-width:1100px)",
};

export const FeatureWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${LightTheme.BgColor};
  color: ${LightTheme.Color};
  box-sizing: border-box;

  .sample {
    width: 60vw;
    margin: 4rem auto;
    box-sizing: border-box;

    ${media.tabPro} {
      /* width: 290px; */
      width:80vw;
    }
    
    ${media.mobile} {
        /* width: 380px; */
        width:86vw;
        margin: 1.5rem auto;
      }
    /* ${media.phone375} {
      width: 325px;
      width:86vw;
    } */
    ${media.iphone5} {
      /* width: 290px; */
      width:84vw;
    }
  }

   .Feature {
      display: flex;
      flex-direction: column;
      padding: 5rem 10%;
      box-sizing: border-box;
      padding-bottom: 0;

      ${media.mobile} {
        padding: 1rem 0;
      }

      &-Heading {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 2.5rem;
        color: #222;
        font-weight: 500;
        line-height: 150%;

        ${media.mobile} {
           font-size: 1.5rem;
           margin: 1rem 0;
           margin-bottom: 0.8rem;
        }
      }
      &-SubHeading{
        color: #454547;
        margin-top: 2.5rem;
        text-align: justify;
        /* font-size: 1.2rem; */
        opacity: 0.7;
        line-height: 1.8;

        ${media.mobile} {
          padding: 0.5rem auto;
          text-align: justify;
          width: 86vw;
          margin-top: 0.5rem;
        }

        ${media.iphone5} {
          width:84vw;
        }

      }
      &-section {
        padding: 1rem;
        display: grid !important;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        box-sizing: border-box;

        ${media.mobile} {
          grid-template-columns: 1fr;
          padding:0
        }

        &-image {
          display: flex;
          width: 75%;
          height: auto;
          height: 260px;

          ${media.mobile} {
            width: 100%;
            margin: 1rem auto;
            height: 225px;
          }

          img {
            width: 100%;
            height: auto;
            border-radius: 5px;
          }
        }

        &-Content {
          display: flex;
          flex-direction: column;

          ${media.mobile} {
            width: 100%;
            margin: 0 auto;
          }

          &-Heading {
            font-size: 1.8rem;
            color: #222;
            line-height: 150%;
            font-weight: 510;

            ${media.mobile} {
              text-align: justify;
              font-size: 1.3rem;
            }
          }
          &-Subheading {
            /* font-size: 1.2rem; */
            opacity: 0.7;
            line-height: 1.8;
            color: #454547;
            margin-top: 1rem;

            ${media.mobile} {
              margin-top: 0.5rem;
            }
            ${media.iphone5} {
              margin-top: 0.5rem;
            }
          }
          &-Btn {
            background-color: #7b60d1;
            color: white;
            cursor: pointer;
            padding: 12px 20px;
            margin-top: 1.5rem;
            border-radius: 5px;
            width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.05rem;
            font-weight: 550;
            outline: none;
            border: none;
            transition: 0.5s;

            ${media.mobile} {
              margin: 1.5rem 0;
              margin-left: 1px;
              /* margin-bottom: 0; */
            }

            :hover {
              background-color: #9979da;
              color: #f5f5f5;
            }

            span {
              display: flex;
              font-size: 1rem;
              margin-left: 1rem;
            }
          }
        }
      }
    }
`;

// 6b86d28796306643668b457acd008fb86eb27bb5
