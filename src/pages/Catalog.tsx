import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Factory, Settings, Wrench, CircleArrowDown } from "lucide-react";
import gearImage from "../assets/gear-manufacturing.jpg";
import spmImage from "../assets/spm-automation.jpg";
import pressImage from "../assets/press-shop.jpg";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Solutions", icon: Factory },
    { id: "ai-solution", name: "AI Solutions", icon: Factory },
    { id: "ev-manufacturing", name: "EV Manufacturing", icon: Factory },
    { id: "mold-engineering", name: "Mold & Engineering", icon: Settings },
    { id: "tools-die", name: "Tools, Dies & Engineering", icon: Wrench },
    { id: "automation-robotics", name: "Automation & Robotics", icon: Factory },
    { id: "jigs-fixtures", name: "Jigs & Fixtures", icon: Settings },
  ];

  const products = [
    // AI Solutions
    {
      id: 1,
      category: "ai-solution",
      name: "AI-Powered Quality Control System",
      description: "Advanced machine learning algorithms for real-time defect detection and quality assurance",
      image: spmImage,
      specifications: ["Deep Learning Models", "Real-time Processing", "99.8% Accuracy Rate", "Cloud Integration"],
      applications: ["Automotive QC", "Electronics Testing", "Metal Forming Inspection"],
      features: ["Computer Vision", "Predictive Analytics", "Process Optimization"],
      brochure: "/brochures/ai-quality-control.pdf"
    },
    {
      id: 2,
      category: "ai-solution",
      name: "Smart Manufacturing Analytics Platform",
      description: "IoT-enabled data analytics for production optimization and predictive maintenance",
      image: gearImage,
      specifications: ["IoT Sensors Integration", "Machine Learning Analytics", "Real-time Dashboard", "Mobile App"],
      applications: ["Production Monitoring", "Predictive Maintenance", "Energy Optimization"],
      features: ["Data Visualization", "Alert Systems", "Performance Tracking"],
      brochure: "/brochures/smart-analytics.pdf"
    },

    // EV Manufacturing
    {
      id: 3,
      category: "ev-manufacturing",
      name: "E-Rickshaw Manufacturing Line",
      description: "Complete production setup for electric rickshaws with battery integration systems",
      image: pressImage,
      specifications: ["3-Wheeler Design", "48V Battery System", "Load Capacity: 500kg", "Range: 80-100km"],
      applications: ["Urban Transportation", "Last Mile Delivery", "Commercial Use"],
      features: ["Lightweight Frame", "Weather Protection", "Easy Maintenance"],
      brochure: "/brochures/e-rickshaw.pdf"
    },
    {
      id: 4,
      category: "ev-manufacturing",
      name: "E-Cart Loader Production",
      description: "Heavy-duty electric cart loaders for industrial material handling applications",
      image: spmImage,
      specifications: ["Load Capacity: 1000kg", "72V Battery System", "Hydraulic Lifting", "8-hour Operation"],
      applications: ["Warehouse Operations", "Factory Material Handling", "Construction Sites"],
      features: ["Robust Construction", "Easy Loading", "Silent Operation"],
      brochure: "/brochures/e-cart-loader.pdf"
    },
    {
      id: 5,
      category: "ev-manufacturing",
      name: "E-Scooty Assembly Line",
      description: "Modern electric scooter manufacturing with smart connectivity features",
      image: gearImage,
      specifications: ["Lithium-ion Battery", "60km Range", "Smart Connectivity", "Regenerative Braking"],
      applications: ["Personal Transportation", "Food Delivery", "Urban Commuting"],
      features: ["Smartphone Integration", "GPS Tracking", "Anti-theft System"],
      brochure: "/brochures/e-scooty.pdf"
    },

    // Mold and Engineering Solutions
    {
      id: 6,
      category: "mold-engineering",
      name: "Precision Injection Molds",
      description: "High-precision injection molds for automotive and consumer electronics applications",
      image: pressImage,
      specifications: ["Multi-cavity Design", "Hot Runner System", "Cycle Time: 15-30 sec", "Tolerance: ±0.02mm"],
      applications: ["Automotive Parts", "Electronics Housing", "Consumer Products"],
      features: ["Quick Mold Change", "Energy Efficient", "Long Tool Life"],
      brochure: "/brochures/injection-molds.pdf"
    },
    {
      id: 7,
      category: "mold-engineering",
      name: "Die Casting Solutions",
      description: "Complete die casting setup for aluminum and zinc alloy components",
      image: gearImage,
      specifications: ["Aluminum & Zinc Alloys", "High Pressure Casting", "Automated Trimming", "Surface Finishing"],
      applications: ["Engine Components", "Housing Parts", "Heat Sinks"],
      features: ["Dimensional Accuracy", "Surface Quality", "High Volume Production"],
      brochure: "/brochures/die-casting.pdf"
    },

    // Tools, Dies & Engineering Solutions
    {
      id: 8,
      category: "tools-die",
      name: "Progressive Stamping Dies",
      description: "Advanced progressive dies for complex automotive stamping operations",
      image: pressImage,
      specifications: ["Multi-stage Operation", "Carbide Inserts", "Stroke Rate: 200 SPM", "Tool Life: 2M+ hits"],
      applications: ["Body Panels", "Structural Components", "Brackets"],
      features: ["Precision Engineering", "Quick Setup", "Consistent Quality"],
      brochure: "/brochures/progressive-dies.pdf"
    },
    {
      id: 9,
      category: "tools-die",
      name: "Custom Cutting Tools",
      description: "Specialized cutting tools designed for specific machining applications",
      image: spmImage,
      specifications: ["HSS & Carbide", "Custom Geometry", "Coated Options", "Special Applications"],
      applications: ["CNC Machining", "Drilling Operations", "Threading"],
      features: ["Extended Tool Life", "Superior Finish", "Cost Effective"],
      brochure: "/brochures/cutting-tools.pdf"
    },

    // Automation & Robotics Solutions
    {
      id: 10,
      category: "automation-robotics",
      name: "Robotic Assembly Line",
      description: "Fully automated assembly line with industrial robots and vision systems",
      image: spmImage,
      specifications: ["6-Axis Robots", "Vision Guidance", "PLC Control", "Safety Systems"],
      applications: ["Automotive Assembly", "Electronics Production", "Packaging"],
      features: ["Flexible Programming", "High Speed Operation", "Quality Assurance"],
      brochure: "/brochures/robotic-assembly.pdf"
    },
    {
      id: 11,
      category: "automation-robotics",
      name: "Material Handling Automation",
      description: "Automated material handling systems with conveyor integration",
      image: gearImage,
      specifications: ["Conveyor Systems", "AGV Integration", "RFID Tracking", "WMS Integration"],
      applications: ["Warehouse Automation", "Production Lines", "Distribution Centers"],
      features: ["Real-time Tracking", "Inventory Management", "Scalable Design"],
      brochure: "/brochures/material-handling.pdf"
    },

    // Jigs & Fixtures Solutions
    {
      id: 12,
      category: "jigs-fixtures",
      name: "Precision Machining Fixtures",
      description: "Custom-designed fixtures for high-precision machining operations",
      image: pressImage,
      specifications: ["Modular Design", "Quick Clamping", "Repeatability: ±0.005mm", "Hardened Components"],
      applications: ["CNC Machining", "Grinding Operations", "Inspection"],
      features: ["Easy Setup", "Consistent Positioning", "Reduced Cycle Time"],
      brochure: "/brochures/machining-fixtures.pdf"
    },
    {
      id: 13,
      category: "jigs-fixtures",
      name: "Welding Jigs & Fixtures",
      description: "Specialized jigs and fixtures for welding and fabrication processes",
      image: gearImage,
      specifications: ["Heat Resistant", "Adjustable Positioning", "Clamping Systems", "Distortion Control"],
      applications: ["Structural Welding", "Fabrication", "Assembly Operations"],
      features: ["Precise Alignment", "Repeatable Setup", "Quality Consistency"],
      brochure: "/brochures/welding-fixtures.pdf"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const downloadBrochure = (brochureUrl: string, productName: string) => {
    alert(`Downloading brochure for ${productName}`);
  };

  const getQuote = (productName: string) => {
    alert(`Requesting quote for ${productName}. Our team will contact you shortly.`);
  };

  const capabilities = [
    { metric: "50+", label: "AI Models Deployed", sublabel: "Machine learning solutions" },
    { metric: "200+", label: "EV Units/Month", sublabel: "Production capacity" },
    { metric: "25+", label: "Robotic Systems", sublabel: "Automation solutions" },
    { metric: "99.5%", label: "Quality Rating", sublabel: "Customer satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-steel-dark via-machine-blue to-steel-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Advanced Manufacturing Solutions
            </h1>
            <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
              Cutting-edge technology meets precision engineering across AI, EV manufacturing, 
              automation, and specialized tooling solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Category Navigation */}
      <section className="py-12 bg-muted/30 sticky top-16 z-40 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id 
                      ? "bg-primary shadow-lg transform scale-105" 
                      : "hover:shadow-md"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="specs" className="text-xs">Specs</TabsTrigger>
                      <TabsTrigger value="apps" className="text-xs">Apps</TabsTrigger>
                      <TabsTrigger value="features" className="text-xs">Features</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="specs" className="space-y-2">
                      <ul className="text-sm space-y-2">
                        {product.specifications.map((spec, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                    
                    <TabsContent value="apps" className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="features" className="space-y-2">
                      {product.features && (
                        <div className="flex flex-wrap gap-2">
                          {product.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => downloadBrochure(product.brochure, product.name)}
                      className="flex-1 hover:bg-primary/10 transition-colors"
                    >
                      <CircleArrowDown className="w-4 h-4 mr-1" />
                      Brochure
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => getQuote(product.name)}
                      className="flex-1 bg-gradient-to-r from-primary to-machine-blue hover:from-primary/90 hover:to-machine-blue/90"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Capabilities Overview */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              State-of-the-art facilities powered by AI and advanced automation technologies 
              for next-generation manufacturing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-3">{capability.metric}</div>
                  <div className="text-lg font-semibold mb-2">{capability.label}</div>
                  <div className="text-sm text-muted-foreground">{capability.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Table */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Solution Comparison</h2>
            <p className="text-xl text-muted-foreground">
              Compare our key solutions across different categories
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-primary to-machine-blue">
                  <TableHead className="text-white font-semibold">Category</TableHead>
                  <TableHead className="text-white font-semibold">Key Products</TableHead>
                  <TableHead className="text-white font-semibold">Applications</TableHead>
                  <TableHead className="text-white font-semibold">Technology</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">AI Solutions</TableCell>
                  <TableCell>Quality Control, Analytics Platform</TableCell>
                  <TableCell>Manufacturing, Predictive Maintenance</TableCell>
                  <TableCell>Machine Learning, IoT</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">EV Manufacturing</TableCell>
                  <TableCell>E-Rickshaw, E-Cart, E-Scooty</TableCell>
                  <TableCell>Transportation, Material Handling</TableCell>
                  <TableCell>Electric Drive, Battery Systems</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">Automation & Robotics</TableCell>
                  <TableCell>Assembly Lines, Material Handling</TableCell>
                  <TableCell>Production, Warehouse Automation</TableCell>
                  <TableCell>Industrial Robots, Vision Systems</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">Tools & Dies</TableCell>
                  <TableCell>Progressive Dies, Cutting Tools</TableCell>
                  <TableCell>Stamping, Machining Operations</TableCell>
                  <TableCell>Precision Engineering, Carbide</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-steel-dark to-machine-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Our expert engineering team specializes in developing cutting-edge solutions 
            tailored to your specific requirements. From AI integration to complete automation systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="hero" className="text-lg px-12 py-4">
              Request Custom Solution
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-4 border-white/30 text-white hover:bg-white/10">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-4 border-white/30 text-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
