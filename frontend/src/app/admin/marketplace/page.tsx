'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, Trash2 } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';
import AnimatedTableRow from '@/components/admin/AnimatedTableRow';

const products = [
  {
    id: 'P001',
    name: 'Handwoven Textile',
    vendor: 'Tribal Crafts Co.',
    price: '₹2,500',
    orders: 156,
    status: 'Active',
  },
  {
    id: 'P002',
    name: 'Traditional Spices',
    vendor: 'Kerala Spice Shop',
    price: '₹450',
    orders: 342,
    status: 'Active',
  },
  {
    id: 'P003',
    name: 'Clay Pottery Set',
    vendor: 'Rajasthani Pottery',
    price: '₹1,800',
    orders: 89,
    status: 'Pending',
  },
];

export default function MarketplaceManagement() {
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
      ? 'bg-green-100 text-green-800'
      : 'bg-orange-100 text-orange-800';
  };

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Products</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">486</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active Products</p>
          <p className="text-2xl font-bold text-green-600 mt-2">456</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Revenue</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">₹45,230</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Vendor
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Orders
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
              {products.map((product, index) => (
                <AnimatedTableRow key={product.id} index={index}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.vendor}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.price}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {product.orders}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={Check} label="Approve" variant="success" />
                      <ActionButton icon={Trash2} label="Remove" variant="danger" />
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
