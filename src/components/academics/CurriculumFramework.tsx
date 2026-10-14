import robotics from '../../assets/images/academics-robotics-badge.jpg'
import discussing from '../../assets/images/academics-hero-secondary.jpg'

const capabilities = [
  {
    title: 'Learner-Centred Learning',
    body: 'Children actively participate, discuss, explore and take increasing ownership of their learning.',
  },
  {
    title: 'Critical Thinking',
    body: 'Students learn to interpret information, compare ideas and develop reasoned conclusions.',
  },
  {
    title: 'Communication',
    body: 'Classroom discussion, presentation and written expression help students communicate ideas clearly.',
  },
  {
    title: 'Application & Problem-Solving',
    body: 'Students connect concepts with new situations and practical challenges.',
  },
  {
    title: 'Broad & Balanced Learning',
    body: 'Academic knowledge develops alongside creativity, collaboration and personal growth.',
  },
  {
    title: 'Independent Thinking',
    body: 'Students are encouraged to question, reflect and develop their own understanding.',
  },
]

export default function CurriculumFramework() {
  return (
    <section id="curriculum" className="scroll-mt-20 bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-slate-500 uppercase">
              CBSE Curriculum at Vidhyapeeth
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            Strong Academic Foundations Built for Deeper Understanding
          </h2>
          <p className="text-base text-slate-600">
            Our CBSE curriculum is designed to build conceptual clarity, essential subject knowledge
            and the confidence to use learning in different situations. Students are encouraged to
            explore ideas, ask questions, communicate their thinking and connect classroom concepts
            with real-life experiences.
          </p>
          <a
            href="#stages"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-sans text-sm font-bold tracking-[0.6px] text-brand uppercase shadow-sm"
          >
            Explore Our Learning Journey&nbsp;&rarr;
          </a>
          <blockquote className="max-w-md border-l-4 border-accent py-2 pl-6">
            <p className="font-display text-lg text-brand">
              &ldquo;Learning becomes meaningful when students understand why, ask questions and
              discover how knowledge connects with the world around them.&rdquo;
            </p>
            <footer className="pt-2 text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
              &mdash; Vidhyapeeth Learning Philosophy
            </footer>
          </blockquote>
          <div className="flex w-full max-w-md items-center gap-3 rounded-lg bg-brand p-4 text-white shadow-sm">
            <img src={robotics} alt="Hands-on robotics learning" className="size-12 shrink-0 rounded-sm object-cover" />
            <p className="font-display text-sm font-bold">Learning That Goes Beyond the Textbook</p>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl">
            <img src={discussing} alt="Vidhyapeeth students in discussion" className="aspect-[4/3] w-full object-cover" />
          </div>
          {capabilities.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-3 text-center shadow-sm">
              <h3 className="font-display text-xs font-bold text-brand">{item.title}</h3>
              <p className="pt-1 text-[11px] leading-snug text-slate-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
