import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import magnetsImg from "@/assets/magnets.jpg";
import postcardsImg from "@/assets/postcards.jpg";
import keychainsImg from "@/assets/keychains.jpg";
import craftsImg from "@/assets/crafts.jpg";

const products = [
  {
    title: "Magnets",
    description: "Collectible magnets from destinations worldwide",
    image: magnetsImg,
    samples: [magnetsImg, magnetsImg, magnetsImg], // You can add more sample images here
  },
  {
    title: "Postcards",
    description: "Vintage and modern postcards capturing iconic moments",
    image: postcardsImg,
    samples: [postcardsImg, postcardsImg, postcardsImg],
  },
  {
    title: "Keychains",
    description: "Unique keychains and charms from every corner of the globe",
    image: keychainsImg,
    samples: [keychainsImg, keychainsImg, keychainsImg],
  },
  {
    title: "Handcrafted Items",
    description: "Artisan-made treasures showcasing traditional craftsmanship",
    image: craftsImg,
    samples: [craftsImg, craftsImg, craftsImg],
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4 animate-fade-in mx-auto block w-fit">
          <span className="text-sm font-semibold tracking-wide uppercase text-primary">What We Offer</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center text-foreground animate-fade-in [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards] bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
          Our Collection
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-14 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Explore our diverse range of authentic souvenirs and keepsakes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-scale-in hover:shadow-2xl bg-card hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 100 + 400}ms`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-7">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary">
              {selectedProduct?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Carousel className="w-full">
              <CarouselContent>
                {selectedProduct?.samples.map((sample, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={sample} 
                        alt={`${selectedProduct.title} sample ${index + 1}`}
                        className="w-full h-[500px] object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <p className="text-muted-foreground mt-4 text-center">
              {selectedProduct?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
