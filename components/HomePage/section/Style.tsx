import styled from 'styled-components'


export const Section = styled.section` 
  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
   
  
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
      height: 10rem;
      span {
        font-family: Proxima-Light;
        font-size: 35px;
        color: white;
        text-transform: uppercase;
        line-height: 35px;
      }
      .section_top_left {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 3rem;
        span {
          font-size: 35px;
          color: white;
          text-align: right;
          line-height: 35px;
          text-transform: uppercase;
        }
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -22%;
          height: 0;
          border-left: 3rem solid transparent;
          border-right: 3rem solid transparent;
          border-top: 2.5rem solid #dbb43f;
          z-index: 1;
        }
      }
      .section_top_right {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 3rem;
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -22%;
          height: 0;
          border-left: 3rem solid transparent;
          border-right: 3rem solid transparent;
          border-top: 2.5rem solid #dbb43f;
          z-index: 1;
        }
        h2 {
          width: 60%;
          color: white;
          font-size: 1.5rem;
          text-align: right;
        }
      }
    }
    .section_bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      /* Set a specific height */
      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .react-parallax {
        width: 50%;
      }
      .react-parallax-bgimage {
        height: 120% !important;
        width: 100% !important;
        object-fit: cover;
      }
      .section_bottom_set {
        width: 100%;
        height: 570px;
        position: relative;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
            text-shadow: 0 0 20px #000000;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
      .section_bottom_set-1 {
        width: 50%;
        height: 570px;
        position: relative;
        width: 50%;
        height: 100%;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li {
            position: relative;
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
    }
    /* .section_bottom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    to bottom,
    hsla(5, 15%, 5%, 0) 0%,
    hsla(5, 15%, 5%, 0.013) 8.1%,
    hsla(5, 15%, 5%, 0.049) 15.5%,
    hsla(5, 15%, 5%, 0.104) 22.5%,
    hsla(5, 15%, 5%, 0.175) 29%,
    hsla(5, 15%, 5%, 0.259) 35.3%,
    hsla(5, 15%, 5%, 0.352) 41.2%,
    hsla(5, 15%, 5%, 0.45) 47.1%,
    hsla(5, 15%, 5%, 0.55) 52.9%,
    hsla(5, 15%, 5%, 0.648) 58.8%,
    hsla(5, 15%, 5%, 0.741) 64.7%,
    hsla(5, 15%, 5%, 0.825) 71%,
    hsla(5, 15%, 5%, 0.896) 77.5%,
    hsla(5, 15%, 5%, 0.951) 84.5%,
    hsla(5, 15%, 5%, 0.987) 91.9%,
    hsl(5, 15%, 5%) 100%
  );
}
@keyframes fadein {
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */
  }
  .section-1 {
    display: none;
  }
}
@media (min-width: 1025px) and (max-width: 1280px) {
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
      height: 10rem;
      span {
        font-family: Proxima-Light;
        font-size: 35px;
        color: white;
        text-transform: uppercase;
        line-height: 35px;
      }
      .section_top_left {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 1.5rem;
        span {
          font-size: 35px;
          color: white;
          text-align: right;
          line-height: 35px;
          text-transform: uppercase;
        }
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -22%;
          height: 0;
          border-left: 3rem solid transparent;
          border-right: 3rem solid transparent;
          border-top: 2.5rem solid #dbb43f;
          z-index: 1;
        }
      }
      .section_top_right {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1.5rem;
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -22%;
          height: 0;
          border-left: 3rem solid transparent;
          border-right: 3rem solid transparent;
          border-top: 2.5rem solid #dbb43f;
          z-index: 1;
        }
        h2 {
          width: 60%;
          color: white;
          font-size: 1.5rem;
          text-align: right;
        }
      }
    }
    .section_bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      /* Set a specific height */
      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .react-parallax {
        width: 50%;
      }
      .react-parallax-bgimage {
        height: 120% !important;
        width: 100% !important;
        object-fit: cover;
      }
      .section_bottom_set {
        width: 100%;
        height: 570px;
        position: relative;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
            text-shadow: 0 0 20px #000000;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
      .section_bottom_set-1 {
        width: 50%;
        height: 570px;
        position: relative;
        width: 50%;
        height: 100%;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li {
            position: relative;
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
    }
    /* .section_bottom::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 50%;
background: linear-gradient(
  to bottom,
  hsla(5, 15%, 5%, 0) 0%,
  hsla(5, 15%, 5%, 0.013) 8.1%,
  hsla(5, 15%, 5%, 0.049) 15.5%,
  hsla(5, 15%, 5%, 0.104) 22.5%,
  hsla(5, 15%, 5%, 0.175) 29%,
  hsla(5, 15%, 5%, 0.259) 35.3%,
  hsla(5, 15%, 5%, 0.352) 41.2%,
  hsla(5, 15%, 5%, 0.45) 47.1%,
  hsla(5, 15%, 5%, 0.55) 52.9%,
  hsla(5, 15%, 5%, 0.648) 58.8%,
  hsla(5, 15%, 5%, 0.741) 64.7%,
  hsla(5, 15%, 5%, 0.825) 71%,
  hsla(5, 15%, 5%, 0.896) 77.5%,
  hsla(5, 15%, 5%, 0.951) 84.5%,
  hsla(5, 15%, 5%, 0.987) 91.9%,
  hsl(5, 15%, 5%) 100%
);
}
@keyframes fadein {
to {
  opacity: 1;
  transform: translateY(0);
}
} */
  }
  .section-1 {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 1025px) {
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
      height: 146px;
      span {
        font-family: Proxima-Light;
        width: 90%;
        font-size: 1.2rem;
        color: white;
        text-transform: uppercase;
      }
      .section_top_left {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 1.2rem;
          color: white;
          text-transform: uppercase;
        }
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -14%;
          height: 0;
          border-left: 2.5rem solid transparent;
          border-right: 2.5rem solid transparent;
          border-top: 2rem solid #dbb43f;
          z-index: 1;
        }
      }
      .section_top_right {
        width: 50%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -14%;
          height: 0;
          border-left: 2.5rem solid transparent;
          border-right: 2.5rem solid transparent;
          border-top: 2rem solid #dbb43f;
          z-index: 1;
        }
        h2 {
          width: 60%;
          color: white;
          font-size: 1.5rem;
          text-align: right;
        }
      }
    }
    .section_bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30rem;
      background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624878455/pzisvhvh6fwumcwbjrlr.jpg");
      /* Set a specific height */
      /* Create the parallax scrolling effect */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .section_bottom_set {
        width: 50%;
        height: 100%;
        position: relative;
        /* Create the parallax scrolling effect */
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            text-align: center;
            font-size: 1rem;
            color: white;
            text-transform: uppercase;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li:nth-child(1) {
            width: 5rem;
            height: 5rem;
          }
          li:nth-child(3) {
            width: 2rem;
            height: 2rem;
          }
        }
      }
      .section_bottom_set-1 {
        width: 50%;
        height: 100%;
        position: relative;
        width: 50%;
        height: 100%;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            text-align: center;
            font-size: 1rem;
            color: white;
            text-transform: uppercase;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li:nth-child(1) {
            width: 5rem;
            height: 5rem;
          }
          li:nth-child(3) {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
  }
  .section-1 {
    display: none;
  }
}

@media (max-width: 767px) {
  .section {
    display: none;
  }
  .section-1 {
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
      height: 7rem;
      
    
      .section_top_ {
        width: 100%;
        height: 100%;
        background-color: #dbb43f;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 3rem;
        span {
          line-height: 1.5rem;
          
          color: white;
          text-align: right;
          line-height: 2rem;
          text-transform: uppercase;
        }
        .tringle {
          position: absolute;
          left: 10%;
          width: 0;
          bottom: -22%;
          height: 0;
          border-left: 3rem solid transparent;
          border-right: 3rem solid transparent;
          border-top: 2.5rem solid #dbb43f;
        
        }
      }
     
    }
    .section_bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      /* Set a specific height */
      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      flex-direction: column;
     
      
      .react-parallax {
        width: 100%;
      }
      .react-parallax-bgimage {
        height: 120% !important;
        width: 100% !important;
        object-fit: cover;
      }
      .section_bottom_set {
        width: 100%;
        height: 20rem;
        position: relative;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
            text-shadow: 0 0 20px #000000;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
      .section_bottom_set-1 {
        width: 100%;
        height: 570px;
        position: relative;
        width: 50%;
        height: 100%;
        .section_bottom_data {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3 {
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
          }
          li {
            position: relative;
            transition: transform 0.5s;
          }
          li:hover {
            -ms-transform: scale(1.5); /* IE 9 */
            -webkit-transform: scale(1.5); /* Safari 3-8 */
            transform: scale(1.1);
          }
          li {
            position: relative;
          }
          li:nth-child(1) {
            width: 12rem;
            height: 12rem;
          }
          li:nth-child(3) {
            width: 4rem;
            height: 4rem;
          }
        }
      }
      
    }
    /* .section_bottom::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    to bottom,
    hsla(5, 15%, 5%, 0) 0%,
    hsla(5, 15%, 5%, 0.013) 8.1%,
    hsla(5, 15%, 5%, 0.049) 15.5%,
    hsla(5, 15%, 5%, 0.104) 22.5%,
    hsla(5, 15%, 5%, 0.175) 29%,
    hsla(5, 15%, 5%, 0.259) 35.3%,
    hsla(5, 15%, 5%, 0.352) 41.2%,
    hsla(5, 15%, 5%, 0.45) 47.1%,
    hsla(5, 15%, 5%, 0.55) 52.9%,
    hsla(5, 15%, 5%, 0.648) 58.8%,
    hsla(5, 15%, 5%, 0.741) 64.7%,
    hsla(5, 15%, 5%, 0.825) 71%,
    hsla(5, 15%, 5%, 0.896) 77.5%,
    hsla(5, 15%, 5%, 0.951) 84.5%,
    hsla(5, 15%, 5%, 0.987) 91.9%,
    hsl(5, 15%, 5%) 100%
  );
}
@keyframes fadein {
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */
  }
  
}
`
