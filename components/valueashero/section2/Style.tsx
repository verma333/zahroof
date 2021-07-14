import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 1281px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 433px;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -14%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 70%;
          justify-content: space-between;
          align-items: center;

          .logo {
            width: 17%;
            height: 100%;
            margin-top: 40px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 40%;
              position: relative;
            }
            p {
              margin-top: 35px;
              width: 90%;
              margin-left: 10%;
              height: 40%;
              text-transform: uppercase;
              color: white;
              font-weight: 1000;
              font-size: 1rem;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 80%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 21.79px;
            line-height: 25px;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 500px;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -12%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 90%;
          justify-content: space-between;
          align-items: center;

          .logo {
            width: 15%;
            height: 100%;
            margin-top: 40px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 40%;
              position: relative;
            }
            p {
              margin-top: 35px;
              width: 100%;
              height: 40%;
              text-transform: uppercase;
              color: white;
              font-weight: 1000;
              font-size: 1rem;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 80%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 21.79px;
            line-height: 25px;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }



  
 

    
     
       
  }

  @media (min-width: 768px) and (max-width: 1023px) {


    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 700px;
      background-color: #dbb43f;
      .tringle {
        position: absolute;
        left: 20%;
        width: 0;
        top: -9%;
        height: 0;
        border-left: 5rem solid transparent;
        border-right: 5rem solid transparent;
        border-bottom: 4rem solid #dbb43f;
        z-index: 1;
      }

      .section2_data {
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 90%;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          

          .logo {
            width: 30%;
            height: 45%;
            margin-top: 40px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 40%;
              position: relative;
            }
            p {
              margin-top: 35px;
              width: 100%;
              height: 40%;
              text-transform: uppercase;
              color: white;
              font-weight: 1000;
              font-size: 1rem;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 80%;
          height: 20%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          h4 {
            font-size: 21.79px;
            line-height: 25px;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }
    


  }

  @media (max-width: 767px) {
    .section2 {
      position: relative;

      display: flex;
      justify-content: center;

      width: 100%;
      align-items: center;
      position: relative;
      height: 1000px;
      background-color: #dbb43f;
   
      .section2_data {
        width: 95%;
        height: 95%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .section2_top {
          display: flex;
          width: 100%;
          height: 90%;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          

          .logo {
            width: 45%;
            height: 30%;
            margin-top: 40px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            .wrapper {
              width: 100%;
              height: 40%;
              position: relative;
            }
            p {
              margin-top: 35px;
              width: 100%;
              height: 40%;
              text-transform: uppercase;
              color: white;
              font-weight: 1000;
              font-size: 1rem;
            }
          }
        }

        .section2_bottom {
          display: flex;
          width: 80%;
          height: 10%;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
         
          h4 {
            font-size: 16px;
            line-height: 16px;
            text-align: center;
            color: #24334d;
          }
        }
      }
    }

 
  }

`;
