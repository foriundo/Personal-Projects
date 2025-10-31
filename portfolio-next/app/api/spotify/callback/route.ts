import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return new NextResponse(`Error: ${error}`, { status: 400 });
  }

  if (!code) {
    return new NextResponse('No authorization code provided', { status: 400 });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://127.0.0.1:3000'}/api/spotify/callback`;

  if (!clientId || !clientSecret) {
    return new NextResponse('Spotify credentials not configured', { status: 500 });
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      return new NextResponse(`Failed to get tokens: ${errorText}`, { status: 500 });
    }

    const tokenData = await tokenResponse.json();
    const refreshToken = tokenData.refresh_token;

    // Return HTML page with the refresh token
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <title>Spotify Setup Complete</title>
  <style>
    body { 
      font-family: system-ui, -apple-system, sans-serif; 
      max-width: 600px; 
      margin: 50px auto; 
      padding: 20px;
      background: #f5f5f5;
    }
    .container {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    h1 { color: #1db954; }
    code { 
      background: #f0f0f0; 
      padding: 2px 6px; 
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      word-break: break-all;
    }
    .token-box {
      background: #1db954;
      color: white;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
      word-break: break-all;
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }
    .warning {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>✅ Spotify Setup Complete!</h1>
    <p>Copy your refresh token below and add it to your <code>.env.local</code> file:</p>
    <div class="token-box">${refreshToken}</div>
    <div class="warning">
      <strong>⚠️ Important:</strong> This token will not be shown again. Make sure to save it in your <code>.env.local</code> file as:<br><br>
      <code>SPOTIFY_REFRESH_TOKEN=${refreshToken}</code>
    </div>
    <p>After adding it to <code>.env.local</code>, restart your development server.</p>
  </div>
</body>
</html>`,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  } catch (error) {
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

