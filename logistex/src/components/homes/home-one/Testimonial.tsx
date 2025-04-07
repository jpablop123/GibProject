"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import InjectableSvg from "@/components/common/InjectableSvg";

interface DataType {
  id: number;
  title: string;
  designation: string;
  desc: JSX.Element;
  rating: number;
}

const testi_data: DataType[] = [
  {
    id: 1,
    title: "Carlos Ríos",
    designation: "Negociante ",
    desc: (
      <>
        “ yo traigo herramientas desde Miami y con estos manes ha sido una chimba. Cumplidos, serios y me responden por todo. ¡Así da gusto hacer negocio!”
      </>
    ),
    rating: 5,
  },
  {
    id: 2,
    title: "Andrea Torres",
    designation: "Emprendedora ",
    desc: (
      <>
        “Yo tengo mi tienda de ropa y esto ha sido un alivio total. Antes era un enredo traer las cosas, pero ahora con ellos todo suavecito. ¡Me llegó todo divino!”
      </>
    ),
    rating: 4,
  },
  {
    id: 3,
    title: " Héctor",
    designation: "Técnico ",
    desc: (
      <>
        “Yo no entiendo mucho de eso del internet, pero pedí unos repuestos y ellos me guiaron todo el proceso. Me llegó clarito a la casa. Bien por ustedes, mijo.”
      </>
    ),
    rating: 5,
  },
  {
    id: 4,
    title: "Laura G.",
    designation: "Mamá y compradora online",
    desc: (
      <>
        “Pido cositas por Amazon y con el casillero de ellos me llega rapido. Incluso una vez me ayudaron a evitar una multa de aduana. ¡Una belleza!”
      </>
    ),
    rating: 5,
  },
  {
    id: 5,
    title: "Santiago C.",
    designation: "tech lover",
    desc: (
      <>
        “ traje el iPhone 15 Pro Max desde USA y me salió más barato que acá. Gib Traders se lució, todo me llegó a tiempo, sellado y sin enredos.”
      </>
    ),
    rating: 5,
  },
  {
    id: 6,
    title: "Carolina Vélez",
    designation: "Diseñadora ",
    desc: (
      <>
        “Uso el casillero para traer materiales y accesorios que acá no consigo. Todo llega súper bien empacado y sin estrés. Me encanta que escriben por WhatsApp.”
      </>
    ),
    rating: 4,
  },
  {
    id: 7,
    title: "Luis",
    designation: "Exportador de café",
    desc: (
      <>
        “Con ellos mando mis muestras a Estados Unidos. Me cumplen, no me cobran de más, y lo mejor: llegan a tiempo. Eso es lo que uno necesita.”
      </>
    ),
    rating: 4,
  },
  {
    id: 8,
    title: "Sofi R.",
    designation: "Estudiante",
    desc: (
      <>
        “Yo pedí unos útiles, un portátil y hasta una pijama... todo en un solo paquete. Me ayudaron a juntarlo todo y ahorré un montón. Full recomendados.”
      </>
    ),
    rating: 5,
  },
  {
    id: 9,
    title: "Felipe Morales",
    designation: "Comerciante",
    desc: (
      <>
        “Traigo tenis y productos para vender acá. Ellos me dan buena tarifa, y si tengo duda, ahí mismo contestan. ¡Una nota!”
      </>
    ),
    rating: 5,
  },
  {
    id: 10,
    title: "Manuela Restrepo",
    designation: "Fotógrafa ",
    desc: (
      <>
        “Estaba en México y mandé un trípode a Colombia. Pensé que se iba a perder, pero llegó perfecto. Gracias Gib por estar en todas.”
      </>
    ),
    rating: 4,
  },
];

interface PropsType {
  style?: boolean;
}

const Testimonial = ({ style }: PropsType) => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <section className="testimonial__area-four">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-11 col-md-12">
            <div className="testimonial__wrap fix">
              <div className="testimonial__icon testimonial__icon-two">
                <InjectableSvg
                  src="/assets/img/icon/quote.svg"
                  alt=""
                  className="injectable"
                />
              </div>

              <Swiper
                modules={[Navigation, Autoplay]}
                loop={isLoop}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".testimonial-button-next",
                  prevEl: ".testimonial-button-prev",
                }}
                className="testimonial-active"
              >
                {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide" style={{ width: '100%' }}>
                    <div className="testimonial__item" style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
                      <div className="testimonial__info">
                        <h2 className="name">{item.title}</h2>
                        <span>{item.designation}</span>
                      </div>

                      <div className="testimonial__rating" style={{ margin: "10px 0" }}>
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`fas fa-star${index < item.rating ? "" : "-o"}`}
                            style={{ color: index < item.rating ? "#FFC107" : "#ccc", marginRight: 2 }}
                          ></i>
                        ))}
                      </div>

                      <div className="testimonial__content">
                        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#333" }}>{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="testimonial__nav-wrap" style={{ marginTop: "20px", textAlign: "center" }}>
                <button className="testimonial-button-prev" style={{ marginRight: "10px" }}>
                  <i className="flaticon-left-arrow"></i>
                </button>
                <button className="testimonial-button-next">
                  <i className="flaticon-right-arrow"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
