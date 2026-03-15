'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Heart } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';
import AnimatedTableRow from '@/components/admin/AnimatedTableRow';

const emergencyAlerts = [
  {
    id: 'E001',
    user: 'Ramesh Kumar',
    location: 'Taj Mahal, Agra',
    type: 'Medical Emergency',
    time: '2024-03-15 14:30',
    status: 'Active',
  },
  {
    id: 'E002',
    user: 'Priya Singh',
    location: 'Goa Beach',
    type: 'Lost Person',
    time: '2024-03-15 13:45',
    status: 'Resolved',
  },
  {
    id: 'E003',
    user: 'Kumar Reddy',
    location: 'Darjeeling, West Bengal',
    type: 'Accident',
    time: '2024-03-15 12:15',
    status: 'Active',
  },
];

export default function EmergencyMonitoring() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const getStatusBadge = (status: string) => {
    return status === 'Active'
      ? 'bg-red-100 text-red-800'
      : 'bg-green-100 text-green-800';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Alerts</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">287</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-2xl font-bold text-red-600 mt-2">3</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Resolved Today</p>
          <p className="text-2xl font-bold text-green-600 mt-2">12</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Emergency Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {emergencyAlerts.map((alert, index) => (
                <AnimatedTableRow key={alert.id} index={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {alert.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{alert.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{alert.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{alert.time}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(alert.status)}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={Phone} label="Call" variant="success" />
                      <ActionButton icon={Heart} label="Help" variant="danger" />
                    </div>
                  </td>
                </AnimatedTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
