
import { Zap, ShieldCheck, Link2 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant',
    description: 'Short links in seconds.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable',
    description: 'Clean and safe links.',
  },
  {
    icon: Link2,
    title: 'Easy to share',
    description: 'Perfect for any platform.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-label="GoBRC benefits"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={title}
            className={`relative flex flex-col items-center px-5 text-center ${
              index > 0
                ? 'sm:border-l sm:border-white/[0.07]'
                : ''
            }`}
          >
            {/* Icon container */}
            <div className="mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-white/[0.09] bg-white/[0.025] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] transition-all duration-300 hover:border-brand-accent/25 hover:bg-brand-accent/[0.04]">
              <Icon
                aria-hidden="true"
                className="h-8 w-8 text-brand-accent"
                strokeWidth={2.2}
              />
            </div>

            {/* Feature title */}
            <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {title}
            </h3>

            {/* Short description */}
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400 sm:text-base">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
