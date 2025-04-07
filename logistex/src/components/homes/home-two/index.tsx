import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Hero from "./Hero"
import Newsletter from "./Newsletter"
import About from "./About"
import Service from "./Service"
import VideoArea from "../home-one/VideoArea"
import RequestArea from "../home-one/RequestArea"
import ChooseArea from "./ChooseArea"
import Project from "./Project"
import MarqueeArea from "../home-one/Marquee"
import WorkArea from "./WorkArea"
import CTA from "./CTA"
import Team from "./Team"
import Testimonial from "../home-one/Testimonial"
import Brand from "../home-one/Brand"
import Blog from "./Blog"
import ScrollToTop from "@/components/common/ScrollToTop"
import RequestArea_two from "../home-one/RequestArea_two"

const HomeTwo = () => {
   return (
      <div className="theme-orange">
        <ScrollToTop />
         <HeaderTwo />
         <main className="fix">
            <Hero />
            <Newsletter />
            <About />
      
            <VideoArea style={true} />
            <RequestArea_two style={true} />
            <ChooseArea />
           
            <WorkArea />
            <CTA />
           
            <Testimonial style={true} />
            <Brand style={false} />
         
         </main>
         <FooterTwo />
      </div>
   )
}

export default HomeTwo
