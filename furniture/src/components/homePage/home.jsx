import React from 'react'
import { Heading } from '@chakra-ui/react'
import CaptionCarousel1 from "./autoplayPics"
import CaptionCarousel2 from './TopsaleTwoPic'
import FourPicCarousel from './fourpic'
// import Footer from './footer'
import SecondNav22 from "./navbar"
function Home() {
  
  return (
    <div>
      <SecondNav22></SecondNav22>
      <br />
      <br />
      <hr style={{border:"2px"}}></hr>
      <br />
    <div style={{padding:"30px"}}>
      
<CaptionCarousel1></CaptionCarousel1>

<Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }} color="rgba(64, 64, 64, 0.8)">
        What's New
      </Heading>
 <h3>This season's news and interior inspiration</h3>
<br />
<CaptionCarousel2></CaptionCarousel2>
<br />
<br />
<Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }} color="rgba(64, 64, 64, 0.8)">
        Blog
      </Heading>
      <h3>Read our articles and change your room to express yourself freely!</h3>
<br />
<FourPicCarousel></FourPicCarousel>
{/* <Footer></Footer> */}
    </div>
    </div>
  )
}

export default Home;