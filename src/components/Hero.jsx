import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            New: Quantum Boost Engine v3.2
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Make your PC unbelievably fast
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl">
            TurboSoft optimizes startup, cleans junk, and unlocks hidden performance so your games and apps feel instant. Designed for power users, made effortless for everyone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-[0_0_50px_-12px] shadow-blue-500/70 hover:shadow-blue-500/90 transition"
            >
              Get TurboSoft
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
            >
              See Features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/70 text-sm">
            <div>
              <div className="text-2xl font-semibold text-white">+120%</div>
              App launch speed
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">-35s</div>
              Faster boot time
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">99.9%</div>
              Stability score
            </div>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-blue-950 to-black">
          <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.35),transparent_60%)]" />
        </div>
      </div>
    </section>
  );
}
