'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { ShoppingCart, Heart, Search, Tag, ShoppingBag } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const products = [
  { id: 1,  name: 'Handwoven Bamboo Basket',    tribe: 'Kani Tribe',        price: '₹850',  img: 'https://images.unsplash.com/photo-1544473489-148ca9849503?auto=format&w=400' },
  { id: 2,  name: 'Wild Forest Honey',           tribe: 'Forest Dwellers',   price: '₹420',  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&w=400' },
  { id: 3,  name: 'Tribal Wood Carving',         tribe: 'Hill Tribes',       price: '₹2,400',img: 'https://images.unsplash.com/photo-1610433245465-985bc8888062?auto=format&w=400' },
  { id: 4,  name: 'Traditional Bead Necklace',   tribe: 'Coastal Tribes',    price: '₹550',  img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&w=400' },
  { id: 5,  name: 'Herbal Medicinal Tea',        tribe: 'Western Ghats',     price: '₹280',  img: 'https://images.unsplash.com/photo-1544787210-2211d247156e?auto=format&w=400' },
  { id: 6,  name: 'Handmade Clay Pottery',       tribe: 'Ancient Potters',   price: '₹1,200',img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&w=400' },
  { id: 7,  name: 'Palm Leaf Handicraft',        tribe: 'Nadar Community',   price: '₹650',  img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&w=400' },
  { id: 8,  name: 'Tribal Painting (Framed)',    tribe: 'Irular Tribe',      price: '₹1,800',img: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&w=400' },
  { id: 9,  name: 'Cold-Pressed Coconut Oil',    tribe: 'Coastal Farmers',   price: '₹320',  img: 'https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?auto=format&w=400' },
  { id: 10, name: 'Coconut Shell Craft Bowl',    tribe: 'Fishermen Guild',   price: '₹480',  img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&w=400' },
  { id: 11, name: 'Natural Herbal Soap',         tribe: 'Veda Herbal Co.',   price: '₹190',  img: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&w=400' },
  { id: 12, name: 'Handloom Cotton Saree',       tribe: 'Weaver Community',  price: '₹3,200',img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&w=400' },
  { id: 13, name: 'Bronze Temple Lamp',          tribe: 'Viswakarma Tribe',  price: '₹2,100',img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&w=400' },
  { id: 14, name: 'Jute Tote Bag (Printed)',     tribe: 'SHG Women Group',   price: '₹240',  img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&w=400' },
  { id: 15, name: 'Pepper & Spice Pack',         tribe: 'Hill Farmers',      price: '₹160',  img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&w=400' },
  { id: 16, name: 'Woven Grass Mat',             tribe: 'Kani Tribe',        price: '₹900',  img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&w=400' },
  { id: 17, name: 'Terracotta Wall Plate',       tribe: 'Ancient Potters',   price: '₹750',  img: 'https://images.unsplash.com/photo-1620873869264-df0ef6558b86?auto=format&w=400' },
  { id: 18, name: 'Tribal Silver Anklet',        tribe: 'Toda Tribe',        price: '₹1,450',img: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&w=400' },
];

export default function MarketplacePage() {
  const { t } = useApp();
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.tribe.toLowerCase().includes(query.toLowerCase())
  );

  const toggleWishlist = (id: number) =>
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <PageHeader title={t('market.title')} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Title row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-100 text-green-700 font-bold text-xs mb-2 uppercase tracking-widest">
              <Tag size={12} />
              Fair Trade
            </div>
            <p className="text-slate-500 dark:text-slate-400">Support {filtered.length} local artisans directly</p>
          </div>
          <button className="relative p-3 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-slate-600 dark:text-slate-400 hover:text-primary">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-5 h-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative group mb-8">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('market.search')}
            className="w-full bg-slate-50 dark:bg-slate-800 dark:text-white rounded-2xl py-4 pl-14 pr-5 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary/20 font-medium transition-all"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {filtered.map(product => (
            <div key={product.id} className="modern-card overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&w=400'; }}
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2.5 right-2.5 p-1.5 bg-white/90 dark:bg-slate-900/90 rounded-lg shadow-sm text-slate-400 hover:text-rose-500 transition-colors"
                >
                  <Heart size={14} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} className={wishlist.includes(product.id) ? 'text-rose-500' : ''} />
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  <ShoppingBag size={10} className="text-primary" />
                  <span className="truncate">{product.tribe}</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 mb-1 leading-tight">{product.name}</p>
                <p className="text-primary font-black text-base mb-3">{product.price}</p>
                <button
                  onClick={() => setCartCount(c => c + 1)}
                  className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-dark transition-all active:scale-95"
                >
                  {t('market.add_cart')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold text-lg">
            No products found for &ldquo;{query}&rdquo;
          </div>
        )}
      </section>
    </div>
  );
}
