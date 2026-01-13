import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="underline">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    
    addItem(product, selectedSize, selectedColor, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black mb-8">
        <ChevronLeft size={16} /> Back to shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              {product.new && (
                <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded mb-2">
                  New Arrival
                </span>
              )}
              <h1 className="text-3xl font-light">{product.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Color selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">
              Color: <span className="font-normal text-gray-500">{selectedColor || 'Select a color'}</span>
            </h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                    selectedColor === color.name ? 'border-black scale-110' : 'border-gray-200'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <Check size={16} className={color.hex === '#FFFFFF' || color.hex === '#FFFDD0' || color.hex === '#FFFFF0' ? 'text-black' : 'text-white'} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">
              Size: <span className="font-normal text-gray-500">{selectedSize || 'Select a size'}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[48px] px-4 py-2 border rounded-lg text-sm transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3">Quantity</h3>
            <div className="inline-flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="p-3 hover:bg-gray-50 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="px-6 py-3 text-center min-w-[60px]">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="p-3 hover:bg-gray-50 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
            className={`w-full py-4 rounded-lg text-sm tracking-wide transition-all ${
              isAdded
                ? 'bg-green-600 text-white'
                : !selectedSize || !selectedColor
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center justify-center gap-2">
                <Check size={16} /> Added to Cart
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>

          {(!selectedSize || !selectedColor) && (
            <p className="text-sm text-gray-500 text-center mt-2">
              Please select {!selectedColor && 'a color'}{!selectedColor && !selectedSize && ' and '}{!selectedSize && 'a size'}
            </p>
          )}

          {/* Details accordion */}
          <div className="mt-12 border-t border-gray-100 pt-8">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer py-3 text-sm font-medium">
                Product Details
                <Plus size={16} className="group-open:hidden" />
                <Minus size={16} className="hidden group-open:block" />
              </summary>
              <div className="pb-4 text-sm text-gray-600">
                <ul className="space-y-2">
                  <li>Category: {product.category}</li>
                  <li>Subcategory: {product.subcategory}</li>
                  <li>Available sizes: {product.sizes.join(', ')}</li>
                </ul>
              </div>
            </details>
            <details className="group border-t border-gray-100">
              <summary className="flex items-center justify-between cursor-pointer py-3 text-sm font-medium">
                Shipping & Returns
                <Plus size={16} className="group-open:hidden" />
                <Minus size={16} className="hidden group-open:block" />
              </summary>
              <div className="pb-4 text-sm text-gray-600">
                <p>Free shipping on orders over $100. Standard delivery 3-5 business days.</p>
                <p className="mt-2">Free returns within 30 days of purchase.</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-light mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
