import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:3000';
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || `${base}/api/spotify/callback`;

  const hasClientId = !!process.env.SPOTIFY_CLIENT_ID;
  const hasClientSecret = !!process.env.SPOTIFY_CLIENT_SECRET;
  const hasRefreshToken = !!process.env.SPOTIFY_REFRESH_TOKEN;

  return NextResponse.json({
    ok: true,
    env: {
      SPOTIFY_CLIENT_ID: hasClientId,
      SPOTIFY_CLIENT_SECRET: hasClientSecret,
      SPOTIFY_REFRESH_TOKEN: hasRefreshToken,
      SPOTIFY_REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI || null,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || null,
    },
    computed: {
      redirectUri,
      currentHost: `${url.protocol}//${url.host}`,
    },
    hint: 'All env keys should be true except refresh token before you authorize. redirectUri must exactly match what is in the Spotify Dashboard.'
  });
}


