import Link from "next/link";

const HeaderTopTwo = () => {
  return (
    <div className="tg-header__top tg-header__top-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <ul className="tg-header__top-info tg-header__top-info-three left-side list-wrap">
              <li style={{ fontSize: "16px", fontWeight: "500" }}>
                <i className="flaticon-location-1"></i> 2120 NW 96th Ave, Doral, FL 33172
              </li>
              <li style={{ fontSize: "16px", fontWeight: "500" }}>
                <i className="flaticon-envelope"></i>
                <a href="mailto:felipe.pinto@gibtraders.com">felipe.pinto@gibtraders.com</a>
              </li>
              <li>
                <i className="flaticon-time"></i> Lunes – Viernes: 9.00 am – 5.00 pm
              </li>
            </ul>
          </div>
          <div className="col-xl-5">
            <div className="tg-header__top-right">
              <div className="tg-header__top-social tg-header__top-social-three">
                <span>Síguenos:</span>
                <ul className="list-wrap">
                  <li>
                    <Link href="https://www.facebook.com/GlobusInternatinonalCargoCorp/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wa.me/573160186416?text=Hola%2C%20quiero%20más%20información%20sobre%20envíos%20internacionales" target="_blank">
                      <i className="fab fa-whatsapp"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopTwo;

