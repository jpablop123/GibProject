import FooterTwo from "@/layouts/footers/FooterTwo"

import Brand from "../homes/home-one/Brand"
import Testimonial from "../homes/home-one/Testimonial"
import Team from "../homes/home-three/Team"
import AboutArea from "./AboutArea"
import Counter from "./Counter"
import FeaturesArea from "./FeaturesArea"
import Pricing from "./Pricing"
import VideoArea from "./VideoArea"
import HeaderFour from "@/layouts/headers/HeaderFour"
import ScrollToTop from "../common/ScrollToTop"
import ShippingInfo from "../pages/howitworks/shippinginfo"
import RequestArea from "../homes/home-one/RequestArea"
import HeaderOne from "@/layouts/headers/HeaderOne"

const quoteArea = () => {
   return (
      <div className="theme-blue">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
        
         
           
      
            <VideoArea />
            <RequestArea/>
            
            <FooterTwo />
         </main>
      </div>
   )
}

export default quoteArea;
