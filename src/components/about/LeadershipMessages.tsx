import { useEffect, useRef, useState } from 'react'

// Names, roles and messages as provided by the school. Add `photo` only once an approved
// portrait is available. Do not add qualifications, surnames or quotes without approval.
interface Leader {
  name: string
  role: string
  photo?: string
  heading: string
  message: string
}

const leaders: Leader[] = [
  {
    name: 'Shireesha',
    role: 'Director',
    heading: 'A School Should Teach Children How to Think, Not Just What to Remember.',
    message:
      'At Vidhyapeeth, we believe education should awaken curiosity and give every child the confidence to question, explore and express. Our responsibility goes beyond preparing students for examinations; we want them to understand deeply, think independently, act responsibly and grow into capable individuals with strong values. Every learning experience at Vidhyapeeth is designed with that larger purpose in mind.',
  },
  {
    name: 'Deepthi',
    role: 'Principal',
    heading: 'Meaningful Learning Happens When Every Child Is Encouraged to Participate, Question and Grow.',
    message:
      'Our classrooms are built around understanding, inquiry and active participation. We encourage students not only to answer questions, but also to ask them, discuss ideas, apply concepts and communicate their thinking with confidence. Alongside strong CBSE academics, our teachers focus on each child’s progress, character and well-being so that learning becomes both meaningful and lasting.',
  },
]

interface LeaderCardProps {
  leader: Leader
  expanded: boolean
  onToggle: () => void
  /** Height shared by the collapsed cards; keeps a closed card unchanged while another is open. */
  minHeight?: number
}

function LeaderCard({ leader, expanded, onToggle, minHeight }: LeaderCardProps) {
  const messageId = `leader-message-${leader.role.toLowerCase()}`

  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-md sm:flex-row" style={{ minHeight }}>
      <div className="flex h-48 w-full shrink-0 items-center justify-center overflow-hidden rounded-sm bg-brand shadow-sm sm:w-40">
        {leader.photo ? (
          <img
            src={leader.photo}
            alt={`${leader.name}, ${leader.role} of Vidhyapeeth Karimnagar`}
            className="size-full object-cover"
          />
        ) : (
          <span aria-hidden className="font-display text-6xl font-extrabold text-accent">
            {leader.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col items-start">
        <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
          {leader.role}
        </p>
        <h3 className="pt-1 font-display text-xl font-bold text-brand">{leader.name}</h3>
        <p className="pt-3 font-display text-base leading-snug font-bold text-brand">
          &ldquo;{leader.heading}&rdquo;
        </p>
        <p
          id={messageId}
          className={`mb-4 pt-3 text-sm leading-relaxed text-slate-600 ${expanded ? '' : 'line-clamp-4'}`}
        >
          {leader.message}
        </p>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={messageId}
          onClick={onToggle}
          className="mt-auto inline-flex items-center gap-1 font-sans text-sm font-semibold tracking-[0.6px] text-brand uppercase transition-colors hover:text-accent-dark focus-visible:underline focus-visible:outline-none"
        >
          {expanded ? <>Show Less &uarr;</> : <>Read {leader.role}&rsquo;s Message&nbsp;&rarr;</>}
        </button>
      </div>
    </div>
  )
}

export default function LeadershipMessages() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [collapsedHeight, setCollapsedHeight] = useState<number>()
  const gridRef = useRef<HTMLDivElement>(null)
  const anyExpanded = Object.values(expanded).some(Boolean)

  // While every card is collapsed the grid stretches them to equal height; remember that
  // height (and update it on resize) so it can be kept once a card is opened.
  useEffect(() => {
    const grid = gridRef.current
    if (!grid || anyExpanded) return
    const observer = new ResizeObserver(() => {
      const card = grid.firstElementChild as HTMLElement | null
      if (card) setCollapsedHeight(card.offsetHeight)
    })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [anyExpanded])

  return (
    <section id="leadership" className="bg-[#f0f3ff] px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-12">
        <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-6 bg-accent" />
            <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent-dark uppercase">
              Leadership at Vidhyapeeth
            </span>
            <span className="h-0.5 w-6 bg-accent" />
          </div>
          <h2 className="font-display text-3xl font-extrabold text-brand sm:text-4xl">
            Guiding with Experience. Leading with Purpose.
          </h2>
          <p className="text-base text-slate-600">
            Vidhyapeeth Public School is guided by a leadership team committed to meaningful
            learning, student progress and a school culture built on curiosity, confidence,
            responsibility and strong values.
          </p>
        </div>

        {/* Collapsed: rows stretch so cards match. Expanded: cards keep the shared collapsed
            height and only the open one grows. */}
        <div
          ref={gridRef}
          className={`grid w-full max-w-6xl gap-8 lg:grid-cols-2 ${anyExpanded ? 'items-start' : 'auto-rows-fr'}`}
        >
          {leaders.map((leader) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              expanded={!!expanded[leader.role]}
              onToggle={() => setExpanded((state) => ({ ...state, [leader.role]: !state[leader.role] }))}
              minHeight={anyExpanded ? collapsedHeight : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
