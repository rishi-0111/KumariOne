'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Package, Truck, CheckCircle, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

const myOrders = [
  {
    id: 'ORD-1710432000000',
    date: '2024-03-14',
    items: 3,
    total: '₹4,850',
    status: 'delivered',
    products: ['Handwoven Bamboo Basket', 'Wild Forest Honey', 'Traditional Bead Necklace']
  },
  {
    id: 'ORD-1710345600000',
    date: '2024-03-13',
    items: 1,
    total: '₹2,400',
    status: 'shipped',
    products: ['Tribal Wood Carving']
  },
  {
    id: 'ORD-1710259200000',
    date: '2024-03-12',
    items: 2,
    total: '₹1,450',
    status: 'processing',
    products: ['Handmade Clay Pottery', 'Bronze Temple Lamp']
  },
];

const statusConfig = {
  delivered: { icon: CheckCircle, color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', label: 'Delivered' },
  shipped: { icon: Truck, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400', label: 'Shipped' },
  processing: { icon: Clock, color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400', label: 'Processing' },
};

export default function OrdersPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const orders = containerRef.current.querySelectorAll('.order-card');
      gsap.fromTo(
        orders,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Orders</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Track and manage your orders</p>
        </div>
      </div>

      {/* Content */}
      <div ref={containerRef} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        {myOrders.length === 0 ? (
          <div className="text-center py-20">
            <Package className="mx-auto text-slate-300 dark:text-slate-700 mb-4" size={48} />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-2">No orders yet</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Start shopping for tribal products</p>
            <Link href="/marketplace">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl">
                Browse Products
              </button>
            </Link>
          </div>
        ) : (
          myOrders.map(order => {
            const config = statusConfig[order.status as keyof typeof statusConfig];
            const Icon = config.icon;
            return (
              <div key={order.id} className="order-card bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase">Order ID</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{order.id}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase">Order Date</p>
                    <p className="text-slate-700 dark:text-slate-300">{new Date(order.date).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase">Total Amount</p>
                    <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{order.total}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className={`px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-2 ${config.color}`}>
                      <Icon size={16} />
                      {config.label}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-slate-800 pt-4">
                  <p className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase mb-3">Items ({order.items})</p>
                  <div className="space-y-2">
                    {order.products.map((product, idx) => (
                      <p key={idx} className="text-slate-700 dark:text-slate-300">• {product}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors">
                    <Eye size={16} />
                    View Details
                  </button>
                  {order.status === 'shipped' || order.status === 'delivered' ? (
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-lg transition-colors">
                      <Truck size={16} />
                      Track Order
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
