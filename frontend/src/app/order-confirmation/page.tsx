'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Check, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' }
      );
    }
  }, [order]);

  if (!order) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 dark:text-slate-400">Loading order details...</p>
        </div>
      </div>
    );
  }

  const steps = [
    { icon: CheckCircle, label: 'Order Placed', status: 'completed' },
    { icon: Clock, label: 'Processing', status: 'pending' },
    { icon: Package, label: 'Shipped', status: 'pending' },
    { icon: Truck, label: 'Delivered', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Success Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" style={{ width: '80px', height: '80px' }} />
              <Check size={48} className="absolute inset-0 m-auto" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-green-100">Thank you for supporting tribal artisans</p>
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Order ID */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 mb-8">
          <h2 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Order Number</h2>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">{order.id}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Placed on {new Date(order.date).toLocaleDateString()}</p>
        </div>

        {/* Order Timeline */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Status</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="text-center">
                  <div className={`flex items-center justify-center w-12 h-12 mx-auto rounded-full mb-3 ${
                    step.status === 'completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{step.label}</p>
                  {idx < steps.length - 1 && (
                    <div className={`h-0.5 mt-6 mb-6 ${step.status === 'completed' ? 'bg-green-600' : 'bg-slate-200 dark:bg-slate-700'}`} style={{marginTop: '-9px', marginBottom: '15px'}} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Items */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item: any, idx: number) => (
              <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800">
                <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.tribe}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900 dark:text-white">₹{parseInt(item.price.replace(/[^0-9]/g, '')) * (item.quantity || 1)}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Qty: {item.quantity || 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 mb-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Price Details</h2>
          <div className="space-y-4 mb-6 pb-6 border-b border-gray-100 dark:border-slate-800">
            <div className="flex justify-between text-slate-700 dark:text-slate-300">
              <span>Subtotal</span>
              <span>₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between text-slate-700 dark:text-slate-300">
              <span>Shipping</span>
              <span>{order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}</span>
            </div>
            <div className="flex justify-between text-slate-700 dark:text-slate-300">
              <span>Tax (GST)</span>
              <span>₹{order.tax}</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
            <span>Total Amount</span>
            <span className="text-purple-600">₹{order.total}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400 uppercase font-bold mb-2">Payment Method</p>
          <p className="text-lg font-bold text-slate-900 dark:text-white capitalize">{order.paymentMethod}</p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/orders">
            <button className="w-full py-3 border border-purple-600 text-purple-600 font-bold rounded-2xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
              View All Orders
            </button>
          </Link>
          <Link href="/marketplace">
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
