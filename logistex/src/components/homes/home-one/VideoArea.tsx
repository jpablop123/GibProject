"use client";
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";

interface VideoAreaProps {
  style?: boolean;
}

const VideoArea = ({ style }: VideoAreaProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="video__area" id="cotizar">
        <div
          className="video__bg"
          style={{ backgroundImage: `url(/assets/img/bg/video_bg.jpg)` }}
        ></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className={`video__play-btn ${style ? "video__play-btn-three" : ""}`}>
                <a
                  onClick={() => setIsVideoOpen(true)}
                  style={{ cursor: "pointer" }}
                  className="play-btn popup-video"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="video__content">
                <div className="section__title white-title">
                  <span className="sub-title">¿Necesitas enviar productos desde o hacia Estados Unidos?</span>
                  <h2 className="title">
                    Mira cómo funciona Gib Traders <br />
                    y por qué cientos ya confían en nosotros
                  </h2>
                  <p
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      padding: "15px 20px",
                      borderRadius: "10px",
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#fff",
                      lineHeight: "1.6",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                      marginTop: "20px",
                    }}
                  >
                    Desde paquetes personales hasta exportaciones para negocios. Nuestro proceso es{" "}
                    <strong>rápido, confiable</strong> y sin complicaciones. <br />
                    <span style={{ color: "#FFD700" }}>
                      ¡Cotiza en minutos y recibe atención personalizada!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"} // cambia este ID si usas otro video
      />
    </>
  );
};

export default VideoArea;
