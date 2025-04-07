import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      nombre,
      correo,
      whatsapp,
      direccionOrigen,
      paisOrigen,
      ciudadOrigen,
      codigoPostal,
      paisDestino,
      ciudadDestino,
      peso,
      unidadPeso,
      alto,
      ancho,
      largo,
      unidadDimension,
      valorDeclarado,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,  // tu correo (desde .env)
        pass: process.env.EMAIL_PASS,  // contraseña de aplicación
      },
    });

    const mailOptions = {
      from: correo,
      to: process.env.EMAIL_USER, // también puedes poner tu correo directamente
      subject: "Nueva cotización de envío - Gib Traders",
      text: `
👤 Nombre: ${nombre}
📧 Correo: ${correo}
📱 WhatsApp: ${whatsapp}

📦 Dirección de origen:
Dirección: ${direccionOrigen}
Ciudad: ${ciudadOrigen}
País: ${paisOrigen}
Código postal: ${codigoPostal}

📍 Destino:
Ciudad: ${ciudadDestino}
País: ${paisDestino}

📐 Dimensiones:
Peso: ${peso} ${unidadPeso}
Tamaño: ${alto} x ${ancho} x ${largo} ${unidadDimension}
Valor declarado: $${valorDeclarado} USD
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Correo enviado con éxito" }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json({ message: "Error al enviar correo" }, { status: 500 });
  }
}
