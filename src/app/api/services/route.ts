import { NextResponse } from 'next/server';
import { connectDB } from '@/app/db/db.config';
import Service from '@/app/models/service';

export async function GET() {
  await connectDB(); 

  try {
    const services = await Service.find({});
    console.log("Fetched services:", services); 
    return NextResponse.json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
