import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-md flex items-center justify-center border border-primary-foreground/20">
                <span className="font-display font-bold text-lg">MR</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">MONT RICHCON</h3>
                <p className="text-sm text-primary-foreground/70">Construction & Block Factory</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Family-owned and operated in Cape Coast, providing premium quality concrete blocks for builders and contractors across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Blocks
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a href="tel:+233243256913" className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>024 325 6913</span>
              </a>
              <a 
                href="https://maps.google.com/?q=5.179599198138507,-1.3079564600090339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Yayaakwano Jukwa Road, Cape Coast</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 6:00 AM – 6:00 PM</p>
                  <p>Saturday: 6:00 AM – 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} MONT RICHCON - Construction & Block Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
