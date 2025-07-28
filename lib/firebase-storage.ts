import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "./firebase";

export interface FirebaseImage {
  id: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  contentType: string;
  createdAt: string;
  fullPath: string;
}

/**
 * Fetches all images from Firebase Storage
 * @param path The path in Firebase Storage (can be root "" or any path)
 * @returns Promise with array of image objects containing metadata and download URLs
 */
export async function getImagesFromFirebase(
  path = ""
): Promise<FirebaseImage[]> {
  try {
    // Create a reference to the specified path
    const storageRef = ref(storage, path);

    // List all items in the path
    const result = await listAll(storageRef);

    // Get download URLs and metadata for each item
    const imagePromises = result.items.map(async (itemRef) => {
      // Skip non-image files (optional)
      if (!itemRef.name.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i)) {
        return null;
      }

      const url = await getDownloadURL(itemRef);
      const metadata = await getMetadata(itemRef);

      // Extract filename without extension to use as title
      const filename = itemRef.name;
      const title =
        filename.substring(0, filename.lastIndexOf(".")) || filename;

      // Format title by replacing hyphens and underscores with spaces and capitalizing
      const formattedTitle = title
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      // Default dimensions if not available in metadata
      const width = metadata.customMetadata?.width
        ? Number.parseInt(metadata.customMetadata.width)
        : 1200;
      const height = metadata.customMetadata?.height
        ? Number.parseInt(metadata.customMetadata.height)
        : 800;

      return {
        id: itemRef.name,
        title: metadata.customMetadata?.title || formattedTitle,
        src: url,
        alt: metadata.customMetadata?.alt || formattedTitle,
        width: width,
        height: height,
        contentType: metadata.contentType || "image/jpeg",
        createdAt: metadata.timeCreated,
        fullPath: metadata.fullPath,
      };
    });

    // Filter out any null values (non-image files)
    const results = await Promise.all(imagePromises);
    return results.filter((item): item is FirebaseImage => item !== null);
  } catch (error) {
    console.error("Error fetching images from Firebase:", error);
    return [];
  }
}
