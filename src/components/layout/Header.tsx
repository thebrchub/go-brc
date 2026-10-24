
import { Link2, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const scroll = () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scroll, 100);
      return;
    }

    scroll();
  };

  return (
    <header className="relative z-20 w-full border-b border-white/[0.04]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8"
      >
        {/* Brand */}
        <Link
          to="/"
          aria-label="GoBRC home"
          className="group flex shrink-0 items-center gap-2 text-brand-accent"
        >
          <Link2
            aria-hidden="true"
            className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[-12deg]"
            strokeWidth={2.5}
          />

          <span className="text-2xl font-bold tracking-tight text-white">
            Go<span className="text-brand-accent">BRC</span>
          </span>
        </Link>

        
{/* Desktop navigation */}
<div className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
  <button
    type="button"
    onClick={() => scrollToSection('features')}
    className="cursor-pointer transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
  >
    Features
  </button>

  <button
    type="button"
    onClick={() => scrollToSection('how-it-works')}
    className="cursor-pointer transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
  >
    How it works
  </button>
</div>

{/* Coming Soon — original button styling */}
<Link
to="/coming-soon"
  className="cursor-pointer clay-btn inline-flex min-h-10 cursor-default items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold sm:px-6"
  aria-label="GoBRC is coming soon"
>
  Coming Soon
  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
</Link>

      </nav>
    </header>
  );
}
