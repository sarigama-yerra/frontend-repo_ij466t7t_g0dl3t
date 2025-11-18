import { ShieldCheck, Gauge, CloudLightning, Globe2, Cpu, Headphones } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Blazing Performance",
    desc: "NVMe storage, high-clock CPUs and DDR5 RAM optimized for tickrate-heavy workloads.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    desc: "Always-on network shielding keeps your worlds online during the toughest raids.",
  },
  {
    icon: CloudLightning,
    title: "Instant Provisioning",
    desc: "Deploy in seconds with prebuilt images for Minecraft, Rust, Valheim and more.",
  },
  {
    icon: Globe2,
    title: "Global Regions",
    desc: "Choose from 20+ low-latency locations to host close to your players.",
  },
  {
    icon: Cpu,
    title: "Root Access",
    desc: "Full control over your VPS with SSH, snapshots and automated backups.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Real humans with game server expertise, anytime you need us.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for speed, crafted for control</h2>
          <p className="mt-3 text-blue-200/80">Everything you need to host smooth worlds and unstoppable servers.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-lg bg-blue-500/10 ring-1 ring-blue-400/30 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
