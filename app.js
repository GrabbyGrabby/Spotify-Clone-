import React from 'react';
import './index.css';

const songs = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://i.scdn.co/image/ab67616d00001e02b94b4cc577b73aa7356ff23b'
  },
  {
    title: 'Peaches',
    artist: 'Justin Bieber',
    image: 'https://i.scdn.co/image/ab67616d00001e020bce8e3ea177494df0d54a90'
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    image: 'https://i.scdn.co/image/ab67616d00001e02173f204b4a82b0aa0d08b2b0'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-6">
        <h1 className="text-2xl font-bold mb-6">🎵 MySpotify</h1>
        <ul>
          <li className="mb-4">🏠 Home</li>
          <li className="mb-4">🔍 Search</li>
          <li className="mb-4">📚 Library</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-6">Top Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <img src={song.image} alt={song.title} className="w-full rounded mb-4" />
              <h3 className="text-xl font-semibold">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
