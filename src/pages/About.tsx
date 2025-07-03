import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    { year: "2015", event: "Company Establishment", description: "Founded in IMT Manesar with focus on precision manufacturing" },
    { year: "2018", event: "Automation Integration", description: "Introduced first robotic systems for enhanced productivity" },
    { year: "2020", event: "AI Implementation", description: "Launched AI-driven quality control and optimization systems" },
    { year: "2022", event: "Soft Division Launch", description: "Established in-house CAD/CAM and engineering services division" },
    { year: "2024", event: "Industry 4.0 Leader", description: "Recognized as a leader in smart manufacturing solutions" },
  ];

  const technologies = [
    { name: "Cold/Hot Stamping", description: "Advanced forming processes for complex geometries" },
    { name: "CMT Welding", description: "Cold Metal Transfer welding for superior joint quality" },
    { name: "Roll Forming", description: "Continuous forming for consistent cross-sectional profiles" },
    { name: "AI Integration", description: "Machine learning for production and quality optimization" },
    { name: "Robotics", description: "10+ robots integrated across multiple production lines" },
    { name: "CAM/CAD", description: "Computer-aided design and manufacturing capabilities" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge technology and AI integration"
    },
    {
      title: "Quality",
      description: "Uncompromising commitment to excellence in every product and service"
    },
    {
      title: "Reliability",
      description: "Consistent delivery and dependable partnerships with our clients"
    },
    {
      title: "Sustainability",
      description: "Responsible manufacturing practices for a better tomorrow"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-steel-dark to-machine-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Ranayara Engineering</h1>
            <p className="text-xl text-gray-200">
              A forward-thinking manufacturing enterprise committed to excellence, innovation, and sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Headquartered at IMT Manesar, Ranayara Engineering Industries Pvt Ltd is a dynamic and 
                forward-thinking manufacturing enterprise that has been at the forefront of precision 
                engineering and automation solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in tooling solutions, precision engineering, automation systems, and 
                component manufacturing for the automotive sector. Our integrated value chain spans 
                from in-house tool design to final product assembly.
              </p>
              <p className="text-lg text-muted-foreground">
                Through our specialized "Soft" division, we're pioneering the future of software-driven 
                engineering services, combining traditional manufacturing excellence with cutting-edge 
                digital solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">9+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">300T</div>
                  <div className="text-sm text-muted-foreground">Max Press Capacity</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Production Presses</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Industrial Robots</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Mission, Vision & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver cost-effective, high-value, and technologically advanced manufacturing 
                  solutions while maintaining the highest standards of quality and customer satisfaction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a front-runner in customer satisfaction by expanding into non-automotive 
                  sectors and contributing to a sustainable manufacturing ecosystem through innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Future</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scaling our "Soft" division as an independent tech-enabled engineering services 
                  company, leading the digital transformation of manufacturing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Advanced Technologies</h2>
            <p className="text-xl text-muted-foreground">
              Leveraging cutting-edge technologies to deliver superior manufacturing solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{tech.name}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Division */}
      <section className="py-20 bg-gradient-to-r from-machine-blue to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Soft - The Future in Software-Driven Engineering</h2>
            <p className="text-xl mb-8 text-gray-200">
              Our specialized division leveraging OE customer software to deliver next-generation engineering services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Assembly Modeling</h3>
                <p className="text-gray-200">Comprehensive 3D modeling and simulation services</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Computer-Aided Machining</h3>
                <p className="text-gray-200">Advanced CAM solutions for precision manufacturing</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Engineering Design</h3>
                <p className="text-gray-200">Complete drawing and design services</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-200 mb-8">
              Future Plan: Scale and spin off this unit as an independent tech-enabled engineering services company.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Milestones</h2>
            <p className="text-xl text-muted-foreground">Our journey of growth and innovation</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Partner with Excellence</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in shaping the future of manufacturing through innovation and precision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/catalog">View Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;