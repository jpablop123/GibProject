import Image from "next/image";
import Link from "next/link";

import gibLogo from "@/assets/img/logo/giblogo.png";
import shape_1 from "@/assets/img/images/inner_footer_shape01.svg";
import shape_2 from "@/assets/img/images/inner_footer_shape02.svg";

interface propsType {
  style?: boolean;
}

const FooterTwo = ({ style }: propsType) => {
  return (
    <footer className={`footer__area-two fix ${style ? "footer__area-three" : ""}`}>
      <div className="container">
        <div className="footer__top">
          <div className="row">

            {/* Logo + Social */}
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo" style={{ maxWidth: '250px' }}>
                  <Image
                    src={gibLogo}
                    alt="Logo Gib Traders"
                    style={{ width: "auto", height: "100px" }}
                    unoptimized
                  />
                </div>
                <div className="footer__content footer__content-two">
                  <p>
                    Conectamos Colombia con el mundo. Envíos internacionales, consolidación de carga, courier y más, con base en Miami.
                  </p>
                </div>
                <div className="footer__social footer__social-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="https://www.facebook.com/GlobusInternatinonalCargoCorp/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/573160186416?text=Hola%2C%20quiero%20más%20información%20sobre%20los%20envíos%20desde%20Colombia" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                   
                  </ul>
                </div>
                <div className="copyright-text copyright-text-two">
                  <p>© {new Date().getFullYear()} Gib Traders | Todos los derechos reservados</p>
                </div>
              </div>
            </div>

            {/* Servicios */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">Servicios</h4>
                <div className="footer__link footer__link-two">
                  <ul className="list-wrap">
                    <li>Exportación desde Colombia</li>
                    <li>Casillero en Miami</li>
                    <li>Envíos aéreos y marítimos</li>
                    <li>Consolidación de carga</li>
                    <li>Asesoría en aduanas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">Contacto</h4>
                <div className="footer__info-wrap footer__info-wrap-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location-1"></i>
                      <p>
                        2120 NW 96th Ave<br />
                        Doral, FL 33172, USA
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <p>
                        <Link href="tel:+17865317987">+1 (786) 531-7987</Link><br />
                        <Link href="tel:+573160186416">+57 316 018 6416</Link>
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-envelope"></i>
                      <Link href="mailto:felipe.pinto@gibtraders.com">felipe.pinto@gibtraders.com</Link>
                    </li>
                    <li>
                      <i className="flaticon-time"></i>
                      <p>
                        Lunes a Viernes: 9am – 5pm<br />
                        Domingo: <span>CERRADO</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer__shape footer__shape-two">
        <Image src={shape_1} alt="forma decorativa" data-aos="fade-down" data-aos-delay="400" />
        <Image src={shape_2} alt="forma decorativa" data-aos="fade-left" data-aos-delay="400" />
      </div>
    </footer>
  );
};

export default FooterTwo;
