import React from "react";

const pricingData = [
  {
    id: 1,
    logo: "/usps-logo.png", // Replace with the correct image path
    price: "$285",
    weight: "20 lb a Colombia sin impuestos",
  },
  {
    id: 2,
    logo: "/letsbox-logo.png", // Replace with the correct image path
    price: "$55",
    weight: "20 lb a Colombia incluye transporte e impuestos",
  },
  {
    id: 3,
    logo: "/fedex-logo.png", // Replace with the correct image path
    price: "$165",
    weight: "20 lb a Colombia sin impuestos",
  },
];

export default function PricingComparison() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-purple-900 text-white py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">Letsbox.it es hasta 60% más económico</h2>
      <p className="text-lg mb-8">Comparación de tarifas</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
        {pricingData.map((item) => (
          <div key={item.id} className="bg-white text-black rounded-2xl shadow-lg p-6 text-center">
            <img src={item.logo} alt="Company Logo" className="mx-auto h-16 mb-4" />
            <h3 className="text-2xl font-semibold">{item.price}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.weight}</p>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
        Cotiza Ahora
      </button>
    </div>
  );
}
