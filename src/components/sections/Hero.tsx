
import { useLayoutEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Info,
  Link2,
} from 'lucide-react';
import { useUrlShortener } from '../../hooks/useUrlShortener';

export default function Hero() {
  const {
    url,
    setUrl,
    shortUrl,
    loading,
    error,
    copied,
    handleShorten,
    handleCopy,
    reset,
  } = useUrlShortener();

  const hasResult = Boolean(shortUrl);

  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInitialRender = useRef(true);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    if (!card || !content) return;

    const updateHeight = () => {
      const styles = window.getComputedStyle(card);

      const verticalPadding =
        parseFloat(styles.paddingTop) +
        parseFloat(styles.paddingBottom);

      const verticalBorders =
        parseFloat(styles.borderTopWidth) +
        parseFloat(styles.borderBottomWidth);

      const targetHeight =
        content.getBoundingClientRect().height +
        verticalPadding +
        verticalBorders;

      card.style.height = `${targetHeight}px`;
    };

    // Set the initial height without animating on page load.
    if (isInitialRender.current) {
      card.style.transition = 'none';
      updateHeight();
      card.getBoundingClientRect();
      card.style.removeProperty('transition');
      isInitialRender.current = false;
    } else {
      updateHeight();
    }

    // Handle text wrapping and responsive layout changes.
    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    observer.observe(content);

    return () => observer.disconnect();
  }, [hasResult, error, loading, copied, shortUrl]);

  return (
    <section
      id="shortener"
      className="hero-background relative mx-auto mt-16 mb-24 flex w-full max-w-4xl flex-col items-center text-center sm:mt-20 sm:mb-28"
    >
      <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        Long links.
        <span className="text-brand-accent"> Gone.</span>
      </h1>

      <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-400 sm:mb-12 sm:text-lg">
        Turn messy URLs into short, clean, and shareable links in seconds.
      </p>

      {/* Persistent card with smoothly animated height */}
      <div
        ref={cardRef}
        className="clay-card relative z-10 w-full overflow-hidden p-4 transition-[height] duration-500 ease-in-out motion-reduce:transition-none sm:p-5"
      >
        <div ref={contentRef} className="min-w-0">
          {!hasResult ? (
            <form
              onSubmit={handleShorten}
              noValidate
              className="w-full"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="relative min-w-0 flex-1">
                  <Link2
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  />

                  <label htmlFor="url-input" className="sr-only">
                    Enter your long URL
                  </label>

                  <input
                    id="url-input"
                    name="url"
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    placeholder="Paste your long URL here..."
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'url-error' : undefined}
                    className={`clay-input h-[58px] w-full rounded-xl py-4 pl-12 pr-4 text-base sm:text-lg ${
                      error
                        ? 'border-red-400/70 focus:border-red-400'
                        : ''
                    }`}
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="clay-btn min-h-[58px] shrink-0 px-7 py-4 text-base sm:min-w-[150px] sm:text-lg"
                >
                  {loading ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                      />
                      Shortening
                    </>
                  ) : (
                    <>
                      Shorten
                      <ArrowRight
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </>
                  )}
                </button>
              </div>

              {error && (
                <p
                  id="url-error"
                  role="alert"
                  className="mt-3 px-1 text-left text-sm text-red-400"
                >
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div
              className="flex flex-col gap-4 text-left"
              aria-live="polite"
            >
              <div className="flex items-center gap-2 text-sm text-brand-accent">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                />
                <span>Your demo link is ready</span>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-white/[0.07] bg-black/20 p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
                <span className="min-w-0 break-all text-lg font-semibold text-white sm:text-xl">
                  {shortUrl}
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="secondary-btn min-h-11 shrink-0 px-5 py-3 font-medium"
                >
                  {copied ? (
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-5 w-5 text-brand-accent"
                    />
                  ) : (
                    <Copy aria-hidden="true" className="h-5 w-5" />
                  )}
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 text-sm leading-relaxed text-gray-400 sm:p-4">
                <Info
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent"
                />
                <p>
                  <strong className="text-gray-200">
                    Prototype mode:
                  </strong>{' '}
                  This is a demonstration link. It is not permanently
                  stored and will not redirect publicly.
                </p>
              </div>

              <button
                type="button"
                onClick={reset}
                className="self-start text-sm text-gray-400 underline underline-offset-4 transition-colors hover:text-brand-accent"
              >
                Create another link
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
