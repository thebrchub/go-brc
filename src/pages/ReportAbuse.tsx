
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldAlert } from 'lucide-react';

export default function ReportAbuse() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand-accent"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to GoBRC
      </Link>

      <header className="mb-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/[0.08] text-red-300">
          <ShieldAlert aria-hidden="true" className="h-6 w-6" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
          Safety & security
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Report Abuse
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
          Found a GoBRC link that leads to phishing, fraud, malware, impersonation,
          or other harmful content? Let us know so it can be reviewed.
        </p>
      </header>

      <section className="space-y-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-7">
        <div>
          <h2 className="mb-2 text-lg font-bold text-white">
            What to include
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-400">
            <li>The complete GoBRC shortened URL.</li>
            <li>A brief description of the suspected abuse.</li>
            <li>The destination URL, if you already know it safely.</li>
            <li>Any relevant evidence that can help us review the report.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-black/20 p-4">
          <h2 className="mb-2 font-semibold text-white">
            Please stay safe
          </h2>
          <p className="text-sm leading-6 text-gray-400">
            Do not enter passwords, payment details, or personal information
            into a suspicious destination. Avoid opening a link if you believe
            it may be dangerous.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-bold text-white">
            Submit a report
          </h2>
          <p className="text-sm leading-6 text-gray-400">
            Our abuse-reporting contact needs to be configured before this page
            can accept reports. Please check back for the official contact
            details.
          </p>

          {/* Add the verified abuse-reporting email or backend form here. */}
          <span className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/[0.08] px-4 py-3 text-sm text-gray-500">
            Reporting contact coming soon
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </span>
        </div>
      </section>

      <p className="mt-6 text-sm leading-6 text-gray-500">
        Please do not submit passwords, financial information, or other
        unnecessary sensitive information in an abuse report.
      </p>
    </main>
  );
}
