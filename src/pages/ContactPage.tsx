import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';

function ContactHero() {
  return (
    <header className="relative isolate overflow-hidden bg-surface-container-lowest">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_45%] opacity-25"
        style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-surface-container-lowest/60"
      />
      <div className="relative mx-auto w-full max-w-screen-2xl px-gutter-mobile py-space-2xl lg:px-gutter lg:py-20">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="bg-primary-container px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
            Xordium 5.0
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
            // Contact // 連絡
          </span>
        </div>
        <h1 className="mt-space-lg max-w-4xl font-display-xl-mobile text-display-xl-mobile uppercase text-on-surface sm:font-display-xl sm:text-display-xl">
          Contact <span className="text-primary-container">the team</span>
        </h1>
        <p className="mt-space-md max-w-2xl font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">
          Find the festival venue and the current official information available
          for Xordium 5.0.
        </p>
      </div>
    </header>
  );
}

function ContactInformation() {
  return (
    <section
      aria-labelledby="contact-information-heading"
      className="mx-auto grid w-full max-w-screen-2xl gap-space-xl px-gutter-mobile py-space-2xl lg:grid-cols-12 lg:px-gutter"
    >
      <div className="lg:col-span-5">
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Direct information // 01
        </p>
        <h2
          className="mt-space-sm font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
          id="contact-information-heading"
        >
          Festival venue
        </h2>
        <p className="mt-space-md font-body-md text-body-md text-on-surface-variant">
          Xordium 5.0 is associated with Ignite x Esports at Birla Institute of
          Technology, Mesra.
        </p>

        <div className="mt-space-xl flex flex-col gap-space-md">
          <div className="border-l-2 border-secondary-container bg-surface-container-low p-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Campus address
            </p>
            <p className="mt-space-xs font-body-md text-body-md text-on-surface">
              Birla Institute of Technology, Mesra, Ranchi, Jharkhand 835215
            </p>
          </div>
          <div className="border-l-2 border-primary-container bg-surface-container-low p-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Organizer contact
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              An official Xordium email address or support channel has not been
              provided on this site. Check official festival announcements for
              confirmed contact details.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="relative min-h-72 overflow-hidden bg-surface-container-lowest sm:min-h-96">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center opacity-65"
            style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/10 to-transparent"
          />
          <div className="absolute bottom-space-md left-space-md bg-surface-container-lowest/90 p-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Venue // BIT Mesra
            </p>
            <p className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
              Ranchi, Jharkhand
            </p>
          </div>
        </div>
        <a
          className="mt-space-md inline-flex border border-secondary-container px-space-md py-space-sm font-label-sm text-label-sm uppercase tracking-wider text-secondary transition-colors hover:bg-secondary-container hover:text-on-secondary"
          href="https://www.google.com/maps/search/?api=1&query=Birla+Institute+of+Technology+Mesra+Ranchi"
          rel="noreferrer"
          target="_blank"
        >
          Open campus map{' '}
          <span aria-hidden="true" className="ml-space-xs">
            [↗]
          </span>
        </a>
      </div>
    </section>
  );
}

function ContactNextSteps() {
  return (
    <section className="bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-space-xl md:grid-cols-3">
        <article className="border-t-2 border-primary-container pt-space-md">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Events directory
          </p>
          <h2 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
            Browse competitions
          </h2>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Review the competitions currently listed on the site.
          </p>
          <Link
            className="mt-space-md inline-block font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-on-surface"
            to="/events"
          >
            View events <span aria-hidden="true">[→]</span>
          </Link>
        </article>
        <article className="border-t-2 border-secondary-container pt-space-md">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
            Registration
          </p>
          <h2 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
            Register interest
          </h2>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Use the registration page to submit your interest in a listed event.
          </p>
          <Link
            className="mt-space-md inline-block font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-on-surface"
            to="/register"
          >
            Open registration <span aria-hidden="true">[→]</span>
          </Link>
        </article>
        <article className="border-t-2 border-primary-container pt-space-md">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            About
          </p>
          <h2 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
            Festival overview
          </h2>
          <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
            Learn about the festival, its current tracks, and campus location.
          </p>
          <Link
            className="mt-space-md inline-block font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-on-surface"
            to="/about"
          >
            About Xordium <span aria-hidden="true">[→]</span>
          </Link>
        </article>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <SiteLayout>
      <ContactHero />
      <ContactInformation />
      <ContactNextSteps />
    </SiteLayout>
  );
}
