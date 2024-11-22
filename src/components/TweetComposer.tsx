import React, { useState } from 'react';
import { Image, Smile, MapPin, Calendar } from 'lucide-react';

const TweetComposer = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tweet submission
    setContent('');
  };

  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex space-x-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Your avatar"
          className="w-12 h-12 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full resize-none border-0 focus:ring-0 text-lg placeholder-gray-500 mb-3 min-h-[100px]"
          />
          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <div className="flex space-x-2">
              <button type="button" className="text-blue-500 p-2 hover:bg-blue-50 rounded-full">
                <Image className="w-5 h-5" />
              </button>
              <button type="button" className="text-blue-500 p-2 hover:bg-blue-50 rounded-full">
                <Smile className="w-5 h-5" />
              </button>
              <button type="button" className="text-blue-500 p-2 hover:bg-blue-50 rounded-full">
                <MapPin className="w-5 h-5" />
              </button>
              <button type="button" className="text-blue-500 p-2 hover:bg-blue-50 rounded-full">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
            <button
              type="submit"
              disabled={!content.trim()}
              className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetComposer;