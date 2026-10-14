import ContactForm from './ContactForm'
import CampusMap from '../shared/CampusMap'
import { MAPS_URL } from '../../data/contact'

export default function FormMapSplit() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 font-display text-lg font-bold text-brand">
                <span aria-hidden>🧭</span> Interactive Campus Map
              </span>
              <span className="rounded bg-[#e7eeff] px-2 py-0.5 text-xs font-semibold text-slate-500">
                Telangana 505001
              </span>
            </div>
            <div className="overflow-hidden rounded-lg bg-[#dfe8ff]">
              <CampusMap className="h-[280px]" />
            </div>
            <div className="flex flex-col gap-2 pt-1 text-sm text-slate-600">
              <p>
                <span className="font-bold">Key Landmark:</span> Directly accessible via the Back
                Side Lane of District Court, Jyothinagar.
              </p>
              <p>
                <span className="font-bold">Connectivity:</span> 7 minutes from Karimnagar Central
                Bus Station (RTC Bus Stand).
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded bg-[#e7eeff] py-2 text-sm font-semibold text-brand"
            >
              Open in Google Maps Application <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 rounded-2xl bg-[#dfe8ff]/60 p-6">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-brand">
              <span aria-hidden>🕑</span> Campus Visiting Protocol
            </span>
            <p className="text-sm leading-[22.75px] text-slate-600">
              Prospective parents are encouraged to schedule an appointment with the Admissions
              Counselor between <span className="font-bold">8:30 AM and 1:30 PM</span> to observe
              our interactive smart classes and laboratory facilities without disrupting classroom
              sessions.
            </p>
            <p className="flex items-start gap-2 pt-1 text-xs font-bold text-brand">
              <span aria-hidden>ℹ️</span> Security check-in at Gate 1 required for all
              non-registered visitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
