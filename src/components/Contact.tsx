import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground animate-fade-in">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          We'd love to hear from you! Reach out for inquiries about our collection
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground">
              info@souvenirs.com
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground">
              +1 (555) 123-4567
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in-right [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 group-hover:bg-primary-foreground group-hover:text-primary transition-colors">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground">
              123 Memory Lane, Gift City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
