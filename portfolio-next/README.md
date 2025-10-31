# Portfolio Next

A minimal portfolio using Next.js 14, Tailwind CSS, Framer Motion, and next-themes.

## Setup

```bash
npm install
npm run dev
```

## Env (optional for real email sending)

```
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_TO=you@example.com
CONTACT_FROM=no-reply@example.com
```

## Spotify Integration (optional)

To display recently played tracks on the about page, you'll need Spotify API credentials:

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Get your Client ID and Client Secret
4. Set the redirect URI to `http://localhost:3000/api/spotify/callback` (or your production URL)
5. Use [this tool](https://developer.spotify.com/documentation/web-api/tutorials/code-flow) or a library to get a refresh token
6. Add to your `.env.local`:

```
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

**Note:** The refresh token can be obtained by following Spotify's OAuth flow. You'll need to authorize your app once to get a refresh token that doesn't expire.