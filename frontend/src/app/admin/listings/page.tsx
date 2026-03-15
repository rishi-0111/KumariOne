'use client';

import { Pencil, Trash2 } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const listings = [
  {
    id: 'T001',
    name: 'Taj Mahal',
    category: 'Monument',
    location: 'Agra, Uttar Pradesh',
    rating: 4.8,
  },
  {
    id: 'T002',
    name: 'Goa Beach',
    category: 'Beach',
    location: 'Goa',
    rating: 4.5,
  },
  {
    id: 'T003',
    name: 'Darjeeling Tea Gardens',
    category: 'Nature',
    location: 'Darjeeling, West Bengal',
    rating: 4.6,
  },
  {
    id: 'T004',
    name: 'Backwaters of Kerala',
    category: 'Nature',
    location: 'Kerala',
    rating: 4.7,
  },
];

export default function TourismListings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">All Listings</h2>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
          Add Listing
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Place Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Rating
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {listing.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    <span className="px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                      {listing.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{listing.location}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium text-gray-900">{listing.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={Pencil} label="Edit" variant="edit" />
                      <ActionButton icon={Trash2} label="Delete" variant="danger" />
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
