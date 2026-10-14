const outcomes = [
  {
    title: 'Conceptual Understanding',
    body: 'Students build clarity around fundamental ideas before progressing to more complex learning.',
  },
  {
    title: 'Application of Knowledge',
    body: 'Students use concepts in different contexts, problems and practical situations.',
  },
  {
    title: 'Assessment for Progress',
    body: 'Regular assessment helps teachers understand learning progress, identify gaps and guide the next steps.',
  },
]

const flow = [
  { step: 'Understand', body: 'Build conceptual clarity.' },
  { step: 'Question', body: 'Explore ideas and possibilities.' },
  { step: 'Apply', body: 'Use learning in different situations.' },
  { step: 'Analyse', body: 'Interpret, compare and solve.' },
  { step: 'Communicate', body: 'Explain thinking with confidence.' },
]

export default function CbeCompetency() {
  return (
    <section className="bg-brand px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent/20 px-3 py-1 font-sans text-xs font-semibold tracking-wide text-accent-light uppercase">
            Competency-Based Learning
          </span>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            From Knowing the Answer to Knowing How to Use It
          </h2>
          <p className="text-lg text-footer-muted">
            Competency-based education focuses on what students understand and can apply&mdash;not
            simply what they can recall. At Vidhyapeeth, learning encourages conceptual
            understanding, interpretation, problem-solving and communication so that knowledge
            becomes usable beyond the classroom.
          </p>
          <div className="flex w-full flex-col gap-2 pt-2">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="rounded-sm bg-white/5 p-3">
                <h3 className="font-sans text-sm font-semibold text-white">{outcome.title}</h3>
                <p className="pt-0.5 text-sm text-footer-muted">{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <h3 className="font-display text-xl font-bold text-brand">How Competency-Based Learning Works</h3>
          <ol className="flex flex-col pt-5">
            {flow.map((item, index) => (
              <li key={item.step} className="flex flex-col items-start">
                <div className="flex w-full items-center gap-4 rounded-lg bg-[#f0f3ff] px-4 py-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold tracking-[0.6px] text-brand uppercase">{item.step}</p>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </div>
                {index < flow.length - 1 && (
                  <span aria-hidden className="py-1 pl-[26px] text-sm leading-none text-accent-dark">
                    &darr;
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
