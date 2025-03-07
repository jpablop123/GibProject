"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ShipmentDetails = () => {
   const [shipmentData, setShipmentData] = useState({
      recipientName: "",
      recipientLastName: "",
      address: "",
      country: "COLOMBIA",
      city: "",
      phone: "",
      mobile: "",
      description: "",
   });

   const router = useRouter();

   useEffect(() => {
      // ✅ Retrieve stored data (if available)
      const storedData = sessionStorage.getItem("shipmentData");
      if (storedData) {
         setShipmentData(JSON.parse(storedData));
      }
   }, []);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setShipmentData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // ✅ Store in sessionStorage
      sessionStorage.setItem("shipmentData", JSON.stringify(shipmentData));
      // ✅ Navigate to next step (confirmation or checkout)
      router.push("/confirmation");
   };
   const handleShipmentSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   
      sessionStorage.setItem("shipmentData", JSON.stringify(shipmentData)); // ✅ Store recipient details
   
      router.push("/checkout"); // ✅ Move to checkout
   };
   

   return (
      <>
         <HeaderOne />
         <div className="container my-5">
            <h2 className="fw-bold text-center">Información del Destinatario</h2>
            <form onSubmit={handleSubmit} className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="mb-3">
                     <label className="form-label">Nombre*</label>
                     <input
                        type="text"
                        className="form-control"
                        name="recipientName"
                        value={shipmentData.recipientName}
                        onChange={handleInputChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Apellido*</label>
                     <input
                        type="text"
                        className="form-control"
                        name="recipientLastName"
                        value={shipmentData.recipientLastName}
                        onChange={handleInputChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Dirección*</label>
                     <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={shipmentData.address}
                        onChange={handleInputChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Ciudad*</label>
                     <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={shipmentData.city}
                        onChange={handleInputChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Teléfono</label>
                     <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={shipmentData.phone}
                        onChange={handleInputChange}
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Celular*</label>
                     <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        value={shipmentData.mobile}
                        onChange={handleInputChange}
                        required
                     />
                  </div>
                  <div className="mb-3">
                     <label className="form-label">Descripción del envío</label>
                     <textarea
                        className="form-control"
                        name="description"
                        value={shipmentData.description}
                        onChange={handleInputChange}
                     ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                     Siguiente
                  </button>
               </div>
            </form>
         </div>
         <FooterOne />
      </>
   );
};

export default ShipmentDetails;
