"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router
import { useSearchParams } from "next/navigation"; // ✅ Import Next.js search params




import request_shape from "@/assets/img/images/request_shape.svg";

const tab_title: string[] = ["Request a Quote", "Track & Trace"];

interface PropsType {
   style?: boolean;
}




const RequestArea = ({ style }: PropsType) => {
   const [activeTab, setActiveTab] = useState(0);
   const [trackingNumber, setTrackingNumber] = useState("");
   const [trackingResult, setTrackingResult] = useState<string | null>(null);
   const [quoteReceived, setQuoteReceived] = useState(false);
const [quote, setQuote] = useState<number | null>(null);
const [countries, setCountries] = useState<Country[]>([]);  // ✅ Store country data
const [selectedCountry, setSelectedCountry] = useState<string>(""); // ✅ Store selected country
const searchParams = useSearchParams(); // ✅ Get query parameters
   const countryFromURL = searchParams.get("country") || ""; // ✅ Extract country from URL

const [shipmentData, setShipmentData] = useState({
   zipCode: "",
   weight: "",
   height: "",
   width: "",
   length: "",
   unit: "lbs",
   declaredValue: "",
   country: "COLOMBIA",
   whatsapp: "",
});

const router = useRouter(); // ✅ Initialize Next.js router
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   const { name, value } = e.target;

   setShipmentData((prev) => ({
      ...prev,
      [name]: e.target.type === "number" ? (value ? parseFloat(value) : "") : value,
   }));

   if (name === "country") {
      setSelectedCountry(value);
   }
};



const handleGetQuote = async (e: React.FormEvent) => {
   e.preventDefault();

   if (!shipmentData.zipCode || !shipmentData.weight || !shipmentData.declaredValue || !selectedCountry) {
      alert("Please fill in all required fields.");
      return;
   }

   const countryData = countries.find((c) => c.country === selectedCountry);
   if (!countryData) {
      alert("Invalid country selection.");
      return;
   }

   const weightCost = shipmentData.unit === "lbs"
      ? countryData.costPerLb * shipmentData.weight
      : countryData.costPerKg * shipmentData.weight;

   const totalCost = Math.max(weightCost, countryData.minPrice) + countryData.insurance;
   const taxes = shipmentData.declaredValue >= countryData.taxThreshold
      ? (countryData.taxRate / 100) * shipmentData.declaredValue
      : 0;

   const finalTotal = totalCost + taxes;

   const quoteData = {
      originZip: shipmentData.zipCode,
      destination: selectedCountry,
      weight: shipmentData.weight,
      declaredValue: shipmentData.declaredValue,
      transportCost: totalCost,
      taxes: taxes,
      total: finalTotal,
   };

   sessionStorage.setItem("quoteData", JSON.stringify(quoteData));

   router.push("/result");  // ✅ Redirects to results page
};  // <-- ❌ REMOVE this extra closing brace if it exists

// ✅ Set selectedCountry as empty initially

useEffect(() => {
   

   const fetchCountries = async () => {
      try {
         const response = await fetch("/api/admin/countries");
         if (!response.ok) throw new Error(`API Error: ${response.status}`);
         const data = await response.json();
         setCountries(data.countries);

         // ✅ If a country was passed in the URL, preselect it
         if (countryFromURL) {
            setSelectedCountry(countryFromURL);
            setShipmentData((prev) => ({
               ...prev,
               country: countryFromURL,  // ✅ Pre-fill with URL country
            }));
         } else {
            setSelectedCountry("");  // ✅ Otherwise, show "Select Country"
            setShipmentData((prev) => ({
               ...prev,
               country: "",  
            }));
         }
      } catch (error) {
         console.error("Failed to load countries:", error);
      }
   };

   fetchCountries();
}, []); 


console.log("Shipment Data:", shipmentData);



   const handleTabClick = (index: number) => {
      setActiveTab(index);
   };

   const handleTrackShipment = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!trackingNumber) {
         alert("Please enter a tracking number.");
         return;
      }

      // Simulated API call (Replace this with real API request)
      setTrackingResult(`Tracking information for: ${trackingNumber}`);
   };

   return (
      
      <div className={style ? "request_area-two" : "request_area"}>

         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="request__wrap">
                     <div className="request__nav">
                        <ul className={`nav nav-tabs ${style ? "request__nav-two" : ""}`} id="myTab">
                           {tab_title.map((tab, index) => (
                              <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                                 <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="request__tab-wrap">
                        <div className="tab-content" id="myTabContent">
                           
                           {/* Request a Quote Form */}

                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="request-tab-pane">
                              <form onSubmit={handleGetQuote} className="request__form">

                                 <span className="title">Shipment Data</span>
                                 <div className="row g-3">
                                    
                                    {/* Zip Code & Location */}
                                    <div className="col-lg-6 col-md-6 col-12">
                                       <div className="form-grp mb-3">
                                          <input  type="text"
   name="zipCode"
   placeholder="Zip Code origin*"
   required
   onChange={handleInputChange} />
                                       </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                       <div className="form-grp mb-3">
                                          <input type="text" placeholder="Location will appear here" disabled />
                                       </div>
                                    </div>

                                    {/* Select Country */}
                                    <div className="col-lg-6 col-md-6 col-12">
                                       <div className="form-grp select-grp mb-3">
                                       <select 
   name="country" 
   required 
   onChange={handleInputChange} 
   value={selectedCountry || ""}
>
   <option value="">Select Country</option>  {/* ✅ Always show first */}
   {countries.length > 0 && countries.map((country) => (
      <option key={country.id} value={country.country}>
         {country.country}
      </option>
   ))}
</select>



                                       </div>
                                    </div>

                                    {/* Weight & Lbs */}
                                    <div className="col-lg-12">
                                       <div className="row g-3 d-flex flex-wrap justify-content-between">
                                          <div className="col-lg-2 col-md-6 col-6">
                                             <div className="form-grp mb-3">
                                                <input type="number" name="weight" placeholder="Weight*" required
   onChange={handleInputChange} />
                                             </div>
                                          </div>
                                          <div className="col-lg-2 col-md-6 col-6">
                                             <div className="form-grp select-grp mb-3">
                                                <select name="unit" className="orderby" required
   onChange={handleInputChange}>
                                                   <option value="lbs">lbs</option>
                                                   <option value="kg">kg</option>
                                                </select>
                                             </div>
                                          </div>

                                          {/* Height, Width, Length */}
                                          <div className="col-lg-2 col-md-4 col-4">
                                             <div className="form-grp mb-3">
                                                <input type="number" name="height" placeholder="Height" required onChange={handleInputChange} />
                                             </div>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-4">
                                             <div className="form-grp mb-3">
                                                <input type="number" name="width" placeholder="Width" required onChange={handleInputChange} />
                                             </div>
                                          </div>
                                          <div className="col-lg-2 col-md-4 col-4">
                                             <div className="form-grp mb-3">
                                                <input type="number" name="length"  placeholder="Length" required onChange={handleInputChange} />
                                             </div>
                                          </div>

                                          {/* Inches Selection */}
                                          <div className="col-lg-2 col-md-12 col-12">
                                             <div className="form-grp select-grp mb-3">
                                                <select name="unit" className="orderby" required>
                                                   <option value="inches">Inches</option>
                                                   <option value="cm">Centimeters</option>
                                                </select>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Declared Value (Own Row) */}
                                    <div className="col-lg-12">
                                       <div className="form-grp mb-3">
                                          <input type="number" name="declaredValue" placeholder="Declared Value (USD)" required onChange={handleInputChange}/>
                                       </div>
                                    </div>

                                    {/* WhatsApp Number (Next Row) */}
                                    <div className="col-lg-12">
                                       <div className="form-grp mb-3">
                                          <input type="text" name="whatsapp" placeholder="WhatsApp Number (Optional)" onChange={handleInputChange} />
                                       </div>
                                    </div>

                                 </div>
                                 <button type="submit" className="btn">Request a Quote</button>
                              </form>
                             

                           </div>

                           {/* Track & Trace Form */}
                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="track-tab-pane">
                              <form onSubmit={handleTrackShipment} className="request__form">
                                 <span className="title">Track Your Shipment</span>
                                 <div className="row g-3">
                                    <div className="col-lg-12">
                                       <div className="form-grp mb-3">
                                          <input
                                             type="text"
                                             placeholder="Enter Tracking Number"
                                             value={trackingNumber}
                                             onChange={(e) => setTrackingNumber(e.target.value)}
                                             required
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <button type="submit" className="btn">Track & Trace</button>
                              </form>

                              {/* Display Tracking Result */}
                              {trackingResult && (
                                 <div className="tracking-result">
                                    <p>{trackingResult}</p>
                                 </div>
                              )}
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {style && <div className="request__shape">
            <Image src={request_shape} alt="shape" data-aos="fade-down" data-aos-delay="400" />
         </div>}
      </div>
   );
};

export default RequestArea;
