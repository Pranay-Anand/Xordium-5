import { siteNavigation } from './navigation';

export function Footer() {
  return (
    <footer className="mt-space-2xl w-full bg-surface-container-lowest text-on-surface-variant">
      <div className="w-full px-gutter-mobile py-space-2xl lg:px-gutter">
        <div className="grid grid-cols-1 gap-space-xl md:grid-cols-12">
          <section className="flex flex-col gap-space-md md:col-span-5">
            <div className="flex items-center gap-space-sm">
              <span className="flex size-8 items-center justify-center bg-primary-container font-headline-sm text-headline-sm text-on-primary-container">
                X
              </span>
              <span className="font-headline-md text-headline-md uppercase text-on-surface">
                Xordium 5.0
              </span>
            </div>
            <p className="max-w-lg font-body-md text-body-md">
              A technology and esports festival by Ignite x Esports at Birla
              Institute of Technology.
            </p>
          </section>

          <nav
            aria-label="Footer navigation"
            className="flex flex-col gap-space-sm md:col-span-3"
          >
            <h2 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              Explore
            </h2>
            <ul className="flex flex-col gap-space-xs">
              {siteNavigation.map(({ href, label }) => (
                <li key={href}>
                  <a
                    className="inline-flex py-1 font-body-sm text-body-sm transition-colors hover:bg-surface-container-high hover:text-secondary"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="flex flex-col gap-space-sm md:col-span-4">
            <h2 className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              Institutional node
            </h2>
            <p className="font-body-sm text-body-sm">
              Birla Institute of Technology
              <br />
              Ignite x Esports
            </p>
            <span className="pt-space-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Xordium 5.0
            </span>
          </section>
        </div>

        <div className="mt-space-xl flex flex-col items-start justify-between gap-space-md border-t border-surface-container-high pt-space-lg sm:flex-row sm:items-center">
          <p className="font-label-sm text-label-sm uppercase text-on-surface-variant">
            © Xordium 5.0 // Ignite x Esports, BIT
          </p>
        </div>
      </div>
    </footer>
  );
}
