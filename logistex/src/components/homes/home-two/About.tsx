import InjectableSvg from "@/components/common/InjectableSvg";
import Image from "next/image";
import Link from "next/link";
import Count from "@/components/common/Count";

import about_img1 from "@/assets/img/images/h2_about_img01.jpg";
import about_img2 from "@/assets/img/images/h2_about_img02.jpg";
import about_img3 from "@/assets/img/images/h2_about_img03.jpg";

const About = () => {
  return (
    <section className="about__area-three section-py-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="about__img-three">
              <Image src={about_img1} alt="img" data-aos="fade-right" data-aos-delay="200" />
              <Image src={about_img2} alt="img" data-aos="fade-left" data-aos-delay="400" />
              <Image src={about_img3} alt="img" data-aos="fade-up" data-aos-delay="600" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content-three">
              <div className="section__title mb-20">
                <span className="sub-title">Soluciones logísticas confiables</span>
                <h2 className="title">
                  Envíos desde USA o desde Colombia <br /> a cualquier parte del mundo
                </h2>
              </div>
              <p>
                En Gib Traders gestionamos importaciones y exportaciones de manera rápida, segura y personalizada. Cotiza tu envío en minutos y recibe atención directa de nuestro equipo.
              </p>

              {/* Línea con enlace al registro */}
              <p style={{ fontWeight: 500, color: "#333", marginTop: "10px" }}>
                ¿Quieres crear tu casillero? Ingresa a{" "}
                <Link
                  href="https://nuevaversion.globusbox.com/registrate/"
                  target="_blank"
                  style={{ color: "#ff6600", textDecoration: "underline" }}
                >
                  nuevaversion.globusbox.com/registrate
                </Link>{" "}
                y empieza a recibir tus compras desde USA fácilmente.
              </p>

              <div className="about__content-inner-two">
                <div className="counter__wrap counter__wrap-two">
                  <div className="counter__item counter__item-three">
                    <div className="counter__icon counter__icon-three">
                      <i className="flaticon-package"></i>
                    </div>
                    <div className="counter__content counter__content-three">
                      <h2 className="count">
                        <span className="counter-number"><Count number={3500} /></span>+
                      </h2>
                      <p>Paquetes entregados</p>
                    </div>
                  </div>
                  <div className="counter__item counter__item-three">
                    <div className="counter__icon counter__icon-three">
                      <i className="flaticon-planet-earth"></i>
                    </div>
                    <div className="counter__content counter__content-three">
                      <h2 className="count">
                        <span className="counter-number"><Count number={12} /></span>+
                      </h2>
                      <p>Países con cobertura</p>
                    </div>
                  </div>
                </div>

                <div className="about__list-box about__list-box-five">
                  <ul className="list-wrap">
                    <li><i className="flaticon-check"></i>Cotización fácil y rápida</li>
                    <li><i className="flaticon-check"></i>Seguimiento de envíos en tiempo real</li>
                    <li><i className="flaticon-check"></i>Atención personalizada por WhatsApp</li>
                    <li><i className="flaticon-check"></i>Alianzas con FedEx , UPS y Globus Cargo</li>
                  </ul>
                </div>
              </div>

              <Link href="/cotizar" className="btn">
                Cotiza tu envío <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="icono" className="injectable" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

