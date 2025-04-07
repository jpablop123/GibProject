import Image from "next/image";
import cta_img from "@/assets/img/images/cta_img.jpg";
import InjectableSvg from "@/components/common/InjectableSvg";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta__area-two">
      <div className="container">
        <div className="cta__wrap-two cta__wrap-three">
          <div className="cta__img">
            <Image src={cta_img} alt="img" />
          </div>
          <div className="cta__content-two cta__content-three">
            <div className="content__left">
              <h2 className="title">¿Necesitas enviar productos desde o hacia USA?</h2>
              <p>
                Con Gib Traders puedes cotizar tus envíos desde Colombia a Estados Unidos o recibir tus compras desde USA sin complicaciones.
              </p>

              {/* Mensaje profesional */}
              <div style={{
                backgroundColor: "#f8f8f8",
                borderLeft: "4px solid #ff6600",
                padding: "15px 20px",
                borderRadius: "8px",
                marginTop: "20px",
              }}>
                <h4 style={{ marginBottom: "8px", color: "#111" }}>
                  🚧 Nuestra plataforma está en construcción
                </h4>
                <p style={{ margin: 0, color: "#555" }}>
                  Muy pronto podrás gestionar todo desde nuestra app. Por ahora, puedes cotizar directamente con nuestro equipo dando clic en el botón.
                </p>
              </div>
            </div>

            <div className="cta__btn-two cta__btn-three" style={{ marginTop: "25px" }}>
            <Link href="/#cotizar" className="btn">
  Cotizar ahora{" "}
  <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" />
</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
