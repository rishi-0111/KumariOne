'use client';

import { useState } from 'react';
import { Search, Pencil, Trash2, UserX } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const users = [
  {
    id: '001',
    name: 'Ramesh Kumar',
    email: 'ramesh@example.com',
    role: 'Tourist',
    status: 'Active',
    joinDate: '2024-01-15',
  },
  {
    id: '002',
    name: 'Priya Singh',
    email: 'priya@example.com',
    role: 'Business Owner',
    status: 'Active',
    joinDate: '2024-02-20',
  },
  {
    id: '003',
    name: 'Kumar Reddy',
    email: 'kumar@example.com',
    role: 'Tribal Vendor',
    status: 'Inactive',
    joinDate: '2024-01-05',
  },
  {
    id: '004',
    name: 'Anjali Sharma',
    email: 'anjali@example.com',
    role: 'Tourist',
    status: 'Active',
    joinDate: '2024-03-10',
  },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadge = (role: string) => {
    const colors: Record<string, string> = {
      Tourist: 'bg-blue-100 text-blue-800',
      'Business Owner': 'bg-green-100 text-green-800',
      'Tribal Vendor': 'bg-orange-100 text-orange-800',
      Admin: 'bg-purple-100 text-purple-800',
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const getStatusBadge = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500"
          />
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                  Join Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">{user.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <ActionButton icon={Pencil} label="Edit" variant="edit" />
                      <ActionButton icon={UserX} label="Deactivate" variant="warning" />
                      <ActionButton icon={Trash2} label="Delete" variant="danger" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {filteredUsers.length} of {users.length} users
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">Previous</button>
          <div className="flex gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded-lg ${
                  page === 1
                    ? 'bg-purple-600 text-white'
                    : 'border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
