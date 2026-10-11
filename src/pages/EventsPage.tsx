import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { competitions } from '../data/competitions';

const trackFilters = [
  'All tracks',
  ...Array.from(new Set(competitions.map(({ category }) => category))),
];

const featuredCompetition = competitions.find(
  ({ id }) => id === '12-hour-hackathon',
);

function DirectoryHeader() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-lowest">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-40 size-96 bg-primary-container/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-8 size-96 bg-secondary-container/10 blur-[130px]"
      />
      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-space-lg px-gutter-mobile pb-space-xl pt-space-xl lg:px-gutter">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span className="bg-primary-container px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
            Xordium 5.0
          </span>
          <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant">
            //
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
            Event directory
          </span>
          <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant">
            //
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {competitions.length} current events
          </span>
        </div>

        <div className="flex flex-col gap-space-lg lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display-xl-mobile text-display-xl-mobile uppercase text-on-surface sm:font-display-xl sm:text-display-xl">
              Events <span className="text-primary-container">//</span>{' '}
              <span className="text-secondary-container">競技一覧</span>
            </h1>
            <p className="mt-space-sm max-w-3xl font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">
              Browse the technology and esports competitions currently listed
              for Xordium 5.0 at Birla Institute of Technology, Mesra.
            </p>
          </div>
          <Link
            className="w-fit border border-primary-container bg-primary-container px-space-md py-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
            to="/register"
          >
            Register <span aria-hidden="true">[→]</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCompetition() {
  if (!featuredCompetition) {
    return null;
  }

  return (
    <section
      aria-labelledby="featured-competition-heading"
      className="mx-auto w-full max-w-screen-2xl px-gutter-mobile pb-space-2xl pt-space-xl lg:px-gutter"
    >
      <div className="relative overflow-hidden bg-surface-container p-space-lg sm:p-space-xl">
        <span className="absolute right-0 top-0 bg-primary-container px-space-md py-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
          Featured event // {featuredCompetition.category}
        </span>

        <div className="grid gap-space-xl pt-space-lg lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-space-xl lg:col-span-7">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
                Event // Xordium 5.0
              </p>
              <h2
                className="mt-space-md font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
                id="featured-competition-heading"
              >
                {featuredCompetition.title}
              </h2>
              <p className="mt-space-md max-w-2xl font-body-md text-body-md text-on-surface-variant">
                {featuredCompetition.summary}
              </p>
            </div>
            <Link
              className="inline-flex w-fit border border-primary-container bg-primary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
              to="#all-competitions"
            >
              Browse all events <span aria-hidden="true">[→]</span>
            </Link>
          </div>

          <div className="relative flex min-h-64 flex-col justify-end overflow-hidden bg-surface-container-lowest p-space-md lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center opacity-55"
              style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent"
            />
            <div className="relative">
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
                Ignite x Esports
              </p>
              <p className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
                Birla Institute of Technology // Mesra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompetitionDirectory() {
  const [activeTrack, setActiveTrack] = useState('All tracks');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompetitions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return competitions.filter((competition) => {
      const matchesTrack =
        activeTrack === 'All tracks' || competition.category === activeTrack;
      const matchesQuery =
        query.length === 0 ||
        `${competition.title} ${competition.category} ${competition.summary}`
          .toLowerCase()
          .includes(query);

      return matchesTrack && matchesQuery;
    });
  }, [activeTrack, searchQuery]);

  return (
    <section
      aria-labelledby="all-competitions-heading"
      className="px-gutter-mobile pb-space-2xl lg:px-gutter"
      id="all-competitions"
    >
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-lg">
        <div className="bg-surface-container-low p-space-md">
          <label className="flex min-h-12 items-center bg-surface-container-lowest px-space-md focus-within:outline focus-within:outline-1 focus-within:outline-secondary-container">
            <span aria-hidden="true" className="mr-space-sm text-secondary">
              /
            </span>
            <span className="sr-only">Search events</span>
            <input
              className="min-w-0 flex-1 bg-transparent py-space-sm font-body-sm text-body-sm uppercase text-on-surface outline-none placeholder:text-on-surface-variant"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search events or categories"
              type="search"
              value={searchQuery}
            />
          </label>

          <div
            aria-label="Filter events by category"
            className="mt-space-md flex flex-wrap gap-space-xs"
            role="group"
          >
            {trackFilters.map((track) => {
              const isActive = activeTrack === track;

              return (
                <button
                  aria-pressed={isActive}
                  className={`px-space-md py-space-sm font-label-sm text-label-sm uppercase transition-colors ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`}
                  key={track}
                  onClick={() => setActiveTrack(track)}
                  type="button"
                >
                  {isActive && <span aria-hidden="true">[ </span>}
                  {track}
                  {isActive && <span aria-hidden="true"> ]</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-space-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-space-sm">
            <span aria-hidden="true" className="size-2 bg-primary-container" />
            <h2
              className="font-headline-sm text-headline-sm uppercase text-on-surface"
              id="all-competitions-heading"
            >
              Event listings
            </h2>
          </div>
          <p
            aria-live="polite"
            className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant"
          >
            {filteredCompetitions.length} matching{' '}
            {filteredCompetitions.length === 1 ? 'listing' : 'listings'}
          </p>
        </div>

        {filteredCompetitions.length > 0 ? (
          <div className="grid grid-cols-1 gap-space-lg md:grid-cols-2 lg:grid-cols-3">
            {filteredCompetitions.map((competition, index) => (
              <article
                className="group flex min-h-64 flex-col justify-between bg-surface-container transition-colors hover:bg-surface-container-high"
                id={competition.id}
                key={competition.id}
              >
                <div className="relative flex min-h-40 items-end overflow-hidden bg-surface-container-lowest p-space-md">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center opacity-45 transition-opacity group-hover:opacity-65"
                    style={{
                      backgroundImage: `url('${
                        competition.thumbnail ?? '/xordium-city-bg.png'
                      }')`,
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent"
                  />
                  <span
                    className={`relative px-space-sm py-1 font-label-sm text-label-sm uppercase tracking-widest ${
                      index % 2 === 0
                        ? 'bg-secondary-container text-on-secondary-container'
                        : 'bg-primary-container text-on-primary-container'
                    }`}
                  >
                    {competition.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-space-md p-space-lg">
                  <div>
                    <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                      {competition.artworkLabel}
                    </p>
                    <h3 className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface transition-colors group-hover:text-secondary">
                      {competition.title}
                    </h3>
                    <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                      {competition.summary}
                    </p>
                  </div>

                  <Link
                    className="mt-auto border-t border-surface-container-highest pt-space-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary transition-colors hover:text-on-surface"
                    to={`/events#${competition.id}`}
                  >
                    View event listing <span aria-hidden="true">[→]</span>
                  </Link>
                  <Link
                    className="w-fit bg-primary-container px-space-md py-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
                    to={`/register?event=${encodeURIComponent(competition.id)}`}
                  >
                    Register for this event
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="bg-surface-container p-space-lg font-body-md text-body-md text-on-surface-variant">
            No events match this search. Try a different keyword or
            category.
          </p>
        )}
      </div>
    </section>
  );
}

function ParticipationGuidance() {
  return (
    <section className="bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-space-lg">
        <div>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
            Event information
          </p>
          <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
            Before participating
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          <article className="bg-surface-container p-space-md">
            <h3 className="font-label-md text-label-md uppercase text-on-surface">
              Eligibility and teams
            </h3>
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              Confirm participant eligibility and team requirements with the
              organizers for your selected event.
            </p>
          </article>
          <article className="bg-surface-container p-space-md">
            <h3 className="font-label-md text-label-md uppercase text-on-surface">
              Equipment and rules
            </h3>
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              Review the event listing and official rules for equipment,
              formats, and participation requirements.
            </p>
          </article>
          <article className="bg-surface-container p-space-md">
            <h3 className="font-label-md text-label-md uppercase text-on-surface">
              Event updates
            </h3>
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              Dates, registration, and other event details should be checked
              with official Xordium communications.
            </p>
          </article>
        </div>
        <div className="flex flex-col items-start justify-between gap-space-md bg-surface-container p-space-md sm:flex-row sm:items-center">
          <div>
            <p className="font-label-md text-label-md uppercase text-on-surface">
              Questions about a competition?
            </p>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              Contact the organizers through their official event channels.
            </p>
          </div>
          <Link
            className="shrink-0 bg-surface-container-high px-space-lg py-space-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary transition-colors hover:bg-secondary hover:text-surface-container-lowest"
            to="/about"
          >
            About Xordium <span aria-hidden="true">[→]</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EventsPage() {
  return (
    <SiteLayout>
      <DirectoryHeader />
      <FeaturedCompetition />
      <CompetitionDirectory />
      <ParticipationGuidance />
    </SiteLayout>
  );
}
