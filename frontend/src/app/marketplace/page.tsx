'use client';

import Navbar from '@/components/Navbar';
import { ShoppingBag, Heart, ShoppingCart, Tag, Filter } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const products = [
  { id: 1, name: 'Handwoven Bamboo Basket', price: '₹850', community: 'Kani Tribe', img: 'https://images.unsplash.com/photo-1544473489-148ca9849503?auto=format' },
  { id: 2, name: 'Natural Honey (Wild)', price: '₹420', community: 'Forest Dwellers', img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format' },
  { id: 3, name: 'Tribal Wood Carving', price: '₹2,400', community: 'Hill Tribes', img: 'https://images.unsplash.com/photo-1610433245465-985bc8888062?auto=format' },
  { id: 4, name: 'Traditional Bead Jewelry', price: '₹550', community: 'Coastal Tribes', img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format' },
  { id: 5, name: 'Herbal Medicinal Tea', price: '₹280', community: 'Western Ghats', img: 'https://images.unsplash.com/photo-1544787210-2211d247156e?auto=format' },
  { id: 6, name: 'Handmade Clay Pottery', price: '₹1,200', community: 'Ancient Potters', img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format' },
];

export default function MarketplacePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".product-card", {
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-100 text-green-700 font-bold text-xs mb-3 uppercase tracking-widest">
              <Tag size={14} />
              Fair Trade Marketplace
            </div>
            <h1 className="text-4xl font-black font-display text-slate-900 mb-2">
              Tribal <span className="text-primary">Marketplace</span>
            </h1>
            <p className="text-slate-500 font-medium">Support local artisans and communities directly.</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-3 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 hover:text-primary transition-all">
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">2</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all text-sm">
              <Filter size={18} />
              Filter Products
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card modern-card p-4 group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-5">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-xl text-slate-400 hover:text-rose-500 transition-colors shadow-sm">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-slate-900 font-bold py-3 rounded-xl shadow-xl flex items-center justify-center gap-2 hover:bg-slate-50">
                    <ShoppingCart size={18} className="text-primary" />
                    Quick Add to Cart
                  </button>
                </div>
              </div>
              <div className="px-1">
                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                  <ShoppingBag size={12} className="text-primary" />
                  {product.community}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-lg font-black text-slate-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
