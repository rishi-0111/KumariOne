'use client';

import { CheckCircle, Pause, Trash2 } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const vendors = [
  {
    id: 'V001',
    name: 'Tribal Crafts Co.',
    tribe: 'Angami Naga',
    products: 'Handwoven textiles',
    location: 'Nagaland',
    status: 'Active',
  },
  {
    id: 'V002',
    name: 'Kerala Spice Shop',
    tribe: 'Ezhava',
    products: 'Traditional spices',
    location: 'Kerala',
    status: 'Active',
  },
  {
    id: 'V003',
    name: 'Rajasthani Pottery',
    tribe: 'Bishnoi',
    products: 'Clay pottery',
    location: 'Rajasthan',
    status: 'Suspended',
  },
];

export default function VendorManagement() {
  const getStatusBadge = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Vendor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Tribe Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Location
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
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {vendor.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{vendor.tribe}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{vendor.products}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{vendor.location}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(vendor.status)}`}>
                      {vendor.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={CheckCircle} label="Approve" variant="success" />
                      <ActionButton icon={Pause} label="Suspend" variant="warning" />
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
