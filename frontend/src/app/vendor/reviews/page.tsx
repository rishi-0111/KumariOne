'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, MessageCircle, ThumbsUp, Flag } from 'lucide-react';

const reviews = [
  {
    id: 1,
    customer: 'Priya Sharma',
    product: 'Handwoven Bamboo Basket',
    rating: 5,
    text: 'Absolutely beautiful! The craftsmanship is incredible. This basket will be a treasure in my home.',
    date: '2024-01-15',
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    customer: 'Maria Gonzalez',
    product: 'Tribal Wood Carving',
    rating: 5,
    text: 'Amazing piece! The detail and artistry are outstanding. I love supporting tribal artisans. Highly recommend!',
    date: '2024-01-12',
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    customer: 'Rajesh Kumar',
    product: 'Traditional Bead Necklace',
    rating: 4,
    text: 'Great quality, lovely design. Exactly as pictured. Shipping was quick. Will buy again!',
    date: '2024-01-10',
    helpful: 12,
    verified: true,
  },
  {
    id: 4,
    customer: 'Sarah Johnson',
    product: 'Tribal Bamboo Basket (Experience)',
    rating: 5,
    text: 'The workshop was an incredible experience! The instructor was so patient and knowledgeable about traditional techniques.',
    date: '2024-01-08',
    helpful: 31,
    verified: true,
  },
];

export default function VendorReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const reviews = containerRef.current.querySelectorAll('.review-card');
      gsap.fromTo(
        reviews,
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Customer Reviews</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">See what customers are saying about your products</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Overall Rating */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-4xl font-bold text-slate-900 dark:text-white">4.8</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">(284 reviews)</p>
          </div>

          {/* Rating Distribution */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Rating Distribution</h3>
            {[5, 4, 3, 2, 1].map(stars => (
              <div key={stars} className="flex items-center gap-3 mb-3">
                <div className="flex gap-1 w-12">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                    style={{ width: `${stars === 5 ? 85 : stars === 4 ? 10 : stars === 3 ? 3 : 1}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 w-6 text-right">
                  {[241, 36, 5, 0, 2][5 - stars]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div ref={containerRef} className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="review-card bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 dark:text-white">{review.customer}</h4>
                    {review.verified && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-lg">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{review.product}</p>
                </div>
                <div className="text-right">
                  <div className="flex gap-1 justify-end mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.date}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                "{review.text}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
                <div>
                  {review.helpful > 0 && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {review.helpful} people found this helpful
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400">
                    <ThumbsUp size={16} />
                  </button>
                  <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400">
                    <Flag size={16} />
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
