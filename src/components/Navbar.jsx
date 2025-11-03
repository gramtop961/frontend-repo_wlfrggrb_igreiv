import { Rocket, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-[0_0_40px_-10px] shadow-blue-500/60">
            <Rocket className="h-5 w-5 text-white" />
          </span>
          <span className="font-semibold text-white tracking-tight">TurboSoft</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white shadow-[0_0_40px_-8px] shadow-blue-500/60 hover:shadow-blue-500/80 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
          </a>
        </div>
      </nav>
    </header>
  );
}
