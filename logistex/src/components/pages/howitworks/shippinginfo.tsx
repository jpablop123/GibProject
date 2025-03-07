import React from "react";

const ShippingInfo = () => {
  const features = [
    {
      icon: "📦",
      title: "Entrega a domicilio",
      description: "Todas las entregas en LatAm son a domicilio.",
    },
    {
      icon: "📍",
      title: "Puntos de UPS",
      description: "30,000 puntos de UPS donde puedes dejar tu envío.",
    },
    {
      icon: "🖨️",
      title: "Sin impresora ni caja",
      description: "En UPS te imprimen la guía y te venden una caja.",
    },
    {
      icon: "✅",
      title: "Recogida en casa",
      description: "Recogida de envíos en tu casa disponible.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16 flex flex-col items-center">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        La Manera Más Fácil De Enviar
      </h2>

      {/* Grid layout for features - Always 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full"
          >
            {/* Icon */}
            <div className="flex items-center justify-center bg-purple-100 text-purple-700 w-16 h-16 rounded-full shadow-md text-3xl mb-4">
              {feature.icon}
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Wrapping in another container with padding
const Container = () => {
  return (
    <div className="pt-16 pb-20 bg-white">
      <ShippingInfo />
    </div>
  );
};

export default Container;
