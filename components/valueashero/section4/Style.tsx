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

width:100%;
align-items:center;
position: relative;
height: 50rem;;
background-color: #23344e;
.tringle {
 position: absolute;
 right: 10%;
 width: 0;
 top: -8%;
 height: 0;
 border-left: 5rem solid transparent;
 border-right: 5rem solid transparent;
 border-bottom:4rem solid #23344e;
 z-index: 1;
} 


.section2_data {
     width: 90%;
     height: 80%;
     display:flex;
  justify-content:space-between;
  align-items: center;

  .section2_data_left {
    
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:space-around;
  align-items: left;
  flex-direction: column;
  h2 {
   position: relative;
   padding-left: 0.5rem;
   font-size: 3.3rem;;
   color:white;
   position: relative;

   text-transform: uppercase;
  }
  h2:after {
   position:absolute;
   content: '';
   display: block;
   height: 100%;
   width: 0.4rem;;
   top:0;
   left:-0.3rem;


  }
  .img_wrapper {
    position: relative;
   height: 40%;
   width: 100%;
    line-height: 1.1;
    
  }
  h3 {
    line-height: 1.1;
    color:white;
  
  }
  p {
    color:white;
    line-height: 1.5;
  }
  }

  .section2_data_right {
    
    display:flex;
    width: 45%;
    height: 100%;
  justify-content:flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  .img_wrapper {
    position: relative;
   height: 30%;
   width: 100%;
    line-height: 1.1;
    
  }
  h3 {
    color: white;
    margin-top: 3rem;
    font-size: 1.5rem;
    text-align: left;
    width: 80%;
    text-transform: uppercase;
  }
 
    p {
      margin-top: 3rem;;
      width: 80%;
    line-height: 1.5;
    color:white;
  
  }
  }
 }
 





    }
   



   }

  

 
`