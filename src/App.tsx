import React, { useState } from 'react';

// Dữ liệu mẫu
const MOCK_DATA = {
  playlist: { title: "Chill Vibes", songCount: 12 },
  artist: { name: "Industrial Band", follower: "1.2M" }
};

export default function App() {
  // State tập trung: Điều khiển nội dung toàn cục
  const [activePane, setActivePane] = useState<'home' | 'playlist' | 'artist'>('home');

  return (
    <div className="flex h-screen bg-black text-white">
      {/* PANE 1: Sidebar (Điều hướng) */}
      <aside className="w-64 bg-zinc-900 p-4 border-r border-zinc-800">
        <button onClick={() => setActivePane('playlist')} className="block p-2">Playlist</button>
        <button onClick={() => setActivePane('artist')} className="block p-2">Artist</button>
      </aside>

      {/* PANE 2: Main Content (Thay đổi nội dung chính) */}
      <main className="flex-1 overflow-y-auto p-8">
        {activePane === 'playlist' && <PlaylistContent data={MOCK_DATA.playlist} />}
        {activePane === 'artist' && <ArtistContent data={MOCK_DATA.artist} />}
        {activePane === 'home' && <div>Trang chủ</div>}
      </main>

      {/* PANE 3: Right Pane (Thông tin phụ - ảnh hưởng bởi PANE 2) */}
      <aside className="w-72 bg-zinc-900 p-4 border-l border-zinc-800">
        <h3 className="text-sm text-zinc-400">Context Panel</h3>
        {/* Pane này hiển thị dữ liệu dựa trên việc Pane 2 đang mở gì */}
        <p>Chi tiết về: {activePane}</p>
      </aside>
    </div>
  );
}

// Các Component con nhận dữ liệu qua props
const PlaylistContent = ({ data }: { data: any }) => <h1>{data.title} ({data.songCount} bài)</h1>;
const ArtistContent = ({ data }: { data: any }) => <h1>{data.name}</h1>;