import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
      const { senderZip, recipientZip, weight, unit } = await req.json();

      const fedExRate = await fetchFedExRate({ senderZip, recipientZip, weight, unit });

      return NextResponse.json({ fedExPrice: fedExRate }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: "Failed to fetch FedEx rate" }, { status: 500 });
   }
}

async function fetchFedExRate({ senderZip, recipientZip, weight, unit }) {
   const fedExRequest = {
      accountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
      requestedShipment: {
         shipper: {
            address: { postalCode: senderZip, countryCode: "US" },
         },
         recipient: {
            address: { postalCode: recipientZip, countryCode: "CO" }, // Destination country
         },
         totalWeight: { units: unit, value: weight },
         serviceType: "FEDEX_EXPRESS_SAVER",
         packagingType: "YOUR_PACKAGING",
      },
   };

   // Simulate a FedEx API response (replace with actual API call)
   return new Promise((resolve) => {
      setTimeout(() => resolve((Math.random() * 50 + 20).toFixed(2)), 2000);
   });
}
