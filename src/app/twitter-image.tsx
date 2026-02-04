import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Virtual Staging Pro - AI-Powered Virtual Staging'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo and Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
            }}
          >
            V
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: 'white',
            }}
          >
            Virtual Staging Pro
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            marginBottom: 60,
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Transform empty rooms into stunning spaces with AI
        </div>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 32px',
            background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
            borderRadius: 50,
            fontSize: 24,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Stage Your First Room Free
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
