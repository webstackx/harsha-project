import styled from "styled-components";

const media = {
  tab: "@media(max-width:992px)",
  mobile: "@media(max-width:600px)",
};

export const ContactUsWrap = styled.div`
  width: 60vw;
  margin: 0 auto;
  padding: 2rem 0;
  padding-bottom: 4rem;
  padding-top: 0;
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
    color: #222;
    ${media.mobile} {
      font-size: 1.5rem;
      padding: 1.5rem;
    }
  }
  .contact-section {
    display: flex;
    flex-direction: row;
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
        color: #7b60d1;
        padding: 1rem;
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
      display: flex;
      flex-direction: column;
      flex: 0 0 60%;
      justify-content: center;
      /* align-items: center; */

      &-input {
        display: flex;
        margin: 0.5rem 0;
        justify-content: space-between;
        ${media.mobile} {
          flex-direction: column;
        }
        &-1 {
          width: 40%;
          padding: 1rem;
          background-color: #e5edf4;
          border: none;
          margin: 1rem 0;
          ${media.mobile} {
          }
          ${media.mobile} {
            width: 93%;
            margin: 1rem auto;
            padding: 0.8rem;
          }
        }
      }
      &-input2 {
        margin: 1rem 0;
        margin-top: 0;
        padding: 1rem;
        background-color: #e5edf4;
        border: none;
        ${media.mobile} {
          padding: 0.8rem 0;
        }
        &-text {
          background-color: white;
        }
      }
      &-input3 {
        /* margin: 1rem 0; */
        padding: 1rem;
        background-color: #e5edf4;
        border: none;
      }
      &-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        color: #fff;
        background-color: #7b60d1;
        border: none;
        padding: 1rem;
        color: #fff;
        font-size: 1.1rem;
        cursor: pointer;
        letter-spacing: 1px;
        margin: 1rem 0;
        border-radius: 5px;
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
