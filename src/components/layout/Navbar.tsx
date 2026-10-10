import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteNavigation } from './navigation';

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      {isOpen ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname: currentPath } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-surface-container-lowest/90 shadow-[0_1px_8px_rgba(0,0,0,0.6)] backdrop-blur-md">
      <div className="relative mx-auto flex min-h-20 w-full items-center justify-between gap-space-md px-gutter-mobile lg:px-gutter">
        <Link
          aria-label="Xordium 5.0 home"
          className="flex min-w-0 items-center gap-space-sm"
          to="/"
        >
          <span className="flex size-9 shrink-0 items-center justify-center bg-primary-container font-headline-sm text-headline-sm text-on-primary-container">
            X
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="flex items-center gap-space-xs whitespace-nowrap">
              <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
                Xordium 5.0
              </span>
              <span
                aria-hidden="true"
                className="font-label-sm text-label-sm tracking-widest text-secondary-container"
              >
                // ゾルディウム
              </span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              Ignite x Esports • BIT
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-space-xs bg-surface-container-low px-space-sm py-space-sm xl:flex">
          <span
            aria-hidden="true"
            className="size-2 shrink-0 animate-pulse rounded-full bg-secondary-container"
          />
          <span className="whitespace-nowrap font-label-sm text-label-sm uppercase text-secondary">
            Festival portal // BIT
          </span>
        </div>

        <nav
          aria-label="Main navigation"
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 top-full z-50 w-full flex-col border-y border-surface-container-high bg-surface-container-lowest p-space-sm lg:relative lg:left-[-0.5rem] lg:flex lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:p-0`}
          id="site-navigation"
        >
          {siteNavigation.map(({ href, label }) => {
            const isCurrentPage = currentPath === href;

            return (
              <Link
                aria-current={isCurrentPage ? 'page' : undefined}
                className={`px-space-md py-space-sm font-label-md uppercase transition-colors hover:bg-surface-container-high hover:text-on-surface ${
                  isCurrentPage
                    ? 'bg-surface-container-high text-on-surface'
                    : 'text-on-surface-variant'
                }`}
                to={href}
                key={href}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-space-sm lg:gap-space-md">
          <Link
            className="hidden items-center justify-center bg-primary-container px-space-lg py-space-sm font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest sm:inline-flex"
            to="/register"
          >
            <span className="whitespace-nowrap">Register</span>
            <span aria-hidden="true" className="ml-space-xs font-label-sm">
              [→]
            </span>
          </Link>

          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary"
          >
            <svg
              className="size-[18px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
            </svg>
          </span>

          <button
            aria-controls="site-navigation"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            className="flex size-10 shrink-0 items-center justify-center border border-surface-container-high text-on-surface hover:bg-surface-container-high lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>
    </header>
  );
}
