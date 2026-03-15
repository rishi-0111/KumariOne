'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Package, Truck, CheckCircle, Clock, AlertCircle, MessageCircle } from 'lucide-react';

const orders = [
  {
    id: '#ORD-2401',
    customer: 'Priya Sharma',
    product: 'Handwoven Bamboo Basket',
    date: '2024-01-15',
    amount: '₹850',
    status: 'pending',
    items: 1,
  },
  {
    id: '#ORD-2402',
    customer: 'Rajesh Kumar',
    product: 'Traditional Bead Necklace',
    date: '2024-01-14',
    amount: '₹550',
    status: 'shipped',
    items: 1,
  },
  {
    id: '#ORD-2403',
    customer: 'Maria Gonzalez',
    product: 'Tribal Wood Carving',
    date: '2024-01-13',
    amount: '₹2,400',
    status: 'delivered',
    items: 1,
  },
  {
    id: '#ORD-2404',
    customer: 'Arjun Patel',
    product: 'Handwoven Bamboo Basket (Qty: 2)',
    date: '2024-01-12',
    amount: '₹1,700',
    status: 'processing',
    items: 2,
  },
];

const statusConfig = {
  pending: { color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400', icon: Clock, label: 'Pending' },
  processing: { color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400', icon: AlertCircle, label: 'Processing' },
  shipped: { color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400', icon: Truck, label: 'Shipped' },
  delivered: { color: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400', icon: CheckCircle, label: 'Delivered' },
};

export default function VendorOrders() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const rows = containerRef.current.querySelectorAll('.order-row');
      gsap.fromTo(
        rows,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Orders</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and track customer orders</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Orders', value: '124', color: 'purple' },
            { label: 'Pending', value: '8', color: 'yellow' },
            { label: 'In Transit', value: '15', color: 'blue' },
            { label: 'Delivered', value: '101', color: 'green' },
          ].map((stat) => (
            <div key={stat.label} className="stat-card bg-white dark:bg-slate-900 rounded-2xl p-4 border border-gray-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{stat.label}</p>
              <p className={`text-2xl font-bold mt-2 text-${stat.color}-600 dark:text-${stat.color}-400`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div ref={containerRef} className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Product</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                const config = statusConfig[order.status as keyof typeof statusConfig];
                const Icon = config.icon;
                return (
                  <tr key={index} className="order-row border-b border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{order.customer}</td>
                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300">{order.product}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">{order.date}</td>
                    <td className="px-6 py-4 font-bold text-purple-600 dark:text-purple-400">{order.amount}</td>
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold ${config.color}`}>
                        <Icon size={16} />
                        {config.label}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                        <MessageCircle size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
