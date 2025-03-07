import FooterOne from "@/layouts/footers/FooterOne"
// import Hero from "./Hero"
import About from "./About"

import Achieved from "./Achieved"
import Marquee from "./Marquee"

import VideoArea from "./VideoArea"
// import RequestArea from "./RequestArea"

import WorkArea from "./WorkArea"

import HeaderOne from "@/layouts/headers/HeaderOne"
import ContactMap from "./ContactMap"
import ScrollToTop from "@/components/common/ScrollToTop"
import AboutArea from "@/components/about/AboutArea"
import FeaturesArea from "@/components/about/FeaturesArea"
import ShippingInfo from "@/components/pages/howitworks/shippinginfo"
import PricingComparison from "@/components/pricinComparison.tsx/pricingComparison"

import ContactActions from "@/components/about/contact/contactForm"




const HomeOne = () => {
   return (
      <div className="theme-blue">
         <ScrollToTop />
         <HeaderOne />
         <main className="fix">
       
         <AboutArea />
        
            <WorkArea />
            <FeaturesArea/>
            <About />
            <ShippingInfo/>
            <PricingComparison/>

        
            <Achieved />
            <Marquee style={false} />
        
         
        {/* <VideoArea/> */}
            {/* <RequestArea style={false} /> */}
           <ContactActions/>
            <ContactMap />
         </main>
         <FooterOne />
      </div>
   )
}

export default HomeOne
