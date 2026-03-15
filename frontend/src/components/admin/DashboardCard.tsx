'use client';

import { TrendingUp } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  change: string;
  bgColor: string;
  iconColor: string;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
  change,
  bgColor,
  iconColor,
}: DashboardCardProps) {
  const isPositive = !change.startsWith('-');

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
              <TrendingUp
                size={16}
                className={isPositive ? 'text-green-600' : 'text-red-600'}
              />
              <span
                className={`text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {change}
              </span>
            </div>
            <span className="text-xs text-gray-500">from last month</span>
          </div>
        </div>
        <div className={`${bgColor} rounded-lg p-3`}>
          <Icon size={24} className={iconColor} />
        </div>
      </div>
    </div>
  );
}
