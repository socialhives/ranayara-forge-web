import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Factory, Settings, Wrench } from "lucide-react";
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
    { id: "robotics-welding", name: "Robotics Welding & Structure", icon: Factory },
    { id: "lithium-battery", name: "Lithium Battery Box", icon: Settings },
    { id: "jigs-fixtures", name: "Jigs & Fixtures & Stainless", icon: Settings },
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

    // Robotics Welding & Structure
    {
      id: 10,
      category: "robotics-welding",
      name: "Automated Welding Station",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042211/11bcc363-1b34-4e2d-8569-57d51e40c7f6.png",
    },
    {
      id: 11,
      category: "robotics-welding",
      name: "Structural Frame Assembly",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042296/b894df2f-1e7d-4d07-afd4-0590c570fccd.png",
    },
    {
      id: 16,
      category: "robotics-welding",
      name: "Precision Welding Robot",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042321/bc89474e-1cd3-41aa-8fa9-41058c8a3fe2.png",
    },
    {
      id: 17,
      category: "robotics-welding",
      name: "Heavy Duty Welding System",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042344/912503d4-17db-4124-a83f-64ce1d1a4c8f.png",
    },
    {
      id: 18,
      category: "robotics-welding",
      name: "Multi-Axis Welding Platform",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042378/4650cc5f-12ba-4887-9d9a-8378f448a2fb.png",
    },
    {
      id: 19,
      category: "robotics-welding",
      name: "Industrial Welding Center",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042425/0d78028d-823b-4e13-b5a0-ba894de3a614.png",
    },

    // Lithium Battery Box
    {
      id: 20,
      category: "lithium-battery",
      name: "Battery Pack Assembly",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042497/16b2fd73-3a17-4c77-ae9a-90b05843c76a.png",
    },
    {
      id: 21,
      category: "lithium-battery",
      name: "Battery Housing System",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042538/91f1558f-c215-49be-b825-490af1e6e410.png",
    },
    {
      id: 22,
      category: "lithium-battery",
      name: "Battery Testing Unit",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042544/fdd787b1-59f5-4fde-b289-0f70c997e7fb.png",
    },
    {
      id: 23,
      category: "lithium-battery",
      name: "Battery Management Solution",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042657/0668277e-6041-4977-852a-9b2973f74bac.png",
    },

    // Jigs & Fixtures & Stainless
    {
      id: 12,
      category: "jigs-fixtures",
      name: "Precision Testing Fixtures",
      image: pressImage,
    },
    {
      id: 13,
      category: "jigs-fixtures",
      name: "Hydraulic Assembly Fixtures",
      image: gearImage,
    },
    {
      id: 14,
      category: "jigs-fixtures",
      name: "Electronic Control Fixtures",
      image: spmImage,
    },
    {
      id: 15,
      category: "jigs-fixtures",
      name: "Progressive Die Fixtures",
      image: pressImage,
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
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{product.name}</h3>
                  </div>
                </div>
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
                  <div className="text-4xl font-bold text-primary mb-3">{capability.metric}</div>
                  <div className="text-lg font-semibold mb-2">{capability.label}</div>
                  <div className="text-sm text-muted-foreground">{capability.sublabel}</div>
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
                  <TableCell className="font-medium">Robotics Welding & Structure</TableCell>
                  <TableCell>Welding Stations, Frame Assembly</TableCell>
                  <TableCell>Manufacturing, Structural Assembly</TableCell>
                  <TableCell>Robotics, Welding Technology</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">Lithium Battery Box</TableCell>
                  <TableCell>Battery Packs, Housing Systems</TableCell>
                  <TableCell>Energy Storage, EV Systems</TableCell>
                  <TableCell>Battery Technology, Testing</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-medium">Jigs & Fixtures & Stainless</TableCell>
                  <TableCell>Testing Fixtures, Assembly Tools</TableCell>
                  <TableCell>Quality Control, Production</TableCell>
                  <TableCell>Precision Engineering, Automation</TableCell>
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
