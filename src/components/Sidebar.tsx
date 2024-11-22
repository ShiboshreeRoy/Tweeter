import React from 'react';
import { Home, User, Bell, Mail, Bookmark, Settings, PenSquare } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed h-screen w-64 border-r border-gray-200 p-4">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </div>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center space-x-4 p-3 w-full rounded-full hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <button className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors">
          <PenSquare className="w-6 h-6" />
          <span className="font-semibold">Tweet</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;