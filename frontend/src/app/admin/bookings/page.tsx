'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { XCircle, DollarSign } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';
import AnimatedTableRow from '@/components/admin/AnimatedTableRow';

const bookings = [
  {
    id: 'BK001',
    user: 'Ramesh Kumar',
    hotel: 'Hotel Himalaya',
    dates: 'Mar 15-20',
    paymentStatus: 'Paid',
  },
  {
    id: 'BK002',
    user: 'Priya Singh',
    hotel: 'Taj Lake Palace',
    dates: 'Mar 18-25',
    paymentStatus: 'Pending',
  },
  {
    id: 'BK003',
    user: 'Kumar Reddy',
    hotel: 'Backwater Resort',
    dates: 'Mar 10-14',
    paymentStatus: 'Paid',
  },
];

export default function BookingManagement() {
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

  const getPaymentBadge = (status: string) => {
    return status === 'Paid'
      ? 'bg-green-100 text-green-800'
      : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Bookings</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">1,892</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-green-600 mt-2">1,456</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">156</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Booking ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Hotel
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking, index) => (
                <AnimatedTableRow key={booking.id} index={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{booking.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{booking.hotel}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{booking.dates}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPaymentBadge(booking.paymentStatus)}`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={XCircle} label="Cancel" variant="danger" />
                      <ActionButton icon={DollarSign} label="Refund" variant="warning" />
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
