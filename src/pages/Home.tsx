import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-manufacturing.jpg";
import gearImage from "../assets/gear-manufacturing.jpg";
import spmImage from "../assets/spm-automation.jpg";
import pressImage from "../assets/press-shop.jpg";

const Home = () => {
  const highlights = [
    {
      title: "Precision Gear Manufacturing",
      description: "High-quality gear shafts and precision components for automotive applications",
      image: gearImage,
    },
    {
      title: "SPM Automation Solutions",
      description: "Custom automation systems with robotics integration for enhanced productivity",
      image: spmImage,
    },
    {
      title: "Advanced Press Shop",
      description: "25+ presses with up to 300 tonnes capacity for welded sub-assemblies",
      image: pressImage,
    },
  ];

  const strengths = [
    {
      title: "25+",
      subtitle: "High-Capacity Presses",
      description: "Up to 300 tonnes capacity"
    },
    {
      title: "10+",
      subtitle: "Industrial Robots",
      description: "Integrated automation systems"
    },
    {
      title: "100%",
      subtitle: "Quality Assurance",
      description: "AI-driven quality control"
    },
    {
      title: "24/7",
      subtitle: "Production Support",
      description: "Round-the-clock operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-steel-dark/80 to-machine-blue/60"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Empowering Manufacturing
            <span className="block text-electric-yellow">Excellence Through Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Leading manufacturer of precision tools, dies, moulds, and automation solutions 
            serving automotive and industrial sectors with AI-driven optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/catalog">Explore Our Catalog</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-dark">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ranayara Engineering Industries Pvt Ltd
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Headquartered at IMT Manesar, we are a dynamic and forward-thinking manufacturing enterprise 
              specializing in precision engineering, automation solutions, and AI-driven manufacturing optimization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {strengths.map((item, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-primary mb-2">{item.title}</div>
                    <div className="text-sm font-semibold text-foreground mb-1">{item.subtitle}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Strengths</h2>
            <p className="text-xl text-muted-foreground">
              From precision manufacturing to AI-driven automation, we deliver excellence across all domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Comprehensive Manufacturing Capabilities
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Tooling Solutions</h3>
                    <p className="text-muted-foreground">Tools, Dies, Moulds for precision manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Automation & SPM</h3>
                    <p className="text-muted-foreground">Custom automation systems with robotics integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Component Manufacturing</h3>
                    <p className="text-muted-foreground">Sheet metal & injection molding for automotive sector</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Integration</h3>
                    <p className="text-muted-foreground">Smart manufacturing with AI-driven optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Soft Division</h3>
                    <p className="text-muted-foreground">CAD/CAM services and assembly modeling</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">2W</div>
                    <div className="text-sm text-muted-foreground">Two Wheeler Components</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">3W</div>
                    <div className="text-sm text-muted-foreground">Three Wheeler Components</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">PV</div>
                    <div className="text-sm text-muted-foreground">Passenger Vehicles</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary">CV</div>
                    <div className="text-sm text-muted-foreground">Commercial Vehicles</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-steel-dark to-machine-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Manufacturing?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Partner with us for innovative solutions, precision engineering, and AI-driven optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-dark">
              <Link to="/catalog">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;