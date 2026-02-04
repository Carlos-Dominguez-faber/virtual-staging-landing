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

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: 80,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              30s
            </span>
            <span style={{ fontSize: 20, color: '#64748b' }}>Average Time</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              73%
            </span>
            <span style={{ fontSize: 20, color: '#64748b' }}>More Interest</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              10K+
            </span>
            <span style={{ fontSize: 20, color: '#64748b' }}>Rooms Staged</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
