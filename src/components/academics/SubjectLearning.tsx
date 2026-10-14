// Core CBSE learning areas. Keep this list to subjects and programmes the school actually offers.
const subjects = [
  { icon: '\u{1F4D6}', title: 'Languages', body: 'Comprehension, communication, vocabulary and confident expression.' },
  { icon: '\u{1F522}', title: 'Mathematics', body: 'Conceptual understanding, reasoning, numerical fluency and problem-solving.' },
  { icon: '\u{1F52C}', title: 'Science', body: 'Observation, inquiry, experimentation and application.' },
  { icon: '\u{1F30F}', title: 'Social Science', body: 'Understanding people, society, culture, citizenship and the world around us.' },
  { icon: '\u{1F4BB}', title: 'Digital Learning', body: 'Purposeful use of technology to support research, understanding and creation.' },
]

export default function SubjectLearning() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex max-w-2xl flex-col items-start gap-2">
          <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
            A Balanced CBSE Curriculum
          </span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
            Building Knowledge Across Every Core Learning Area
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {subjects.map((subject) => (
            <div key={subject.title} className="rounded-lg bg-[#f9f9ff] p-5 ring-1 ring-slate-100">
              <span aria-hidden className="flex size-10 items-center justify-center rounded-sm bg-[#e7eeff] text-lg">
                {subject.icon}
              </span>
              <h3 className="pt-3 font-display text-lg font-bold text-brand">{subject.title}</h3>
              <p className="pt-1 text-sm text-slate-600">{subject.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
