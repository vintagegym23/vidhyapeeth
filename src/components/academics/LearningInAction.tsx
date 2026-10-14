import { NavLink } from 'react-router-dom'

const features = [
  { icon: '\u{1F4DD}', title: 'Projects & Research' },
  { icon: '\u{1F9EA}', title: 'Experiments & Observation' },
  { icon: '\u{1F5E3}\u{FE0F}', title: 'Presentations & Discussion' },
  { icon: '\u{1F517}', title: 'Interdisciplinary Learning' },
]

export default function LearningInAction() {
  return (
    <section className="bg-[#f9f9ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1360px] items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            Beyond the Textbook
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            What Students Learn Should Connect with the World Around Them
          </h2>
          <p className="text-base text-slate-600">
            Projects, experiments, presentations, discussions and practical activities help students
            connect academic concepts with meaningful experiences. These opportunities strengthen
            understanding while developing collaboration, creativity and confident communication.
          </p>
          <NavLink
            to="/gallery"
            className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.6px] text-[#705600] uppercase shadow-sm transition-colors hover:bg-accent-dark"
          >
            See Learning in Action&nbsp;&rarr;
          </NavLink>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <span aria-hidden className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-[#e7eeff] text-xl">
                {feature.icon}
              </span>
              <h3 className="font-display text-base font-bold text-brand">{feature.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
