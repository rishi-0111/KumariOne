'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  BarChart3, Package, ShoppingCart, Music, TrendingUp, Star, 
  MapPin, Home, Settings, Bell, HelpCircle, AlertCircle,
  Plus, ArrowRight, Eye, Zap
} from 'lucide-react';
import Link from 'next/link';

interface StatCard {
  label: string;
  value: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  color: string;
  trend?: string;
}

const stats: StatCard[] = [
  {
    label: 'Total Sales',
    value: '₹45,320',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
    trend: '+12.5%',
  },
  {
    label: 'Products Sold',
    value: '124',
    icon: Package,
    color: 'from-blue-500 to-blue-600',
    trend: '+8',
  },
  {
    label: 'Active Orders',
    value: '12',
    icon: ShoppingCart,
    color: 'from-green-500 to-green-600',
    trend: '3 pending',
  },
  {
    label: 'Customer Rating',
    value: '4.8/5',
    icon: Star,
    color: 'from-amber-500 to-amber-600',
    trend: '247 reviews',
  },
];

export default function VendorDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.stat-card, .feature-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">Kani Craft Cooperative</h1>
              <div className="flex items-center gap-2 mt-2 text-purple-100">
                <MapPin size={18} />
                <span>Thiruvananthapuram, Kerala</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2.5 bg-white/20 hover:bg-white/30 rounded-xl transition-all">
                <Bell size={22} />
              </button>
              <button className="p-2.5 bg-white/20 hover:bg-white/30 rounded-xl transition-all">
                <Settings size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div ref={containerRef} className="space-y-12">
          {/* Statistics Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Your Business Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="stat-card bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      {stat.trend && (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          stat.trend.startsWith('+') 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {stat.trend}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature Cards */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Actions</h2>
              <Link href="/vendor/products" className="text-purple-600 hover:text-purple-700 font-semibold text-sm flex items-center gap-2">
                View All <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'My Products',
                  desc: 'Upload and manage handmade items',
                  icon: Package,
                  href: '/vendor/products',
                  color: 'from-purple-500 to-purple-600',
                  stats: '24 products',
                },
                {
                  title: 'Orders',
                  desc: 'View and process customer orders',
                  icon: ShoppingCart,
                  href: '/vendor/orders',
                  color: 'from-blue-500 to-blue-600',
                  stats: '12 pending',
                },
                {
                  title: 'Cultural Experiences',
                  desc: 'Offer workshops and village tours',
                  icon: Music,
                  href: '/vendor/experiences',
                  color: 'from-pink-500 to-pink-600',
                  stats: '8 offerings',
                },
                {
                  title: 'Revenue Tracker',
                  desc: 'Monitor earnings and sales trends',
                  icon: TrendingUp,
                  href: '/vendor/revenue',
                  color: 'from-green-500 to-green-600',
                  stats: 'March: ₹45K',
                },
                {
                  title: 'Customer Reviews',
                  desc: 'See ratings from happy buyers',
                  icon: Star,
                  href: '/vendor/reviews',
                  color: 'from-amber-500 to-amber-600',
                  stats: '4.8★ (247)',
                },
                {
                  title: 'Story & Heritage',
                  desc: 'Share your craft heritage story',
                  icon: Eye,
                  href: '/vendor/story',
                  color: 'from-indigo-500 to-indigo-600',
                  stats: '2 stories',
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Link key={idx} href={feature.href}>
                    <div className="feature-card bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} group-hover:scale-110 transition-transform`}>
                          <Icon size={24} className="text-white" />
                        </div>
                        <span className="text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        {feature.desc}
                      </p>
                      <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        {feature.stats}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Upload Product CTA */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Ready to add more products?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Upload your latest creations and reach more customers across India
                </p>
              </div>
              <Link href="/vendor/products/upload">
                <button className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap">
                  <Plus size={20} />
                  Add Product
                </button>
              </Link>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recent Activities</h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-100 dark:divide-slate-800">
                {[
                  { action: 'New order received', desc: 'Customer ordered 5 handwoven baskets', time: '2 hours ago', icon: ShoppingCart },
                  { action: 'Product approved', desc: 'Your tribal painting listing is now live', time: '1 day ago', icon: Zap },
                  { action: 'Review added', desc: 'Customer left a 5-star review on bamboo crafts', time: '3 days ago', icon: Star },
                ].map((activity, idx) => {
                  const ActivityIcon = activity.icon;
                  return (
                    <div key={idx} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-center gap-4">
                      <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <ActivityIcon size={18} className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">{activity.action}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{activity.desc}</p>
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap">{activity.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
