import { NextResponse } from "next/server";
import { connectDB } from "@/app/db/db.config";
import Service from "@/app/models/service";

export async function GET() {
  await connectDB();  // Ensure DB connection
  
  try {
    const services = await Service.find({});
    return NextResponse.json(services);  // Return services data as JSON
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
