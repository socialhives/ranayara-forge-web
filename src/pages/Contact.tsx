import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
    // In a real application, this would send data to a server
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-steel-dark to-machine-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Ready to discuss your manufacturing needs? Get in touch with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Tell us about your project requirements, timeline, and any specific questions you have..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Company Details */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ranayara Engineering Industries Pvt Ltd</h4>
                    <p className="text-muted-foreground">
                      561 Block M8, 3, Sector 8<br/>
                      IMT Manesar, Gurugram<br/>
                      Haryana 123506, India
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Contact Details</h4>
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:+918858710345" className="text-primary hover:underline">088587 10345</a><br/>
                      Email: <a href="mailto:info@ranayara.com" className="text-primary hover:underline">info@ranayara.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Find Us</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-primary-foreground font-bold">📍</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Interactive map showing our location at<br/>
                        IMT Manesar, Gurugram
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <a 
                      href="https://maps.google.com/maps?q=IMT+Manesar,+Gurugram" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Download Company Brochure
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Schedule Factory Visit
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Technical Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Multiple Ways to Connect</h2>
            <p className="text-xl text-muted-foreground">
              Choose the most convenient way to reach out to our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our engineering team for immediate assistance
                </p>
                <Button variant="outline">
                  <a href="tel:+918858710345">088587 10345</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">✉️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send detailed project requirements and technical specifications
                </p>
                <Button variant="outline">
                  <a href="mailto:info@ranayara.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground text-2xl">🏭</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Tour our facility and see our manufacturing capabilities firsthand
                </p>
                <Button variant="outline">
                  Schedule Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-machine-blue to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can bring your manufacturing vision to life with our expertise and technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-dark">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;