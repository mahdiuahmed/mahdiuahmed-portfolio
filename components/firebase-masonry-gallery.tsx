"use client";

import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  type FirebaseImage,
  getImagesFromFirebase,
} from "@/lib/firebase-storage";

interface FirebaseMasonryGalleryProps {
  bucketPath?: string;
  className?: string;
  gap?: number;
  initialLimit?: number;
  loadMoreCount?: number;
}

export function FirebaseMasonryGallery({
  bucketPath = "",
  className,
  gap = 8,
  initialLimit = 12,
  loadMoreCount = 8,
}: FirebaseMasonryGalleryProps) {
  const [allImages, setAllImages] = useState<FirebaseImage[]>([]);
  const [visibleImages, setVisibleImages] = useState<FirebaseImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<FirebaseImage | null>(
    null
  );
  const [columns, setColumns] = useState<number>(4);
  const [hasMore, setHasMore] = useState(true);

  // Fetch images from Firebase
  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        const fetchedImages = await getImagesFromFirebase(bucketPath);
        setAllImages(fetchedImages);

        // Set initial visible images
        const initial = fetchedImages.slice(0, initialLimit);
        setVisibleImages(initial);

        // Check if there are more images to load
        setHasMore(fetchedImages.length > initialLimit);
      } catch (err) {
        console.error("Error loading images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [bucketPath, initialLimit]);

  // Load more images
  const loadMoreImages = () => {
    setLoadingMore(true);

    // Simulate loading delay for better UX
    setTimeout(() => {
      const currentLength = visibleImages.length;
      const nextImages = allImages.slice(
        currentLength,
        currentLength + loadMoreCount
      );
      setVisibleImages([...visibleImages, ...nextImages]);

      // Check if there are more images to load
      setHasMore(currentLength + nextImages.length < allImages.length);
      setLoadingMore(false);
    }, 500);
  };

  // Adjust columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 768) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (image: FirebaseImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Distribute images across columns optimally
  const getOptimizedColumns = () => {
    // Create column arrays
    const cols: FirebaseImage[][] = Array.from({ length: columns }, () => []);

    // Calculate height of each column
    const colHeights = Array(columns).fill(0);

    // Distribute images to shortest column
    visibleImages.forEach((image) => {
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestColIndex].push(image);

      // Update column height
      const aspectRatio = image.width / image.height;
      const imageHeight = 1 / aspectRatio;
      colHeights[shortestColIndex] += imageHeight;
    });

    return cols;
  };

  // Create skeleton columns for loading state
  const getSkeletonColumns = () => {
    const cols: number[][] = Array.from({ length: columns }, () => []);

    // Generate random heights for skeleton items
    for (let i = 0; i < initialLimit; i++) {
      const columnIndex = i % columns;
      // Random height between 150 and 350px
      const height = Math.floor(Math.random() * 200) + 150;
      cols[columnIndex].push(height);
    }

    return cols;
  };

  const imageColumns = getOptimizedColumns();
  const skeletonColumns = getSkeletonColumns();

  // Loading skeleton state
  if (loading) {
    return (
      <div className={cn("relative", className)}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{ gap: `${gap}px` }}
        >
          {skeletonColumns.map((column, columnIndex) => (
            <div
              key={`skeleton-column-${columnIndex}`}
              className="flex flex-col"
              style={{ gap: `${gap}px` }}
            >
              {column.map((height, index) => (
                <Skeleton
                  key={`skeleton-${columnIndex}-${index}`}
                  className="w-full rounded-md"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="mt-4"
        >
          Try Again
        </Button>
      </div>
    );
  }

  if (visibleImages.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No images found in this gallery.</p>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Masonry Gallery Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap: `${gap}px` }}
      >
        {imageColumns.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="flex flex-col"
            style={{ gap: `${gap}px` }}
          >
            {column.map((image) => (
              <div
                key={image.id}
                className="relative cursor-pointer group rounded-md"
                onClick={() => openLightbox(image)}
              >
                {/* Remove the aspectRatio style and use natural dimensions */}
                <div className="w-full" style={{ position: "relative" }}>
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <Button
            onClick={loadMoreImages}
            disabled={loadingMore}
            className="px-8"
          >
            {loadingMore ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Load More"
            )}
          </Button>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative w-full h-screen  overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
