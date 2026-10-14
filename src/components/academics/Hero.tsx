import heroMain from '../../assets/images/academics-hero-main.jpg'
import heroSecondary from '../../assets/images/academics-hero-secondary.jpg'

const stats = [
  { value: '24–25', label: 'Average Class Size' },
  { value: 'CBE', label: 'Competency-Based Learning' },
  { value: 'FNAT', label: 'Fortnightly Academic Assessment' },
  { value: 'Pre-Primary–Grade X', label: 'CBSE Learning Journey' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-36 pb-16 sm:px-10 sm:pt-32 lg:px-16 lg:pt-36 lg:pb-20">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dfe8ff] px-3 py-1 text-xs font-semibold text-brand">
            <span className="size-2 rounded-full bg-accent" />
            CBSE Academics &middot; Vidhyapeeth Karimnagar
          </span>
          <h1 className="font-display text-3xl leading-snug font-bold text-brand sm:text-4xl lg:text-5xl lg:leading-tight">
            CBSE Learning That Builds Understanding, Inquiry and Application
          </h1>
          <p className="font-display text-xl font-bold text-brand">
            Learn. Explore.{' '}
            <span className="text-accent-dark underline decoration-accent decoration-4 underline-offset-4">Grow.</span>
          </p>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            At Vidhyapeeth Public School Karimnagar, our CBSE curriculum blends strong conceptual
            foundations with inquiry-based and competency-based learning, so students understand
            deeply and apply what they learn with confidence.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#approach"
              className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.6px] text-[#705600] uppercase shadow-sm transition-colors hover:bg-accent-dark"
            >
              Explore Our Academic Approach&nbsp;&rarr;
            </a>
            <a
              href="#stages"
              className="inline-flex items-center rounded-sm bg-white px-5 py-3.5 font-sans text-sm font-semibold tracking-[0.6px] text-brand uppercase shadow-sm"
            >
              Discover Learning Stages&nbsp;&darr;
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-2xl border-4 border-white bg-[#d7e3fd] shadow-2xl">
            <img src={heroMain} alt="Vidhyapeeth students in an academic lab" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 w-48 overflow-hidden rounded-xl bg-white p-1.5 shadow-2xl">
            <img src={heroSecondary} alt="Vidhyapeeth students reading" className="aspect-[4/3] w-full rounded-lg object-cover" />
          </div>
          <div className="absolute -top-6 left-8 flex size-28 -rotate-6 flex-col items-center justify-center rounded-xl bg-[#ffdf92] p-2 text-center shadow-lg">
            <p className="font-display text-sm font-bold text-[#241a00]">Curiosity Today.</p>
            <p className="text-xs text-[#241a00]/80">Confidence Tomorrow.</p>
          </div>
          <div className="absolute right-4 bottom-6 flex max-w-[220px] items-center gap-2 rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-sm bg-brand text-white">&#127891;</span>
            <div>
              <p className="text-xs font-bold text-brand">CBSE Affiliation</p>
              <p className="text-[11px] text-slate-500">Competency-Based Standards</p>
            </div>
          </div>
        </div>

        {/* Full-width row under the text and image: 4 columns on desktop, 2×2 on smaller screens. */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-200 pt-8 lg:col-span-2 lg:grid-cols-4 lg:gap-x-0">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`lg:px-8 ${i > 0 ? 'lg:border-l lg:border-slate-200' : 'lg:pl-0'}`}>
              <p className="font-display text-xl font-bold text-brand sm:text-2xl">{stat.value}</p>
              <p className="pt-1 text-xs tracking-wide text-slate-500 uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
