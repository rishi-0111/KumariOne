'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TrendingUp, DollarSign, ShoppingCart, Calendar, Download } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenue: 12400, orders: 45 },
  { month: 'Feb', revenue: 15600, orders: 52 },
  { month: 'Mar', revenue: 18900, orders: 68 },
  { month: 'Apr', revenue: 22100, orders: 75 },
  { month: 'May', revenue: 24500, orders: 92 },
  { month: 'Jun', revenue: 28700, orders: 104 },
];

const monthlyBreakdown = [
  { category: 'Products Sales', amount: '₹18,450', percentage: 62 },
  { category: 'Experience Bookings', amount: '₹8,950', percentage: 30 },
  { category: 'Commissions & Fees', amount: '-₹2,100', percentage: 8, isNegative: true },
];

export default function VendorRevenue() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.stat-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll('.chart-bar');
      gsap.fromTo(
        bars,
        { scaleY: 0, transformOrigin: '0 100%' },
        { scaleY: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Revenue Tracker</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Monitor your earnings and sales trends</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl transition-all">
              <Download size={18} />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Revenue', value: '₹128,550', trend: '+12%', icon: DollarSign, color: 'purple' },
            { label: 'This Month', value: '₹28,700', trend: '+16%', icon: TrendingUp, color: 'green' },
            { label: 'Total Orders', value: '438', trend: '+8%', icon: ShoppingCart, color: 'blue' },
            { label: 'Avg Order Value', value: '₹1,145', trend: '+3%', icon: DollarSign, color: 'amber' },
          ].map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="stat-card bg-white dark:bg-slate-900 rounded-2xl p-6 border border-gray-100 dark:border-slate-800">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-600`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-lg">
                    {metric.trend}
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">{metric.label}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white mt-2">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Revenue & Orders (Last 6 Months)</h3>
            
            <div ref={chartRef} className="flex items-end justify-center gap-3 h-64">
              {revenueData.map((data, index) => {
                const height = (data.revenue / maxRevenue) * 100;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div className="relative w-full h-48 flex items-end justify-center group">
                      <div
                        className="chart-bar w-8 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t-lg hover:shadow-xl transition-shadow cursor-pointer relative"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                          ₹{data.revenue}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-400">{data.month}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Average Monthly Revenue</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">₹20,441</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-600 dark:text-slate-400">Growth Rate</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">+19.4%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">This Month Breakdown</h3>

            <div className="space-y-4">
              {monthlyBreakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.category}
                    </p>
                    <span className={`text-sm font-bold ${item.isNegative ? 'text-red-600 dark:text-red-400' : 'text-purple-600 dark:text-purple-400'}`}>
                      {item.amount}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${item.isNegative ? 'bg-red-500' : 'bg-gradient-to-r from-purple-500 to-purple-600'}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <p className="text-xs font-bold text-purple-700 dark:text-purple-400 uppercase mb-1">Net Revenue</p>
                <p className="text-2xl font-bold text-purple-900 dark:text-purple-200">₹25,300</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="mt-8 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Payouts</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
                  <th className="px-8 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Date</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Amount</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Method</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-slate-700 dark:text-slate-300 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: '2024-01-15', amount: '₹8,450', method: 'Bank Transfer', status: 'Completed' },
                  { date: '2024-01-08', amount: '₹12,300', method: 'Bank Transfer', status: 'Completed' },
                  { date: '2024-01-01', amount: '₹7,850', method: 'Bank Transfer', status: 'Completed' },
                ].map((payout, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-8 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{payout.date}</td>
                    <td className="px-8 py-4 text-sm font-bold text-slate-900 dark:text-white">{payout.amount}</td>
                    <td className="px-8 py-4 text-sm text-slate-600 dark:text-slate-400">{payout.method}</td>
                    <td className="px-8 py-4">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-lg">
                        {payout.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
