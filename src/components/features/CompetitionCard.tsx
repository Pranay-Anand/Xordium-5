import type { Competition } from '../../data/competitions';
import { PageArtwork } from '../ui/PageArtwork';

const accentClasses = {
  primary: 'text-primary-container border-primary-container',
  secondary: 'text-secondary-container border-secondary-container',
} as const;

export function CompetitionCard({ competition }: { competition: Competition }) {
  return (
    <article className="flex h-full flex-col border border-surface-container-high bg-surface-container-low p-space-md transition-colors hover:bg-surface-container">
      <div className="relative mb-space-md">
        <PageArtwork
          imageSrc={competition.thumbnail}
          label={competition.artworkLabel}
        />
        <span
          aria-hidden="true"
          className={`absolute right-space-sm top-space-sm size-8 border-r-2 border-t-2 ${accentClasses[competition.accent]}`}
        />
      </div>
      <span className="mb-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
        {competition.category}
      </span>
      <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">
        {competition.title}
      </h3>
      <p className="mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
        {competition.summary}
      </p>
    </article>
  );
}
