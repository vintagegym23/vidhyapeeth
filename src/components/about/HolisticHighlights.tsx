import classroomPhoto from '../../assets/images/about-holistic-classroom.jpg'

const pillars = [
  {
    icon: '⛹',
    title: 'Sports',
    tagline: 'Move. Compete. Grow.',
    body: 'Sports and physical activities encourage fitness, teamwork, discipline and resilience while helping students develop confidence through participation.',
  },
  {
    icon: '\u{1F3A8}',
    title: 'Arts',
    tagline: 'Create. Perform. Express.',
    body: 'Music, dance, art, drama and creative activities give students opportunities to explore their interests and express themselves with confidence.',
  },
  {
    icon: '\u{1F9E9}',
    title: 'Project-Based Learning',
    tagline: 'Learning Through Doing',
    body: 'Collaborative projects encourage students to investigate, create, solve problems and connect classroom concepts with real-life situations.',
  },
  {
    icon: '\u{1F91D}',
    title: 'Community & Responsibility',
    tagline: 'Growing Beyond the Self',
    body: 'Age-appropriate community experiences help students develop empathy, responsibility, respect and an understanding of their role in the world around them.',
  },
]

export default function HolisticHighlights() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-12">
        <div className="flex max-w-2xl flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Beyond the Classroom
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Helping Children Grow in Every Dimension
          </h2>
          <p className="text-base text-slate-600">
            At Vidhyapeeth Karimnagar, education extends beyond academics. Sports, arts, projects,
            collaboration and community experiences help students build confidence, creativity,
            resilience, empathy and responsibility alongside strong academic learning.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={classroomPhoto} alt="Students participating in collaborative learning activities at Vidhyapeeth Public School Karimnagar" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 flex items-center gap-2 rounded-lg bg-accent p-4 shadow-lg">
              <span className="text-2xl text-[#705600]">&#128101;</span>
              <div>
                <p className="font-display text-xl font-bold text-[#705600]">360&deg;</p>
                <p className="text-xs text-[#705600]">Child Development</p>
                <p className="pt-0.5 text-[10px] font-semibold text-[#705600]/80">
                  Academics &middot; Confidence &middot; Creativity &middot; Character
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-sm bg-white p-6 shadow-sm">
                <span className="flex size-10 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                  {pillar.icon}
                </span>
                <h3 className="pt-3 font-display text-lg font-bold text-brand">{pillar.title}</h3>
                <p className="pt-0.5 font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  {pillar.tagline}
                </p>
                <p className="pt-1 text-sm text-slate-600">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
