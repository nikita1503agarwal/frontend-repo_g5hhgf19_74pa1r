import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-950" />

      <div className="relative">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#39ff14]/20 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#39ff14]/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
            >
              Automatyzacje AI dla nowoczesnych firm
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-neutral-300 max-w-xl"
            >
              Lunolab tworzy inteligentne rozwiązania, które skracają procesy, obniżają koszty i zwiększają skalę działania dzięki sztucznej inteligencji.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-lg bg-[#39ff14] px-6 py-3 font-semibold text-neutral-900 shadow-[0_0_25px_rgba(57,255,20,.35)] hover:shadow-[0_0_35px_rgba(57,255,20,.55)] transition-shadow">Umów konsultację</a>
              <a href="#oferta" className="inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 transition-colors">Zobacz ofertę</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-neutral-300/80">
              <div>
                <div className="text-3xl font-extrabold text-white">70%</div>
                <div className="text-sm">szybsze procesy operacyjne</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="text-sm">automatyczna obsługa zapytań</div>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[600px]">
            <div className="absolute inset-0 rounded-2xl border border-neutral-800/70 bg-neutral-900/40 backdrop-blur" />
            <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
