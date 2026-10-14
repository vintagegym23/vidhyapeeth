import pedagogyPhoto from '../../assets/images/academics-pedagogy.jpg'

const pillars = [
  {
    kicker: 'Ask & Question',
    title: 'Curiosity Starts the Learning',
    body: 'Students are encouraged to ask why, explore possibilities and develop meaningful questions.',
  },
  {
    kicker: 'Think & Interpret',
    title: 'Understanding Before Memorisation',
    body: 'Discussion, comparison and reasoning help students develop deeper conceptual understanding.',
  },
  {
    kicker: 'Apply & Create',
    title: 'Learning in Real Contexts',
    body: 'Projects, experiments and application-based tasks help students use what they have learned.',
  },
]

const steps = ['Understand', 'Question', 'Think', 'Apply', 'Express']

export default function PedagogyInPractice() {
  return (
    <section id="approach" className="scroll-mt-20 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="order-2 mx-auto flex w-full max-w-[520px] flex-col gap-12 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={pedagogyPhoto} alt="Teacher guiding students at Vidhyapeeth" className="aspect-[4/3] w-full object-cover" />
            </div>
            <span className="absolute top-4 left-4 rounded-sm bg-accent px-3 py-1.5 font-sans text-xs font-bold tracking-wide text-[#705600] uppercase">
              Pedagogy at Work
            </span>
            <div className="absolute right-0 -bottom-6 flex max-w-xs items-center gap-3 rounded-2xl bg-brand p-4 shadow-2xl">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-accent">&#128218;</span>
              <div>
                <p className="font-display text-sm font-bold text-white">A Classroom Culture of Participation</p>
                <p className="text-xs text-accent-light">Ask &middot; Explore &middot; Discuss &middot; Learn</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex -space-x-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white ring-2 ring-white">CB</span>
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-brand ring-2 ring-white">NEP</span>
              <span className="flex size-10 items-center justify-center rounded-full bg-[#d7e3fd] text-[10px] font-bold text-brand ring-2 ring-white">NCF</span>
            </div>
            <p className="text-slate-600">
              Learning practices informed by{' '}
              <span className="font-semibold text-brand">CBSE competency-based education</span> and the
              broader direction of NEP 2020 and the National Curriculum Framework.
            </p>
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-4 lg:order-2">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            Our Approach to Learning
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            We Don&rsquo;t Just Teach Students to Answer Questions. We Teach Them to Ask Better Ones.
          </h2>
          <p className="text-base text-slate-600">
            Inquiry-based learning is central to the Vidhyapeeth approach. Students observe, question,
            discuss and explore ideas&mdash;framing questions, explaining their reasoning and applying
            concepts in new situations&mdash;to build genuine understanding rather than short-term
            memorisation.
          </p>
          <div className="grid w-full gap-3 pt-2 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg bg-[#f0f3ff] p-4 text-center">
                <p className="font-sans text-[10px] font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  {pillar.kicker}
                </p>
                <h3 className="pt-1 font-display text-sm font-bold text-brand">{pillar.title}</h3>
                <p className="pt-1 text-xs text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
          <p className="w-full rounded-lg bg-brand px-4 py-3 text-center font-display text-sm font-bold tracking-[0.6px] text-accent">
            {steps.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
