"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Track {
  name: string;
  artist: string;
  album: string;
  image: string | null;
  url: string;
  playedAt: string;
}

export default function SpotifyTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch('/api/spotify/recently-played');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch tracks');
        }
        
        if (data.tracks && data.tracks.length > 0) {
          setTracks(data.tracks);
        } else {
          setError('No recently played tracks found');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unable to load recent tracks';
        setError(errorMessage);
        console.error('Spotify tracks error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTracks();
  }, []);

  if (loading) {
    return (
      <div className="mt-8">
        <p className="text-sm opacity-60">Loading recent tracks...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <p className="text-sm opacity-60 mb-2">Recently Played on Spotify</p>
        <p className="text-xs opacity-40 italic">{error}</p>
        <p className="text-xs opacity-30 mt-2">
          Make sure SPOTIFY_REFRESH_TOKEN is set in .env.local and you&apos;ve authorized the app.
        </p>
      </div>
    );
  }

  if (tracks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <p className="text-sm uppercase tracking-widest opacity-60 mb-4">Recently Played on Spotify</p>
      <div className="space-y-3">
        {tracks.map((track, index) => (
          <a
            key={index}
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-border hover:opacity-80 transition-opacity group"
          >
            {track.image && (
              <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={track.image}
                  alt={track.album}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate group-hover:opacity-80">
                {track.name}
              </p>
              <p className="text-xs opacity-60 truncate">
                {track.artist} • {track.album}
              </p>
            </div>
            <svg
              className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-opacity"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}

