import { Link, useNavigate } from 'react-router-dom';
import { User, Package, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AccountPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <User size={64} className="mx-auto text-gray-300 mb-6" />
        <h1 className="text-2xl font-light mb-4">Please Sign In</h1>
        <p className="text-gray-500 mb-8">Sign in to view your account and order history.</p>
        <Link
          to="/login"
          className="inline-block bg-black text-white px-8 py-4 text-sm tracking-wide hover:bg-gray-800 transition-colors"
        >
          Sign In
        </Link>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-light tracking-wide">My Account</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <User size={32} className="text-gray-400" />
            </div>
            <h2 className="text-lg font-medium">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Orders */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
            <Package size={20} /> Order History
          </h2>

          {user.orders.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
              <Link
                to="/shop"
                className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {user.orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      order.status === 'delivered' 
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'shipped'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex gap-4 mb-4">
                    {order.items.slice(0, 3).map((item, index) => (
                      <div key={index} className="w-16 h-20 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="w-16 h-20 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-sm text-gray-500">+{order.items.length - 3}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                    </span>
                    <span className="font-medium">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
