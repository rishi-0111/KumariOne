'use client';

import { CheckCircle, XCircle, Eye } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const businesses = [
  {
    id: 'B001',
    name: 'Hotel Himalaya',
    owner: 'Ramesh Kumar',
    location: 'Manali, Himachal Pradesh',
    status: 'Pending',
  },
  {
    id: 'B002',
    name: 'Adventure Trek Co.',
    owner: 'Priya Singh',
    location: 'Rishikesh, Uttarakhand',
    status: 'Pending',
  },
  {
    id: 'B003',
    name: 'Cafe Mountain View',
    owner: 'Kumar Reddy',
    location: 'Ooty, Tamil Nadu',
    status: 'Pending',
  },
];

export default function BusinessVerification() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Applications</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">42</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Pending Review</p>
          <p className="text-2xl font-bold text-orange-600 mt-2">12</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Approved</p>
          <p className="text-2xl font-bold text-green-600 mt-2">28</p>
        </div>
      </div>

      {/* Business Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {business.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">Owner: {business.owner}</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                {business.status}
              </span>
            </div>

            <div className="mb-4 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Location:</span> {business.location}
              </p>
            </div>

            <div className="mb-4">
              <p className="text-xs font-medium text-gray-700 mb-2">Documents</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  Registration
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  Tax ID
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  License
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition-colors font-medium text-sm">
                <CheckCircle size={18} />
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors font-medium text-sm">
                <XCircle size={18} />
                Reject
              </button>
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Eye size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
