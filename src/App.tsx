import { useState } from 'react'
import './App.css'

const LINKS = [
  {
    href: 'https://bookable.online',
    label: 'Book a Session',
    sublabel: 'bookable.online',
    gradient: 'from-[#29ab00] to-[#1e8200]',
    hoverGlow: 'hover:shadow-[0_8px_32px_rgba(41,171,0,0.45)]',
    boxShadow: '0 4px 20px rgba(41,171,0,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
]

const PROJECTS = [
  {
    href: 'https://diningsteward.com',
    label: 'Dining Steward',
    sublabel: 'diningsteward.com',
    gradient: 'from-violet-500 to-indigo-500',
    hoverGlow: 'hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)]',
    boxShadow: '0 4px 20px rgba(99,102,241,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    href: 'https://fibreplanner.com',
    label: 'Fibreplanner',
    sublabel: 'fibreplanner.com',
    gradient: 'from-violet-500 to-indigo-500',
    hoverGlow: 'hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)]',
    boxShadow: '0 4px 20px rgba(99,102,241,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
  },
  {
    href: 'https://tarotpathwork.com',
    label: 'TarotPathwork',
    sublabel: 'tarotpathwork.com',
    gradient: 'from-violet-500 to-indigo-500',
    hoverGlow: 'hover:shadow-[0_8px_32px_rgba(139,92,246,0.45)]',
    boxShadow: '0 4px 20px rgba(99,102,241,0.25)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
      </svg>
    ),
  },
]

const SOCIALS = [
  {
    href: 'https://github.com/mknapp360',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/knapponthejob',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const EMAIL = 'martin@knapponthejob.com'

// Number is assembled at runtime to avoid plain-text scraping
const waHref = () => {
  const parts = ['44', '756', '208', '0026']
  return `https://wa.me/${parts.join('')}`
}

function LinkButton({ href, label, sublabel, gradient, hoverGlow, boxShadow, icon }: {
  href: string
  label: string
  sublabel: string
  gradient: string
  hoverGlow: string
  boxShadow: string
  icon: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 w-full px-5 py-4 rounded-2xl bg-gradient-to-r ${gradient} text-white font-semibold text-sm transition-all duration-300 ${hoverGlow} hover:scale-[1.02] active:scale-[0.98]`}
      style={{ boxShadow }}
    >
      <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-base">{label}</span>
        <span className="text-white/60 text-xs font-normal">{sublabel}</span>
      </span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

function App() {
  const [copied, setCopied] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden bg-[#0f0c29]"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Card */}
      <div className="relative w-full max-w-sm">
        <div
          className="rounded-3xl p-8 flex flex-col items-center gap-6 border border-white/10"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl ring-2 ring-violet-500/40">
              <img src="/selfie.jpg" alt="Martin Knapp" className="w-full h-full object-cover" />
            </div>
            <span
              className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#302b63] shadow"
              title="Available for work"
            />
          </div>

          {/* Name & title */}
          <div className="text-center space-y-1.5">
            <h1 className="text-white font-semibold text-2xl tracking-tight leading-none">
              Martin Knapp
            </h1>
            <p className="text-white/50 text-sm font-medium tracking-wide uppercase">
              Software &amp; MIS automation <br></br> AI &amp; Machine Learning
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/30 hover:bg-white/10"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Email copy */}
          <button
            onClick={copyEmail}
            className="group flex items-center gap-2 text-white/40 hover:text-white/70 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-sm">{copied ? 'Copied!' : EMAIL}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
            </svg>
          </button>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* CTA Buttons */}
          <div className="w-full space-y-3">
            {LINKS.map((link) => (
              <LinkButton key={link.href} {...link} />
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* My Work toggle */}
          <div className="w-full space-y-3">
            <button
              onClick={() => setWorkOpen((o) => !o)}
              className="group flex items-center justify-between w-full text-white/70 hover:text-white transition-colors duration-200"
            >
              <h2 className="text-base font-semibold tracking-tight">My Work</h2>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`w-4 h-4 transition-transform duration-300 ${workOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Collapsible project list */}
            <div
              className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
                workOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {PROJECTS.map((project) => (
                <LinkButton key={project.href} {...project} />
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-white/20 text-xs mt-6 tracking-wide">
          knapponthejob.com
        </p>
      </div>

      {/* WhatsApp floating button */}
      <a
        href={waHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200"
        style={{
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}

export default App
