import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import type { Tweet } from '../types';

interface TweetCardProps {
  tweet: Tweet;
  onLike: (id: string) => void;
  onRetweet: (id: string) => void;
}

const TweetCard: React.FC<TweetCardProps> = ({ tweet, onLike, onRetweet }) => {
  return (
    <article className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        <img
          src={tweet.user.avatar}
          alt={tweet.user.name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold">{tweet.user.name}</h2>
            {tweet.user.verified && (
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <span className="text-gray-500">@{tweet.user.handle}</span>
            <span className="text-gray-500">·</span>
            <time className="text-gray-500">
              {formatDistanceToNow(tweet.timestamp, { addSuffix: true })}
            </time>
          </div>

          <p className="mt-2 text-gray-900">{tweet.content}</p>

          {tweet.images && tweet.images.length > 0 && (
            <div className="mt-3 grid gap-2">
              {tweet.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="rounded-2xl max-h-80 w-full object-cover"
                />
              ))}
            </div>
          )}

          <div className="mt-3 flex justify-between max-w-md">
            <button 
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group"
              onClick={() => {}}
            >
              <div className="p-2 rounded-full group-hover:bg-blue-50">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span>{tweet.replies}</span>
            </button>

            <button 
              className={`flex items-center space-x-2 ${
                tweet.retweeted ? 'text-green-500' : 'text-gray-500 hover:text-green-500'
              } group`}
              onClick={() => onRetweet(tweet.id)}
            >
              <div className="p-2 rounded-full group-hover:bg-green-50">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span>{tweet.retweets}</span>
            </button>

            <button 
              className={`flex items-center space-x-2 ${
                tweet.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              } group`}
              onClick={() => onLike(tweet.id)}
            >
              <div className="p-2 rounded-full group-hover:bg-red-50">
                <Heart className={`w-5 h-5 ${tweet.liked ? 'fill-current' : ''}`} />
              </div>
              <span>{tweet.likes}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 group">
              <div className="p-2 rounded-full group-hover:bg-blue-50">
                <Share className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TweetCard;