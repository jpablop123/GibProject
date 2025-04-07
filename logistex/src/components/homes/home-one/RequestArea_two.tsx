"use client";
import { useState } from "react";
import Image from "next/image";
import request_shape from "@/assets/img/images/request_shape.svg";

const RequestArea_two = () => {
  const [step, setStep] = useState(1);
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: "",
    direccionOrigen: "",
    paisOrigen: "",
    ciudadOrigen: "",
    codigoPostal: "",
    paisDestino: "",
    ciudadDestino: "",
    peso: "",
    unidadPeso: "lbs",
    alto: "",
    ancho: "",
    largo: "",
    unidadDimension: "inches",
    valorDeclarado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, correo, direccionOrigen, paisOrigen, ciudadOrigen, codigoPostal } = formData;
    if (!nombre || !correo || !direccionOrigen || !paisOrigen || !ciudadOrigen || !codigoPostal) {
      alert("Por favor completa todos los campos del remitente.");
      return;
    }
    setStep(2);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEmailSent(true);
      } else {
        alert("Hubo un error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo enviar el correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="request_area" id="">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="request__wrap">
              <div className="request__form">
                <h3 className="title">Cotiza tu envío internacional</h3>

                {!emailSent ? (
                  <form onSubmit={step === 1 ? handleNextStep : handleSend}>
                    <div className="row g-3">
                      {step === 1 ? (
                        <>
                          <h5>📍 Dirección de origen</h5>
                          <div className="col-md-6">
                            <input type="text" name="nombre" placeholder="Tu nombre*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="email" name="correo" placeholder="Tu correo*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="whatsapp" placeholder="WhatsApp (opcional)" onChange={handleChange} />
                          </div>
                          <div className="col-md-12">
                            <input type="text" name="direccionOrigen" placeholder="Dirección exacta de recogida*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="ciudadOrigen" placeholder="Ciudad de origen*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="paisOrigen" placeholder="País de origen*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-12">
                            <input type="text" name="codigoPostal" placeholder="Código postal*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="btn">Siguiente</button>
                          </div>
                        </>
                      ) : (
                        <>
                          <h5>🎯 Información del paquete y destino</h5>
                          <div className="col-md-6">
                            <input type="text" name="ciudadDestino" placeholder="Ciudad de destino*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="paisDestino" placeholder="País de destino*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <input type="number" name="peso" placeholder="Peso*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-6">
                            <select name="unidadPeso" onChange={handleChange}>
                              <option value="lbs">Libras</option>
                              <option value="kg">Kilogramos</option>
                            </select>
                          </div>
                          <div className="col-md-4">
                            <input type="number" name="alto" placeholder="Alto" onChange={handleChange} />
                          </div>
                          <div className="col-md-4">
                            <input type="number" name="ancho" placeholder="Ancho" onChange={handleChange} />
                          </div>
                          <div className="col-md-4">
                            <input type="number" name="largo" placeholder="Largo" onChange={handleChange} />
                          </div>
                          <div className="col-md-12">
                            <select name="unidadDimension" onChange={handleChange}>
                              <option value="inches">Pulgadas</option>
                              <option value="cm">Centímetros</option>
                            </select>
                          </div>
                          <div className="col-md-12">
                            <input type="number" name="valorDeclarado" placeholder="Valor declarado (USD)*" onChange={handleChange} required />
                          </div>
                          <div className="col-md-12">
                            <button type="submit" className="btn" disabled={loading}>
                              {loading ? "Enviando..." : "Enviar cotización"}
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </form>
                ) : (
                  <div className="email-success-message">
                    <h4>✅ Correo enviado</h4>
                    <p>Un asistente te contactará en breve con tu cotización.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="request__shape">
        <Image src={request_shape} alt="shape" data-aos="fade-down" data-aos-delay="400" />
      </div>
      <style jsx>{`
        .request__form input,
        .request__form select {
          width: 100%;
          padding: 10px 15px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .btn {
          background-color: #847E7E;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }

        .btn:hover {
          background-color: #6f6a6a;
        }

        .email-success-message {
          text-align: center;
          background-color: #f1f1f1;
          padding: 30px;
          border-radius: 12px;
          color: #333;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};

export default RequestArea_two;
