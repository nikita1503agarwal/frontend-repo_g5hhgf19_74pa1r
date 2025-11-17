import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Oferta', href: '#oferta' },
    { label: 'Proces', href: '#proces' },
    { label: 'Realizacje', href: '#realizacje' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-neutral-800/70 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-lg bg-[#39ff14] blur md:blur-md opacity-40" />
                <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-[#39ff14] to-emerald-500" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Lunolab</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-neutral-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" className="inline-flex items-center rounded-lg bg-[#39ff14] px-4 py-2 text-sm font-semibold text-neutral-900 shadow-[0_0_25px_rgba(57,255,20,.35)] hover:shadow-[0_0_35px_rgba(57,255,20,.55)] transition-shadow">Porozmawiajmy</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-200">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-neutral-800 px-4 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-neutral-300 hover:bg-neutral-900/60 hover:text-white">
                    {item.label}
                  </a>
                ))}
                <a href="#kontakt" className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#39ff14] px-4 py-2 text-sm font-semibold text-neutral-900 shadow-[0_0_25px_rgba(57,255,20,.35)] hover:shadow-[0_0_35px_rgba(57,255,20,.55)] transition-shadow">Porozmawiajmy</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
