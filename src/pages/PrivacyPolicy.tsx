
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

const sections = [
  {
    title: '1. Information we may collect',
    body: 'Depending on how GoBRC is implemented, we may process URLs submitted for shortening, generated short codes, basic technical information such as browser and device details, and usage or diagnostic logs. We will update this policy to reflect the information actually collected by the live service.',
  },
  {
    title: '2. How we use information',
    body: 'Information may be used to create and operate shortened links, redirect visitors to their destinations, maintain service security, investigate abuse, prevent spam, troubleshoot errors, and improve reliability.',
  },
  {
    title: '3. How links work',
    body: 'A shortened link may store a relationship between its short code and the destination URL. Anyone with access to a shortened link may be able to visit its destination. Do not submit confidential or sensitive URLs unless you understand the risks.',
  },
  {
    title: '4. Cookies and analytics',
    body: 'GoBRC may use essential storage, cookies, or analytics tools if they are implemented. The final policy should identify the specific tools used, what they collect, and how users can manage optional tracking.',
  },
  {
    title: '5. Sharing and service providers',
    body: 'Information may be processed by service providers that host, store, secure, or operate GoBRC. We do not intend to sell personal information. Any disclosures required by law or necessary to address security incidents will be handled in accordance with applicable law.',
  },
  {
    title: '6. Data retention and security',
    body: 'We intend to use reasonable safeguards to protect information. No online service can guarantee absolute security. The retention period for submitted URLs, logs, and related records will depend on the service configuration and applicable legal requirements.',
  },
  {
    title: '7. Your choices and requests',
    body: 'If you have a privacy question or want to request access to, correction of, or deletion of information, contact the GoBRC team using the official contact details published on this website. We may need to verify your request before acting on it.',
  },
  {
    title: '8. Children’s privacy',
    body: 'GoBRC is not intended to be used by children in violation of applicable law. If you believe a child has provided personal information inappropriately, contact us so the matter can be reviewed.',
  },
  {
    title: '9. Changes to this policy',
    body: 'We may update this policy when the service or its data practices change. The revised version will be published on this page with an updated effective date.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-brand-accent"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Back to GoBRC
      </Link>

      <header className="mb-10 border-b border-white/[0.08] pb-8">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.08] text-brand-accent">
          <ShieldCheck aria-hidden="true" className="h-6 w-6" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
          Legal
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Effective date: October 24, 2026
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          This policy explains how GoBRC handles information when you use our
          URL-shortening service. It should be read alongside our{' '}
          <Link to="/terms" className="text-brand-accent hover:underline">
            Terms of Service
          </Link>.
        </p>
      </header>

      <div className="space-y-9">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-lg font-bold text-white">
              {section.title}
            </h2>
            <p className="text-sm leading-7 text-gray-400 sm:text-base">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
        <p className="text-sm leading-6 text-gray-400">
          Privacy questions? Please use the official contact details published
          by GoBRC once they are available.
        </p>
      </div>
    </main>
  );
}
