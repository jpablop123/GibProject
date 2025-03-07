import { NextResponse } from "next/server";

// Mock Data (Replace with database logic later)
let mockQuotes = [
   { id: "1", zipCode: "33172", weight: 5, price: 20.5, status: "Pending" },
   { id: "2", zipCode: "90001", weight: 10, price: 35.0, status: "Approved" },
];

// **GET Request - Fetch a Single Quote by ID**
export async function GET(req: Request, { params }: { params: { id: string } }) {
   const quote = mockQuotes.find((q) => q.id === params.id);
   if (!quote) return NextResponse.json({ error: "Quote not found" }, { status: 404 });

   return NextResponse.json(quote);
}

// **PUT Request - Update Quote Status**
export async function PUT(req: Request, { params }: { params: { id: string } }) {
   try {
      const { status } = await req.json(); // Get new status from request body
      const quoteIndex = mockQuotes.findIndex((q) => q.id === params.id);

      if (quoteIndex === -1) {
         return NextResponse.json({ error: "Quote not found" }, { status: 404 });
      }

      // Update quote status
      mockQuotes[quoteIndex].status = status;

      return NextResponse.json({ message: "Quote updated successfully", quote: mockQuotes[quoteIndex] });
   } catch (error) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
   }
}
