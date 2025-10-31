import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  
  if (!clientId) {
    return NextResponse.json({ error: 'SPOTIFY_CLIENT_ID not configured' }, { status: 500 });
  }

  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:3000'}/api/spotify/callback`;
  const scope = 'user-read-recently-played';
  const state = Math.random().toString(36).substring(7);

  const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
  })}`;

  return NextResponse.redirect(authUrl);
}

