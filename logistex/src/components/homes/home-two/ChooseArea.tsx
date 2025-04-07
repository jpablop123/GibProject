import Image from "next/image";
import InjectableSvg from "@/components/common/InjectableSvg";
import Link from "next/link";

import about_img1 from "@/assets/img/images/h2_choose_img.jpg";
import about_img2 from "@/assets/img/images/choose_logo.svg";
import shape from "@/assets/img/images/choose_shape.svg";
import logo from "@/assets/img/logo/giblogo.png"

const ChooseArea = () => {
  return (
    <section className="choose__area-two section-py-120">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="choose__img-two">
              <div className="main-img wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <Image src={about_img1} alt="Proceso de envío" />
              </div>
              <Image
  src={logo}
  alt="Logo"
  className="shape"
  style={{ width: "120px", height: "auto" }}
/>

            </div>
          </div>

          <div className="col-lg-7">
            <div className="choose__content-two">
              <div className="section__title mb-15">
                <span className="sub-title">¿Por qué elegirnos?</span>
                <h2 className="title">Somos expertos en logística internacional y envíos inteligentes</h2>
              </div>

              <p>
                En <strong>Gib Traders</strong> ofrecemos soluciones eficientes para envíos desde Estados Unidos hacia Colombia, México, Ecuador y Venezuela, así como exportaciones desde Colombia hacia USA. Nos especializamos en facilitar el comercio y el transporte internacional con servicios personalizados, casillero en Miami, consolidación de paquetes, recolección en origen y seguimiento en tiempo real.
              </p>

              <p className="mt-15">
                Ya sea que compres en línea, manejes un negocio o necesites enviar documentos importantes, te damos acceso a tarifas competitivas, atención en español y una red confiable de aliados logísticos para asegurar que tus productos lleguen a tiempo y en perfecto estado.
              </p>

              <div className="choose__content-inner mt-30">
                <Link href="/#cotizar" className="btn">
                  Solicita una cotización{" "}
                  <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="icono flecha" className="injectable" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="choose__shape">
        <Image src={shape} alt="Decoración" data-aos="fade-left" data-aos-delay="400" />
      </div>
    </section>
  );
};

export default ChooseArea;
