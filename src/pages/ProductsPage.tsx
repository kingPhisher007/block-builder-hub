import { MessageCircle } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import hollowBlockImg from '@/assets/hollow-block.jpg';
import solidBlockImg from '@/assets/solid-block.jpg';

const hollowBlocks = [
  {
    name: '5-Inch Hollow Block',
    dimensions: '5" × 9" × 18"',
    usage: 'Ideal for partition walls and non-load-bearing structures. Lightweight and cost-effective.',
    image: hollowBlockImg,
    type: 'hollow' as const,
  },
  {
    name: '6-Inch Hollow Block',
    dimensions: '6" × 9" × 18"',
    usage: 'Perfect for external load-bearing walls. Provides excellent structural support with optimal weight.',
    image: hollowBlockImg,
    type: 'hollow' as const,
  },
];

const solidBlocks = [
  {
    name: '4-Inch Solid Block',
    dimensions: '4" × 9" × 18"',
    usage: 'Best for decorative walls, garden borders, and light-duty applications.',
    image: solidBlockImg,
    type: 'solid' as const,
  },
  {
    name: '5-Inch Solid Block',
    dimensions: '5" × 9" × 18"',
    usage: 'Versatile option for both internal partitions and moderate load-bearing requirements.',
    image: solidBlockImg,
    type: 'solid' as const,
  },
  {
    name: '6-Inch Solid Block',
    dimensions: '6" × 9" × 18"',
    usage: 'Maximum strength for heavy-duty construction. Ideal for foundations and structural walls.',
    image: solidBlockImg,
    type: 'solid' as const,
  },
];

const ProductsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-4">Our Block Range</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Standard, strong, and consistently sized for efficient construction
          </p>
        </div>
      </section>

      {/* Hollow Blocks Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="heading-md text-foreground mb-2">Hollow Blocks</h2>
            <p className="text-muted-foreground">
              Lightweight yet strong, perfect for walls and partitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hollowBlocks.map((block) => (
              <ProductCard key={block.name} {...block} />
            ))}
          </div>
        </div>
      </section>

      {/* Solid Blocks Section */}
      <section className="section-grey section-padding">
        <div className="container-custom">
          <div className="mb-10">
            <h2 className="heading-md text-foreground mb-2">Solid Blocks</h2>
            <p className="text-muted-foreground">
              Maximum density and strength for structural applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solidBlocks.map((block) => (
              <ProductCard key={block.name} {...block} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-muted rounded-2xl p-8 md:p-12 border border-border">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="heading-md text-foreground mb-4">
                Need Help Choosing the Right Block?
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Message us directly on WhatsApp for expert advice and pricing tailored to your project needs.
              </p>
              <a 
                href="https://wa.me/233249210019?text=Hello!%20I%20need%20help%20choosing%20the%20right%20blocks%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
