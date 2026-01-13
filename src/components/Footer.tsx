import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-light tracking-widest">
              KARAMA
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Musdaf's premium fashion shop. Quality pieces designed to last.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/shop?category=women" className="hover:text-black transition-colors">Women</Link></li>
              <li><Link to="/shop?category=men" className="hover:text-black transition-colors">Men</Link></li>
              <li><Link to="/shop?category=accessories" className="hover:text-black transition-colors">Accessories</Link></li>
              <li><Link to="/shop" className="hover:text-black transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Customer Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Stay in Touch</h4>
            <p className="text-sm text-gray-500 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-800 transition-colors text-sm"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 KARAMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
