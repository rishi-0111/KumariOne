'use client';

import { Trash2, Flag } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const reviews = [
  {
    id: 'R001',
    user: 'Ramesh Kumar',
    place: 'Taj Mahal',
    rating: 5,
    text: 'Amazing experience! Must visit.',
    status: 'Approved',
  },
  {
    id: 'R002',
    user: 'Priya Singh',
    place: 'Goa Beach',
    rating: 4,
    text: 'Beautiful beaches, crowded during peak season.',
    status: 'Flagged',
  },
  {
    id: 'R003',
    user: 'Kumar Reddy',
    place: 'Darjeeling Tea Gardens',
    rating: 3,
    text: 'Good but overpriced',
    status: 'Approved',
  },
];

export default function ReviewModeration() {
  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Approved: 'bg-green-100 text-green-800',
      Flagged: 'bg-red-100 text-red-800',
      Pending: 'bg-orange-100 text-orange-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Place
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Review
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
              {reviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {review.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{review.place}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {review.text}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(review.status)}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={Trash2} label="Delete" variant="danger" />
                      <ActionButton icon={Flag} label="Flag" variant="warning" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
