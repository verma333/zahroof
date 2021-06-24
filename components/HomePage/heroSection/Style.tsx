import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .homePage-hero {
        width: 100%;
        position: relative;
        height: 46em;
        overflow-x: hidden;
  overflow-y: scroll;
        .homePage-layer {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1623838132/g0uu4qlatbvnmzr405zi.png"); 

  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  justify-content: center;
  align-items: center;
  .homePage-data {
      margin-top: 5%;
      width: 55%;
    height: 60%;
   
    display: flex;
    justify-content: center;
    align-items: flex-start;
 flex-direction: column;
  ul {
     width:60%;
  li {
    
      font-size: 3.75rem;
      text-align:right;
      color:white;
      font-weight: 1000;
      text-transform: uppercase;
      
  }
  li:nth-child(3) {
    margin-top: 0.3rem;;
    color: #eeba18;
    margin-bottom: 0.3rem;;
    position: relative;
  }
  li:nth-child(3)::after {
    content: '';
    display: block;
    position: absolute;
     width: 34%;
     bottom: 0.1rem;
     right: 0%;
     height: 0.2rem;;
     background-color: #eeba18;
  
  }
 }
 .text-right {

     width: 60%;
     margin-left: 40%;

     li {
      text-align:left;
     }
 }
  }
  

        }

    }
   



   }

  

 
`