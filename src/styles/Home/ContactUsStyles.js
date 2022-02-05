import styled from "styled-components";
import bg from "../../images/harsha/bannerImage.jpg";
import bg1 from "../../images/harsha/bannerImage1.jpg";

const media = {
  tab: "@media(max-width:992px)",
  mobile: "@media(max-width:600px)",
};

export const ContactUsWrap = styled.div`
  width: 100%;
  padding: 2rem 0;
  padding-bottom: 3rem;
  padding-top: 0;
  background-image: url(${bg1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${media.tab} {
    width: 80vw;
  }
  ${media.mobile} {
    width: 90vw;
  }
  .contact-header {
    font-size: 2.5rem;
    text-align: center;
    padding: 3rem;
    color: #252d40;
    font-weight: bolder;
    ${media.mobile} {
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }
  .contact-section {
    width: 40%;
    margin: 0 auto;
    ${media.mobile} {
      flex-direction: column;
    }
    &-basic {
      display: flex;
      flex-direction: column;
      flex: 0 0 40%;
      /* justify-content: center; */
      &-details {
        display: flex;
        /* justify-content: center; */
        align-items: center;
        font-size: 2rem;
        color: #0e76a8;
        padding: 0.5rem;
        /* flex: 0 0 40%; */
        ${media.mobile} {
          justify-content: center;
          font-size: 1.8rem;
        }

        &-data {
          padding: 0 1rem;
          color: #222;
          flex: 0 0 60%;

          &-header {
            font-size: 1.6rem;
            padding: 0.5rem 0;
            letter-spacing: 1px;
            color: #ffffff;
          }
          &-phone {
            display: flex;
            font-size: 0.875rem;
            color: grey;
          }
          ${media.mobile} {
            flex: 0 0 70%;
            padding: 0 0 0 15%;

            &-header {
              font-size: 1.2rem;
              padding: 0.5rem 0;
              letter-spacing: 1px;
            }
            &-phone {
              display: flex;
              font-size: 0.875rem;
              color: grey;
            }
          }
        }
      }
    }
    &-form {
      font-family: "Ubuntu", sans-serif;
      display: flex;
      flex-direction: column;
      flex: 0 0 100%;
      justify-content: center;
      align-items: center;

      &-input {
        font-family: "Ubuntu", sans-serif;
        display: flex;
        margin-bottom: 0.5rem;
        justify-content: space-between;
        ${media.mobile} {
          flex-direction: column;
        }
        &-1 {
          width: 100%;
          padding: 0.6rem 0;
          background-color: transparent;
          border: none;
          border-bottom: 2px solid #252d40;
          /* border-radius: 5px; */
          margin-bottom: 1rem;

          ${media.mobile} {
          }
          ${media.mobile} {
            width: 93%;
            margin: 1rem auto;
            padding: 0.8rem;
          }
        }
        &-1:focus {
          outline: none;
        }
      }
      &-input2 {
        font-family: "Ubuntu", sans-serif;
        margin: 1rem 0;
        margin-top: 0;
        padding: 0.6rem 0;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #252d40;
        width: 100%;
        ${media.mobile} {
          padding: 0.8rem 0;
        }
        &-text {
          background-color: white;
        }
      }
      &-input2:focus {
        outline: none;
      }
      &-input3 {
        font-family: "Ubuntu", sans-serif;
        width: 100%;
        padding: 0.6rem 0;
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #252d40;
        /* border-radius: 5px; */
      }
      &-input3:focus {
        font-family: "Ubuntu", sans-serif;
        outline: none;
      }
      &-button {
        font-family: "Ubuntu", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        color: #fff;
        background-color: #252d40;
        border: none;
        padding: 1rem;
        color: #ffffff;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        letter-spacing: 1px;
        margin: 2rem 0;
        margin-top: 4rem;
        border-radius: 50px;
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          padding: 0 10px;
        }
        :hover {
          opacity: 0.9;
        }

        ${media.mobile} {
          padding: 0.8rem;
          font-size: 0.9rem;
          width: auto;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            padding: 0 10px;
          }
          :hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
`;
