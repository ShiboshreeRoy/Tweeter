import React from 'react';
import { Search } from 'lucide-react';

const RightSidebar = () => {
  const trends = [
    { topic: 'Technology', tweets: '125K' },
    { topic: 'Programming', tweets: '85K' },
    { topic: 'React', tweets: '65K' },
    { topic: 'JavaScript', tweets: '45K' },
    { topic: 'TypeScript', tweets: '35K' },
  ];

  const suggestions = [
    {
      name: 'Sarah Johnson',
      handle: 'sarahj',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Alex Chen',
      handle: 'alexc',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emma Wilson',
      handle: 'emmaw',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="w-80 p-4 space-y-4">
      <div className="sticky top-0 bg-white pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Tweeter"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Trends for you</h2>
        {trends.map((trend) => (
          <div key={trend.topic} className="py-3 hover:bg-gray-100 cursor-pointer rounded-lg px-2">
            <p className="font-bold">{trend.topic}</p>
            <p className="text-gray-500 text-sm">{trend.tweets} Tweets</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        {suggestions.map((user) => (
          <div key={user.handle} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-gray-500">@{user.handle}</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-gray-800">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;