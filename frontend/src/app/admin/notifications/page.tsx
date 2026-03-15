'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Notifications() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    targetUsers: 'all',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending notification:', formData);
    setFormData({ title: '', message: '', targetUsers: 'all' });
  };

  return (
    <div className="space-y-6">
      {/* Send Notification */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Send Notification</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Notification title"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Notification message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Users
            </label>
            <select
              name="targetUsers"
              value={formData.targetUsers}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Users</option>
              <option value="tourists">Tourists</option>
              <option value="business">Business Owners</option>
              <option value="vendors">Tribal Vendors</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium transition-colors"
          >
            <Send size={20} />
            Send Notification
          </button>
        </form>
      </div>

      {/* Notification History */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h2>
        <div className="space-y-3">
          {[
            {
              id: 1,
              title: 'Platform Maintenance',
              message: 'Scheduled maintenance on Sunday',
              sent: '2024-03-15 10:30',
            },
            {
              id: 2,
              title: 'New Feature Available',
              message: 'Check out our new voice assistant',
              sent: '2024-03-14 15:20',
            },
            {
              id: 3,
              title: 'Security Update',
              message: 'Important security patches applied',
              sent: '2024-03-14 09:00',
            },
          ].map((notification) => (
            <div
              key={notification.id}
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">Sent: {notification.sent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
