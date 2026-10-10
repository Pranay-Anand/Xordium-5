type PageArtworkProps = {
  label: string;
  variant?: 'wide' | 'square';
};

export function PageArtwork({ label, variant = 'wide' }: PageArtworkProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex overflow-hidden border border-surface-container-high bg-surface-container-lowest ${
        variant === 'wide' ? 'aspect-[16/9]' : 'aspect-square'
      }`}
    >
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
        {Array.from({ length: 48 }, (_, index) => (
          <span
            className="border-b border-r border-surface-container-high/60"
            key={index}
          />
        ))}
      </div>
      <span className="absolute left-0 top-0 size-8 border-l-2 border-t-2 border-primary-container" />
      <span className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-secondary-container" />
      <span className="absolute inset-x-space-md top-1/2 border-t border-surface-container-high" />
      <span className="absolute inset-y-space-md left-1/2 border-l border-surface-container-high" />
      <span className="relative z-10 m-space-md mt-auto border-l-2 border-secondary-container bg-surface-container-lowest px-space-sm py-space-xs font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}
