import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_top {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #3b546a;
        height: 40rem;
        p {
          width: 80%;
          text-align: center;
          color: white;
          text-transform: uppercase;
          font-size: 50px;
          line-height: 50px;
        }
        position: relative;
        .tringle {
          position: absolute;
          left: 40%;
          width: 0;
          bottom: -18%;
          height: 0;
          border-left: 10rem solid transparent;
          border-right: 10rem solid transparent;
          border-top: 8rem solid #3b546a;
          z-index: 1;
        }
      }

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40rem;
        position: relative;

        .section2_data {
          display: flex;
          width: 50%;
          height: 80%;

          justify-content: space-around;
          align-items: center;
          flex-direction: column;
  
          position: relative;
          align-items: center;

          h3 {
            text-transform: uppercase;
            font-family: 'Montserrat Alternates', sans-serif;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            
          }
          li {
          
            position: relative;
            text-transform: uppercase;
            font-size: 29.99px;
            line-height: 33.32px;
            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;

            font-family: Proxima-Bold;
          }
          li:nth-child(2) {
            margin-top: 43px;
            color: black;
            display: flex;
            flex-direction: column;
             width: 80%;
             text-align:left;
          }
          span {
            
            font-weight: 500;
            font-family: "Proxima-Light";
            font-style: italic;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          li:nth-child(1) {
            width: 100%;
            height: 72%;
           
            position: relative;
            color: black;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;

      align-items: center;

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column-reverse;
        position: relative;

        .section2_data {
          display: flex;
          width: 100%;

          height: 22rem;

          margin-top: 3rem;

          justify-content: space-around;
          align-items: center;
          flex-direction: column;

          position: relative;
          align-items: center;

          h3 {
            text-transform: uppercase;
          }
          li {
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-size: 29.99px;
            line-height: 33.32px;

            text-align: center;

            font-family: Proxima-Bold;
          }
          li:nth-child(2) {
            margin-top: 43px;
            color: black;
            display: flex;
            flex-direction: column;
          }
          span {
            margin-top: 43px;
            font-weight: 500;
            font-family: "Proxima-Light";
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          li:nth-child(1) {
            width: 100%;
            height: 90%;
            position: relative;
            color: black;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40rem;
        position: relative;

        .section2_data {
          display: flex;
          width: 50%;
          height: 90%;

          justify-content: space-around;
          align-items: center;
          flex-direction: column;

          position: relative;
          align-items: center;

          h3 {
            text-transform: uppercase;
          }
          li {
            position: relative;
            text-transform: uppercase;
            font-size: 29.99px;
            line-height: 33.32px;

            text-align: center;

            font-family: Proxima-Bold;
          }
          li:nth-child(2) {
            margin-top: 43px;
            color: black;
            display: flex;
            flex-direction: column;
          }
          span {
            margin-top: 43px;
            font-weight: 500;
            font-family: "Proxima-Light";
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          li:nth-child(1) {
            width: 100%;
            height: 90%;
            position: relative;
            color: black;
          }
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .section {
      position: relative;

      display: flex;
      justify-content: center;
      flex-direction: column;

      align-items: center;

      .section_bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column-reverse;
        position: relative;

        .section2_data {
          display: flex;
          width: 100%;

          height: 22rem;

          margin-bottom: 4rem;

          justify-content: space-around;
          align-items: center;
          flex-direction: column;

          position: relative;
          align-items: center;

          h3 {
            text-transform: uppercase;
          }
          li {
            width: 100%;
            position: relative;
            text-transform: uppercase;
            font-size: 29.99px;
            line-height: 33.32px;

            text-align: center;

            font-family: Proxima-Bold;
          }
          li:nth-child(2) {
            margin-top: 43px;
            color: black;
            display: flex;
            flex-direction: column;
          }
          span {
            margin-top: 43px;
            font-weight: 500;
            font-family: "Proxima-Light";
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          li:nth-child(1) {
            width: 100%;
            height: 90%;
            position: relative;
            color: black;
          }
        }
      }
    }
  }
`;
