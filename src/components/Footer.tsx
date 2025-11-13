import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Souvenir Haven</h3>
            <p className="text-primary-foreground/90 text-lg">
              Your trusted source for authentic souvenirs and treasures from around the world.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/90">
              <li><a href="#" className="hover:text-primary-foreground transition-colors text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors text-lg">Our Collection</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors text-lg">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors text-lg">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-primary-foreground/90 text-lg">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-primary-foreground hover:text-primary-foreground/80" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-primary-foreground hover:text-primary-foreground/80" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-primary-foreground hover:text-primary-foreground/80" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="Email">
              <Mail className="w-6 h-6 text-primary-foreground hover:text-primary-foreground/80" />
            </a>
          </div>
          <p className="text-center text-primary-foreground/80">&copy; 2024 Souvenir Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
