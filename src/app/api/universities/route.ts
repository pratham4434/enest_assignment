// src/app/api/universities/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/app/db/db.config";
import University from "@/app/models/universityModel";

export async function GET() {
  await connectDB();  // Ensure DB connection
  
  try {
    const universities = await University.find({});
    return NextResponse.json(universities);  // Return universities data as JSON
  } catch (error) {
    console.error("Error fetching universities:", error);
    return NextResponse.json(
      { error: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
