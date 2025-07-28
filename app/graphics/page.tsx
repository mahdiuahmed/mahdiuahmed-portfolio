import { FirebaseMasonryGallery } from "@/components/firebase-masonry-gallery";
import React from "react";

export default function page() {
  return (
    <main className="mt-36  flex flex-col items-center justify-center px-8 max-sm:px-4">
      <section className="flex flex-col items-center justify-between  max-w-screen-xl px-8">
        <h1 className=" text-center font-bebas text-[140px]/none underline decoration-lime-300">
          Graphics Projects
        </h1>
        <h3 className="mb-12 text-justify max-w-screen-md tracking-tighter max-sm:text-lg ">
          A collection of my graphic design work, illustrations, and visual
          projects. Click on any image to view it in detail.
        </h3>
        <p className="text-muted-foreground mb-8 max-w-2xl"></p>

        {/* Use your bucket path here - leave empty for root bucket */}
        <FirebaseMasonryGallery
          bucketPath=""
          gap={14}
          initialLimit={8}
          loadMoreCount={8}
        />
      </section>
    </main>
  );
}
