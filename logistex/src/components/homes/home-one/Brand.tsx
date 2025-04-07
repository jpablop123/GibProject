"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import brand_ups from "@/assets/img/logo/ups-icon.png";
import brand_fedex from "@/assets/img/logo/fedex-seeklogo-removebg-preview.png";
import brand_globus from "@/assets/img/logo/LOGO_AMARILLO-removebg-preview (1).png";

const brand_data = [brand_ups, brand_fedex, brand_globus];

interface PropsType {
  style?: boolean;
}

const Brand = ({ style }: PropsType) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint to show grid on phones/tablets
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const swiperSettings = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3 },
      576: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  };

  return (
    <div className={`${style ? "brand__area-two" : "brand__area"}`}>
      <div className="container">
        {!isMobile ? (
          <Swiper {...swiperSettings} className="brand-active fix">
            {brand_data.map((brand, i) => (
              <SwiperSlide key={i}>
                <div className="brand__item" style={{ textAlign: "center" }}>
                  <Image
                    src={brand}
                    alt="logo"
                    style={{
                      width: "150px",
                      height: "auto",
                      maxHeight: "80px",
                      objectFit: "contain",
                      margin: "0 auto",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="brand__grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {brand_data.map((brand, i) => (
              <div key={i}>
                <Image
                  src={brand}
                  alt="logo"
                  style={{
                    width: "120px",
                    height: "auto",
                    maxHeight: "80px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brand;
