export default function CTA() {
  return (
    <section id="kontakt" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Gotowi na automatyzacje AI?</h3>
              <p className="mt-3 text-neutral-300">Opowiedz nam o swoim procesie, a my pokażemy jak skrócić go o tygodnie do godzin. W 48h wrócimy z planem wdrożenia.</p>
              <ul className="mt-4 text-neutral-300 text-sm list-disc list-inside space-y-1">
                <li>Bezpłatna konsultacja 30 min</li>
                <li>Szybka wycena i roadmapa</li>
                <li>Możliwość startu od pilotażu</li>
              </ul>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/40" placeholder="Imię i firma"/>
              <input className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/40" placeholder="Email"/>
              <textarea rows={4} className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#39ff14]/40" placeholder="Opisz krótko proces, który chcesz zautomatyzować" />
              <button className="inline-flex items-center justify-center rounded-lg bg-[#39ff14] px-6 py-3 font-semibold text-neutral-900 shadow-[0_0_25px_rgba(57,255,20,.35)] hover:shadow-[0_0_35px_rgba(57,255,20,.55)] transition-shadow">Wyślij zapytanie</button>
            </form>
          </div>
        </div>
        <p className="mt-6 text-center text-neutral-500 text-sm">© {new Date().getFullYear()} Lunolab. Automatyzacje AI dla firm.</p>
      </div>
    </section>
  )
}
