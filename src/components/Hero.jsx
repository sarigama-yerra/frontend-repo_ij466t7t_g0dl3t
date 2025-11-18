import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline immersive background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/10 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div>
          <p className="text-blue-300/90 text-sm tracking-widest uppercase mb-4">Futuristic VPS & Game Hosting</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_20px_rgba(56,189,248,0.35)]">
            Power your worlds in the cloud
          </h1>
          <p className="mt-4 text-blue-100/80 max-w-xl">
            Ultra-low latency machines for communities, creators and studios. Spin up battle-tested servers in seconds with cosmic-grade reliability.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 transition shadow-lg shadow-blue-500/20">
              Launch an Instance
            </a>
            <a href="#features" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 ring-1 ring-white/20 transition">
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-blue-200/80 text-sm">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
            </div>
            <p>Trusted by 3,000+ creators and clans</p>
          </div>
        </div>
      </div>
    </section>
  );
}
