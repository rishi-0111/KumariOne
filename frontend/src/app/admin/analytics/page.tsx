'use client';

import { BarChart3, LineChart as LineChartIcon } from 'lucide-react';
import AnalyticsChart from '@/components/admin/AnalyticsChart';

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹45,230</p>
          <p className="text-xs text-green-600 mt-2">+12.5% from last month</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Users</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">2,456</p>
          <p className="text-xs text-green-600 mt-2">+8.2% from last month</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">856</p>
          <p className="text-xs text-green-600 mt-2">+15.3% from last month</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Avg. Rating</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">4.6</p>
          <p className="text-xs text-green-600 mt-2">+0.2% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Revenue Trend"
          type="line"
          data={[
            { month: 'Jan', value: 35000 },
            { month: 'Feb', value: 38000 },
            { month: 'Mar', value: 42000 },
            { month: 'Apr', value: 45230 },
          ]}
        />
        <AnalyticsChart
          title="User Growth"
          type="bar"
          data={[
            { name: 'Tourists', value: 1456 },
            { name: 'Business Owners', value: 432 },
            { name: 'Tribal Vendors', value: 568 },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart
          title="Category Breakdown"
          type="bar"
          data={[
            { name: 'Hotels', value: 2400 },
            { name: 'Attractions', value: 1395 },
            { name: 'Restaurants', value: 1080 },
            { name: 'Activities', value: 2780 },
          ]}
        />
        <AnalyticsChart
          title="Monthly Traffic"
          type="area"
          data={[
            { month: 'Week 1', value: 4000 },
            { month: 'Week 2', value: 3000 },
            { month: 'Week 3', value: 5000 },
            { month: 'Week 4', value: 6200 },
          ]}
        />
      </div>
    </div>
  );
}
