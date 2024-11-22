# Tweeter - A Modern Twitter Clone

![Tweeter Preview](Db/image.png)

A beautiful, responsive Twitter clone built with React, TypeScript, and Tailwind CSS. This project demonstrates modern web development practices with a focus on user experience and clean code.

## Features

- 🎨 Modern, responsive UI with Tailwind CSS
- 💙 Interactive tweet actions (like, retweet, reply)
- 📝 Rich text composer with media upload support
- 🔍 Search functionality
- 📊 Trending topics sidebar
- 👥 User suggestions
- ✨ Verified user badges
- 🖼️ Image support in tweets
- ⚡ Real-time updates
- 📱 Mobile-friendly design

## Tech Stack

- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 📅 date-fns
- 🎯 Lucide Icons
- 🛠️ Vite

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tweeter.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── TweetCard.tsx   # Tweet display component
│   ├── TweetComposer.tsx # Tweet creation component
│   └── RightSidebar.tsx # Trending & suggestions
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Features in Detail

### Tweet Interactions
- Like/unlike tweets
- Retweet/unretweet
- Reply to tweets
- Share tweets

### User Interface
- Clean, modern design
- Responsive layout
- Custom scrollbar
- Hover effects
- Loading states
- Interactive buttons

### Composition
- Rich text input
- Media upload support
- Emoji picker
- Location tagging
- Scheduling options

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by Twitter
- Profile images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
