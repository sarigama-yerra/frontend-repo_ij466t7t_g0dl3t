import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 6,
    cta: "Start Hosting",
    features: ["2 vCPU", "2 GB RAM", "40 GB NVMe", "Anti-DDoS"],
  },
  {
    name: "Gamer",
    price: 12,
    cta: "Launch Now",
    features: ["4 vCPU", "8 GB RAM", "80 GB NVMe", "Backups"],
    highlight: true,
  },
  {
    name: "Pro",
    price: 24,
    cta: "Scale Up",
    features: ["8 vCPU", "16 GB RAM", "200 GB NVMe", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, scalable pricing</h2>
          <p className="mt-3 text-blue-200/80">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 ${tier.highlight ? 'bg-gradient-to-b from-blue-500/10 to-white/5 ring-blue-400/30' : ''}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{tier.name}</h3>
                {tier.highlight && <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30">Popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-blue-200/70">/mo</span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-blue-100/90">
                    <span className="h-5 w-5 rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30 flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 ring-1 ring-white/20 transition">
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
