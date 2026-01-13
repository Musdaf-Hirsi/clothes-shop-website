import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts, categories } from '../data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-6">
              New Season Arrivals
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover the latest trends in contemporary fashion
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-sm tracking-wide hover:bg-gray-100 transition-colors"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-light tracking-wide text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl tracking-widest font-light">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-light tracking-wide">Featured Products</h2>
            <Link
              to="/shop"
              className="text-sm tracking-wide hover:underline flex items-center gap-1"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
            alt="Sale Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="px-8 md:px-16 text-white">
              <p className="text-sm tracking-widest mb-2">LIMITED TIME</p>
              <h3 className="text-3xl md:text-5xl font-light mb-4">
                Up to 30% Off
              </h3>
              <p className="text-lg opacity-90 mb-6">
                On selected items from our new collection
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 text-sm tracking-wide hover:bg-white hover:text-black transition-colors"
              >
                Shop Sale <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-medium mb-2">Free Shipping</h4>
              <p className="text-sm text-gray-500">On orders over $100</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Easy Returns</h4>
              <p className="text-sm text-gray-500">30-day return policy</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Secure Payment</h4>
              <p className="text-sm text-gray-500">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
