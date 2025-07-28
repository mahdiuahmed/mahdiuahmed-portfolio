import { NextResponse } from "next/server";
import { getImagesFromFirebase } from "@/lib/firebase-storage";

export async function GET(request: Request) {
  try {
    // Get the folder path from query parameters
    const { searchParams } = new URL(request.url);
    const folderPath = searchParams.get("folder") || "gallery/";

    // Fetch images from Firebase
    const images = await getImagesFromFirebase(folderPath);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
