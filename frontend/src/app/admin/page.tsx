'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import {
  Users,
  Building2,
  Calendar,
  DollarSign,
  MapPin,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import DashboardCard from '@/components/admin/DashboardCard';
import AnalyticsChart from '@/components/admin/AnalyticsChart';

const analyticsCards = [
  {
    title: 'Total Users',
    value: '2,456',
    icon: Users,
    change: '+12.5%',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Total Businesses',
    value: '432',
    icon: Building2,
    change: '+8.2%',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Total Bookings',
    value: '1,892',
    icon: Calendar,
    change: '+23.1%',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Marketplace Revenue',
    value: '$45,230',
    icon: DollarSign,
    change: '+15.3%',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Active Listings',
    value: '856',
    icon: MapPin,
    change: '+3.2%',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    title: 'Pending Approvals',
    value: '24',
    icon: AlertCircle,
    change: '-5.1%',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
];

export default function AdminDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('[data-card]');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analyticsCards.map((card, index) => (
          <div key={index} data-card>
            <DashboardCard {...card} />
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Tourist Visits per Month"
          type="line"
          data={[
            { month: 'Jan', value: 2400 },
            { month: 'Feb', value: 2210 },
            { month: 'Mar', value: 2290 },
            { month: 'Apr', value: 2000 },
            { month: 'May', value: 2181 },
            { month: 'Jun', value: 2500 },
          ]}
        />
        <AnalyticsChart
          title="Most Visited Locations"
          type="bar"
          data={[
            { name: 'Location A', value: 4000 },
            { name: 'Location B', value: 3000 },
            { name: 'Location C', value: 2000 },
            { name: 'Location D', value: 2780 },
            { name: 'Location E', value: 1890 },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Marketplace Sales Trend"
          type="area"
          data={[
            { month: 'Week 1', value: 1200 },
            { month: 'Week 2', value: 1900 },
            { month: 'Week 3', value: 1500 },
            { month: 'Week 4', value: 2210 },
          ]}
        />
        <AnalyticsChart
          title="Booking Statistics"
          type="bar"
          data={[
            { name: 'Hotels', value: 2400 },
            { name: 'Tours', value: 1398 },
            { name: 'Activities', value: 1080 },
            { name: 'Packages', value: 2780 },
          ]}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/admin/businesses"
            className="p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-all"
          >
            <p className="text-sm font-medium text-gray-900">Approve Businesses</p>
            <p className="text-xs text-gray-500 mt-1">24 pending</p>
          </Link>
          <Link
            href="/admin/vendors"
            className="p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-all"
          >
            <p className="text-sm font-medium text-gray-900">Manage Vendors</p>
            <p className="text-xs text-gray-500 mt-1">156 active</p>
          </Link>
          <Link
            href="/admin/reviews"
            className="p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-all"
          >
            <p className="text-sm font-medium text-gray-900">Moderate Reviews</p>
            <p className="text-xs text-gray-500 mt-1">12 flagged</p>
          </Link>
          <Link
            href="/admin/emergency"
            className="p-3 border border-gray-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-all"
          >
            <p className="text-sm font-medium text-gray-900">Emergency Alerts</p>
            <p className="text-xs text-gray-500 mt-1">3 active</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
