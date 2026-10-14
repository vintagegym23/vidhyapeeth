const flow = ['Assess', 'Understand', 'Support', 'Improve']

export default function AssessmentProgress() {
  return (
    <section id="assessment" className="scroll-mt-20 bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            Assessment for Progress
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            Assessment Should Reveal Understanding, Not Just Memory
          </h2>
          <p className="text-base text-slate-600">
            At Vidhyapeeth Karimnagar, assessment is used to understand how students are progressing
            and where additional support may be needed. Through regular classroom assessment and
            FNAT, teachers review conceptual understanding, application and learning progress.
          </p>
          <p className="text-base text-slate-600">
            Where appropriate, assessment tasks encourage students to interpret information, reason,
            frame questions and apply what they know rather than rely only on direct recall.
          </p>
          <ol className="flex flex-wrap items-center gap-2 pt-2" aria-label="Assess, Understand, Support, Improve">
            {flow.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-sm bg-white px-3 py-1.5 font-display text-sm font-bold text-brand shadow-sm ring-1 ring-slate-100">
                  {step}
                </span>
                {index < flow.length - 1 && (
                  <span aria-hidden className="font-bold text-accent-dark">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-brand p-8 shadow-2xl">
          <div aria-hidden className="absolute -top-16 -right-16 size-48 rounded-full bg-accent/10" />
          <div className="relative flex flex-col items-start gap-3">
            <span className="rounded-sm bg-accent/20 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-accent-light uppercase">
              Regular Academic Checkpoints
            </span>
            <p className="font-display text-5xl font-extrabold tracking-tight text-accent">FNAT</p>
            <p className="font-display text-lg font-bold text-white">Fortnightly Academic Assessment</p>
            <p className="text-sm text-footer-muted">
              Regular academic checkpoints designed to help review understanding and learning
              progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
