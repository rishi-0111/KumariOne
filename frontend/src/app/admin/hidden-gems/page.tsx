'use client';

import { Star, Pencil, Trash2 } from 'lucide-react';
import ActionButton from '@/components/admin/ActionButton';

const hiddenGems = [
  {
    id: 'HG001',
    name: 'Chettinad Palace',
    location: 'Tamil Nadu',
    popularityScore: 72,
  },
  {
    id: 'HG002',
    name: 'Majuli Island',
    location: 'Assam',
    popularityScore: 85,
  },
  {
    id: 'HG003',
    name: 'Chitrakoot Falls',
    location: 'Madhya Pradesh',
    popularityScore: 68,
  },
];

export default function HiddenGemsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Hidden Gems</h2>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors">
          Add Gem
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hiddenGems.map((gem) => (
          <div
            key={gem.id}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{gem.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{gem.location}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-gray-700">Popularity Score</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${gem.popularityScore}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold text-purple-600 mt-2">
                {gem.popularityScore}%
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-yellow-50 text-yellow-600 hover:bg-yellow-100 rounded-lg transition-colors font-medium text-sm">
                <Star size={18} />
                Promote
              </button>
              <ActionButton icon={Pencil} label="Edit" variant="edit" />
              <ActionButton icon={Trash2} label="Delete" variant="danger" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
