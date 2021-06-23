
import React from 'react'
import { Section} from './Style'
import Image from 'next/image'
import  Navbar from '../../layout/navbar/navbar'

 const HeroSection: React.FC<{}> = () => {
    return (
        <Section>
        
           
           <div className="section3" >
  
  <div  data-aos="fade-up"
     data-aos-duration="3000" className="middle" >
          <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457130/oj0pfthu3lt2ergdljyf.png'} alt="" />
              
                   </div>
   
      </div>

      <div    data-aos="zoom-out-left"  data-aos-duration="3000" className="right" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/wx89iw4xzkq1tffegfgh.png'} alt="" />
              
                   </div>
   
      </div>

      <div data-aos="zoom-out-right" data-aos-duration="3000"  className="left" >
      <div className="img-wrapper" >
               <Image     objectFit="contain" layout="fill" src={'https://res.cloudinary.com/dzcmadjl1/image/upload/v1624457125/c5qjzndd22pgdc0xpzvg.png'} alt="" />
              
                   </div>
   
      </div>
           <div className="section3_left" >
<h2>Eco-Efficient</h2>
</div>
<div className="section3_right" >
<h2>Eco-Freindly</h2>
<a>Learn More</a>
</div>
</div>
            
        </Section>
    )
}

export default HeroSection