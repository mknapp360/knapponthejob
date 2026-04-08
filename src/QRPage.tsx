import { QRCodeSVG } from 'qrcode.react'
import { useNavigate } from 'react-router-dom'

// vCard assembled at runtime — keeps contact details out of plain-text source
function buildVCard() {
  const email = ['martin', '@', 'knapponthejob.com'].join('')
  const tel = ['+44', '756', '208', '0026'].join('')
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Martin Knapp',
    `TEL;TYPE=CELL:${tel}`,
    `EMAIL:${email}`,
    'URL:https://knapponthejob.com',
    'END:VCARD',
  ].join('\n')
}

export default function QRPage() {
  const navigate = useNavigate()
  const vcard = buildVCard()

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col items-center gap-8 w-full max-w-xs">

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="self-start flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-200 text-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        {/* Card */}
        <div
          className="w-full rounded-3xl p-8 flex flex-col items-center gap-6 border border-white/10"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}
        >
          <div className="text-center space-y-1">
            <h1 className="text-white font-semibold text-xl tracking-tight">Save my contact</h1>
            <p className="text-white/40 text-sm">Scan with your phone camera</p>
          </div>

          {/* QR code */}
          <div className="p-4 bg-white rounded-2xl shadow-xl">
            <QRCodeSVG
              value={vcard}
              size={200}
              bgColor="#ffffff"
              fgColor="#0f0c29"
              level="M"
            />
          </div>

          {/* What they'll get */}
          <div className="w-full space-y-2">
            {[
              { label: 'Name', value: 'Martin Knapp' },
              { label: 'Email', value: 'martin@knapponthejob.com.com' },
              { label: 'Phone', value: '+44 7562 080026' },
              { label: 'Website', value: 'knapponthejob.com' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-white/30 w-16">{label}</span>
                <span className="text-white/70">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/20 text-xs text-center">
          Point your camera at the code — no app needed
        </p>
      </div>
    </div>
  )
}
