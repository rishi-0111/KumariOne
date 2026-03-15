'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Plus, Search, Edit3, Trash2, Eye, Star, Package } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Handwoven Bamboo Basket',
    category: 'Handicrafts',
    price: '₹850',
    sales: 45,
    rating: 4.9,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1544473489-148ca9849503?auto=format&w=300',
  },
  {
    id: 2,
    name: 'Traditional Bead Necklace',
    category: 'Jewelry',
    price: '₹550',
    sales: 28,
    rating: 4.8,
    reviews: 19,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&w=300',
  },
  {
    id: 3,
    name: 'Tribal Wood Carving',
    category: 'Handicrafts',
    price: '₹2,400',
    sales: 12,
    rating: 4.9,
    reviews: 8,
    image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&w=300',
  },
];

export default function VendorProducts() {
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.product-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Products</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and showcase your handmade items</p>
            </div>
            <Link href="/vendor/products/upload">
              <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all">
                <Plus size={20} />
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-600 transition-colors" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products by name..."
              className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl py-4 pl-12 pr-4 border border-gray-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-purple-600/20 font-medium transition-all"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).map(product => (
            <div key={product.id} className="product-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg text-xs font-bold text-purple-600">
                  {product.sales} sold
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="inline-block px-2.5 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-bold mb-2">
                  {product.category}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4 pt-3 border-t border-gray-100 dark:border-slate-800">
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{product.price}</p>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{product.reviews} reviews</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-sm transition-colors">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl text-sm transition-colors">
                    <Edit3 size={16} />
                    Edit
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 font-semibold rounded-xl text-sm transition-colors">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
