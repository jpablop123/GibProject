"use client";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function ContactSection() {
  return (
    <MDBContainer fluid className="py-5">
      <MDBRow className="justify-content-center align-items-stretch g-4 mx-auto" style={{ maxWidth: "1400px" }}>
        
        {/* Left Side - Image & Quote */}
        <MDBCol md="6" className="d-flex flex-column">
          <MDBCard className="shadow-3 w-100 h-100 border-0">
            <div className="position-relative w-100 h-100">
              <img
                src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                alt="Delivery Image"
                className="rounded w-100 h-100"
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end justify-content-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
                <MDBTypography tag="h5" className="text-white text-center">
                  📦 "Te ayudamos a enviar tus paquetes de manera segura y rápida."
                </MDBTypography>
              </div>
            </div>
          </MDBCard>
        </MDBCol>

        {/* Right Side - Contact Section Full Width */}
        <MDBCol md="6" className="d-flex flex-column">
          <MDBCard className="shadow-3 w-100 h-100 border-0 p-4 d-flex flex-column justify-content-center text-white"
            style={{
              background: "linear-gradient(135deg, rgba(8,8,63,1) 0%, rgba(0,0,0,1) 100%)",
              borderRadius: "10px"
            }}>
            
            <MDBTypography tag="h3" className="mb-3 text-uppercase text-center" style={{ color: "#45A3E5", fontWeight: "bold" }}>
              ¿Preguntas? <br /> Llámanos o escríbenos
            </MDBTypography>
            
            <div className="container d-flex flex-column align-items-center text-center py-4">
      <p className="text-center text-light mb-4">Lunes a Domingo | 9 AM - 7 PM EST</p>
      
      <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: "400px" }}>
        {/* Phone Call */}
        <div>
          <p className="text-light mb-1">📞 Llámanos</p>
          <a href="tel:+17867675842" className="d-flex align-items-center justify-content-center p-3 rounded text-decoration-none"
            style={{
              background: "rgba(69, 163, 229, 0.9)",
              color: "white",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
              width: "100%",
              maxWidth: "400px"
            }}>
            <FaPhoneAlt className="me-3 fs-4" />
            +1 (786) 767-5842
          </a>
        </div>

        {/* WhatsApp */}
        <div>
          <p className="text-light mb-1">💬 WhatsApp Mensaje</p>
          <a href="https://wa.me/12133207919" className="d-flex align-items-center justify-content-center p-3 rounded text-decoration-none"
            style={{
              background: "rgba(37, 211, 102, 0.9)",
              color: "white",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
              width: "100%",
              maxWidth: "400px"
            }}>
            <FaWhatsapp className="me-3 fs-4" />
            +1 (213) 320-7919
          </a>
        </div>

        {/* Live Chat */}
        <div>
          <p className="text-light mb-1">💻 Soporte Por Chat</p>
          <button className="d-flex align-items-center justify-content-center p-3 rounded border-0 w-100"
            style={{
              background: "rgba(255, 180, 0, 0.9)",
              color: "white",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
              maxWidth: "400px"
            }}>
            <FaCommentDots className="me-3 fs-4" />
            Chat en Vivo
          </button>
        </div>

        {/* Email */}
        <div>
          <p className="text-light mb-1">📧 Email</p>
          <a href="mailto:soporte@letsbox.it" className="d-flex align-items-center justify-content-center p-3 rounded text-decoration-none"
            style={{
              background: "rgba(220, 53, 69, 0.9)",
              color: "white",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
              width: "100%",
              maxWidth: "400px"
            }}>
            <FaEnvelope className="me-3 fs-4" />
            soporte@letsbox.it
          </a>
        </div>
      </div>
    </div>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}  

