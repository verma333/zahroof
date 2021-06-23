import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section3 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  height: 42rem;;
  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457126/o7rt0bntgyc6nstows3k.jpg");

/* Set a specific height */


/* Create the parallax scrolling effect */
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
 
 .middle {
  position: absolute;
    height: 100%;
 
    bottom: -3%;

    width: 38%;
    left: 31%;
   
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
   }
 }

 .left {
   position: absolute;
   height: 30%;
   top: 5%;
   width: 30%;
   left:10%;
  
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
   }
 }

 .right {
   position: absolute;
   height: 30%;
   top: 5%;
   width: 30%;
   right:10%;
  
   .img-wrapper {
     width: 100%;
     height: 100%;
     position: relative;
   }
 }
  h2 {
    text-transform: uppercase;
    font-size:1.5rem;
  }
.section3_left {
  position: absolute;
left: 0;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section3_right {
  position: absolute;
right: 0%;;
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    margin-top: 2rem;
    color:black;
    font-size: 1.3rem;
    font-weight: 900;
    border-bottom: 3px solid black;
  }
}

    }
   



   }

  

 
`