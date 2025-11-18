import { Menu, Server, Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-500/10 ring-1 ring-blue-400/30 flex items-center justify-center">
            <Server className="h-5 w-5 text-blue-300" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-white font-semibold tracking-tight text-lg">NebulaHost</span>
            <span className="text-blue-300/70 text-sm hidden sm:inline">cloud</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#vps" className="text-blue-100/80 hover:text-white transition">VPS</a>
          <a href="#games" className="text-blue-100/80 hover:text-white transition flex items-center gap-1">
            <Gamepad2 className="h-4 w-4" /> Game Servers
          </a>
          <a href="#pricing" className="text-blue-100/80 hover:text-white transition">Pricing</a>
          <a href="#support" className="text-blue-100/80 hover:text-white transition">Support</a>
        </nav>

        <div className="hidden md:block">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 ring-1 ring-white/20 transition">
            Get Started
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
