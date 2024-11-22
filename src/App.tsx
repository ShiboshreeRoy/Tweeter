import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TweetComposer from './components/TweetComposer';
import TweetCard from './components/TweetCard';
import RightSidebar from './components/RightSidebar';
import type { Tweet } from './types';

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: '1',
      user: {
        id: '1',
        name: 'John Doe',
        handle: 'johndoe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        verified: true,
      },
      content: 'Just launched my new website! Check it out at https://example.com 🚀',
      timestamp: new Date('2024-03-10T12:00:00'),
      likes: 42,
      retweets: 12,
      replies: 8,
      liked: false,
      retweeted: false,
    },
    {
      id: '2',
      user: {
        id: '2',
        name: 'Jane Smith',
        handle: 'janesmith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        verified: false,
      },
      content: 'Beautiful sunset today! 🌅',
      timestamp: new Date('2024-03-10T11:30:00'),
      likes: 156,
      retweets: 23,
      replies: 12,
      liked: true,
      retweeted: false,
      images: ['https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'],
    },
  ]);

  const handleLike = (tweetId: string) => {
    setTweets(tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          liked: !tweet.liked,
          likes: tweet.liked ? tweet.likes - 1 : tweet.likes + 1,
        };
      }
      return tweet;
    }));
  };

  const handleRetweet = (tweetId: string) => {
    setTweets(tweets.map(tweet => {
      if (tweet.id === tweetId) {
        return {
          ...tweet,
          retweeted: !tweet.retweeted,
          retweets: tweet.retweeted ? tweet.retweets - 1 : tweet.retweets + 1,
        };
      }
      return tweet;
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        
        <main className="flex-1 min-h-screen border-r border-gray-200 ml-64">
          <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-10 border-b border-gray-200 p-4">
            <h1 className="text-xl font-bold">Home</h1>
          </header>
          
          <TweetComposer />
          
          <div className="divide-y divide-gray-200">
            {tweets.map(tweet => (
              <TweetCard
                key={tweet.id}
                tweet={tweet}
                onLike={handleLike}
                onRetweet={handleRetweet}
              />
            ))}
          </div>
        </main>

        <aside className="sticky top-0 h-screen">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default App;