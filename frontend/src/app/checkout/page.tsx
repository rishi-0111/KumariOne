'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowLeft, Trash2, Plus, Minus, Truck, Lock, CreditCard, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [cart]);

  const removeItem = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const updateQuantity = (index: number, qty: number) => {
    if (qty <= 0) return;
    const updated = [...cart];
    updated[index].quantity = qty;
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const getPrice = (price: string) => parseInt(price.replace(/[^0-9]/g, ''));

  const subtotal = cart.reduce((sum, item) => sum + getPrice(item.price) * (item.quantity || 1), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Store order info
    const order = {
      id: `ORD-${Date.now()}`,
      items: cart,
      subtotal,
      shipping,
      tax,
      total,
      paymentMethod,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(order));
    router.push('/order-confirmation');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your cart is empty</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Add some tribal products to get started</p>
          <Link href="/marketplace">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/marketplace">
            <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold mb-4">
              <ArrowLeft size={18} />
              Back to Shopping
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Checkout</h1>
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
            
            {cart.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 flex gap-4">
                <img src={item.img} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
                
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.tribe}</p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400 mt-2">{item.price}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <button onClick={() => removeItem(idx)} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-600 transition-colors">
                    <Trash2 size={18} />
                  </button>
                  
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg px-2 py-1">
                    <button onClick={() => updateQuantity(idx, (item.quantity || 1) - 1)} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded">
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-bold">{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(idx, (item.quantity || 1) + 1)} className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Payment Method */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Payment Method</h2>
              
              {[
                { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                { id: 'upi', label: 'UPI', icon: Smartphone },
                { id: 'netbanking', label: 'Net Banking', icon: Lock },
              ].map(method => {
                const Icon = method.icon;
                return (
                  <label key={method.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border-2 cursor-pointer transition-all" style={{ borderColor: paymentMethod === method.id ? '#9333ea' : '#e5e7eb' }}>
                    <input
                      type="radio"
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="w-4 h-4 accent-purple-600"
                    />
                    <Icon className="text-purple-600" size={20} />
                    <span className="font-bold text-slate-900 dark:text-white">{method.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 h-fit sticky top-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Price Details</h3>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-100 dark:border-slate-800">
              <div className="flex justify-between text-slate-700 dark:text-slate-300">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-slate-300">
                <span>Shipping</span>
                <span className={shipping === 0 ? 'text-green-600' : ''}>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-slate-700 dark:text-slate-300">
                <span>Tax (GST)</span>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6 text-lg font-bold text-slate-900 dark:text-white">
              <span>Total Amount</span>
              <span className="text-purple-600">₹{total}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all"
            >
              <Lock size={18} />
              Proceed to Payment
            </button>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <Truck size={14} />
              <span>Free shipping on orders above ₹2000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
