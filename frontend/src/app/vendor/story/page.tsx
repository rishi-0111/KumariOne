'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BookOpen, Plus, Edit3, Trash2, Eye, Book, Zap } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'The Art of Bamboo Weaving',
    tribe: 'Kani Kozhikottans',
    date: 'Published Jan 12, 2024',
    excerpt: 'A 200-year tradition of creating intricate bamboo baskets passed down through generations...',
    views: 1240,
    image: 'https://images.unsplash.com/photo-1544473489-148ca9849503?auto=format&w=300',
  },
  {
    id: 2,
    title: 'Tribal Beadwork Heritage',
    tribe: 'Mulari Tribe',
    date: 'Published Dec 28, 2023',
    excerpt: 'Discover the cultural significance of traditional beadwork and its role in tribal ceremonies...',
    views: 856,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&w=300',
  },
  {
    id: 3,
    title: 'Wood Carving Master Class',
    tribe: 'Kadar Tribe',
    date: 'Published Dec 15, 2023',
    excerpt: 'Meet the master craftsmen who preserve centuries-old wood carving techniques in the forests...',
    views: 612,
    image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?auto=format&w=300',
  },
];

export default function VendorStory() {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.story-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Heritage Stories</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Share the cultural narratives behind your crafts</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Plus size={20} />
              New Story
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Info Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800/50">
          <div className="flex gap-3 items-start">
            <Zap className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Share Your Heritage Story</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                Every craft has a story. By sharing the cultural heritage, techniques, and traditions behind your products, 
                you help customers connect with the artistry and give authenticity to your work.
              </p>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map(story => (
            <div
              key={story.id}
              className="story-card bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="inline-block w-fit px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3">
                  <p className="text-xs font-bold text-purple-700 dark:text-purple-400">
                    {story.tribe}
                  </p>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {story.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                  {story.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800 mb-4">
                  <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <Eye size={16} />
                    <span className="text-xs font-semibold">{story.views} views</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{story.date}</p>
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

        {/* Story Writing Guide */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-purple-600" size={28} />
            How to Write a Great Heritage Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Origin & History',
                description: 'Share the history of your craft. When did it start? How was it passed down through generations?',
              },
              {
                title: 'Cultural Significance',
                description: 'Explain the cultural and spiritual importance of your craft in your tribal community.',
              },
              {
                title: 'Techniques & Materials',
                description: 'Describe the traditional techniques used and where materials come from. What makes them unique?',
              },
              {
                title: 'Artisan Profile',
                description: 'Share information about the craftspeople. Their journey, training, and what inspires them.',
              },
              {
                title: 'Sustainability',
                description: 'Highlight how your craft practices are sustainable and respect nature and traditions.',
              },
              {
                title: 'Personal Touch',
                description: 'Add personal anecdotes or interesting facts that make your story memorable and authentic.',
              },
            ].map((tip, index) => (
              <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{tip.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
