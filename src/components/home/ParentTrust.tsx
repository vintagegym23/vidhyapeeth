import { testimonials } from '../../data/testimonials'

const approved = testimonials.filter((t) => t.approved && t.parentName && t.grade)

// The track repeats the list so the marquee always fills wide screens and loops without a gap.
// Must match the -25% (= 1 / COPIES) end point of the testimonial-marquee keyframes.
const COPIES = 4

export default function ParentTrust() {
  return (
    <section className="bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1360px]">
        <div className="text-center">
          <span className="font-display text-xs font-extrabold tracking-[2.4px] text-accent-dark uppercase">
            Parent Testimonials
          </span>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
            What parents value at Vidhyapeeth.
          </h2>
        </div>

        {/* Shown until at least one parent has approved a testimonial. */}
        {approved.length === 0 ? (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
            <p className="font-display text-lg font-bold text-brand">Testimonials coming soon</p>
            <p className="mt-1 text-sm text-slate-500">
              Experiences shared by Vidhyapeeth parents will appear here.
            </p>
          </div>
        ) : (
          <div
            className="group relative mt-10 -mx-6 overflow-hidden sm:-mx-10 lg:-mx-16 motion-reduce:overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
            aria-label="Parent testimonials"
          >
            <div className="flex w-max animate-[testimonial-marquee_45s_linear_infinite] py-4 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
              {Array.from({ length: COPIES }, (_, copy) =>
                approved.map((t) => (
                  <div key={`${copy}-${t.parentName}`} className="flex pr-6" aria-hidden={copy > 0 || undefined}>
                    <figure className="flex w-[300px] flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_20px_40px_-15px_rgba(10,37,86,0.12)] sm:w-[380px] sm:p-8">
                      <span aria-hidden className="font-serif text-5xl leading-none text-accent">
                        &ldquo;
                      </span>
                      <blockquote className="flex-1 text-base leading-relaxed font-medium text-slate-700">
                        {t.quote}
                      </blockquote>
                      <figcaption className="flex items-center gap-3 border-t border-slate-100 pt-5">
                        {t.photo ? (
                          <img
                            src={t.photo}
                            alt=""
                            className="size-12 shrink-0 rounded-full border-2 border-accent object-cover"
                          />
                        ) : (
                          <span
                            aria-hidden
                            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-amber-100 font-display text-lg font-bold text-brand"
                          >
                            {t.parentName.charAt(0)}
                          </span>
                        )}
                        <span className="flex flex-col">
                          <span className="font-display text-base font-bold text-brand">{t.parentName}</span>
                          <span className="text-xs text-slate-500">
                            Parent of {t.grade} Student, Vidhyapeeth Karimnagar
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                )),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
