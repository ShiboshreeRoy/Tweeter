export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  verified: boolean;
}

export interface Tweet {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
  likes: number;
  retweets: number;
  replies: number;
  images?: string[];
  liked: boolean;
  retweeted: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
  likes: number;
}