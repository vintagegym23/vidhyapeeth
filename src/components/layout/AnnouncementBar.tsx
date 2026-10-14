const SURVEY_URL = 'https://forms.gle/3YV7mUj3ABmieLQv6'

export default function AnnouncementBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 px-4 sm:px-6">
      {/* The whole bar is one link, so a click or tap anywhere on it opens the survey. */}
      <a
        href={SURVEY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="We Value Your Feedback! Take our quick survey (opens in a new tab)"
        className="group pointer-events-auto relative mx-auto flex max-w-[1360px] items-center gap-3 overflow-hidden rounded-3xl border border-accent-dark/20 bg-gradient-to-r from-amber-50 via-[#fdf8e7] to-amber-50 py-2 pr-2.5 pl-4 shadow-[0_15px_35px_-10px_rgba(10,37,86,0.35)] transition-shadow hover:shadow-[0_18px_40px_-10px_rgba(10,37,86,0.45)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none sm:gap-4 sm:rounded-full sm:px-6"
      >
        <span className="hidden text-2xl sm:block lg:text-3xl" aria-hidden>
          📝
        </span>

        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-script text-xl leading-none text-brand sm:text-[22px] lg:text-2xl">We Value Your Feedback!</span>
          <span className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm lg:text-[15px]">
            Help us improve by taking a quick survey. Click or tap here to share your thoughts.
          </span>
        </span>

        <span className="hidden shrink-0 border-l border-accent-dark/15 pl-4 text-right font-script text-base leading-tight text-accent-dark lg:block xl:text-lg">
          Good Learners
          <br />
          Brighter Humans
        </span>

        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-3.5 py-2 font-sans text-xs font-semibold whitespace-nowrap text-white shadow-md transition-colors group-hover:bg-brand/90 sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-2.5 lg:text-base">
          Take the Survey
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </a>
    </div>
  )
}
