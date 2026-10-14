import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import arrowRight from '../../assets/icons/arrow-right.svg'

const steps = ['Understand', 'Question', 'Think', 'Apply', 'Express']

export default function InquiryLearning() {
  return (
    <section id="inquiry" className="bg-[#f9f9ff] px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-3xl bg-brand p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:p-12 lg:p-16">
        <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/10" />
        <div aria-hidden className="absolute -bottom-32 -left-20 size-80 rounded-full bg-white/5" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-accent" />
              <span className="font-display text-xs font-semibold tracking-[1.2px] text-accent uppercase">
                Inquiry-Based Learning at Vidhyapeeth
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px]">
              We Don&rsquo;t Just Teach Students to Find Answers. We Teach Them to{' '}
              <span className="text-accent">Ask Better Questions.</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              At Vidhyapeeth Karimnagar, students are encouraged to observe, question, interpret and
              think independently. Our inquiry-based learning approach helps children move beyond
              memorisation by exploring ideas, framing meaningful questions and developing deeper
              understanding through active thinking and application.
            </p>
            <Button
              as={NavLink}
              to="/academics"
              className="mt-1"
              icon={<img src={arrowRight} alt="" className="size-4" />}
            >
              Discover Our Learning Approach
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <ol className="flex flex-col gap-2.5" aria-label="Understand. Question. Think. Apply. Express.">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-extrabold text-brand">
                    {index + 1}
                  </span>
                  <span className="font-display text-lg font-bold tracking-[0.3px] text-white">{step}</span>
                </li>
              ))}
            </ol>

            <div className="flex gap-4 rounded-xl bg-white p-5 shadow-lg">
              <span
                aria-hidden
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent font-display text-xl font-extrabold text-brand"
              >
                ?
              </span>
              <div>
                <p className="font-sans text-xs font-semibold tracking-[0.6px] text-accent-dark uppercase">
                  Inquiry in Assessment
                </p>
                <p className="pt-1 text-sm leading-relaxed text-slate-600">
                  Even assessments can encourage inquiry&mdash;for example, students may be given a
                  passage and asked to frame meaningful questions from it, helping them demonstrate
                  understanding rather than simple recall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
