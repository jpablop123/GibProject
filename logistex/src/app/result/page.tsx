"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaBox, FaArrowRight, FaRedoAlt, FaTruckMoving, FaClock, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa"; 
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ResultPage = () => {
   const [quoteData, setQuoteData] = useState<any>(null);
   const [countryRates, setCountryRates] = useState<any>(null);
   const [calculatedTotal, setCalculatedTotal] = useState<number | null>(null);
   const router = useRouter();

   useEffect(() => {
      // ✅ Retrieve quote data from sessionStorage
      const storedData = sessionStorage.getItem("quoteData");
      if (storedData) {
         const parsedData = JSON.parse(storedData);
         setQuoteData(parsedData);
      }
   }, []);

   // ✅ Fetch country shipping rates
   useEffect(() => {
      if (quoteData?.destination) {
         const fetchCountryRates = async () => {
            try {
               const response = await fetch("/api/admin/countries");
               if (!response.ok) throw new Error(`API Error: ${response.status}`);
               const data = await response.json();
               
               // ✅ Find the country rates that match the selected destination
               const country = data.countries.find((c: any) => c.country === quoteData.destination);
               setCountryRates(country);

               if (country) {
                  // ✅ Calculate total price based on fetched rates
                  const weightCost = quoteData.unit === "lbs"
                     ? country.costPerLb * quoteData.weight
                     : country.costPerKg * quoteData.weight;

                  const baseCost = Math.max(weightCost, country.minPrice) + country.insurance;
                  const taxes = quoteData.declaredValue >= country.taxThreshold
                     ? (country.taxRate / 100) * quoteData.declaredValue
                     : 0;

                  setCalculatedTotal(baseCost + taxes);
               }
            } catch (error) {
               console.error("Error fetching country rates:", error);
            }
         };

         fetchCountryRates();
      }
   }, [quoteData]); // ✅ Runs when quoteData is set

   return (
      <>
         <HeaderOne />
         <div className="container my-5">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-8">
                  <div className="quote-card shadow-lg p-5 text-center rounded bg-white">
                     <FaBox size={50} color="#007bff" className="mb-3" />
                     <h2 className="fw-bold text-primary">Your Shipping Quote</h2>

                     {quoteData && countryRates ? (
                        <>
                           <div className="quote-summary bg-light p-3 rounded my-4 text-start">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaMapMarkerAlt size={18} className="me-2" /> Shipping Route
                              </h5>
                              <p className="fw-bold">
                                 Enviado desde <span className="text-primary">{quoteData.originZip}</span> 
                                 → <span className="text-primary">{quoteData.destination}</span>
                              </p>
                              <p className="text-muted d-flex align-items-center gap-2">
                                 <FaClock size={16} /> Estimated Delivery: <strong>6-10 días hábiles</strong>
                              </p>
                           </div>

                           {/* Shipping Details */}
                           <div className="quote-details bg-white p-3 rounded shadow-sm text-start">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaTruckMoving size={18} className="me-2" /> Shipment Details
                              </h5>
                              <ul className="list-unstyled mb-0">
                                 <li><strong>Peso:</strong> {quoteData.weight} Lb</li>
                                 <li><strong>Dimensiones:</strong> {quoteData.height} x {quoteData.width} x {quoteData.length} In</li>
                              </ul>
                           </div>

                           {/* Pricing Section */}
                           <div className="quote-pricing bg-light p-3 rounded shadow-sm text-start my-4">
                              <h5 className="fw-bold text-secondary d-flex align-items-center">
                                 <FaDollarSign size={18} className="me-2" /> Pricing Breakdown
                              </h5>
                              <p><strong>Transporte:</strong> ${countryRates.costPerLb * quoteData.weight}</p>
                              <p><strong>Valor declarado:</strong> ${quoteData.declaredValue}</p>
                              <p><strong>Impuestos:</strong> ${((countryRates.taxRate / 100) * quoteData.declaredValue).toFixed(2)}</p>
                              <hr />
                              <p className="total-price fw-bold display-5 text-primary">
                                 Total: ${calculatedTotal ? calculatedTotal.toFixed(2) : "Calculating..."}
                              </p>
                           </div>

                           {/* Buttons */}
                           <div className="d-flex justify-content-center gap-3 mt-4">
                              <button 
                                 className="btn btn-primary d-flex align-items-center gap-2"
                                 onClick={() => router.push("/checkout")}
                              >
                                 Proceed with Shipment <FaArrowRight />
                              </button>

                              <button 
                                 className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 py-2"
                                 onClick={() => router.push("/")}
                              >
                                 Modify Request <FaRedoAlt />
                              </button>
                           </div>
                        </>
                     ) : (
                        <p className="text-danger">No quote found. Please request again.</p>
                     )}
                  </div>
               </div>
            </div>
         </div>
         <FooterOne />
      </>
   );
};

export default ResultPage;
