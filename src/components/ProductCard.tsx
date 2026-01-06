interface ProductCardProps {
  name: string;
  dimensions: string;
  usage: string;
  image: string;
  type: 'hollow' | 'solid';
}

const ProductCard = ({ name, dimensions, usage, image, type }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover border border-border/50 group">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
            type === 'hollow' 
              ? 'bg-accent text-accent-foreground' 
              : 'bg-primary text-primary-foreground'
          }`}>
            {type} Block
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-foreground mb-3">{name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-muted-foreground">Dimensions:</span>
            <span className="text-foreground">{dimensions}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
          {usage}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
