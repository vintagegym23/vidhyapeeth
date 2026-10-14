import storyCampus from '../../assets/images/about-story-campus.jpg'

const pillars = [
  {
    title: 'Inquiry & Independent Thinking',
    body: 'Students learn to question, interpret, explore and develop deeper understanding.',
  },
  {
    title: 'Character & Responsibility',
    body: 'Respect, discipline, empathy and responsibility grow alongside academic learning.',
  },
  {
    title: 'Strong Academic Foundations',
    body: 'Concept-focused CBSE learning builds knowledge students can understand, apply and carry forward.',
  },
  {
    title: 'Confident Communication',
    body: 'Discussion, presentation and participation help students express ideas clearly and confidently.',
  },
]

export default function InstitutionalStory() {
  return (
    <section id="story" className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src={storyCampus} alt="Vidhyapeeth Public School campus in Karimnagar, Telangana" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="relative -mt-10 ml-auto max-w-xs rounded-xl bg-brand p-6 shadow-2xl sm:absolute sm:right-6 sm:-bottom-6">
            <span className="font-display text-2xl text-accent">&ldquo;</span>
            <p className="font-display text-lg font-medium text-white">
              Strong Foundations. Independent Thinking. Confident Futures.
            </p>
            <p className="pt-1 text-xs font-semibold text-accent-light">&mdash; Vidhyapeeth Public School, Karimnagar</p>
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-4 lg:order-2">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Our Story &middot; Vidhyapeeth Karimnagar
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            A Strong Legacy. A Clearer Purpose for the Future.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Established in Karimnagar in 2013, formerly operating as Academic Heights Public School,
            the institution now continues its journey as Vidhyapeeth Public School with a renewed
            focus on purposeful CBSE education, inquiry-based learning and confident student
            development.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            As a CBSE-affiliated school in Karimnagar, Vidhyapeeth combines strong academic
            foundations with opportunities to question, explore, communicate and apply what students
            learn, building deeper understanding, independent thinking, creativity and character
            rather than relying only on memorisation.
          </p>
          <div className="grid w-full gap-4 pt-2 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-sm bg-white p-4 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-brand">{pillar.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
