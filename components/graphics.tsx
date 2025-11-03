import { FirebaseMasonryGallery } from "@/components/firebase-masonry-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, Palette, Sparkles, Eye } from "lucide-react";
import FadeContent from "./FadeContent/FadeContent";
import { getImagesFromFirebase } from "@/lib/firebase-storage";

export default async function GraphicsPage() {
  const images = await getImagesFromFirebase("");
  // Randomize the images array
  const randomizedImages = images.sort(() => Math.random() - 0.5);
  return (
    <main id="graphics" className=" scroll-mt-32">
      {/* Hero Section */}
      <FadeContent
        blur={true}
        duration={900}
        easing="ease-out"
        initialOpacity={0}
      >
        <section className=" ">
          <div className="max-w-7xl mx-auto">
            {/* Header Content */}
            <div className="text-center space-y-4">
              {/* Badge */}
              {/* <div className="flex justify-center">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                <Palette className="w-4 h-4 mr-2" />
                Creative Portfolio
              </Badge>
            </div> */}

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                  Graphics
                  <span className="block text-primary">Projects</span>
                </h1>

                {/* Decorative line */}
                {/* <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full"></div>
              </div> */}
              </div>

              {/* Description */}
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-muted-foreground tracking-tighter">
                  A curated collection of my graphic design work, illustrations,
                  and visual projects. Each piece represents a unique creative
                  journey and exploration of visual storytelling.
                </p>

                {/* Stats Cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Card className="border-0 bg-muted/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-muted/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">HD</div>
                    <div className="text-sm text-muted-foreground">Quality</div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-muted/50 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Palette className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">Multi</div>
                    <div className="text-sm text-muted-foreground">Styles</div>
                  </CardContent>
                </Card>
              </div> */}
              </div>

              {/* CTA */}
              {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="ghost"
                size="sm"
                className="group"
                onClick={() => {
                  document.getElementById("gallery")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Explore Gallery
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div> */}
            </div>
          </div>
        </section>
      </FadeContent>
      {/* Gallery Section */}
      <section id="gallery" className="pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          {/* <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any image to view it in detail and explore the creative
              process behind each piece.
            </p>
            <Separator className="w-20 mx-auto mt-6" />
          </div> */}

          {/* Gallery Container */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 shadow-md bg-background rounded-lg border rounded-3xl -z-10"></div>

            {/* Gallery */}
            <div className="p-4 sm:p-6 lg:p-8">
              <FirebaseMasonryGallery
                images={images}
                gap={24}
                initialLimit={8}
                loadMoreCount={12}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">Like What You See?</h3>
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next creative project. I'm always excited
            to work on new challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[140px]">
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[140px] bg-transparent"
            >
              View Resume
            </Button>
          </div>
        </div>
      </section> */}
    </main>
  );
}
