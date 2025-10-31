import { NextResponse } from 'next/server';

interface SpotifyTrack {
  track: {
    name: string;
    artists: Array<{ name: string }>;
    album: {
      name: string;
      images: Array<{ url: string }>;
    };
    external_urls: {
      spotify: string;
    };
  };
  played_at: string;
}

interface SpotifyResponse {
  items: SpotifyTrack[];
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify credentials');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  const data = await response.json();
  return data.access_token;
}

async function getRecentlyPlayed(accessToken: string): Promise<SpotifyTrack[]> {
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recently played tracks');
  }

  const data: SpotifyResponse = await response.json();
  return data.items;
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();
    const tracks = await getRecentlyPlayed(accessToken);

    const formattedTracks = tracks.map((item) => ({
      name: item.track.name,
      artist: item.track.artists.map((a) => a.name).join(', '),
      album: item.track.album.name,
      image: item.track.album.images[0]?.url || null,
      url: item.track.external_urls.spotify,
      playedAt: item.played_at,
    }));

    return NextResponse.json({ tracks: formattedTracks });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch recently played tracks';
    console.error('Spotify API error:', errorMessage);
    
    // Provide more specific error messages
    if (errorMessage.includes('Missing Spotify credentials')) {
      return NextResponse.json(
        { error: 'Spotify credentials not configured. Please set SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN in .env.local' },
        { status: 500 }
      );
    }
    
    if (errorMessage.includes('Failed to get access token')) {
      return NextResponse.json(
        { error: 'Failed to authenticate with Spotify. Please check your refresh token.' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

