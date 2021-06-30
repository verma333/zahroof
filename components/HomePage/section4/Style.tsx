import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section4 {
      
        position: relative;
     
        display:flex;
  justify-content:center;
   flex-direction: column;
  width:100%;
  align-items:center;
  position: relative;


.section4_top {
  position: relative;
  height: 55rem;
  width: 100%;
  background-image: linear-gradient(#d8b642 , #DBB42F);

margin-bottom: 3rem;;

.tringle {
  position: absolute;
    right: 10%;
    width: 0;
    bottom: -7%;
    height: 0;
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    border-top: 4rem solid #DBB42F;
    z-index: 1;
} 
.section4_top_data {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  h2 {
    padding-top: 3rem;
    padding-bottom: 3rem;
    font-size: 2.813rem;
    text-transform: uppercase;
    color: white;
 
  }
  .section4_top_data_logos {

  
width: 100%;
margin-top:4%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  position: relative;


}

.icon {
   
   
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
 
    .img-wrapper {
      transition: transform 0.5s;
      position: relative;
      height: 4rem;;
      width: 5rem;;
    }
    span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 0.9rem;
    color:white
    }

 }
 .icon {
  transition: transform 0.5s;
 }
 .icon:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 

}
 #gasses {
  position: absolute;

  top: 12%;

width: 10%;
height: 10%;
 }
 #Lng {
  position: absolute;
  position: absolute;
  top: 64%;
    left: 31%;

    height: 10%;
height: 10%;
 }
 #industry {
  position: absolute;
  top: 26%;
    left: 29%;

width: 10%;
height: 10%;
 }
 #Refineries {
  position: absolute;

  top: 46%;
    left: 25%;
width: 10%;
height: 10%;
 }
 #Cng {
  position: absolute;

  top: 27%;
    left: 59%;

width: 10%;
height: 10%;
 }
 #Oil {
  position: absolute;
 
 
  top: 46%;
    left: 63%;


width: 10%;
height: 10%;
 }
 #hydrogen {
  position: absolute;
 
  top: 64%;
    left: 61%;

width: 10%;
height: 10%;
 }
 #chemical {
  position: absolute;
  top: 79%;
    left: 51%;
width: 10%;
height: 10%;
 }
 #offshore {
  position: absolute;
 
  top: 79%;
    left: 38%;


width: 10%;
height: 10%;
 }

}


}
.section4_mid {
  position: relative;
  height: 50rem;
  width: 100%;
  z-index: 1;
 
margin-bottom: 3rem;;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 8rem;
.section4_mid_left {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
   width:50%;
   height:80%;
   .img_wrapper {
     width: 100%;
     height: 100%;
     position: relative;

   }
}

.section4_mid_right {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
   width:50%;
   height:100%;

   h2 {
     text-align: left;
     width: 70%;
     position: relative;
     font-size: 2.813rem;
     color:#2b4056;
   }
   h2:after {
     position: absolute;
      width: 0.25rem;;
    display: block;
    height: 100%;
    left: -5%;
    top:0%;
    background: #dcb01a;
    border-left: 1px white;
    content: '';
}
    p {
      margin-top:2rem;
      text-align: left;
      width: 70%;
      font-size: 1.2rem;
      line-height: 1.6;
      font-family: Proxima-Bold;
    }
  
}

}

.section4_bottom {
  position: relative;
  height: 50rem;
  width: 100%;
  z-index: 1;
 
margin-bottom: 3rem;;

.section4_bottom_data {
  margin-top: 1rem;;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .section4_mid_left {
    display: flex;
  justify-content: center;
  display: flex;
  justify-content:space-around;
  flex-direction: column;
  align-items: center;
   width:50%;
   height:60%;
   h2 {
     text-transform: uppercase;
     text-align: left;
     width: 50%;
     position: relative;
     font-size: 2.813rem;
      color:white;
      padding-left: 0.7rem;
     
   }
   h2:after {
     position: absolute;
      width: 0.35rem;;
    display: block;
    height: 90%;
    left: -5%;
    top:0%;
    background: #dcb01a;
    border-left: 1px white;
    content: '';
}
    p {
      color:white;
      z-index: 1;
      text-align: left;
      width: 50%;
      font-size: 1.2rem;
      font-family: Proxima-Bold;
      line-height: 1.4;
    }
    .btn {
      color:white;
      z-index: 1;
      text-align: left;
      width: 50%;

      button {
        font-size:1rem;
        padding: 1rem;;
        text-transform: uppercase;
        background-color: #398baa;
      }
    }
}

.section4_mid_right {
  display: flex;
  justify-content: center;
  display: flex;
  justify-content:space-evenly;

  align-items: center;
   width:50%;
   height:100%;

   .section4_logo {
     width: 40%;
     height: 100%;
     display: flex;
     justify-content: space-evenly;
     flex-direction: column;
     align-items: center;
 
     .img_wrapper {
      transition: transform 0.5s;
              width: 100%;
       height: 50%;
       position: relative;
     }
     .img_wrapper:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
}
     h3 {
       color:white;
      color: #f2e7c9;
       z-index: 1;
     }
   }
   
  

  
  
}

}
.img_absol {
  position: absolute;
    width: 20rem;
    height: 15rem;
    z-index: 1;
    right: 24%;
    top: -201px;

}

}



    }
   



   }

   @media (max-width: 767px) {
    .section4 {
      
      position: relative;
   
      display:flex;
justify-content:center;
 flex-direction: column;
width:100%;
align-items:center;
position: relative;


.section4_top {
position: relative;
height: 25rem;
width: 100%;
background-image: linear-gradient(#d8b642 , #DBB42F);

margin-bottom: 3rem;;
.section4_top_data {
display: flex;
justify-content: flex-start;
align-items: center;
position: absolute;
width: 100%;
height: 100%;
flex-direction: column;
h2 {
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: white;
  width: 95%;
  
    
}
.section4_top_data_logos {


width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 70%;
position: relative;


}

.icon {
 
 
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .img-wrapper {
    transition: transform 0.5s;
    position: relative;
    height: 3rem;;
    width: 5rem;;
  }
  span {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 1.5rem;
  color:white
  }

}
#gasses {
position: absolute;

top: 11%;

width: 10%;
height: 10%;
}
#Lng {
position: absolute;
position: absolute;
  top: 68%;
  left: 35%;
  height: 10%;
height: 10%;
}
#industry {
position: absolute;
top: 31%;
  left: 31%;

width: 10%;
height: 10%;
}
#Refineries {
position: absolute;

top: 50%;
left: 29%;
width: 10%;
height: 10%;
}
#Cng {
position: absolute;

top: 31%;
  left: 57%;

width: 10%;
height: 10%;
}
#Oil {
position: absolute;

top: 50%;
  left: 60%;

width: 10%;
height: 10%;
}
#hydrogen {
position: absolute;
top: 65%;
  left: 58%;
width: 10%;
height: 10%;
}
#chemical {
position: absolute;
top: 76%;
  left: 51%;
width: 10%;
height: 10%;
}
#offshore {
position: absolute;
top: 76%;
  left: 42%;

width: 10%;
height: 10%;
}

}


}
.section4_mid {
position: relative;
height: 50rem;
width: 100%;
z-index: 1;

margin-bottom: 3rem;;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 
.section4_mid_left {
display: flex;
justify-content: center;
display: flex;
justify-content: flex-end;
align-items: center;

 width:95%;
 height:50%;
 .img_wrapper {
   width: 100%;
   height: 100%;
   position: relative;

 }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;
flex-direction: column;
align-items: center;
 width:95%;
 height:50%;

 h2 {
   text-align: left;
   padding-left: 0.5rem;
   position: relative;
   font-size: 1.5rem;
   
 }
 h2:after {
   position: absolute;
    width: 0.37rem;;
  display: block;
  height: 100%;
  left: 0%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    text-align: left;
    width: 95%;
    font-size: 1rem;
    line-height: 1.6;
    font-family: Proxima-Bold;
  }

}

}

.section4_bottom {
position: relative;
height: 40rem;
width: 100%;
z-index: 1;

margin-bottom: 3rem;;

.section4_bottom_data {
margin-top: 1rem;;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
 flex-direction: column;
.section4_mid_left {
  display: flex;
justify-content: center;
display: flex;
justify-content:space-around;
flex-direction: column;
align-items: center;
 width:95%;
 height:60%;
 h2 {
   text-transform: uppercase;
   text-align: left;
   width: 100%;
   position: relative;
   font-size: 1.5rem;
    color:white;
    padding-left: 0.5rem;
   
 }
 h2:after {
   position: absolute;
    width: 0.25rem;;
  display: block;
  height: 100%;
  left: 0%;
  top:0%;
  background: #dcb01a;
  border-left: 1px white;
  content: '';
}
  p {
    color:white;
    z-index: 1;
    text-align: left;
    width: 100%;
    font-size: 1rem;
    font-family: Proxima-Bold;
    line-height: 1.4;
  }
  .btn {
    color:white;
    z-index: 1;
    text-align: left;
  
   

    button {
      font-size:1rem;
      padding: 1rem;;
      margin-top: 2rem;
      text-transform: uppercase;
      background-color: #398baa;
    }
  }
}

.section4_mid_right {
display: flex;
justify-content: center;
display: flex;
justify-content:space-evenly;

align-items: center;
 width:95%;
 height:100%;

 .section4_logo {
   width: 40%;
   height: 100%;
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
   align-items: center;

   .img_wrapper {
    transition: transform 0.5s;
            width: 100%;
     height: 50%;
     position: relative;
   }
   .img_wrapper:hover {
-ms-transform: scale(1.5); /* IE 9 */
-webkit-transform: scale(1.5); /* Safari 3-8 */
transform: scale(1.1); 
}
   h3 {
     color:white;
     z-index: 1;
     color:#f2e7c9;
   }
 }
 




}

}
.img_absol {
position: absolute;
 
  width: 10rem;
  height: 9rem;
  z-index: 1;
  right: 24%;
  top: -100px;

}

}



  }

 }
  

  

 
`