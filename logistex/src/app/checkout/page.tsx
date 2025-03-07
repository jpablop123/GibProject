"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaUser, FaMapMarkerAlt, FaDollarSign, FaArrowRight } from "react-icons/fa";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const CheckoutPage = () => {
   const [quoteData, setQuoteData] = useState<any>(null);
   const [shipmentData, setShipmentData] = useState<any>(null);
   const [paymentData, setPaymentData] = useState({
      senderName: "",
      senderLastName: "",
      senderAddress: "",
      senderPhone: "",
      senderEmail: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
      insurance: "0",
   });
   const router = useRouter();

   useEffect(() => {
      const storedQuote = sessionStorage.getItem("quoteData");
      const storedShipment = sessionStorage.getItem("shipmentData");
      
      if (storedQuote) setQuoteData(JSON.parse(storedQuote));
      if (storedShipment) setShipmentData(JSON.parse(storedShipment));
   }, []);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setPaymentData((prev) => ({ ...prev, [name]: value }));
   };

   const handlePayment = (e: React.FormEvent) => {
      e.preventDefault();
      sessionStorage.setItem("paymentData", JSON.stringify(paymentData));
      router.push("/shipment-created");
   };

   return (
      <>
         <HeaderOne />
         <div className="container my-5">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-8">
                  <div className="checkout-card shadow p-4 text-center rounded">
                     <h2 className="fw-bold">Paga tu Envío</h2>

                     <form onSubmit={handlePayment} className="text-start">
                        {/* Sender Information */}
                        <h5 className="fw-bold text-secondary"><FaUser className="me-2" /> Información del Remitente</h5>
                        <input type="text" name="senderName" placeholder="Nombre" className="form-control mb-2" onChange={handleInputChange} required />
                        <input type="text" name="senderLastName" placeholder="Apellido" className="form-control mb-2" onChange={handleInputChange} required />
                        <input type="text" name="senderAddress" placeholder="Dirección" className="form-control mb-2" onChange={handleInputChange} required />
                        <input type="text" name="senderPhone" placeholder="Celular" className="form-control mb-2" onChange={handleInputChange} required />
                        <input type="email" name="senderEmail" placeholder="Email" className="form-control mb-3" onChange={handleInputChange} required />
                        
                        {/* Credit/Debit Card Details */}
                        <h5 className="fw-bold text-secondary"><FaCreditCard className="me-2" /> Tarjeta de Crédito/Débito</h5>
                        <input type="text" name="cardNumber" placeholder="0000-0000-0000-0000" className="form-control mb-2" onChange={handleInputChange} required />
                        <div className="d-flex gap-2">
                           <input type="text" name="cardExpiry" placeholder="Exp: 00/00" className="form-control mb-2" onChange={handleInputChange} required />
                           <input type="text" name="cardCVV" placeholder="CVV" className="form-control mb-2" onChange={handleInputChange} required />
                        </div>

                        {/* Insurance */}
                        <h5 className="fw-bold text-secondary"><FaDollarSign className="me-2" /> Asegura tu Envío</h5>
                        <select name="insurance" className="form-select mb-3" onChange={handleInputChange}>
                           <option value="0">No Asegurar</option>
                           <option value="10">Asegurar $200 por $10</option>
                        </select>

                        {/* Shipping Summary */}
                        {quoteData && shipmentData && (
                           <div className="quote-summary text-start border p-3 rounded">
                              <h5 className="fw-bold text-secondary"><FaMapMarkerAlt className="me-2" /> Envío</h5>
                              <p>Enviado desde <strong>{quoteData.originZip}</strong> → <strong>{quoteData.destination}</strong></p>
                              <p className="text-muted">Entrega en 6-10 días hábiles</p>
                              <p><strong>Transporte:</strong> ${quoteData.transportCost}</p>
                              <p><strong>Seguro:</strong> ${paymentData.insurance}</p>
                              <p><strong>Impuestos:</strong> ${quoteData.taxes}</p>
                              <hr />
                              <p className="total-price fw-bold display-5 text-primary">
   Total: ${ (parseFloat(quoteData.total) + parseFloat(paymentData.insurance)).toFixed(2) }
</p>

                           </div>
                        )}

                        {/* Payment Button */}
                        <button type="submit" className="btn btn-primary w-100 mt-3">
                           Pagar Ahora <FaArrowRight />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <FooterOne />
      </>
   );
};

export default CheckoutPage;
