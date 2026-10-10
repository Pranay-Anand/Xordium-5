import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../components/layout/SiteLayout';
import { competitions } from '../data/competitions';

const registrationEndpoint =
  import.meta.env.VITE_REGISTRATION_ENDPOINT || '/api/registrations';

function RegistrationPageContent() {
  const requestedEvent = new URLSearchParams(window.location.search).get(
    'event',
  );
  const selectedEvent =
    competitions.find(({ id }) => id === requestedEvent)?.id ?? '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError('');
    setSubmissionMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const registration = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration),
      });

      if (!response.ok) {
        if (response.status === 404 || response.status === 405) {
          throw new Error(
            'The registration service is not connected yet. Your details were not sent.',
          );
        }

        throw new Error(
          `Registration could not be submitted (server response ${response.status}). Please try again later.`,
        );
      }

      const result: unknown = await response.json();
      if (
        typeof result !== 'object' ||
        result === null ||
        !('accepted' in result) ||
        result.accepted !== true
      ) {
        throw new Error(
          'The registration service did not confirm receipt. Please contact the organizers before trying again.',
        );
      }

      form.reset();
      setSubmissionMessage(
        'Your registration was sent. The event organizers will follow up using the email you provided.',
      );
    } catch (error) {
      setSubmissionError(
        error instanceof TypeError
          ? 'The registration service could not be reached. Your details were not sent.'
          : error instanceof Error
            ? error.message
            : 'Registration could not be submitted. Your details were not sent.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClassName =
    'mt-space-xs min-h-12 w-full bg-surface-container-lowest px-space-md font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline focus:outline-1 focus:outline-secondary-container';
  const labelClassName =
    'font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant';

  return (
    <>
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
              // Registration portal
            </span>
          </div>
          <h1 className="mt-space-lg max-w-4xl font-display-xl-mobile text-display-xl-mobile uppercase text-on-surface sm:font-display-xl sm:text-display-xl">
            Event <span className="text-primary-container">registration</span>
          </h1>
          <p className="mt-space-md max-w-2xl font-body-md text-body-md text-on-surface-variant sm:font-body-lg sm:text-body-lg">
            Submit your contact details and select the competition you are
            interested in. Required event participation details will be
            confirmed by the organizers.
          </p>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-screen-2xl gap-space-xl px-gutter-mobile py-space-2xl lg:grid-cols-12 lg:px-gutter">
        <section
          aria-labelledby="registration-form-heading"
          className="bg-surface-container-low p-space-md sm:p-space-xl lg:col-span-8"
        >
          <div className="mb-space-lg border-b border-surface-container-highest pb-space-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              Participant intake // Xordium 5.0
            </p>
            <h2
              className="mt-space-xs font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface md:font-headline-lg md:text-headline-lg"
              id="registration-form-heading"
            >
              Registration details
            </h2>
          </div>

          <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <label className={labelClassName}>
                Full name <span className="text-primary-container">*</span>
                <input
                  autoComplete="name"
                  className={fieldClassName}
                  maxLength={120}
                  name="fullName"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className={labelClassName}>
                Email address <span className="text-primary-container">*</span>
                <input
                  autoComplete="email"
                  className={fieldClassName}
                  maxLength={254}
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <label className={labelClassName}>
                College or institution
                <input
                  autoComplete="organization"
                  className={fieldClassName}
                  maxLength={160}
                  name="institution"
                  placeholder="Institution name"
                />
              </label>
              <label className={labelClassName}>
                Competition
                <select
                  className={fieldClassName}
                  defaultValue={selectedEvent}
                  name="competitionId"
                  required
                >
                  <option className="bg-surface-container-lowest" value="">
                    Select a competition
                  </option>
                  {competitions.map(({ id, title, category }) => (
                    <option
                      className="bg-surface-container-lowest"
                      key={id}
                      value={id}
                    >
                      {title} // {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className={labelClassName}>
              Team name{' '}
              <span className="text-on-surface-variant">(optional)</span>
              <input
                autoComplete="off"
                className={fieldClassName}
                maxLength={120}
                name="teamName"
                placeholder="Add a team name if applicable"
              />
            </label>

            <label className="flex items-start gap-space-sm py-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <input
                className="mt-0.5 size-4 shrink-0 accent-primary-container"
                name="contactConsent"
                required
                type="checkbox"
                value="true"
              />
              <span>
                I agree that the organizers may use these details to contact me
                about this registration.
              </span>
            </label>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Do not include passwords, payment information, or sensitive
              personal details in this form.
            </p>

            {submissionError && (
              <p
                className="border-l-2 border-primary-container bg-surface-container-lowest p-space-md font-body-sm text-body-sm text-on-surface"
                role="alert"
              >
                {submissionError}
              </p>
            )}
            {submissionMessage && (
              <p
                className="border-l-2 border-secondary-container bg-surface-container-lowest p-space-md font-body-sm text-body-sm text-on-surface"
                role="status"
              >
                {submissionMessage}
              </p>
            )}

            <button
              className="mt-space-sm w-fit bg-primary-container px-space-lg py-space-md font-label-md text-label-md uppercase text-on-primary-container transition-colors hover:bg-on-surface hover:text-surface-container-lowest disabled:cursor-wait disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Submitting...' : 'Submit registration'}
              <span aria-hidden="true" className="ml-space-sm">
                [→]
              </span>
            </button>
          </form>
        </section>

        <aside className="flex flex-col gap-space-md lg:col-span-4">
          <section className="bg-surface-container-low p-space-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
              Submission status
            </p>
            <h2 className="mt-space-sm font-headline-sm text-headline-sm uppercase text-on-surface">
              Organizer service
            </h2>
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              Registration is sent to the event service only when the form
              submission succeeds. If the service is not connected, the page
              will tell you and will not claim your registration was received.
            </p>
          </section>
          <section className="border-l-2 border-secondary-container bg-surface-container-low p-space-lg">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
              What happens next
            </p>
            <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
              Organizers should confirm eligibility, event rules, dates, and any
              additional requirements through official communications.
            </p>
          </section>
          <Link
            className="w-fit border-b border-secondary-container pb-1 font-label-sm text-label-sm uppercase tracking-widest text-secondary hover:text-on-surface"
            to="/events"
          >
            Return to events <span aria-hidden="true">[→]</span>
          </Link>
        </aside>
      </div>
    </>
  );
}

export function RegistrationPage() {
  return (
    <SiteLayout>
      <RegistrationPageContent />
    </SiteLayout>
  );
}
