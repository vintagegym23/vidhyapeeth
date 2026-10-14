import smartClassroom from '../../assets/images/academics-smart-classroom.jpg'
import scienceLab from '../../assets/images/academics-science-lab.jpg'
import computerLab from '../../assets/images/academics-computer-lab.jpg'
import mathLab from '../../assets/images/academics-math-lab.jpg'
import library from '../../assets/images/academics-library.jpg'
import primaryClassroom from '../../assets/images/about-classroom.png'

const spaces = [
  {
    photo: smartClassroom,
    tag: 'Smart Infrastructure',
    title: 'Smart Classrooms',
    body: 'Interactive IFPD panels, ergonomic furnishings, and natural acoustic insulation.',
  },
  {
    photo: scienceLab,
    tag: 'Research & Inquiry',
    title: 'Composite Science Lab',
    body: 'Precision apparatus adhering to CBSE standards for Physics, Chemistry, and Biology.',
  },
  {
    photo: computerLab,
    tag: null,
    title: 'Computer & ICT Lab',
    body: 'High-speed fiber connectivity and coding suites.',
  },
  {
    photo: mathLab,
    tag: null,
    title: 'Mathematics Lab',
    body: 'Tactile manipulatives converting abstract concepts to reality.',
  },
  {
    photo: library,
    tag: null,
    title: 'Enriched Resource Library',
    body: '2,000+ print volumes plus digital journals repository.',
  },
  {
    photo: primaryClassroom,
    tag: null,
    title: 'Primary Learning Classrooms',
    body: 'Bright, activity-rich classrooms where young learners build language and numeracy foundations through participation.',
  },
]

export default function EnvironmentTour() {
  return (
    <section id="environment" className="scroll-mt-20 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Learning Environments
            </span>
            <h2 className="pt-1 font-display text-3xl font-extrabold text-brand sm:text-4xl">
              Spaces That Inspire
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Purpose-built educational architecture configured to encourage active collaboration,
            focused research, and joyful discovery.
          </p>
        </div>

        {/* Three columns on desktop, two on tablets; a short last row is centred. */}
        <div className="flex flex-wrap justify-center gap-6">
          {spaces.map((space) => (
            <div
              key={space.title}
              className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
            >
              <div className="relative h-60 bg-[#e7eeff]">
                <img src={space.photo} alt={space.title} className="size-full object-cover" />
                {space.tag && (
                  <span className="absolute top-4 left-4 rounded-sm bg-brand px-3 py-1 font-sans text-xs font-semibold tracking-wide text-white uppercase">
                    {space.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-brand">{space.title}</h3>
                <p className="pt-1 text-sm text-slate-600">{space.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
