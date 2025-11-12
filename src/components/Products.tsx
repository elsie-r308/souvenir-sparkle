import { Card, CardContent } from "@/components/ui/card";
import magnetsImg from "@/assets/magnets.jpg";
import postcardsImg from "@/assets/postcards.jpg";
import keychainsImg from "@/assets/keychains.jpg";
import craftsImg from "@/assets/crafts.jpg";

const products = [
  {
    title: "Magnets",
    description: "Collectible magnets from destinations worldwide",
    image: magnetsImg,
  },
  {
    title: "Postcards",
    description: "Vintage and modern postcards capturing iconic moments",
    image: postcardsImg,
  },
  {
    title: "Keychains",
    description: "Unique keychains and charms from every corner of the globe",
    image: keychainsImg,
  },
  {
    title: "Handcrafted Items",
    description: "Artisan-made treasures showcasing traditional craftsmanship",
    image: craftsImg,
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground animate-fade-in">
          Our Collection
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Explore our diverse range of authentic souvenirs and keepsakes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-scale-in hover:shadow-xl"
              style={{ 
                animationDelay: `${index * 100 + 400}ms`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <div className="overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
