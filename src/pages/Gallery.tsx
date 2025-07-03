import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "../assets/hero-manufacturing.jpg";
import gearImage from "../assets/gear-manufacturing.jpg";
import spmImage from "../assets/spm-automation.jpg";
import pressImage from "../assets/press-shop.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "facility", name: "Manufacturing Unit" },
    { id: "products", name: "Products" },
    { id: "automation", name: "AI & Automation" },
    { id: "equipment", name: "Equipment" },
  ];

  const galleryImages = [
    {
      id: 1,
      category: "facility",
      src: heroImage,
      title: "Main Manufacturing Floor",
      description: "State-of-the-art production facility with advanced machinery",
    },
    {
      id: 2,
      category: "products", 
      src: gearImage,
      title: "Precision Gear Shafts",
      description: "High-quality automotive gear components",
    },
    {
      id: 3,
      category: "automation",
      src: spmImage,
      title: "SPM Automation Line",
      description: "Robotic automation system for enhanced productivity",
    },
    {
      id: 4,
      category: "equipment",
      src: pressImage,
      title: "300 Tonne Press Machine",
      description: "Heavy-duty stamping press for large components",
    },
    {
      id: 5,
      category: "facility",
      src: heroImage,
      title: "Quality Control Department",
      description: "AI-driven quality inspection and validation",
    },
    {
      id: 6,
      category: "products",
      src: gearImage,
      title: "Injection Molded Components",
      description: "Precision automotive interior components",
    },
    {
      id: 7,
      category: "automation",
      src: spmImage,
      title: "Robotic Welding Station",
      description: "Automated welding for consistent quality",
    },
    {
      id: 8,
      category: "equipment",
      src: pressImage,
      title: "CNC Machining Center",
      description: "High-precision CNC for complex geometries",
    },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-steel-dark to-machine-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-200">
              Take a visual journey through our state-of-the-art manufacturing facility and precision products
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/50 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image.src)}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-xs text-gray-200">{image.description}</p>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 right-2 text-xs bg-background/90 text-foreground"
                  >
                    {categories.find(c => c.id === image.category)?.name}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain"
            />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={closeLightbox}
            >
              ×
            </Button>
          </div>
        </div>
      )}

      {/* Facility Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Facility Highlights</h2>
            <p className="text-xl text-muted-foreground">
              Modern infrastructure supporting world-class manufacturing capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">50,000</div>
                <div className="text-sm font-semibold mb-1">Sq. Ft.</div>
                <div className="text-xs text-muted-foreground">Production Area</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-semibold mb-1">Press Machines</div>
                <div className="text-xs text-muted-foreground">Various tonnage capacity</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm font-semibold mb-1">Robotic Systems</div>
                <div className="text-xs text-muted-foreground">Automated operations</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-semibold mb-1">Quality Tested</div>
                <div className="text-xs text-muted-foreground">AI-driven inspection</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Experience Our Facility</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a visit to see our manufacturing capabilities firsthand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Factory Visit
            </Button>
            <Button size="lg" variant="outline">
              Request Virtual Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;