import { NextResponse } from "next/server";

const mockQuotes = [
  { id: "1", zipCode: "33172", weight: 5, price: 20.5, status: "Pending" },
  { id: "2", zipCode: "90001", weight: 10, price: 35.0, status: "Approved" },
];

export async function GET() {
  return NextResponse.json(mockQuotes);
}
