import { NextResponse } from "next/server";

interface Country {
   id: string;
   country: string;
   costPerLb: number;
   costPerKg: number;
   minPrice: number;
   insurance: number;
   taxThreshold: number;
   taxRate: number;
}

// Temporary In-Memory Database (Replace with actual DB)
let countryPricing: Country[] = [
   { id: "1", country: "Colombia", costPerLb: 1.2, costPerKg: 2.5, minPrice: 12, insurance: 3, taxThreshold: 50, taxRate: 10 },
   { id: "2", country: "Mexico", costPerLb: 1.5, costPerKg: 3.0, minPrice: 15, insurance: 4, taxThreshold: 40, taxRate: 12 },
];

// ✅ **DELETE: Remove a country**
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
   try {
      console.log("Received DELETE request for country ID:", params.id);

      const countryIndex = countryPricing.findIndex((c) => c.id === params.id);

      if (countryIndex === -1) {
         return NextResponse.json({ error: "Country not found" }, { status: 404 });
      }

      // ✅ Remove the country from the array
      countryPricing.splice(countryIndex, 1);

      return NextResponse.json({ message: "Country deleted successfully", countries: countryPricing }, { status: 200 });
   } catch (error) {
      console.error("Error deleting country:", error);
      return NextResponse.json({ error: "Failed to delete country" }, { status: 400 });
   }
}
