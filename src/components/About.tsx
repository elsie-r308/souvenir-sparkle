const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <p>
              For over two decades, we've been passionate about bringing the world's most unique 
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
        </div>
      </div>
    </section>
  );
};

export default About;
