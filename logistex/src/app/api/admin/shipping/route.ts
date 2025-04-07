import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      senderName,
      senderPhone,
      senderAddress,
      senderZip,
      senderCountry,
      weight,
      unit,
    } = await req.json();

    const shipmentData = {
      accountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
      requestedShipment: {
        shipper: {
          contact: {
            personName: senderName,
            phoneNumber: senderPhone,
          },
          address: {
            streetLines: [senderAddress],
            postalCode: senderZip,
            countryCode: senderCountry,
          },
        },
        recipient: {
          contact: {
            personName: "Gib Traders",
            phoneNumber: "305-123-4567",
          },
          address: {
            streetLines: ["2120 NW 96th Ave"],
            city: "Doral",
            stateOrProvinceCode: "FL",
            postalCode: "33172",
            countryCode: "US",
          },
        },
        totalWeight: { units: unit, value: weight },
      },
    };

    // Dummy response for now
    const rates = [
      {
        service: "FEDEX_GROUND",
        cost: 14.99,
        estimatedDelivery: "3 business days",
      },
      {
        service: "FEDEX_EXPRESS_SAVER",
        cost: 29.99,
        estimatedDelivery: "2 business days",
      },
    ];

    return NextResponse.json({ rates, shipmentData }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
