import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Check, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import type { ShippingAddress } from '../data/types';

type Step = 'shipping' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { isAuthenticated, addOrder } = useAuth();
  const [step, setStep] = useState<Step>('shipping');
  const [orderId, setOrderId] = useState<string>('');

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardName: '',
  });

  const shipping = total >= 100 ? 0 : 9.99;
  const grandTotal = total + shipping;

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-light mb-4">Your cart is empty</h1>
        <Link to="/shop" className="underline">Continue shopping</Link>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const order = addOrder(items, grandTotal, shippingAddress);
    setOrderId(order.id);
    clearCart();
    setStep('confirmation');
  };

  const updateShipping = (field: keyof ShippingAddress, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  if (step === 'confirmation') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-light mb-4">Thank You for Your Order!</h1>
        <p className="text-gray-500 mb-2">
          Your order has been placed successfully.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Order ID: {orderId}
        </p>
        <div className="space-x-4">
          {isAuthenticated && (
            <Link
              to="/account"
              className="inline-block bg-black text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors"
            >
              View Order
            </Link>
          )}
          <Link
            to="/shop"
            className="inline-block border border-black px-6 py-3 text-sm hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => step === 'payment' ? setStep('shipping') : navigate('/cart')}
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black mb-8"
      >
        <ChevronLeft size={16} /> {step === 'payment' ? 'Back to shipping' : 'Back to cart'}
      </button>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-7">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-black' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'shipping' ? 'bg-black text-white' : 'bg-gray-200'}`}>
                {step === 'payment' ? <Check size={14} /> : '1'}
              </span>
              <span className="text-sm">Shipping</span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-black' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 'payment' ? 'bg-black text-white' : 'bg-gray-200'}`}>
                2
              </span>
              <span className="text-sm">Payment</span>
            </div>
          </div>

          {step === 'shipping' && (
            <form onSubmit={handleShippingSubmit}>
              <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
              
              {!isAuthenticated && (
                <p className="text-sm text-gray-500 mb-6">
                  Already have an account? <Link to="/login" className="underline">Log in</Link> for a faster checkout.
                </p>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.firstName}
                    onChange={(e) => updateShipping('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.lastName}
                    onChange={(e) => updateShipping('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.address}
                  onChange={(e) => updateShipping('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.city}
                    onChange={(e) => updateShipping('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">State *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.state}
                    onChange={(e) => updateShipping('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    required
                    value={shippingAddress.zipCode}
                    onChange={(e) => updateShipping('zipCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Country *</label>
                  <select
                    value={shippingAddress.country}
                    onChange={(e) => updateShipping('country', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-black text-white py-4 rounded-lg text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                Continue to Payment
              </button>
            </form>
          )}

          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit}>
              <h2 className="text-xl font-medium mb-6">Payment Information</h2>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 flex items-center gap-3">
                <Lock size={16} className="text-gray-400" />
                <span className="text-sm text-gray-500">Your payment information is secure and encrypted</span>
              </div>

              <div>
                <label className="block text-sm mb-2">Card Number *</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={paymentInfo.cardNumber}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardNumber: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <CreditCard size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm mb-2">Name on Card *</label>
                <input
                  type="text"
                  required
                  value={paymentInfo.cardName}
                  onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    value={paymentInfo.expiry}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiry: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">CVV *</label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    value={paymentInfo.cvv}
                    onChange={(e) => setPaymentInfo(prev => ({ ...prev, cvv: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-black text-white py-4 rounded-lg text-sm tracking-wide hover:bg-gray-800 transition-colors"
              >
                Place Order - ${grandTotal.toFixed(2)}
              </button>
            </form>
          )}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-5 mt-8 lg:mt-0">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-6">Order Summary</h2>
            
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="py-4 flex gap-4">
                  <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden">
                    <img src={item.product.images[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.product.name}</p>
                    <p className="text-xs text-gray-500">{item.color} / {item.size}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
