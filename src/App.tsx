
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import FAQ from './components/sections/FAQ';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ReportAbuse from './pages/ReportAbuse';
import ComingSoon from './pages/ComingSoon';

function HomePage() {
  return (
    <main className="relative z-0 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-5 sm:px-6 lg:px-8">
      <Hero />
      <Features />
      <FAQ />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="brand-ambient flex min-h-screen flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/report-abuse" element={<ReportAbuse />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route
            path="*"
            element={
              <main className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
                <p className="text-sm font-semibold text-brand-accent">
                  404 — PAGE NOT FOUND
                </p>
                <h1 className="mt-4 text-4xl font-extrabold text-white">
                  This link went nowhere.
                </h1>
                <a
                  href="/"
                  className="mt-6 rounded-xl bg-brand-accent px-5 py-3 font-semibold text-black transition-colors hover:bg-brand-hover"
                >
                  Back to GoBRC
                </a>
              </main>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
