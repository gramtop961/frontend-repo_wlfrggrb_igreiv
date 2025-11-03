import { Cpu, Zap, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Acceleration',
    desc: 'One-click optimization intelligently prioritizes processes and eliminates bottlenecks for immediate speed gains.'
  },
  {
    icon: Cpu,
    title: 'Smart Resource Engine',
    desc: 'Real-time CPU/RAM tuning adapts to your apps so performance is always focused where you need it most.'
  },
  {
    icon: Shield,
    title: 'Safe Cleanup',
    desc: 'Remove junk, broken registries, and leftovers safely with automatic restore points and versioned backups.'
  },
  {
    icon: Gauge,
    title: 'Boot Optimizer',
    desc: 'Cut startup time by disabling heavy services, delaying non-critical apps, and preloading essentials.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black via-[#05060b] to-black">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for speed, designed for safety</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Every tool you need to make your computer feel brand new — with zero bloat and full control.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition group">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-[0_0_40px_-12px] shadow-blue-500/70">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
