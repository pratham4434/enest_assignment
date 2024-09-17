import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/app/db/db.config";
import University from "@/app/models/universityModel";

// Set dynamic behavior
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await connectDB();

  // Extract query parameters from the request URL
  const url = new URL(request.url);
  const country = url.searchParams.get("country");

  try {
    const query: { country?: string } = {};

    if (country) {
      query.country = country;
    }

    // Fetch only 8 universities sorted by ranking
    const universities = await University.find(query)
      .sort({ ranking: 1 })
      .limit(8);

    return NextResponse.json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
