
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Phone, Globe, Factory, Users, Award } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our engineering team",
      value: "088587 10345",
      action: "tel:+918858710345",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send detailed project requirements",
      value: "Visit our website",
      action: "https://www.ranayaraengineering.com/",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Tour our facility and see capabilities",
      value: "IMT Manesar, Gurugram",
      action: "https://www.google.com/maps/place/Ranayara+Engineering+Industries+Pvt.+Ltd/@28.3786507,76.8777341,17z/data=!3m1!4b1!4m6!3m5!1s0x390d3f0b5451711f:0x19b8c197fe1a9891!8m2!3d28.378646!4d76.880309!16s%2Fg%2F11s21f4x2j?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
      color: "text-red-600"
    }
  ];

  const stats = [
    { icon: Factory, value: "25+", label: "Manufacturing Units" },
    { icon: Users, value: "500+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Globe, value: "50+", label: "Global Projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Enhanced Gradient */}
      <section className="relative py-24 bg-gradient-to-r from-steel-dark via-machine-blue to-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-electric-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">
              Let's Build Something
              <span className="block text-electric-yellow">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in">
              Ready to transform your manufacturing vision into reality? Our expert team is here to help you every step of the way.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-electric-yellow" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form with Enhanced Design */}
            <Card className="p-8 shadow-2xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-3xl bg-gradient-to-r from-steel-dark to-machine-blue bg-clip-text text-transparent">
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-2 border-gray-200 focus:border-primary transition-colors h-12"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-2 border-gray-200 focus:border-primary transition-colors h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2 border-2 border-gray-200 focus:border-primary transition-colors h-12"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="group">
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 border-2 border-gray-200 focus:border-primary transition-colors h-12"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2 border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-machine-blue hover:from-machine-blue hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information with Modern Cards */}
            <div className="space-y-6">
              
              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/95 backdrop-blur-sm group">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-foreground mb-1">{info.title}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{info.description}</p>
                          <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                            <a href={info.action} target="_blank" rel="noopener noreferrer">
                              {info.value}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Company Details Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-machine-blue/5 border-2 border-primary/20">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Factory className="w-5 h-5 text-primary" />
                    <span>Company Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2 text-lg">Ranayara Engineering Industries Pvt Ltd</h4>
                    <div className="flex items-start space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <p>
                        561 Block M8, 3, Sector 8<br/>
                        IMT Manesar, Gurugram<br/>
                        Haryana 123506, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-br from-machine-blue/5 to-steel-dark/5">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <Button variant="outline" className="w-full justify-start h-12 hover:bg-primary hover:text-white transition-colors">
                    📋 Download Company Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 hover:bg-machine-blue hover:text-white transition-colors">
                    🏭 Schedule Factory Visit
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 hover:bg-steel-dark hover:text-white transition-colors">
                    💼 Request Custom Quote
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 hover:bg-primary hover:text-white transition-colors">
                    🔧 Technical Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-machine-blue via-primary to-steel-dark text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss how we can bring your manufacturing vision to life with our expertise, cutting-edge technology, and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg hover:scale-105 transition-transform">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-dark h-14 px-8 text-lg hover:scale-105 transition-transform">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
