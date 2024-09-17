import { connectDB } from "@/app/db/db.config";
import Service from "@/app/models/service";

import { NextResponse, NextRequest } from "next/server";

// Force dynamic rendering for API routes
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await connectDB();

  try {
    const services = await Service.find({});

    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
