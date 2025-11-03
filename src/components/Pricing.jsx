import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '$0',
    period: '/forever',
    highlight: false,
    features: [
      '1-click boost',
      'Basic cleanup',
      'Boot optimizer',
      'Community support'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/year',
    highlight: true,
    features: [
      'All Basic features',
      'Real-time Smart Engine',
      'Deep clean + rollback',
      'Game mode + scheduler',
      'Priority support'
    ]
  },
  {
    name: 'Ultimate',
    price: '$59',
    period: '/lifetime',
    highlight: false,
    features: [
      'All Pro features',
      'Multi-device (3 PCs)',
      'Advanced diagnostics',
      'Early access builds'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">No ads. No trackers. Just pure performance.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 backdrop-blur bg-white/5 ${
                tier.highlight
                  ? 'border-blue-500/50 shadow-[0_0_80px_-20px] shadow-blue-500/70'
                  : 'border-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs text-white shadow">Most Popular</div>
              )}
              <div className="flex items-end gap-2">
                <div className="text-4xl font-semibold text-white">{tier.price}</div>
                <div className="pb-1 text-white/60">{tier.period}</div>
              </div>
              <div className="mt-2 text-white/90 font-medium">{tier.name}</div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/20">
                      <Check className="h-3.5 w-3.5 text-blue-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 font-medium transition ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95'
                    : 'border border-white/15 text-white/90 hover:bg-white/10'
                }`}
              >
                {tier.highlight ? 'Get Pro' : 'Choose Plan'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
