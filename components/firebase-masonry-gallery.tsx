"use client";

import { useState, useEffect } from "react";
import {
  X,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeContent from "./FadeContent/FadeContent";

interface FirebaseImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  name?: string;
}

interface FirebaseMasonryGalleryProps {
  images: FirebaseImage[];
  className?: string;
  gap?: number;
  initialLimit?: number;
  loadMoreCount?: number;
}

export function FirebaseMasonryGallery({
  images,
  className,
  gap = 8,
  initialLimit = 12,
  loadMoreCount = 8,
}: FirebaseMasonryGalleryProps) {
  const [visibleImages, setVisibleImages] = useState<FirebaseImage[]>(
    images.slice(0, initialLimit)
  );
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [columns, setColumns] = useState(4);
  const [hasMore, setHasMore] = useState(images.length > initialLimit);
  const [lightboxZoom, setLightboxZoom] = useState(1);

  // Load more images
  const loadMoreImages = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const currentLength = visibleImages.length;
      const nextImages = images.slice(
        currentLength,
        currentLength + loadMoreCount
      );
      setVisibleImages([...visibleImages, ...nextImages]);
      setHasMore(currentLength + nextImages.length < images.length);
      setLoadingMore(false);
    }, 300);
  };

  // Responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lightbox functions
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxZoom(1);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImageIndex === null) return;
    const newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % visibleImages.length
        : (selectedImageIndex - 1 + visibleImages.length) %
          visibleImages.length;
    setSelectedImageIndex(newIndex);
    setLightboxZoom(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        case "+":
        case "=":
          setLightboxZoom((prev) => Math.min(prev * 1.2, 3));
          break;
        case "-":
          setLightboxZoom((prev) => Math.max(prev / 1.2, 0.5));
          break;
        case "0":
          setLightboxZoom(1);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Zoom functions
  const handleZoomIn = () => setLightboxZoom((prev) => Math.min(prev * 1.2, 3));
  const handleZoomOut = () =>
    setLightboxZoom((prev) => Math.max(prev / 1.2, 0.5));
  const handleResetZoom = () => setLightboxZoom(1);

  // Masonry layout
  const getOptimizedColumns = () => {
    const cols: FirebaseImage[][] = Array.from({ length: columns }, () => []);
    const colHeights = Array(columns).fill(0);

    visibleImages.forEach((image) => {
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestColIndex].push(image);
      colHeights[shortestColIndex] += image.height / image.width;
    });

    return cols;
  };

  const imageColumns = getOptimizedColumns();
  const selectedImage =
    selectedImageIndex !== null ? visibleImages[selectedImageIndex] : null;

  if (visibleImages.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No images found.</p>
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Masonry Grid */}
      <FadeContent
        blur={true}
        duration={1300}
        easing="ease-out"
        initialOpacity={0}
      >
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
              {column.map((image) => {
                const globalIndex = visibleImages.findIndex(
                  (img) => img.id === image.id
                );

                return (
                  <div
                    key={image.id}
                    className="relative cursor-pointer group rounded-lg overflow-hidden bg-muted"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Badge
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        View
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={loadMoreImages}
              disabled={loadingMore}
              variant="outline"
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
      </FadeContent>

      {/* Lightbox */}
      {selectedImage && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {selectedImageIndex + 1} of {visibleImages.length}
              </Badge>
              {selectedImage.name && (
                <Badge variant="outline" className="text-white border-white/30">
                  {selectedImage.name}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              {/* <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
              >
                <ZoomIn className="h-4 w-4" />
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Centered Image */}
          <div
            className="relative flex items-center justify-center w-full h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-center"
              style={{
                transform: `scale(${lightboxZoom})`,
                transformOrigin: "center",
                transition: "transform 0.2s ease",
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Instructions */}
          {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <Badge variant="secondary" className="text-xs opacity-75">
              Use arrow keys to navigate • ESC to close • +/- to zoom
            </Badge>
          </div> */}
        </div>
      )}
    </div>
  );
}
