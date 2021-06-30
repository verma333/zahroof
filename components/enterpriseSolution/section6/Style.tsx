import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section2 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
  
  width:100%;
  align-items:center;
  position: relative;
  
  height: 50rem;;
  background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624446661/zugr9ahadrsbvxmfoi2v.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
   /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  
  .tringle {
    position: absolute;
    left: 10%;
    width: 0;
    bottom: -5%;
    height: 0;
    border-left: 3rem solid transparent;
    border-right: 3rem solid transparent;
    border-top: 2rem solid #3c4e62;
    z-index: 1;
} 
   
 .section2_data {
     width: 100%;
     height: 100%;
     display:flex;
  justify-content:space-between;
  align-items: center;
  .section2_data_left {
    background-color: #cea800;
    display:flex;
    width: 25%;
    height: 100%;
  justify-content:center;
  position: relative;
  align-items: left;
  flex-direction: column;
  align-items: center;
  h2 {
  width: 92%;
   font-size: 2.875rem;
   color:white;
   text-transform: uppercase;
   line-height: 1;
   margin-top:2rem;
  }
  h3 {
    
      color:white;
      font-size: 1.9rem;
    width: 92%;
    line-height: 1;
    text-transform: uppercase;
  }
  .triangle-right {
    position: absolute;
    z-index: 1;
    width: 0;
    height: 0;
    right: -10%;
    top: 10%;
    border-top: 49px solid transparent;
    border-left: 60px solid #cea800;
    border-bottom: 52px solid transparent;
}
  }

  .section2_data_right {
     
    display:flex;
    width: 70%;
    height: 100%;
  justify-content:space-around;
  align-items: center;
 align-items: center;
  flex-wrap: wrap;
  .data {
    display:flex;
    justify-content: center;
   
    align-items: center;
    width: 100%;
  height: 20%;
  align-items: center;
  span {
    width: 60%;
    text-align:left;
    font-size: 2.3rem;
    color: white;
    
  }
  }
  .logo {
      width: 50%;
      height: 30%;
      display:flex;
     position: relative;
      justify-content:space-evenly;
  align-items: center;
  flex-direction: column;

  
    .img-wrapper:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
}
  .img-wrapper {
    transition: transform 0.5s;
    width: 50%;
    height: 70%;
    position: relative;
      position: relative;
  }
  p {
    height: 20%;
    width: 60%;
    font-size: 1.25rem;
      margin-top: 0.5rem;;
      text-transform: uppercase;
      color: white;
      text-align: center;

  }
  img {
      height: 65%;
  }
  }
  }
 }


    }
   



   }

   @media (max-width: 767px) {
    .section2 {
      
      position: relative;
   
      display:flex;
justify-content:center;

width:100%;
align-items:center;
position: relative;
height: 30rem;;
flex-direction: column;

background-image: url("https://res.cloudinary.com/dzcmadjl1/image/upload/v1624446661/zugr9ahadrsbvxmfoi2v.jpg"); /* The image used */
   /* Used if the image is unavailable */
 
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
.tringle {
  position: absolute;
  left: 10%;
  width: 0;
  bottom: -5%;
  height: 0;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-top: 2rem solid #3c4e62;
  z-index: 1;
} 
 
.section2_data {
   width: 95%;
   height: 90%;
   display:flex;
justify-content:space-between;
align-items: center;
flex-direction: column;
.section2_data_left {
  
  display:flex;
  width: 100%;
  height: 30%;
 
justify-content:space-around;
align-items: left;
flex-direction: column;
h2 {
width: 100%;
 font-size: 1.5rem;
 color:#daaf1a;
}
p {
    color:white;
    font-size: 1rem;
  width: 100%;
  line-height: 1.2;
}
}

.section2_data_right {
   
  display:flex;
  width: 90%;
  height: 50%;
justify-content:space-around;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
.logo {
    width: 50%;
    height: 50%;
    display:flex;
   position: relative;
    justify-content:space-evenly;
align-items: center;
flex-direction: column;


  .img-wrapper:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 
}
.img-wrapper {
  transition: transform 0.5s;
  width: 40%;
  height: 40%;
  position: relative;
    position: relative;
}
p {
  height: 40%;
 
  font-size: 1rem;
    margin-top: 0.5rem;;
    text-transform: uppercase;
    color: white;
    text-align: center;

}
img {
    height: 50%;
}
}
}
}


  }
 
 

  



 }
  

  

 
`