import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-steel-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-machine-blue rounded"></div>
              <span className="text-xl font-bold">Ranayara Engineering Industries Pvt Ltd</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Manufacturing Excellence Through Innovation. Specializing in precision engineering, 
              automation solutions, and AI-driven manufacturing optimization.
            </p>
            <div className="text-sm text-gray-400">
              <p>561 Block M8, 3, Sector 8</p>
              <p>IMT Manesar, Gurugram, Haryana 123506</p>
              <p className="mt-2">Phone: 088587 10345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/catalog" className="text-gray-300 hover:text-primary transition-colors">Catalog</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Tool, Die & Mould Manufacturing</li>
              <li>SPM Machines & Automation</li>
              <li>Gear Manufacturing</li>
              <li>Sheet Metal Components</li>
              <li>Press Shop Operations</li>
              <li>AI Integration Solutions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Ranayara Engineering Industries Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;