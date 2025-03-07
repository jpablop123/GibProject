import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
      const { quoteData } = await req.json();

      const labelData = await createFedExLabel(quoteData);

      return NextResponse.json({ trackingNumber: labelData.trackingNumber }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: "Failed to generate shipping label" }, { status: 500 });
   }
}

async function createFedExLabel(quoteData) {
   const shipment = {
      accountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
      requestedShipment: {
         shipper: {
            contact: { personName: quoteData.senderName, phoneNumber: quoteData.senderPhone },
            address: { streetLines: [quoteData.senderAddress], postalCode: quoteData.senderZip, countryCode: quoteData.senderCountry },
         },
         recipient: {
            contact: { personName: "Gib Traders", phoneNumber: "305-123-4567" },
            address: { streetLines: ["2120 NW 96th Ave"], city: "Doral", stateOrProvinceCode: "FL", postalCode: "33172", countryCode: "US" },
         },
         totalWeight: { units: "LB", value: quoteData.weight },
      },
   };

   // Simulate a FedEx label response (replace with actual API call)
   return new Promise((resolve) => {
      setTimeout(() => resolve({ trackingNumber: "1234567890FEDEX" }), 2000);
   });
}
