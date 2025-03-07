"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import Next.js router
import about_1 from "@/assets/img/images/inner_about_img01.jpg";
import about_2 from "@/assets/img/images/inner_about_img02.jpg";

const AboutArea = () => { 
   const [selectedCountry, setSelectedCountry] = useState("");
   const [countries, setCountries] = useState<string[]>([]); // ✅ Store fetched countries
   const router = useRouter(); // ✅ Initialize Next.js router

   // ✅ Fetch countries from API when component mounts
   useEffect(() => {
      const fetchCountries = async () => {
         try {
            const response = await fetch("/api/admin/countries"); // ✅ Fetch country list
            if (!response.ok) throw new Error("Failed to fetch countries");
            const data = await response.json();
            setCountries(data.countries.map((c: { country: string }) => c.country)); // ✅ Extract country names
         } catch (error) {
            console.error("Error fetching countries:", error);
         }
      };

      fetchCountries();
   }, []); // ✅ Runs only once when component mounts

   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCountry(event.target.value);
   };

   const handleQuoteRequest = () => {
      if (!selectedCountry) {
         alert("Please select a country before proceeding.");
         return;
      }

      // ✅ Redirect to "/cotizar" with selected country in the URL
      router.push(`/cotizar?country=${selectedCountry}`);
   };

   return (
      <section className="about__area-two section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center gutter-24">
               <div className="col-lg-6 col-md-9">
                  <div className="about__img-two">
                     <Image src={about_1} alt="img" data-aos="fade-right" data-aos-delay="400" />
                     <Image src={about_2} alt="img" data-aos="fade-up" data-aos-delay="600" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about__content-two">
                     <div className="section__title section__title-two mb-20">
                        <span className="sub-title">About Logistics Company</span>
                        <h2 className="title">Reliable Logistic & Transport Solutions Saves Your Time!</h2>
                     </div>
                     <p className="info-one">adipiscing elit. Aliquam vulputate, tortor nec com ultri viverra Suspen disse faucibus sed dolor eget Sed id urna.</p>
                     <div className="about__content-inner">
                        <div className="about__list-box about__list-box-two">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check"></i>Quality Control System</li>
                              <li><i className="flaticon-check"></i>100% Satisfaction Guarantee</li>
                              <li><i className="flaticon-check"></i>Professional and Qualified</li>
                              <li><i className="flaticon-check"></i>Safe, Reliable And Express</li>
                           </ul>
                        </div>
                        <div className="about__clients-box">
                           <span>Flexible, Improved & Accelerated Solutions!</span>
                           <div className="counter__item">
                              <div className="counter__icon">
                                 <i className="flaticon-planet-earth"></i>
                              </div>
                              <div className="counter__content">
                                 <select className="country-select" onChange={handleSelectChange} value={selectedCountry}>
                                    <option value="">Select Country</option>  {/* ✅ Always show first */}
                                    {countries.length > 0 ? (
                                       countries.map((country) => (
                                          <option key={country} value={country}>
                                             {country.charAt(0).toUpperCase() + country.slice(1)} {/* Capitalize first letter */}
                                          </option>
                                       ))
                                    ) : (
                                       <option disabled>Loading countries...</option> // ✅ Show while fetching
                                    )}
                                 </select>
                                 <button className="cotizar-button" onClick={handleQuoteRequest}>Cotizar</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <style jsx>{`
            .cotizar-button {
               background-color: #ff6600;
               color: white;
               border: none;
               padding: 8px 15px;
               font-size: 10px;
               font-weight: bold;
               border-radius: 7px;
               cursor: pointer;
               transition: all 0.3s ease;
               display: inline-block;
               text-align: center;
               margin-top: 10px;
               width: 80%;
               max-width: 200px;
            }

            .cotizar-button:hover {
               background-color: #e65c00;
            }

            .cotizar-button:active {
               background-color: #cc5200;
               transform: scale(0.98);
            }

            @media (max-width: 768px) {
               .cotizar-button {
                  width: 100%;
                  font-size: 14px;
                  padding: 10px;
               }
            }
         `}</style>
      </section>
   );
};

export default AboutArea;
