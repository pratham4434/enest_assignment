import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/app/db/db.config";
import Service from "@/app/models/service";

// Force dynamic rendering for API routes
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  await connectDB();

  // Use the request object to get query parameters, if needed
  const url = new URL(request.url);
  const serviceId = url.searchParams.get("serviceId");

  try {
    const query = serviceId ? { _id: serviceId } : {};
    const services = await Service.find(query);

    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
