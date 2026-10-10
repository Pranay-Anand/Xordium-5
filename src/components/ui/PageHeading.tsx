type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="border-b border-surface-container-high bg-surface-container-lowest px-gutter-mobile py-space-2xl lg:px-gutter lg:py-16">
      <div className="mx-auto w-full max-w-screen-2xl">
        <p className="mb-space-md border-l-2 border-secondary-container pl-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          {eyebrow}
        </p>
        <h1 className="font-display-xl-mobile text-display-xl-mobile uppercase text-on-surface md:font-display-xl md:text-display-xl">
          {title}
        </h1>
        <p className="mt-space-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          {description}
        </p>
      </div>
    </header>
  );
}
