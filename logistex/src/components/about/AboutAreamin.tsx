"use client";
import Image from 'next/image';
import { useState } from 'react';
import about_1 from "@/assets/img/images/inner_about_img01.jpg";
import about_2 from "@/assets/img/images/inner_about_img02.jpg";

const AboutAreamin = () => {
   const [formData, setFormData] = useState({
      senderCity: '',
      senderCountry: '',
      receiverCity: '',
      receiverCountry: '',
      dimensions: '',
      weight: '',
      name: '',
      contact: '',
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleQuoteRequest = () => {
      const {
         senderCity,
         senderCountry,
         receiverCity,
         receiverCountry,
         dimensions,
         weight,
         name,
         contact,
      } = formData;

      if (
         !senderCity || !senderCountry || !receiverCity || !receiverCountry ||
         !dimensions || !weight || !name || !contact
      ) {
         alert("Por favor completa todos los campos antes de cotizar.");
         return;
      }

      const subject = `Cotización de envío - Gib Traders`;
      const body = `
Nombre: ${name}
Contacto: ${contact}

📦 Detalles del envío:
Desde: ${senderCity}, ${senderCountry}
Hasta: ${receiverCity}, ${receiverCountry}
Dimensiones del paquete: ${dimensions}
Peso estimado: ${weight} kg
`;

      const mailtoLink = `mailto:contacto@gibtraders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
   };

   return (
      <section className="about__area-two section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center gutter-24">
               <div className="col-lg-6 col-md-9">
                  <div className="about__img-two">
                     <Image src={about_1} alt="Gib Traders" data-aos="fade-right" data-aos-delay="400" />
                     <Image src={about_2} alt="Envíos internacionales" data-aos="fade-up" data-aos-delay="600" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about__content-two">
                     <div className="section__title section__title-two mb-20">
                        <span className="sub-title">Cotiza tu envío</span>
                        <h2 className="title">Soluciones desde y hacia cualquier ciudad del mundo</h2>
                     </div>
                     <p>En Gib Traders hacemos tus envíos más fáciles, rápidos y seguros. Completa el siguiente formulario para cotizar tu envío de forma inmediata.</p>

                     <div className="about__form mt-30">
                        <input type="text" name="name" placeholder="Tu nombre" onChange={handleChange} value={formData.name} />
                        <input type="text" name="contact" placeholder="Teléfono o correo" onChange={handleChange} value={formData.contact} />

                        <input type="text" name="senderCity" placeholder="Ciudad de despacho" onChange={handleChange} value={formData.senderCity} />
                        <input type="text" name="senderCountry" placeholder="País de despacho" onChange={handleChange} value={formData.senderCountry} />

                        <input type="text" name="receiverCity" placeholder="Ciudad de recibimiento" onChange={handleChange} value={formData.receiverCity} />
                        <input type="text" name="receiverCountry" placeholder="País de recibimiento" onChange={handleChange} value={formData.receiverCountry} />

                        <input type="text" name="dimensions" placeholder="Dimensiones del paquete (ej: 40x30x20 cm)" onChange={handleChange} value={formData.dimensions} />
                        <input type="text" name="weight" placeholder="Peso estimado (kg)" onChange={handleChange} value={formData.weight} />

                        <button className="cotizar-button" onClick={handleQuoteRequest}>Cotizar envío</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            .about__form input {
               display: block;
               width: 100%;
               margin-bottom: 12px;
               padding: 10px 15px;
               border-radius: 6px;
               border: 1px solid #ccc;
               font-size: 14px;
            }

            .cotizar-button {
               background-color: #847E7E;
               color: white;
               border: none;
               padding: 10px 20px;
               font-size: 14px;
               font-weight: 600;
               border-radius: 6px;
               cursor: pointer;
               transition: all 0.3s ease;
               width: 100%;
               max-width: 220px;
               margin-top: 10px;
            }

            .cotizar-button:hover {
               background-color: #6f6a6a;
            }

            .cotizar-button:active {
               background-color: #5a5555;
               transform: scale(0.98);
            }
         `}</style>
      </section>
   );
};

export default AboutAreamin;
