/** Page title and intro for the teal hero panel above a generator. */
export function HeroHeading({ title, intro }: { title: string; intro: React.ReactNode }) {
  return (
    <div className="mx-auto mb-6 max-w-3xl text-center">
      <h1 className="bg-linear-to-r from-teal-600 to-cyan-600 bg-clip-text text-3xl leading-tight font-extrabold tracking-tight text-balance text-transparent sm:text-5xl dark:from-teal-300 dark:to-cyan-300">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base text-pretty text-muted sm:text-lg">{intro}</p>
    </div>
  );
}
