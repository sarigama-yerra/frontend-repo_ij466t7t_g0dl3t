export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© 2025 NebulaHost Cloud. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-blue-200/80 hover:text-white transition">Status</a>
            <a href="#" className="text-blue-200/80 hover:text-white transition">Terms</a>
            <a href="#" className="text-blue-200/80 hover:text-white transition">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
