import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CompetitionCard } from '../components/features/CompetitionCard';
import { SiteLayout } from '../components/layout/SiteLayout';
import { competitions } from '../data/competitions';

const trackFilters = [
  'All tracks',
  ...Array.from(new Set(competitions.map(({ category }) => category))),
];

const festivalGuidance = [
  {
    number: '01',
    title: 'Eligibility',
    description:
      'Check the participation requirements listed for each competition before registering.',
    accent: 'bg-primary-container text-on-primary-container',
  },
  {
    number: '02',
    title: 'Competition details',
    description:
      'Formats, equipment requirements, and entry information belong on each event page.',
    accent: 'bg-secondary-container text-on-secondary-container',
  },
  {
    number: '03',
    title: 'Campus access',
    description:
      'Confirm travel and campus-entry arrangements with the event organizers before your visit.',
    accent: 'bg-surface-container-high text-on-surface',
  },
  {
    number: '04',
    title: 'Fair play',
    description:
      'Participants are expected to follow the published rules for their chosen competition.',
    accent: 'bg-primary-container text-on-primary-container',
  },
];

const countdownTarget = new Date('2026-10-12T21:40:39+05:30').getTime();

function getTimeRemaining(now: number) {
  const totalSeconds = Math.max(0, Math.floor((countdownTarget - now) / 1000));

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
    isComplete: totalSeconds === 0,
  };
}

function CountdownTimer() {
  const [time, setTime] = useState(() => getTimeRemaining(Date.now()));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(getTimeRemaining(Date.now()));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const units = [
    { label: 'Days', value: time.days, accent: 'text-on-surface' },
    { label: 'Hours', value: time.hours, accent: 'text-on-surface' },
    {
      label: 'Minutes',
      value: time.minutes,
      accent: 'text-secondary-container',
    },
    { label: 'Seconds', value: time.seconds, accent: 'text-primary-container' },
  ];

  return (
    <section
      aria-label="Countdown to October 12, 2026 at 9:40 PM India Standard Time"
      className="my-space-xl w-full max-w-3xl border border-surface-container-high bg-surface-container-low p-space-md text-left sm:p-space-lg"
    >
      <div className="mb-space-md flex flex-wrap items-center justify-between gap-space-sm border-b border-surface-container-highest pb-space-sm">
        <h2 className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
          Xordium 5.0 // Countdown
        </h2>
        <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
          Target // 12 Oct 2026 • 21:40 IST
        </p>
      </div>
      {time.isComplete ? (
        <p className="py-space-md text-center font-headline-sm text-headline-sm uppercase text-secondary-container">
          Countdown complete
        </p>
      ) : (
        <div
          className="grid grid-cols-4 gap-space-sm text-center sm:gap-space-md"
          role="timer"
        >
          {units.map(({ label, value, accent }) => (
            <div
              className="flex flex-col bg-surface-container p-space-sm sm:p-space-md"
              key={label}
            >
              <span
                className={`font-headline-lg-mobile text-headline-lg-mobile tabular-nums sm:font-headline-lg sm:text-headline-lg ${accent}`}
              >
                {String(value).padStart(2, '0')}
              </span>
              <span className="mt-1 font-label-sm text-label-sm uppercase text-on-surface-variant">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-container-lowest">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_45%] opacity-35"
        style={{ backgroundImage: "url('/xordium-city-bg.png')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface-container-lowest/55"
      />

      <div className="relative mx-auto flex w-full max-w-screen-2xl flex-col items-center px-gutter-mobile pb-space-2xl pt-12 text-center sm:pt-16 lg:px-gutter lg:pt-20">
        <div className="mb-space-lg flex flex-wrap items-center justify-center gap-space-sm">
          <span className="size-2 bg-primary-container" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">
            Birla Institute of Technology // Ignite x Esports
          </span>
          <span className="font-label-sm text-label-sm tracking-widest text-secondary-container">
            // 2026 EDITION
          </span>
        </div>

        <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant sm:font-label-md sm:text-label-md">
          Technology and esports festival
        </p>
        <h1 className="mt-space-md font-display-xl-mobile text-display-xl-mobile uppercase text-on-surface sm:font-display-xl sm:text-display-xl">
          Xordium <span className="text-primary-container">5.0</span>
        </h1>
        <div className="mt-space-xs flex items-center justify-center gap-space-md">
          <span className="h-px w-10 bg-primary-container" />
          <span className="font-label-md text-label-md uppercase tracking-[0.35em] text-secondary">
            Mesra // Ranchi
          </span>
          <span className="h-px w-10 bg-secondary-container" />
        </div>
        <p className="mt-space-lg max-w-2xl font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">
          Explore the technology and esports competitions hosted by Ignite x
          Esports at Birla Institute of Technology, Mesra.
        </p>
        <CountdownTimer />
        <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
          <Link
            className="inline-flex items-center gap-space-sm border border-primary-container bg-primary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
            to="#competitions"
          >
            Explore competitions <span aria-hidden="true">[→]</span>
          </Link>
          <Link
            className="inline-flex items-center gap-space-sm border border-surface-container-high bg-surface-container-high px-space-lg py-space-md font-label-md text-label-md uppercase text-secondary transition-colors hover:border-secondary-container hover:bg-secondary-container hover:text-on-secondary"
            to="#campus"
          >
            Festival location <span aria-hidden="true">[→]</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CompetitionsSection() {
  const [activeTrack, setActiveTrack] = useState('All tracks');
  const visibleCompetitions =
    activeTrack === 'All tracks'
      ? competitions
      : competitions.filter(({ category }) => category === activeTrack);

  return (
    <section
      aria-labelledby="competitions-heading"
      className="mx-auto w-full max-w-screen-2xl px-gutter-mobile py-space-2xl lg:px-gutter"
      id="competitions"
    >
      <div className="mb-space-xl flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-md md:flex-row md:items-end md:justify-between">
          <div className="border-l-2 border-primary-container pl-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Division specifications // 01
            </p>
            <h2
              className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
              id="competitions-heading"
            >
              Featured events
            </h2>
          </div>
          <div
            aria-label="Filter competitions by track"
            className="flex flex-wrap gap-space-xs"
            role="group"
          >
            {trackFilters.map((track) => {
              const isActive = activeTrack === track;

              return (
                <button
                  aria-pressed={isActive}
                  className={`border px-space-md py-space-sm font-label-sm text-label-sm uppercase transition-colors ${
                    isActive
                      ? 'border-primary-container bg-primary-container text-on-primary-container'
                      : 'border-surface-container-high bg-surface-container text-on-surface-variant hover:text-on-surface'
                  }`}
                  key={track}
                  onClick={() => setActiveTrack(track)}
                  type="button"
                >
                  {track}
                </button>
              );
            })}
          </div>
        </div>
        <p className="max-w-3xl font-body-md text-body-md text-on-surface-variant">
          Browse the competition tracks listed for Xordium 5.0. Open an event
          page for its available participation information.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-3 lg:gap-space-lg">
        {visibleCompetitions.map((competition) => (
          <CompetitionCard competition={competition} key={competition.id} />
        ))}
      </div>
      <Link
        className="mt-space-xl inline-flex border border-secondary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-secondary transition-colors hover:bg-secondary-container hover:text-on-secondary"
        to="/events"
      >
        Open events directory <span aria-hidden="true">[→]</span>
      </Link>
    </section>
  );
}

function FestivalInformation() {
  return (
    <section
      aria-labelledby="festival-information-heading"
      className="bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter"
      id="schedule"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl gap-space-xl lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
            Festival information
          </p>
          <h2
            className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
            id="festival-information-heading"
          >
            Program and updates
          </h2>
          <p className="mt-space-md max-w-xl font-body-md text-body-md text-on-surface-variant">
            Competition listings are available in the events directory. Official
            festival dates and session times have not been provided here.
          </p>
          <Link
            className="mt-space-lg inline-flex border border-surface-container-high px-space-md py-space-sm font-label-sm text-label-sm uppercase text-on-surface transition-colors hover:border-secondary-container hover:text-secondary"
            to="/events"
          >
            View event listings{' '}
            <span aria-hidden="true" className="ml-space-xs">
              [→]
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-space-sm lg:col-span-3">
          <article className="border-l-2 border-primary-container bg-surface-container-low p-space-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Competition tracks
            </p>
            <h3 className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
              Technology and esports
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              The directory includes esports, engineering, robotics,
              cybersecurity, and machine intelligence competitions.
            </p>
          </article>
          <article className="border-l-2 border-secondary-container bg-surface-container-low p-space-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Schedule
            </p>
            <h3 className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
              Details to be announced
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              Check back here when the organizers publish confirmed festival
              dates and timetable information.
            </p>
          </article>
          <article className="border-l-2 border-surface-container-highest bg-surface-container-low p-space-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Official information
            </p>
            <h3 className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
              Competition pages
            </h3>
            <p className="mt-space-xs font-body-sm text-body-sm text-on-surface-variant">
              Participation formats and requirements should be confirmed on each
              event's listing before making plans.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function FestivalGuidance() {
  return (
    <section
      aria-labelledby="guidance-heading"
      className="px-gutter-mobile py-space-2xl lg:px-gutter"
    >
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="mb-space-xl max-w-3xl border-l-2 border-primary-container pl-space-md">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Before you take part
          </p>
          <h2
            className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
            id="guidance-heading"
          >
            Competition guidance
          </h2>
          <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
            Review the official information for your selected competition.
            Specific participation and campus arrangements should be confirmed
            with the organizers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:grid-cols-4">
          {festivalGuidance.map(({ number, title, description, accent }) => (
            <article
              className="flex min-h-56 flex-col gap-space-sm bg-surface-container-low p-space-lg"
              key={number}
            >
              <span
                className={`flex size-9 items-center justify-center font-label-md text-label-md ${accent}`}
              >
                {number}
              </span>
              <h3 className="mt-space-xs font-headline-sm text-headline-sm uppercase text-on-surface">
                {title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampusSection() {
  return (
    <section
      aria-labelledby="campus-heading"
      className="px-gutter-mobile py-space-2xl lg:px-gutter"
      id="campus"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl gap-space-xl bg-surface-container-low p-space-lg sm:p-space-xl lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-space-sm font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Festival location
          </p>
          <h2
            className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
            id="campus-heading"
          >
            Birla Institute of Technology
          </h2>
          <p className="mt-space-md font-body-md text-body-md text-on-surface-variant">
            Mesra, Ranchi, Jharkhand.
          </p>
          <p className="mt-space-md border-l border-surface-container-highest pl-space-md font-body-sm text-body-sm text-on-surface">
            Birla Institute of Technology, Mesra, Ranchi, Jharkhand 835215
          </p>
          <a
            className="mt-space-lg inline-flex border border-primary-container bg-primary-container px-space-lg py-space-md font-label-sm text-label-sm uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
            href="https://www.google.com/maps/search/?api=1&query=BIT+Patna+campus+Bihar+Veterinary+College+Patna"
            rel="noreferrer"
            target="_blank"
          >
            Open campus map{' '}
            <span aria-hidden="true" className="ml-space-xs">
              [↗]
            </span>
          </a>
        </div>
        <div className="relative min-h-64 overflow-hidden border border-surface-container-high bg-surface-container-lowest">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-8 grid-rows-6"
          >
            {Array.from({ length: 48 }, (_, index) => (
              <span
                className="border-b border-r border-surface-container-high/50"
                key={index}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="border border-secondary-container bg-surface-container-lowest px-space-md py-space-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              BIT // Mesra
            </span>
          </div>
          <span className="absolute bottom-space-sm left-space-sm font-label-sm text-label-sm uppercase text-on-surface-variant">
            Ranchi // Jharkhand
          </span>
          <span className="absolute right-space-sm top-space-sm size-8 border-r-2 border-t-2 border-primary-container" />
        </div>
      </div>
    </section>
  );
}

function HomeContent() {
  return (
    <>
      <HomeHero />
      <CompetitionsSection />
      <FestivalInformation />
      <FestivalGuidance />
      <CampusSection />
      <section className="bg-surface-container-lowest px-gutter-mobile py-space-2xl text-center lg:px-gutter">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-secondary-container">
            Xordium 5.0 // Ignite x Esports
          </p>
          <h2 className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg">
            Explore the event tracks
          </h2>
          <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
            Browse the listed competitions and review their event details.
          </p>
          <Link
            className="mt-space-lg border border-primary-container bg-primary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest"
            to="/events"
          >
            Open events directory <span aria-hidden="true">[→]</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export function HomePage() {
  return (
    <SiteLayout>
      <HomeContent />
    </SiteLayout>
  );
}
