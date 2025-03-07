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

// ✅ **Static Countries Stored in DB**
let countryPricing: Country[] = [
   { id: "1", country: "Colombia", costPerLb: 1.2, costPerKg: 2.5, minPrice: 12, insurance: 3, taxThreshold: 50, taxRate: 10 },
   { id: "2", country: "Mexico", costPerLb: 1.5, costPerKg: 3.0, minPrice: 15, insurance: 4, taxThreshold: 40, taxRate: 12 },
   { id: "3", country: "peru", costPerLb: 1.5, costPerKg: 3.0, minPrice: 15, insurance: 4, taxThreshold: 40, taxRate: 12 },
   { id: "4", country: "italia", costPerLb: 1.5, costPerKg: 3.0, minPrice: 15, insurance: 4, taxThreshold: 40, taxRate: 12 },
];

// ✅ **GET: Fetch all countries**
export async function GET() {
   return NextResponse.json({ countries: countryPricing }, { status: 200 });
}

// ✅ **PUT: Update country shipping details**
export async function PUT(req: Request) {
   try {
      const { id, ...updatedData } = await req.json();
      const countryIndex = countryPricing.findIndex((c) => c.id === id);
      
      if (countryIndex === -1) {
         return NextResponse.json({ error: "Country not found" }, { status: 404 });
      }

      countryPricing[countryIndex] = { ...countryPricing[countryIndex], ...updatedData };
      return NextResponse.json({ countries: countryPricing }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: "Failed to update country" }, { status: 400 });
   }
}
