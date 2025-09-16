import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Factory, Settings, Wrench, X, Cog, Zap, TestTube, Building, Truck, Menu } from "lucide-react";
import gearImage from "../assets/gear-manufacturing.jpg";
import spmImage from "../assets/spm-automation.jpg";
import pressImage from "../assets/press-shop.jpg";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Solutions", icon: Factory },
    { id: "ai-solution", name: "AI Solutions", icon: Factory },
    { id: "automation-robotics", name: "Automation & Robotics", icon: Cog },
    { id: "ev-manufacturing", name: "E-Rickshaw Manufacturing", icon: Truck },
    { id: "electronics-testing", name: "Electronics Parts Testing", icon: TestTube },
    { id: "machine-structure", name: "Machine Structure", icon: Building },
    { id: "tools-die", name: "Tools, Dies & Engineering", icon: Wrench },
    { id: "robotics-welding", name: "Robotics Welding & Structure", icon: Factory },
    { id: "lithium-battery", name: "Lithium Battery Box", icon: Zap },
    { id: "jigs-fixtures", name: "Jigs & Fixtures & Stainless", icon: Settings },
  ];

  const products = [
    // AI Solutions
    {
      id: 1,
      category: "ai-solution",
      name: "AI-Powered Quality Control System",
      image: spmImage,
    },
    {
      id: 2,
      category: "ai-solution",
      name: "Smart Manufacturing Analytics Platform",
      image: gearImage,
    },

    // Automation & Robotics  
    {
      id: 3,
      category: "automation-robotics",
      name: "Automated Production System 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758041795/auto2_lcwgqr.jpg",
    },
    {
      id: 4,
      category: "automation-robotics", 
      name: "Automated Production System 2",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758041794/auto1_zj06wt.jpg",
    },
    {
      id: 5,
      category: "automation-robotics",
      name: "Automated Production System 3", 
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758041794/auto5_kmzhsu.jpg",
    },
    {
      id: 6,
      category: "automation-robotics",
      name: "Automated Production System 4",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758041794/auto8_ssmj9o.jpg",
    },
    {
      id: 7,
      category: "automation-robotics",
      name: "Automated Production System 5",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758041794/auto3_gnt48r.jpg",
    },

    // E-Rickshaw Manufacturing
    {
      id: 8,
      category: "ev-manufacturing",
      name: "E-Rickshaw Assembly Line 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043490/ebc0e818-84c4-42ea-b992-76cd92be9f45.png",
    },
    {
      id: 9,
      category: "ev-manufacturing",
      name: "E-Rickshaw Assembly Line 2",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043508/8a1faeba-18f6-441d-b406-e6d85b17872e.png",
    },
    {
      id: 10,
      category: "ev-manufacturing", 
      name: "E-Rickshaw Assembly Line 3",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043528/92b0f32d-ab36-40b3-819a-1404488f32f6.png",
    },

    // Electronics Parts Testing
    {
      id: 11,
      category: "electronics-testing",
      name: "Electronics Testing Unit 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043148/10ab887a-b495-486d-8533-0a682362822e.png",
    },
    {
      id: 12,
      category: "electronics-testing",
      name: "Electronics Testing Unit 2",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043168/a9178157-9a4a-41b9-bdd0-d387ebab9a0b.png",
    },
    {
      id: 13,
      category: "electronics-testing",
      name: "Electronics Testing Unit 3",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043211/324716ab-d219-461f-9aab-753a13b202d1.png",
    },
    {
      id: 14,
      category: "electronics-testing",
      name: "Electronics Testing Unit 4",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043287/f5e1becc-22ec-425b-817f-a534cbbf50d4.png",
    },

    // Machine Structure
    {
      id: 15,
      category: "machine-structure",
      name: "Machine Structure 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043356/7eab7b14-508d-4731-88a3-6a28bad7d075.png",
    },
    {
      id: 16,
      category: "machine-structure",
      name: "Machine Structure 2", 
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043380/4f2a1c06-b3e1-480f-b5f7-a54d553296a8.png",
    },
    {
      id: 17,
      category: "machine-structure",
      name: "Machine Structure 3",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043403/04b2d23e-e850-40fe-af97-e48146dbe2a2.png",
    },

    // Tools, Dies & Engineering
    {
      id: 18,
      category: "tools-die",
      name: "Precision Tool 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043576/3c80a250-0738-4387-aacf-ca6d49f1506b.png",
    },
    {
      id: 19,
      category: "tools-die", 
      name: "Precision Tool 2",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043603/444abfd4-85ff-40e9-92e7-2a2d029b82af.png",
    },
    {
      id: 20,
      category: "tools-die",
      name: "Precision Tool 3", 
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043628/d09377cc-c8f8-4092-a2ab-7db6c2662c41.png",
    },
    {
      id: 21,
      category: "tools-die",
      name: "Precision Tool 4",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043665/770ecbac-14f2-4512-b194-75396ef464be.png",
    },
    {
      id: 22,
      category: "tools-die",
      name: "Precision Tool 5",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043692/7a5ec3f8-4334-4958-98ee-5ddbaf02bde7.png",
    },
    {
      id: 23,
      category: "tools-die",
      name: "Precision Tool 6", 
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043723/59092d64-d007-4229-8672-96befcbf8c00.png",
    },
    {
      id: 24,
      category: "tools-die",
      name: "Precision Tool 7",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043733/4381614e-7560-4442-91cb-98a9b2b213e9.png",
    },

    // Robotics Welding & Structure
    {
      id: 25,
      category: "robotics-welding",
      name: "Automated Welding Station",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042211/11bcc363-1b34-4e2d-8569-57d51e40c7f6.png",
    },
    {
      id: 26,
      category: "robotics-welding",
      name: "Structural Frame Assembly",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042296/b894df2f-1e7d-4d07-afd4-0590c570fccd.png",
    },
    {
      id: 27,
      category: "robotics-welding",
      name: "Precision Welding Robot",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042321/bc89474e-1cd3-41aa-8fa9-41058c8a3fe2.png",
    },
    {
      id: 28,
      category: "robotics-welding",
      name: "Heavy Duty Welding System",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042344/912503d4-17db-4124-a83f-64ce1d1a4c8f.png",
    },
    {
      id: 29,
      category: "robotics-welding",
      name: "Multi-Axis Welding Platform",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042378/4650cc5f-12ba-4887-9d9a-8378f448a2fb.png",
    },
    {
      id: 30,
      category: "robotics-welding",
      name: "Industrial Welding Center",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042425/0d78028d-823b-4e13-b5a0-ba894de3a614.png",
    },

    // Lithium Battery Box
    {
      id: 31,
      category: "lithium-battery",
      name: "Battery Pack Assembly",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042497/16b2fd73-3a17-4c77-ae9a-90b05843c76a.png",
    },
    {
      id: 32,
      category: "lithium-battery",
      name: "Battery Housing System",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042538/91f1558f-c215-49be-b825-490af1e6e410.png",
    },
    {
      id: 33,
      category: "lithium-battery",
      name: "Battery Testing Unit",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042544/fdd787b1-59f5-4fde-b289-0f70c997e7fb.png",
    },
    {
      id: 34,
      category: "lithium-battery",
      name: "Battery Management Solution",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758042657/0668277e-6041-4977-852a-9b2973f74bac.png",
    },

    // Jigs & Fixtures & Stainless
    {
      id: 35,
      category: "jigs-fixtures",
      name: "Precision Fixture 1",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043011/9f116ebc-e2f9-4deb-8d65-2ea8bfaa6771.png",
    },
    {
      id: 36,
      category: "jigs-fixtures",
      name: "Precision Fixture 2",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043037/071d67eb-2e26-4b85-b51a-ae540f76e518.png",
    },
    {
      id: 37,
      category: "jigs-fixtures",
      name: "Precision Fixture 3",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043057/6a0e9637-6325-4643-8ddb-6cb0bd240823.png",
    },
    {
      id: 38,
      category: "jigs-fixtures",
      name: "Precision Fixture 4",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043057/6a0e9637-6325-4643-8ddb-6cb0bd240823.png",
    },
    {
      id: 39,
      category: "jigs-fixtures",
      name: "Precision Fixture 5",
      image: "https://res.cloudinary.com/dch0uyw8e/image/upload/v1758043101/9ba88426-0b79-4fe8-8780-6d48b0422105.png",
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
          {/* Mobile Category Menu */}
          <div className="md:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  <Menu className="w-4 h-4 mr-2" />
                  {categories.find(cat => cat.id === selectedCategory)?.name || "All Solutions"}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-gradient-to-br from-primary/5 to-machine-blue/5">
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-6 text-foreground">Select Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "ghost"}
                          className={`w-full justify-start text-left h-auto py-4 px-4 ${
                            selectedCategory === category.id 
                              ? "bg-primary text-primary-foreground shadow-lg" 
                              : "hover:bg-muted"
                          }`}
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          <IconComponent className="w-5 h-5 mr-3" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
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
                 <div className="aspect-video overflow-hidden relative cursor-pointer" onClick={() => setFullScreenImage(product.image)}>
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

      {/* Full Screen Image Modal */}
      <Dialog open={!!fullScreenImage} onOpenChange={() => setFullScreenImage(null)}>
        <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <X size={24} />
            </button>
            {fullScreenImage && (
              <img
                src={fullScreenImage}
                alt="Full screen view"
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Catalog;
