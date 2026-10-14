const outcomes = [
  { title: 'Conceptual Understanding', body: 'Know why, not only what.' },
  { title: 'Curiosity & Inquiry', body: 'Ask meaningful questions.' },
  { title: 'Independent Thinking', body: 'Interpret before accepting.' },
  { title: 'Problem-Solving', body: 'Use knowledge to approach challenges.' },
  { title: 'Communication', body: 'Explain ideas with clarity.' },
  { title: 'Confidence', body: 'Participate, attempt, reflect and improve.' },
]

export default function AcademicOutcomes() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            What Learning Should Build
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            Knowledge That Becomes Capability
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <div key={outcome.title} className="flex items-start gap-3 rounded-lg bg-[#f9f9ff] p-5 ring-1 ring-slate-100">
              <span aria-hidden className="mt-0.5 font-bold text-accent-dark">
                &#10003;
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-brand">{outcome.title}</h3>
                <p className="pt-0.5 text-sm text-slate-600">{outcome.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
