
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const sections = [
  {
    title: '1. Using GoBRC',
    body: 'GoBRC provides tools for creating and accessing shortened links. You agree to use the service lawfully and not to interfere with its operation, security, or availability.',
  },
  {
    title: '2. Prohibited uses',
    body: 'You must not use GoBRC to distribute malware, phishing links, scams, illegal content, threats, harassment, or content that infringes another person’s rights. You must not use shortened links to conceal harmful or deceptive activity.',
  },
  {
    title: '3. Your responsibility for links',
    body: 'You are responsible for the destination URLs you submit and how you distribute your shortened links. Before opening a shortened link, visitors should use their own judgment and appropriate security precautions.',
  },
  {
    title: '4. Link availability and removal',
    body: 'We may investigate reports, restrict, disable, or remove links that violate these terms, pose a security risk, or must be restricted for legal reasons. We do not guarantee that every link will remain available or that every destination will be safe.',
  },
  {
    title: '5. Service availability',
    body: 'We aim to keep GoBRC available and reliable, but the service may be changed, interrupted, or discontinued. We do not guarantee uninterrupted access, permanent link availability, or error-free operation.',
  },
  {
    title: '6. Third-party websites',
    body: 'Shortened links may lead to websites or services operated by third parties. GoBRC does not control those destinations and is not responsible for their content, policies, products, or practices.',
  },
  {
    title: '7. Intellectual property',
    body: 'GoBRC’s own branding, design, and original materials are owned by or licensed to their respective rights holders. These terms do not grant you ownership of those materials.',
  },
  {
    title: '8. Disclaimer and liability',
    body: 'To the extent permitted by applicable law, GoBRC is provided on an “as is” and “as available” basis. Nothing in these terms excludes or limits a right or liability that cannot lawfully be excluded or limited.',
  },
  {
    title: '9. Changes to these terms',
    body: 'We may revise these terms as the service develops. Continued use after revised terms are published may be subject to the updated terms, to the extent permitted by applicable law.',
  },
  {
    title: '10. Governing law and contact',
    body: 'These terms are subject to applicable law. The final published terms should identify the correct governing-law jurisdiction and official contact details for the service operator.',
  },
];

export default function TermsOfService() {
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
          <FileText aria-hidden="true" className="h-6 w-6" />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-accent">
          Legal
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Effective date: October 24, 2026
        </p>
        <p className="mt-5 max-w-2xl leading-7 text-gray-400">
          These terms govern your use of GoBRC. By using the service, you agree
          to follow these terms and applicable law. Please also read our{' '}
          <Link to="/privacy" className="text-brand-accent hover:underline">
            Privacy Policy
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
    </main>
  );
}
