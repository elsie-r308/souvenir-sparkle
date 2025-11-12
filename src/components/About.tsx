const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4 animate-fade-in">
            <span className="text-sm font-semibold tracking-wide uppercase text-primary">About Us</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground animate-fade-in [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards] bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Our Story
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <p className="text-xl">
              For over <span className="text-primary font-bold">two decades</span>, we've been passionate about bringing the world's most unique 
              souvenirs and handcrafted treasures to collectors and travelers alike.
            </p>
            <p>
              Our carefully curated collection features authentic items from artisans and cultures 
              around the globe, each piece telling its own special story. From traditional crafts 
              to contemporary keepsakes, we celebrate the diversity and beauty of human creativity.
            </p>
            <p>
              Every souvenir in our collection is selected with care, ensuring quality, authenticity, 
              and the kind of lasting value that transforms a simple purchase into a cherished memory.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 animate-scale-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
