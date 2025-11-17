import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Diagnoza', desc: 'Rozpoznajemy procesy o największym potencjale automatyzacji.' },
  { title: 'Projekt', desc: 'Prototypujemy rozwiązanie i dobieramy modele AI.' },
  { title: 'Wdrożenie', desc: 'Integrujemy z Twoimi systemami i uruchamiamy automatyzacje.' },
  { title: 'Optymalizacja', desc: 'Monitorujemy i ulepszamy wyniki w czasie rzeczywistym.' },
]

export default function Process() {
  return (
    <section id="proces" className="relative py-20 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.title} className="relative">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#39ff14]" size={20} />
                  <h3 className="text-white font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
