'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Upload, X, Plus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  'Handicrafts',
  'Jewelry',
  'Textiles',
  'Home Decor',
  'Sculptures',
  'Art & Painting',
];

export default function UploadProduct() {
  const [images, setImages] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, event.target?.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/vendor/products">
            <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold mb-4">
              <ArrowLeft size={18} />
              Back to Products
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Upload New Product</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Share your tribal crafts with our community</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div ref={containerRef} className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-8">
          <form className="space-y-8">
            {/* Product Images */}
            <div>
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-4">Product Images</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Image Upload */}
                <label className="relative group cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-purple-300 dark:border-purple-900 bg-purple-50 dark:bg-purple-900/20 flex flex-col items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/40 transition-all">
                    <Upload className="text-purple-600 group-hover:text-purple-700 transition-colors" size={24} />
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-bold mt-2 text-center">Add Photo</span>
                  </div>
                </label>

                {/* Image Previews */}
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      className="w-32 h-32 rounded-2xl object-cover border border-purple-200 dark:border-purple-800"
                    />
                    <button
                      type="button"
                      onClick={() => setImages(images.filter((_, i) => i !== index))}
                      className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="e.g., Handwoven Bamboo Basket"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Price (₹)</label>
                <input
                  type="number"
                  placeholder="e.g., 850"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Category</label>
                <select className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all">
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Stock Quantity</label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Description</label>
              <textarea
                placeholder="Describe your product, materials used, and care instructions..."
                rows={5}
                className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all resize-none"
              />
            </div>

            {/* Heritage Story */}
            <div>
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Heritage Story</label>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Share the history and cultural significance of your product</p>
              <textarea
                placeholder="Tell the story behind this craft, the tribe it comes from, techniques used..."
                rows={4}
                className="w-full rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white px-4 py-3 font-medium outline-none focus:ring-2 focus:ring-purple-600/20 transition-all resize-none"
              />
            </div>

            {/* Certifications */}
            <div>
              <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3">Certifications</label>
              <div className="space-y-2">
                {['Handmade', 'Eco-Friendly', 'Fair Trade', 'Organic'].map(cert => (
                  <label key={cert} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-lg border-2 border-gray-300 dark:border-slate-600 cursor-pointer accent-purple-600"
                    />
                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-purple-600 transition-colors">{cert}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-slate-800">
              <Link href="/vendor/products" className="flex-1">
                <button type="button" className="w-full px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl transition-colors">
                  Cancel
                </button>
              </Link>
              <button type="submit" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all">
                <Plus size={18} />
                Upload Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
