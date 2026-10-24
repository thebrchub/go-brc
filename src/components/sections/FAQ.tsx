
import { Link2, WandSparkles, Copy, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Paste',
    description: 'Add your long URL.',
  },
  {
    number: '02',
    icon: WandSparkles,
    title: 'Shorten',
    description: "We'll create a short link.",
  },
  {
    number: '03',
    icon: Copy,
    title: 'Copy & Share',
    description: 'Use it anywhere.',
  },
];

export default function FAQ() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="w-full py-12 pb-20 sm:py-16 lg:py-20"
    >
      {/* Section heading */}
      <div className="mb-10 text-center sm:mb-12">
        <span className="section-eyebrow mb-4">
          HOW IT WORKS
        </span>

        <h2
          id="how-it-works-title"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          Shorten a link in 3 steps.
        </h2>
      </div>

      {/* Steps */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-8">
        {steps.map(({ number, icon: Icon, title, description }, index) => (
          <div key={number} className="relative">
            <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4 lg:flex-row lg:items-center">
              {/* Number and icon */}
              <div className="flex shrink-0 items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-xs font-extrabold text-[#090b0c]">
                  {index + 1}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.035]">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="min-w-0">
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {title}
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>
              </div>
            </div>

            {/* Connector arrow — desktop only */}
            {index < steps.length - 1 && (
              <ArrowRight
                aria-hidden="true"
                className="absolute -right-3 top-5 hidden h-5 w-5 text-gray-500 lg:block"
                strokeWidth={1.5}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
