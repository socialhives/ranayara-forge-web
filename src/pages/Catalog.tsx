import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gearImage from "../assets/gear-manufacturing.jpg";
import spmImage from "../assets/spm-automation.jpg";
import pressImage from "../assets/press-shop.jpg";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "tools", name: "Tools, Dies & Moulds" },
    { id: "gears", name: "Gear Shafts" },
    { id: "spm", name: "SPM Machines" },
    { id: "sheet-metal", name: "Sheet Metal" },
    { id: "injection", name: "Injection Molded" },
    { id: "welded", name: "Welded Assemblies" },
  ];

  const products = [
    {
      id: 1,
      category: "tools",
      name: "Precision Progressive Dies",
      description: "High-precision progressive dies for automotive stamping applications",
      image: pressImage,
      specifications: ["Material: D2, D3 Tool Steel", "Tolerance: ±0.05mm", "Life: 1M+ cycles"],
      applications: ["Automotive Stamping", "Sheet Metal Forming", "Mass Production"],
      brochure: "/brochures/progressive-dies.pdf"
    },
    {
      id: 2,
      category: "gears",
      name: "Automotive Gear Shafts",
      description: "Precision machined gear shafts for transmission systems",
      image: gearImage,
      specifications: ["Material: EN19, EN24", "Hardness: 58-62 HRC", "Precision: IT7 grade"],
      applications: ["2W Transmission", "3W Gearbox", "Commercial Vehicles"],
      brochure: "/brochures/gear-shafts.pdf"
    },
    {
      id: 3,
      category: "spm",
      name: "Custom SPM Automation Line",
      description: "Fully automated SPM machines with robotic integration",
      image: spmImage,
      specifications: ["Cycle Time: 30-60 sec", "Capacity: 1000 pcs/day", "Robots: 3-5 units"],
      applications: ["Assembly Automation", "Quality Inspection", "Material Handling"],
      brochure: "/brochures/spm-automation.pdf"
    },
    {
      id: 4,
      category: "sheet-metal",
      name: "Stamped Components",
      description: "High-quality stamped components for automotive applications",
      image: pressImage,
      specifications: ["Thickness: 0.5-3mm", "Material: CRCA, Galvanized", "Press: Up to 300T"],
      applications: ["Body Panels", "Structural Components", "Brackets & Mounts"],
      brochure: "/brochures/stamped-components.pdf"
    },
    {
      id: 5,
      category: "injection",
      name: "Injection Molded Parts",
      description: "Precision injection molded components for automotive interiors",
      image: gearImage,
      specifications: ["Material: ABS, PP, PA6", "Tolerance: ±0.1mm", "Wall Thickness: 1-5mm"],
      applications: ["Interior Trim", "Dashboard Components", "Electrical Housings"],
      brochure: "/brochures/injection-molded.pdf"
    },
    {
      id: 6,
      category: "welded",
      name: "Welded Sub-assemblies",
      description: "Complex welded assemblies for commercial vehicle chassis",
      image: pressImage,
      specifications: ["Welding: MIG, TIG, Spot", "Material: Mild Steel, HSLA", "Weight: 5-50 kg"],
      applications: ["Chassis Components", "Frame Assemblies", "Support Structures"],
      brochure: "/brochures/welded-assemblies.pdf"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const downloadBrochure = (brochureUrl: string, productName: string) => {
    // In a real application, this would trigger a download
    alert(`Downloading brochure for ${productName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-steel-dark to-machine-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Product Catalog</h1>
            <p className="text-xl text-gray-200">
              Comprehensive range of precision-engineered products and automation solutions
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specifications:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => downloadBrochure(product.brochure, product.name)}
                        className="flex-1"
                      >
                        Download Brochure
                      </Button>
                      <Button size="sm" className="flex-1">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art facilities and advanced technologies for diverse automotive applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm font-semibold mb-1">Production Presses</div>
                <div className="text-xs text-muted-foreground">Up to 300 tonnes capacity</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm font-semibold mb-1">Industrial Robots</div>
                <div className="text-xs text-muted-foreground">Automated production lines</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm font-semibold mb-1">Quality Control</div>
                <div className="text-xs text-muted-foreground">AI-driven inspection</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm font-semibold mb-1">Production Support</div>
                <div className="text-xs text-muted-foreground">Round-the-clock operations</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our engineering team can develop bespoke solutions tailored to your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Request Custom Quote
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;