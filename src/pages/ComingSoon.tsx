
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  CalendarClock,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  Link2,
  QrCode,
  ShieldCheck,
  Sparkles,
  Tags,
  Users,
  X,
  Zap,
} from 'lucide-react';

const plannedFeatures = [
  {
    icon: BarChart3,
    title: 'Link Analytics',
    category: 'INSIGHTS',
    description:
      'See how your links perform with click counts, traffic trends, referrers, and geographic insights.',
    status: 'Coming first',
    wide: true,
  },
  {
    icon: QrCode,
    title: 'QR Code Generator',
    category: 'SHARING',
    description:
      'Generate QR codes for your shortened links. Make it easier to connect offline audiences to online content.',
    status: 'Planned',
  },
  {
    icon: Tags,
    title: 'Custom Aliases',
    category: 'CONTROL',
    description:
      'Create memorable short links with custom endings that are easier to recognize and share.',
    status: 'Planned',
  },
  {
    icon: Globe2,
    title: 'Branded Domains',
    category: 'BRANDING',
    description:
      'Use your own domain to build brand recognition and make every shared link feel like yours.',
    status: 'Planned',
  },
  {
    icon: CalendarClock,
    title: 'Link Expiration',
    category: 'CONTROL',
    description:
      'Set expiry dates for temporary campaigns, event links, and time-sensitive promotions.',
    status: 'Planned',
  },
  {
    icon: ShieldCheck,
    title: 'Link Management',
    category: 'SECURITY',
    description:
      'Organize, review, edit, and disable links from one convenient dashboard, subject to supported features.',
    status: 'Planned',
  },
  {
    icon: Users,
    title: 'Team Workspaces',
    category: 'COLLABORATION',
    description:
      'Manage shared links and collaborate with teammates from a single workspace.',
    status: 'Future idea',
  },
  {
    icon: Zap,
    title: 'Developer API',
    category: 'AUTOMATION',
    description:
      'Create and manage short links programmatically when you need to integrate GoBRC into your workflow.',
    status: 'Future idea',
  },
];

const benefits = [
  'Early previews of upcoming features',
  'A chance to share feedback and shape the roadmap',
  'Launch announcements straight to your inbox',
];

export default function ComingSoon() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(
      'Early-access signup is not connected yet. Your email has not been saved. Please check back soon.',
    );
  };

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 75% 30%, rgba(186,255,0,0.09), transparent 38%)',
          }}
        />

        <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-16 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-brand-accent sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-accent" />
              THE NEXT CHAPTER OF GoBRC
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Short links.
              <br />
              <span className="text-brand-accent">Bigger possibilities.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              We're building more than a link shortener. Discover the tools
              we're planning to help you track clicks, strengthen your brand,
              and manage every link in one place.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setIsSignupOpen(true);
                  setMessage('');
                }}
                className="clay-btn inline-flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-semibold"
              >
                Subscribe for Early Access
                <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </button>

              <a
                href="#roadmap"
                className="inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.09] px-6 py-4 text-sm font-medium text-gray-300 transition-colors hover:border-white/20 hover:text-white"
              >
                Explore the roadmap
                <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-gray-500">
              We're still building. Features shown here are planned, not
              currently available.
            </p>
          </div>

          {/* Product preview */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-brand-accent/[0.04] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0e1112] shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-accent text-black">
                    <Link2 aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Link overview
                    </p>
                    <p className="text-xs text-gray-500">
                      Product concept preview
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-brand-accent/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-accent">
                  Preview
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-6">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <p className="text-xs text-gray-500">Total clicks</p>
                  <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    -- 
                  </p>
                  <p className="mt-2 text-xs text-gray-600">
                    Sample dashboard
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <p className="text-xs text-gray-500">Active links</p>
                  <p className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    --
                  </p>
                  <p className="mt-2 text-xs text-gray-600">
                    Sample dashboard
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">
                      Click activity
                    </p>
                    <BarChart3
                      aria-hidden="true"
                      className="h-5 w-5 text-brand-accent"
                    />
                  </div>

                  <div className="mt-5 flex h-28 items-end gap-2 sm:h-36 sm:gap-3">
                    {[35, 54, 43, 75, 48, 88, 62, 100, 69, 82, 58, 92].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-brand-accent/50"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-3 flex justify-between text-[10px] text-gray-600">
                    <span>ILLUSTRATIVE DATA</span>
                    <span>ANALYTICS CONCEPT</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/[0.07] px-5 py-4 sm:px-7">
                <Sparkles
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-brand-accent"
                />
                <p className="text-xs leading-5 text-gray-400">
                  A glimpse of the tools we're working toward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature roadmap */}
      <section
        id="roadmap"
        className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent sm:text-sm">
              THE ROADMAP
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your links deserve
              <br className="hidden sm:block" /> more control.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            From understanding your audience to managing campaigns, these are
            the capabilities we're exploring for the future of GoBRC.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plannedFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group flex min-h-64 flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-300 hover:border-brand-accent/25 hover:bg-white/[0.035] sm:p-7 ${
                  feature.wide ? 'xl:col-span-2' : ''
                }`}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-accent/15 bg-brand-accent/[0.07] text-brand-accent transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    {feature.status}
                  </span>
                </div>

                <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-brand-accent/80">
                  {feature.category}
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {feature.description}
                </p>

                <div className="mt-auto flex justify-end pt-5">
                  <ChevronRight
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-brand-accent"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-xs leading-6 text-gray-600">
          Roadmap items are subject to change. Availability, pricing, and
          feature details will be announced when confirmed.
        </p>
      </section>

      {/* Early access CTA */}
      <section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent sm:text-sm">
              GET IN EARLY
            </p>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Be there before the link goes live.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
              Get launch updates and help shape what comes next. We're building
              GoBRC for people who want more from every link they share.
            </p>

            <button
              type="button"
              onClick={() => {
                setIsSignupOpen(true);
                setMessage('');
              }}
              className="clay-btn mt-8 inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-xl px-6 py-3 font-semibold"
            >
              Subscribe for Early Access
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </div>
                <p className="text-sm leading-6 text-gray-300 sm:text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing links */}
      <section className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
        <div>
          <p className="text-lg font-bold text-white">
            Go<span className="text-brand-accent">BRC</span>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Shorter links. A cleaner internet.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-400">
          <Link className="hover:text-brand-accent" to="/">
            Home
          </Link>
          <Link className="hover:text-brand-accent" to="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-brand-accent" to="/terms">
            Terms
          </Link>
          <Link className="hover:text-brand-accent" to="/report-abuse">
            Report Abuse
          </Link>
        </div>
      </section>

      {/* Early-access modal */}
      {isSignupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsSignupOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="early-access-title"
            className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#101313] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsSignupOpen(false)}
              aria-label="Close early access form"
              className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
              <Clock3 aria-hidden="true" className="h-6 w-6" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
              EARLY ACCESS
            </p>
            <h2
              id="early-access-title"
              className="mt-3 text-3xl font-extrabold text-white"
            >
              Save your spot.
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Join the early-access list when registration opens. We'll share
              launch updates as GoBRC gets closer to release.
            </p>

            <form onSubmit={handleSubscribe} className="mt-7 space-y-4">
              <label
                htmlFor="early-access-email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <input
                id="early-access-email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="clay-input h-12 w-full rounded-xl px-4 text-sm"
              />

              <button
                type="submit"
                className="clay-btn inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold"
              >
                Subscribe for Early Access
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>

              {message && (
                <p role="status" className="text-sm leading-6 text-amber-300">
                  {message}
                </p>
              )}

              <p className="text-xs leading-5 text-gray-600">
                This form is a UI prototype. No email is sent or saved yet.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
