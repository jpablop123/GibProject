"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaMapMarkerAlt, FaTruck, FaClipboardList, FaDollarSign, FaArrowRight, FaRedoAlt } from "react-icons/fa";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ConfirmationPage = () => {
   const [quoteData, setQuoteData] = useState<any>(null);
   const [shipmentData, setShipmentData] = useState<any>(null);
   const router = useRouter();

   useEffect(() => {
      const storedQuote = sessionStorage.getItem("quoteData");
      const storedShipment = sessionStorage.getItem("shipmentData");

      if (storedQuote) setQuoteData(JSON.parse(storedQuote));
      if (storedShipment) setShipmentData(JSON.parse(storedShipment));
   }, []);

   return (
      <>
         <HeaderOne />
         <div className="container my-5">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-8">
                  <div className="summary-card shadow p-4 text-center rounded">
                     <FaClipboardList size={40} color="#007bff" className="mb-3" />
                     <h2 className="fw-bold">Confirmación de Envío</h2>

                     {quoteData && shipmentData ? (
                        <>
                           {/* 🚛 Shipping Details */}
                           <div className="quote-details my-4 text-start">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaTruck size={18} className="me-2" /> Detalles del Envío
                              </h5>
                              <p><strong>Desde:</strong> {quoteData.originZip} → <strong>A:</strong> {quoteData.destination}</p>
                              <p className="text-muted d-flex align-items-center gap-2">
                                 <FaMapMarkerAlt size={16} /> Entrega en <strong>6-10 días hábiles</strong>
                              </p>
                              <ul className="list-unstyled">
                                 <li><strong>Peso:</strong> {quoteData.weight} Lb</li>
                                 <li><strong>Dimensiones:</strong> {quoteData.height} x {quoteData.width} x {quoteData.length} In</li>
                              </ul>
                           </div>

                           {/* 📦 Recipient Details */}
                           <div className="quote-details my-4 text-start">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaUser size={18} className="me-2" /> Destinatario
                              </h5>
                              <p><strong>Nombre:</strong> {shipmentData.recipientName} {shipmentData.recipientLastName}</p>
                              <p><strong>Dirección:</strong> {shipmentData.address}, {shipmentData.city}, {shipmentData.country}</p>
                              <p><strong>Teléfono:</strong> {shipmentData.phone || "N/A"}</p>
                              <p><strong>Celular:</strong> {shipmentData.mobile}</p>
                              <p><strong>Descripción:</strong> {shipmentData.description || "No especificado"}</p>
                           </div>

                           {/* 💵 Pricing Details */}
                           <div className="quote-pricing text-start">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaDollarSign size={18} className="me-2" /> Costos
                              </h5>
                              <p><strong>Transporte:</strong> ${quoteData.transportCost}</p>
                              <p><strong>Valor declarado:</strong> ${quoteData.declaredValue}</p>
                              <p><strong>Impuestos:</strong> ${quoteData.taxes}</p>
                              <hr />
                              <p className="total-price fw-bold display-5 text-primary">Total: ${quoteData.total}</p>
                           </div>

                           {/* ✅ Action Buttons */}
                           <div className="d-flex justify-content-center gap-3 mt-4">
                              <button 
                                 className="btn btn-success d-flex align-items-center gap-2"
                                 onClick={() => router.push("/checkout")}
                              >
                                 Proceder al Pago <FaArrowRight />
                              </button>
                              <button 
                                 className="btn btn-outline-secondary d-flex align-items-center gap-2"
                                 onClick={() => router.push("/shipment-details")}
                              >
                                 Modificar Datos <FaRedoAlt />
                              </button>
                           </div>
                        </>
                     ) : (
                        <p className="text-danger">No data found. Please start again.</p>
                     )}
                  </div>
               </div>
            </div>
         </div>
         <FooterOne />
      </>
   );
};

export default ConfirmationPage;
