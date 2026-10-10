import type { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface">
      <a
        className="fixed left-gutter-mobile top-space-sm z-[60] -translate-y-20 bg-primary-container px-space-md py-space-sm font-label-md text-label-md text-on-primary-container focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="w-full flex-1 pt-20" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
