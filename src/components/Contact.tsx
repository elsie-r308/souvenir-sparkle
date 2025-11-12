import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4 animate-fade-in mx-auto block w-fit">
          <span className="text-sm font-semibold tracking-wide uppercase text-primary">Contact</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-foreground animate-fade-in [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards] bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          We'd love to hear from you! Reach out for inquiries about our collection
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary border-2 border-transparent hover:border-primary transition-all duration-300 animate-fade-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Mail className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Email Us</h3>
            <p className="text-muted-foreground text-lg font-medium">
              info@souvenirs.com
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary border-2 border-transparent hover:border-primary transition-all duration-300 animate-fade-in [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <Phone className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Call Us</h3>
            <p className="text-muted-foreground text-lg font-medium">
              +1 (555) 123-4567
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary border-2 border-transparent hover:border-primary transition-all duration-300 animate-fade-in-right [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards] group cursor-pointer hover:shadow-2xl hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground mb-6 group-hover:scale-110 transition-transform shadow-lg">
              <MapPin className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Visit Us</h3>
            <p className="text-muted-foreground text-lg font-medium">
              123 Memory Lane, Gift City
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
