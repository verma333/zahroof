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

  .section_data {

    width: 100%;
    height: 100%;
    position:absolute;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .head {
      width: 70%;
      height: 30%;
      
      display: flex;
      justify-content: center;
    flex-direction: column;
      h2 {
        font-size: 3.3rem;
        color:white;

       
        

      }
      p {
          font-size: 1.5rem;
          color:white;
        }
    }
    .section_logo {
      width: 70%;
      height: 70%;
      
      display: flex;
      justify-content: flex-start;
    flex-direction: column;
    .section_logo_top {
      width: 100%;
      height: 40%;
      
      display: flex;
      justify-content:space-between;
      .logo {
        width: 20%;
        height: 100%;
        background-color: #dbb43f;
       
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper {
          position: relative;
          width: 80%;
          height: 80%;
        }
      }
    }

    .section_logo_bottom {
      width: 100%;
      height: 40%;
      
      display: flex;
      justify-content:space-between;
      margin-top:1rem;
      .logo-1 {
        width: 20%;
       
     
       
        display: flex;
        justify-content: center;
        background-color: #7b470c;
        opacity: 0.7;
         p {
         padding-top: 1rem;
         padding-left: 1rem;;
         color:white;
         font-size: 1.5rem;;
          width: 70%;
          text-align: center;
        
          
      
         
        }
      }
    }
     
    }
  }
 


    }
   



   }

  

 
`