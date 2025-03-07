import { NextResponse } from "next/server";
import { getFedExRates } from "@/utils/fedex";

export async function POST(req: Request) {
   try {
      const { senderName, senderPhone, senderAddress, senderZip, senderCountry, weight, unit } = await req.json();

      const shipmentData = {
         accountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
         requestedShipment: {
            shipper: { // ✅ Client is the sender (shipper)
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
            recipient: { // ✅ Gib Traders (Miami warehouse) is the recipient
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

      const rates = await getFedExRates(shipmentData);
      return NextResponse.json({ rates }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
