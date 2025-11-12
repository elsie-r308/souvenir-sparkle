import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-souvenirs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-primary-foreground">
        <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
          <span className="text-sm font-semibold tracking-wide uppercase">Authentic Treasures Since 2004</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] drop-shadow-2xl">
          Memories Worth<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-50 to-white">
            Keeping
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] drop-shadow-lg leading-relaxed">
          Discover unique souvenirs and handcrafted treasures from around the world
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <Button size="lg" className="text-lg px-10 py-6 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-2xl font-semibold">
            Explore Collection
          </Button>
          <Button size="lg" className="text-lg px-10 py-6 bg-primary-foreground/20 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-2xl font-semibold">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-primary-foreground drop-shadow-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
