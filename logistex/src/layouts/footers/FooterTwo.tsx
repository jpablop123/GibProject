import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/img/logo/w_logo.svg"
import shape_1 from "@/assets/img/images/inner_footer_shape01.svg"
import shape_2 from "@/assets/img/images/inner_footer_shape02.svg"
interface propsType {
   style?: boolean;
}
const FooterTwo = ({ style }: propsType) => {
   return (
      <footer className={`footer__area-two fix ${style ? "footer__area-three" : ""}`}>
         <div className="container">
            <div className="footer__top">
               <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="footer__widget">
                        <div className="footer__logo">
                           <Link href="/"><Image src={logo} alt="logo" /></Link>
                        </div>
                        <div className="footer__content footer__content-two">
                           <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incidunt ut labore et</p>
                        </div>
                        <div className="footer__social footer__social-two">
                           <ul className="list-wrap">
                              <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                              <li><Link href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                              <li><Link href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp"></i></Link></li>
                              <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                              <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                           </ul>
                        </div>
                        <div className="copyright-text copyright-text-two">
                           <p>Copyright <Link href="/">©logistex</Link> | All Right Reserved</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">Our Services</h4>
                        <div className="footer__link footer__link-two">
                           <ul className="list-wrap">
                              <li><Link href="/services-details">Air Freight</Link></li>
                              <li><Link href="/services-details">Smart Warehousing</Link></li>
                              <li><Link href="/services-details">Train Freight</Link></li>
                              <li><Link href="/services-details">Ocean Fright</Link></li>
                              <li><Link href="/services-details">Road Freight</Link></li>
                              <li><Link href="/services-details">Supply Chain</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">Quick Links</h4>
                        <div className="footer__link footer__link-two">
                           <ul className="list-wrap">
                              <li><Link href="/how-it-work">How it’s Work</Link></li>
                              <li><Link href="/client">Partners</Link></li>
                              <li><Link href="/testimonial">Testimonials</Link></li>
                              <li><Link href="/project">Case Studies</Link></li>
                              <li><Link href="/pricing">Pricing</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6">
                     <div className="footer__widget">
                        <h4 className="footer__widget-title footer__widget-title-two">Information</h4>
                        <div className="footer__info-wrap footer__info-wrap-two">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-location-1"></i>
                                 <p>58 Street Commercial Road <br /> Fratton, Australia</p>
                              </li>
                              <li>
                                 <i className="flaticon-telephone"></i>
                                 <Link href="tel:0123456789">+123 888 9999</Link>
                              </li>
                              <li>
                                 <i className="flaticon-time"></i>
                                 <p>Mon – Sat: 8 am – 5 pm, <br /> Sunday: <span>CLOSED</span></p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer__shape footer__shape-two">
            <Image src={shape_1} alt="shape" data-aos="fade-down" data-aos-delay="400" />
            <Image src={shape_2} alt="shape" data-aos="fade-left" data-aos-delay="400" />
         </div>
      </footer>
   )
}

export default FooterTwo
