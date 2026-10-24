import { Link2, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.07] bg-[#090a0b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        {/* Brand and tagline */}
        <div className="flex flex-col items-start gap-2">
          <a
            href="#home"
            aria-label="GoBRC home"
            className="group flex items-center gap-2 text-white transition-colors hover:text-brand-accent"
          >
            <Link2
              aria-hidden="true"
              className="h-6 w-6 text-brand-accent"
              strokeWidth={2.5}
            />
            <span className="text-xl font-bold tracking-tight">
              Go<span className="text-brand-accent">BRC</span>
            </span>
          </a>

          <p className="text-sm text-gray-500">
            Shorter links. A cleaner internet.
          </p>
        </div>

        {/* Footer navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400"
        >
          <a
            href="/privacy"
            className="transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:text-brand-accent"
          >
            Privacy Policy
          </a>

          <a
            href="/terms"
            className="transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:text-brand-accent"
          >
            Terms of Service
          </a>

          <a
            href="/report-abuse"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:text-brand-accent"
          >
            Report Abuse
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>

      {/* Copyright and company credit */}
<div className="border-t border-white/[0.04] px-5 py-4">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
    <p className="text-xs text-gray-600">
      © {new Date().getFullYear()} GoBRC. All rights reserved.
    </p>

    <p className="text-xs text-gray-500">
      Made by{' '}
      <a
        href="https://brchub.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-400 transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:text-brand-accent"
      >
        BRC Hub LLP
        <ArrowUpRight
          aria-hidden="true"
          className="ml-1 inline h-3 w-3"
        />
      </a>
    </p>
  </div>
</div>
    </footer>
  );
}