import { Bot, Workflow, Zap, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Asystenci AI',
    desc: 'Wdrażamy chatboty i asystentów, którzy rozumieją kontekst Twojego biznesu i automatyzują obsługę.'
  },
  {
    icon: Workflow,
    title: 'Automatyzacja procesów',
    desc: 'Łączymy systemy i tworzymy przepływy pracy, które wykonują zadania za Ciebie 24/7.'
  },
  {
    icon: Zap,
    title: 'Integracje',
    desc: 'Sprawnie integrujemy CRM, helpdesk, systemy ERP oraz narzędzia no-code/low-code.'
  },
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo i zgodność',
    desc: 'Projektujemy rozwiązania zgodne z RODO i najlepszymi praktykami bezpieczeństwa.'
  },
]

export default function Features() {
  return (
    <section id="oferta" className="relative py-20 bg-neutral-950">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 -translate-x-1/2 top-10 h-40 w-[70%] rounded-full bg-[#39ff14]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Co możemy zautomatyzować</h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">Projektujemy, wdrażamy i utrzymujemy rozwiązania AI oraz automatyzacje dopasowane do Twoich celów biznesowych.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#39ff14]/10 blur-2xl group-hover:bg-[#39ff14]/20 transition-colors" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800">
                <Icon className="text-[#39ff14]" size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
