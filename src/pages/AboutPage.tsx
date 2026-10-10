import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { competitions } from '../data/competitions';

const trackCategories = [
  ...new Set(competitions.map(({ category }) => category)),
];

const festivalOverview = [
  {
    label: 'Competition listings',
    value: String(competitions.length).padStart(2, '0'),
    detail: 'Currently listed in the event directory',
    accent: 'text-primary-container',
  },
  {
    label: 'Track categories',
    value: String(trackCategories.length).padStart(2, '0'),
    detail: trackCategories.join(' / '),
    accent: 'text-secondary-container',
  },
  {
    label: 'Festival host',
    value: 'BIT',
    detail: 'Birla Institute of Technology, Mesra',
    accent: 'text-primary-container',
  },
  {
    label: 'Organized by',
    value: 'Ignite x Esports',
    detail: 'Festival organizers',
    accent: 'text-secondary-container',
  },
];

const campusGuidance = [
  {
    title: 'Read event details',
    description:
      'Check the event directory for the latest available competition information.',
    accent: 'border-primary-container',
    index: '01',
  },
  {
    title: 'Follow event rules',
    description:
      'Participants should read and follow the rules published for their chosen event.',
    accent: 'border-secondary-container',
    index: '02',
  },
  {
    title: 'Respect others',
    description:
      'Help keep competition spaces respectful and welcoming for all participants.',
    accent: 'border-primary-container',
    index: '03',
  },
  {
    title: 'Confirm campus plans',
    description:
      'Check official campus information before arranging travel or attendance.',
    accent: 'border-secondary-container',
    index: '04',
  },
];

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-lowest">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_45%] opacity-30"
        style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/85 to-surface-container-lowest/60"
      />
      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-space-xl px-gutter-mobile py-space-2xl lg:px-gutter lg:py-20">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="bg-primary-container px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
            Xordium 5.0
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            SYS // Festival overview
          </span>
          <span className="text-on-surface-variant">/</span>
          <span className="font-label-sm text-label-sm tracking-widest text-secondary-container">
            PROTOCOL 2026
          </span>
        </div>

        <div className="grid gap-space-xl lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display-xl-mobile text-display-xl-mobile uppercase leading-tight text-on-surface sm:font-display-xl sm:text-display-xl">
              About <span className="text-primary-container">Xordium 5.0</span>
              <span className="mt-space-xs block font-headline-lg-mobile text-secondary-container md:font-headline-lg">
                // 概要・電脳電波核
              </span>
            </h1>
            <p className="mt-space-lg max-w-2xl font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">
              A technology and esports festival by Ignite x Esports at Birla
              Institute of Technology, Mesra, bringing together competition
              tracks across digital and hands-on disciplines.
            </p>
          </div>

          <div className="bg-surface-container-low p-space-lg lg:col-span-4">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Festival directory
            </p>
            <p className="mt-space-sm font-headline-md text-headline-md text-secondary-container">
              {String(trackCategories.length).padStart(2, '0')} track categories
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              Based on the competitions currently listed on this site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FestivalManifesto() {
  return (
    <section
      aria-labelledby="manifesto-heading"
      className="mx-auto grid w-full max-w-screen-2xl gap-space-xl px-gutter-mobile py-space-2xl lg:grid-cols-12 lg:items-center lg:gap-space-xl lg:px-gutter"
    >
      <div className="relative min-h-80 overflow-hidden bg-surface-container-lowest sm:min-h-[28rem] lg:col-span-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-[center_60%] opacity-80"
          style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/10 to-transparent"
        />
        <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between gap-space-sm bg-surface-container-lowest/85 p-space-md">
          <div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Festival venue
            </p>
            <p className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
              BIT // Mesra
            </p>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
            Ranchi
          </span>
        </div>
      </div>

      <div className="lg:col-span-7">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary-container">
          Section 01 // Festival overview
        </p>
        <h2
          className="mt-space-md font-headline-lg-mobile text-headline-lg-mobile uppercase leading-tight text-on-surface md:font-headline-lg md:text-headline-lg"
          id="manifesto-heading"
        >
          Technology and esports, together at BIT Mesra.
        </h2>
        <div className="mt-space-lg flex flex-col gap-space-md font-body-md text-body-md leading-relaxed text-on-surface-variant">
          <p>
            Xordium 5.0 brings technology and esports competition tracks
            together at Birla Institute of Technology, Mesra. The event
            directory includes digital competitions alongside engineering and
            robotics disciplines.
          </p>
          <p>
            Explore the current listings to learn which competitions are
            included. Event-specific formats and requirements should be
            confirmed on the relevant event page.
          </p>
        </div>
        <div className="mt-space-xl grid grid-cols-1 gap-space-sm sm:grid-cols-3">
          <div className="border-t border-surface-container-high pt-space-sm">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              Festival host
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface">
              Birla Institute of Technology
            </p>
          </div>
          <div className="border-t border-surface-container-high pt-space-sm">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
              Organizer
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface">
              Ignite x Esports
            </p>
          </div>
          <div className="border-t border-surface-container-high pt-space-sm">
            <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">
              Location
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface">
              Mesra, Ranchi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FestivalBenchmarks() {
  return (
    <section
      aria-labelledby="benchmarks-heading"
      className="bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-xl">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary-container">
            Section 02 // Festival details
          </p>
          <h2
            className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
            id="benchmarks-heading"
          >
            Xordium at a glance
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
          {festivalOverview.map(({ label, value, detail, accent }, index) => (
            <article
              className="flex min-h-56 flex-col justify-between bg-surface-container-low p-space-lg"
              key={label}
            >
              <div className="flex items-center justify-between gap-space-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                  {label}
                </span>
                <span
                  aria-hidden="true"
                  className={`size-2 ${index % 2 === 0 ? 'bg-primary-container' : 'bg-secondary-container'}`}
                />
              </div>
              <div className="mt-space-lg">
                <p
                  className={`font-headline-md text-headline-md uppercase ${accent}`}
                >
                  {value}
                </p>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  {detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackDirectory() {
  return (
    <section
      aria-labelledby="guild-directory-heading"
      className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-xl px-gutter-mobile py-space-2xl lg:px-gutter"
    >
      <div className="flex flex-col gap-space-xs">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          Section 03 // Track directory
        </p>
        <h2
          className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
          id="guild-directory-heading"
        >
          Competition tracks
        </h2>
        <p className="max-w-3xl font-body-md text-body-md text-on-surface-variant">
          The listed competitions span these categories. Open the directory for
          individual event information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
        {trackCategories.map((category, index) => {
          const tracks = competitions.filter(
            (competition) => competition.category === category,
          );

          return (
            <article
              className="relative flex min-h-52 flex-col justify-between gap-space-lg bg-surface-container-high/40 p-space-lg transition-colors hover:bg-surface-container-high"
              key={category}
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-1 ${index % 2 === 0 ? 'bg-primary-container' : 'bg-secondary-container'}`}
              />
              <div className="pl-space-sm">
                <p
                  className={`font-label-sm text-label-sm uppercase tracking-widest ${index % 2 === 0 ? 'text-primary-container' : 'text-secondary-container'}`}
                >
                  Track // {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
                  {category}
                </h3>
                <ul className="mt-space-sm flex flex-col gap-space-xs">
                  {tracks.map(({ id, title }) => (
                    <li
                      className="font-body-sm text-body-sm text-on-surface-variant"
                      key={id}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="ml-space-sm w-fit font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-on-surface"
                to="/events"
              >
                Explore listings <span aria-hidden="true">[→]</span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VenueAndCampus() {
  return (
    <section
      aria-labelledby="venue-heading"
      className="bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-xl">
        <div>
          <p className="font-label-md text-label-md uppercase tracking-widest text-secondary">
            Section 04 // Venue
          </p>
          <h2
            className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
            id="venue-heading"
          >
            Birla Institute of Technology, Mesra
          </h2>
        </div>

        <div className="grid gap-space-xl lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative min-h-72 overflow-hidden bg-surface-container-low sm:min-h-96">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center opacity-75"
                style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/20"
              />
              <div className="absolute bottom-space-md left-space-md bg-surface-container-lowest/90 p-space-md">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
                  Campus location
                </p>
                <p className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
                  Mesra // Ranchi, Jharkhand
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

          <div className="flex flex-col justify-between gap-space-lg bg-surface-container-low p-space-lg lg:col-span-5 lg:p-space-xl">
            <div>
              <div className="flex items-center justify-between gap-space-sm border-b border-surface-variant/40 pb-space-sm">
                <span className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
                  Campus information
                </span>
                <span className="font-label-sm text-label-sm uppercase text-secondary-container">
                  BIT // Mesra
                </span>
              </div>
              <p className="mt-space-md font-body-md text-body-md text-on-surface-variant">
                Xordium 5.0 is associated with Birla Institute of Technology,
                Mesra, Ranchi, Jharkhand.
              </p>
              <p className="mt-space-md font-body-sm text-body-sm text-on-surface-variant">
                Check official campus and event communications for confirmed
                visitor access, directions, and travel information.
              </p>
            </div>
            <div className="border-l-2 border-primary-container bg-surface-container-high/60 p-space-md">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Address
              </p>
              <p className="mt-space-xs font-body-sm text-body-sm text-on-surface">
                Birla Institute of Technology, Mesra, Ranchi, Jharkhand 835215
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConductAndGuidance() {
  return (
    <section
      aria-labelledby="conduct-heading"
      className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-xl border-t border-surface-variant/40 px-gutter-mobile py-space-2xl lg:px-gutter"
    >
      <div>
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          Section 05 // Participant guidance
        </p>
        <h2
          className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
          id="conduct-heading"
        >
          Respect the competition
        </h2>
      </div>

      <div className="grid gap-space-xl lg:grid-cols-12">
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:col-span-7">
          {campusGuidance.map(({ title, description, accent, index }) => (
            <article
              className="flex min-h-48 flex-col justify-between gap-space-lg bg-surface-container-low p-space-lg"
              key={index}
            >
              <div>
                <p
                  className={`font-label-sm text-label-sm uppercase tracking-widest ${accent === 'border-primary-container' ? 'text-primary-container' : 'text-secondary-container'}`}
                >
                  Guidance // {index}
                </p>
                <h3 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
                  {title}
                </h3>
                <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <aside className="flex flex-col justify-between gap-space-lg bg-surface-container-high/60 p-space-lg lg:col-span-5 lg:p-space-xl">
          <div>
            <p className="font-label-md text-label-md uppercase tracking-widest text-secondary-container">
              Participant code
            </p>
            <h3 className="mt-space-sm font-headline-md text-headline-md uppercase text-on-surface">
              Play fair. Show respect.
            </h3>
            <div className="mt-space-md flex flex-col gap-space-sm font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
              <p>
                Follow the rules and safety guidance published for each
                competition.
              </p>
              <p>
                Treat fellow participants, organizers, and campus staff with
                respect.
              </p>
              <p>
                Use official event communications for confirmed policies and
                updates.
              </p>
            </div>
          </div>
          <p className="border-t border-surface-variant/40 pt-space-md font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            Review the rules on the relevant event listing.
          </p>
        </aside>
      </div>
    </section>
  );
}

function AboutCallToAction() {
  return (
    <section className="bg-surface-container-low px-gutter-mobile py-space-2xl lg:px-gutter">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-space-xl md:flex-row md:items-center">
        <div>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
            Xordium 5.0 // Ignite x Esports
          </p>
          <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
            Explore the event directory
          </h2>
          <p className="mt-space-sm max-w-xl font-body-sm text-body-sm text-on-surface-variant">
            Browse currently listed competitions and their available details.
          </p>
        </div>
        <Link
          className="inline-flex shrink-0 items-center gap-space-sm bg-primary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
          to="/events"
        >
          Explore tracks <span aria-hidden="true">[→]</span>
        </Link>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <SiteLayout>
      <AboutHero />
      <FestivalManifesto />
      <FestivalBenchmarks />
      <TrackDirectory />
      <VenueAndCampus />
      <ConductAndGuidance />
      <AboutCallToAction />
    </SiteLayout>
  );
}
