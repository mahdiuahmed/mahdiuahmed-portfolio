// lib/getImagesFromFirebase.ts
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "./firebase"; // ✅ must be safe for server-side use

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
 * Server-side safe function to fetch images from Firebase Storage.
 * Use inside Next.js server components or route handlers for prefetching.
 */
export async function getImagesFromFirebase(
  path = ""
): Promise<FirebaseImage[]> {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);

    const imagePromises = result.items.map(async (itemRef) => {
      // Skip non-image files
      if (!itemRef.name.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i)) {
        return null;
      }

      const [url, metadata] = await Promise.all([
        getDownloadURL(itemRef),
        getMetadata(itemRef),
      ]);

      const filename = itemRef.name;
      const rawTitle =
        filename.substring(0, filename.lastIndexOf(".")) || filename;

      const formattedTitle = rawTitle
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      // Width & height fallbacks (avoid CLS)
      const width = metadata.customMetadata?.width
        ? Number(metadata.customMetadata.width)
        : 1200;
      const height = metadata.customMetadata?.height
        ? Number(metadata.customMetadata.height)
        : 800;

      return {
        id: itemRef.name,
        title: metadata.customMetadata?.title || formattedTitle,
        src: url,
        alt: metadata.customMetadata?.alt || formattedTitle,
        width,
        height,
        contentType: metadata.contentType || "image/jpeg",
        createdAt: metadata.timeCreated,
        fullPath: metadata.fullPath,
      };
    });

    const results = await Promise.all(imagePromises);
    return results.filter((item): item is FirebaseImage => item !== null);
  } catch (error) {
    console.error("❌ Error fetching images from Firebase:", error);
    return [];
  }
}
