const stages = [
  {
    stage: 'Foundational & Primary Years',
    title: 'Curiosity & Strong Foundations',
    body: 'Language, numeracy, exploration and activity-based learning help students develop essential skills while nurturing curiosity, participation and confidence.',
  },
  {
    stage: 'Middle School',
    title: 'Question. Explore. Apply.',
    body: 'Students deepen subject understanding through inquiry, experiments, projects, discussion and interdisciplinary learning while becoming increasingly independent learners.',
  },
  {
    stage: 'Secondary School',
    title: 'Mastery, Application & Readiness',
    body: 'Structured academic learning, regular assessment and application-focused preparation help students strengthen conceptual understanding and prepare confidently for CBSE examinations and future learning.',
  },
]

export default function LearningStages() {
  return (
    <section id="stages" className="scroll-mt-20 bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex max-w-2xl flex-col items-start gap-2">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            Learning at Every Stage
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            An Academic Journey Designed to Grow with the Child
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {stages.map((item, index) => (
            <li key={item.stage} className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand font-display text-sm font-bold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">{item.stage}</p>
              <h3 className="font-display text-xl font-bold text-brand">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
