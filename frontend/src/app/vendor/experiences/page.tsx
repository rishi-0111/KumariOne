'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, MapPin, Calendar, Clock, Plus, Edit3, Trash2, Star } from 'lucide-react';
import Link from 'next/link';

const experiences = [
  {
    id: 1,
    title: 'Tribal Bamboo Weaving Workshop',
    location: 'Thiruvananthapuram, Kerala',
    price: '₹499/person',
    duration: '2 hours',
    capacity: '1-8 people',
    rating: 4.9,
    reviews: 24,
    bookings: 45,
  },
  {
    id: 2,
    title: 'Traditional Beadwork Craft Class',
    location: 'Kanyakumari, Tamil Nadu',
    price: '₹399/person',
    duration: '3 hours',
    capacity: '1-10 people',
    rating: 4.8,
    reviews: 18,
    bookings: 32,
  },
  {
    id: 3,
    title: 'Wood Carving Masterclass',
    location: 'Thiruvananthapuram, Kerala',
    price: '₹599/person',
    duration: '4 hours',
    capacity: '1-6 people',
    rating: 5.0,
    reviews: 12,
    bookings: 28,
  },
];

export default function VendorExperiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.experience-card');
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
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Cultural Experiences</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Manage workshops and cultural activities</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Plus size={20} />
              Create Experience
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Active Experiences', value: '3', icon: MapPin, color: 'purple' },
            { label: 'Total Bookings', value: '105', icon: Calendar, color: 'blue' },
            { label: 'Avg Rating', value: '4.9★', icon: Star, color: 'amber' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="stat-card bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experiences Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <h3 className="font-bold text-lg">{exp.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="text-purple-600 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Location</p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Duration & Capacity */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <Clock className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Duration</p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="text-purple-600 flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Capacity</p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {exp.capacity}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price & Rating */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Price</p>
                    <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {exp.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < Math.floor(exp.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                      {exp.reviews} reviews
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Total Bookings</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">{exp.bookings}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
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
