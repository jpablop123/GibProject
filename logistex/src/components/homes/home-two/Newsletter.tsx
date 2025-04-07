"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import shape_1 from "@/assets/img/images/newsletter_shape01.svg";
import shape_2 from "@/assets/img/images/newsletter_shape02.svg";

const Newsletter = () => {
   const [yearsExperience, setYearsExperience] = useState(0);

   useEffect(() => {
      const foundingYear = 2007;
      const currentYear = new Date().getFullYear();
      setYearsExperience(currentYear - foundingYear);
   }, []);

   return (
      <section className="newsletter__area">
         <div className="container">
            <div className="newsletter__wrap">
               <div className="row gx-0">
                  <div className="col-lg-6">
                     <div className="newsletter__content-left">
                        <div className="experiences__wrap">
                           <h2 className="count">{yearsExperience}+</h2>
                           <span>Años de <strong>Experiencia</strong></span>
                        </div>
                        <h2 className="title">Soluciones logísticas internacionales para tu negocio o compras personales.</h2>
                        <Image src={shape_1} alt="shape" className="shape" />
                     </div>
                  </div>
                  <div className="col-lg-6">
  <div
    className="newsletter__content"
    style={{ position: "relative", zIndex: 2 }}
  >
    <h2 className="title" style={{ color: "#fff" }}>
      <i className="flaticon-waving-flag"></i> ¡Estamos trabajando en nuestra app!
    </h2>
    <p
      style={{
        color: "#fff",
        marginTop: "15px",
        fontSize: "16px",
        fontWeight: "500",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "12px 20px",
        borderRadius: "6px",
      }}
    >
      Muy pronto todo el proceso será automatizado para que puedas cotizar, rastrear y gestionar tus envíos de forma más fácil y rápida.
    </p>

    <Image
      src={shape_2}
      alt="shape"
      className="shape rotateme-two"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        filter: "brightness(0) invert(1)",
        opacity: 0.5,
      }}
    />
  </div>
</div>

               </div>
            </div>
         </div>
      </section>
   );
};

export default Newsletter;
