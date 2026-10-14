import { NavLink } from 'react-router-dom'
import heroPrimary from '../../assets/images/about-hero-primary.jpg'
import heroSecondary from '../../assets/images/about-hero-secondary.jpg'

const stats = [
  { value: '2013', label: 'Established' },
  { value: '1000+', label: 'Students & Alumni Shaped by Vidhyapeeth' },
  { value: '25–28', label: 'Average Class Size' },
  { value: 'Grade 1–Grade X', label: 'Learning Journey' },
]

export default function Hero() {
  return (
    <section className="bg-[#f9f9ff] px-6 pt-24 pb-10 sm:px-10 lg:px-16 lg:pt-32 lg:pb-14">
      <div className="mx-auto grid max-w-[1360px] items-start gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4 lg:order-1">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              About Vidhyapeeth Public School &middot; Karimnagar
            </span>
          </div>
          <h1 className="font-display text-3xl leading-snug font-bold text-brand sm:text-4xl lg:text-5xl lg:leading-tight lg:tracking-tight">
            A CBSE School Where Children Learn to Think, Question and{' '}
            <span className="text-accent">Grow with Confidence.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Vidhyapeeth Public School, Karimnagar, combines strong CBSE academics with inquiry based
            learning, creativity, communication, and character development to nurture independent
            thinking and confident, capable individuals.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <NavLink
              to="/academics"
              className="inline-flex items-center rounded-sm bg-accent px-6 py-2 font-sans text-sm font-semibold tracking-[0.6px] text-[#705600] uppercase shadow-sm transition-colors hover:bg-accent-dark"
            >
              Discover Our Learning Approach&nbsp;&rarr;
            </NavLink>
            <a href="#leadership" className="inline-flex items-center gap-1 font-sans text-sm font-semibold tracking-[0.6px] text-brand uppercase">
              Meet Our Leadership &darr;
            </a>
          </div>
        </div>

        {/* Below the text on phones/tablets; a full-width row under the text and photo on desktop. */}
        <div className="grid w-full grid-cols-2 gap-3 lg:order-3 lg:col-span-2 lg:grid-cols-4 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-sm bg-[#f0f3ff] px-3 py-2.5 lg:px-4 lg:py-3">
              <p className="font-display text-base font-bold whitespace-nowrap text-brand min-[380px]:text-lg sm:text-2xl lg:text-xl xl:text-2xl">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-[480px] lg:order-2">
          <div className="relative overflow-hidden rounded-lg border-8 border-white bg-[#d7e3fd] shadow-xl">
            <img src={heroPrimary} alt="Vidhyapeeth students smiling on campus" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 left-1/3 aspect-square w-2/5 overflow-hidden rounded-lg border-4 border-white bg-white shadow-2xl">
            <img src={heroSecondary} alt="Vidhyapeeth student in a science lab" className="size-full object-cover" />
          </div>
          {/* Sits outside the photo cards so the overlapping inset photo can't cover it. */}
          <span className="absolute bottom-6 left-6 z-10 inline-flex items-center gap-1.5 rounded-sm bg-[#001134] px-2 py-1 font-sans text-xs font-semibold tracking-[0.6px] text-white uppercase shadow-lg">
            Affiliated to CBSE New Delhi
          </span>
          <span className="absolute -top-4 left-2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 font-sans text-xs font-semibold text-brand shadow-lg">
            <span className="size-2.5 rounded-full bg-accent" />
            Curiosity &bull; Character &bull; Leadership
          </span>
        </div>
      </div>
    </section>
  )
}
