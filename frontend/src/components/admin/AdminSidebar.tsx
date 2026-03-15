'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Building2,
  Store,
  MapPin,
  Sparkles,
  Calendar,
  ShoppingCart,
  MessageSquare,
  Map,
  AlertTriangle,
  BarChart3,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface AdminSidebarProps {
  open: boolean;
  onToggle: () => void;
}

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { label: 'Users', icon: Users, href: '/admin/users' },
  { label: 'Businesses', icon: Building2, href: '/admin/businesses' },
  { label: 'Tribal Vendors', icon: Store, href: '/admin/vendors' },
  { label: 'Tourism Listings', icon: MapPin, href: '/admin/listings' },
  { label: 'Hidden Gems', icon: Sparkles, href: '/admin/hidden-gems' },
  { label: 'Bookings', icon: Calendar, href: '/admin/bookings' },
  { label: 'Marketplace', icon: ShoppingCart, href: '/admin/marketplace' },
  { label: 'Reviews', icon: MessageSquare, href: '/admin/reviews' },
  { label: 'Map Data', icon: Map, href: '/admin/map-data' },
  { label: 'Emergency', icon: AlertTriangle, href: '/admin/emergency' },
  { label: 'Analytics', icon: BarChart3, href: '/admin/analytics' },
  { label: 'Notifications', icon: Bell, href: '/admin/notifications' },
  { label: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminSidebar({ open, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          open ? 'w-60' : 'w-20'
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {open && <h2 className="text-lg font-bold text-purple-600">KumariOne</h2>}
          <button
            onClick={onToggle}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          >
            {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-purple-100 text-purple-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={!open ? item.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                {open && (
                  <span className="text-sm font-medium truncate">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="h-16 border-t border-gray-200 px-2 flex items-center">
          <div className={`w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold ${!open && 'mx-auto'}`}>
            A
          </div>
          {open && (
            <div className="flex-1 ml-3">
              <p className="text-sm font-medium text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}
