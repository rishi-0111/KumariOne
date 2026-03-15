'use client';

import { Menu, Bell, Settings, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const pathname = usePathname();

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      '/admin': 'Dashboard',
      '/admin/users': 'User Management',
      '/admin/businesses': 'Business Verification',
      '/admin/vendors': 'Tribal Vendor Management',
      '/admin/listings': 'Tourism Listings',
      '/admin/hidden-gems': 'Hidden Gems',
      '/admin/bookings': 'Booking Management',
      '/admin/marketplace': 'Marketplace',
      '/admin/reviews': 'Review Moderation',
      '/admin/map-data': 'Map Data',
      '/admin/emergency': 'Emergency Monitoring',
      '/admin/analytics': 'Analytics',
      '/admin/notifications': 'Notifications',
      '/admin/settings': 'Settings',
    };
    return titles[pathname] || 'Admin Panel';
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-8">
      {/* Left: Menu & Title */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-auto">
        <div className="relative w-full">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-purple-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 ml-auto">
        <button className="relative p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
          <Settings size={20} />
        </button>
        <button className="w-10 h-10 rounded-lg bg-purple-600 text-white font-bold hover:bg-purple-700 transition-colors ml-2">
          A
        </button>
      </div>
    </header>
  );
}
