import Card from '../ui/Card'
import { ContactButtons, SocialLinks } from '../shared/ContactLinks'
import { PHONE_DISPLAY, PHONE_HREF } from '../../data/contact'

const cards = [
  {
    icon: '📍',
    tone: 'bg-[#e7eeff]',
    label: 'CAMPUS ADDRESS',
    title: 'Karimnagar Center',
    body: 'House No. 2-10-1282, Back Side Lane District Court, Jyothinagar, Karim Nagar, Telangana – 505001.',
    linkLabel: 'View Campus Map',
    href: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Vidhyapeeth, Jyothinagar, Karimnagar, Telangana 505001'),
  },
  {
    icon: '📞',
    tone: 'bg-[#e7eeff]',
    label: 'OFFICIAL HELPLINE',
    title: PHONE_DISPLAY,
    body: 'Monday through Saturday, 8:00 AM – 2:00 PM IST. Sunday: Closed for visitors.',
    linkLabel: 'Dial Helpdesk Now',
    href: PHONE_HREF,
  },
  {
    icon: '📧',
    tone: 'bg-[#e7eeff]',
    label: 'DIGITAL CORRESPONDENCE',
    title: 'ahps5103@...',
    body: 'ahps5103@academicheights.in. Expect response within 24 operational hours.',
    linkLabel: 'Send Email',
    href: 'mailto:ahps5103@academicheights.in',
  },
  {
    icon: '🛡️',
    tone: 'bg-accent/20',
    label: 'BOARD RECOGNITION',
    title: 'Affiliation 3630436',
    body: 'Central Board of Secondary Education, New Delhi. Validated educational governance standards.',
    linkLabel: null,
    href: null,
  },
]

export default function InfoCards() {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.label} className="flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-3">
              <span className={`flex size-12 items-center justify-center rounded-lg text-xl ${card.tone}`}>
                {card.icon}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-xs font-bold tracking-[0.48px] text-slate-500 uppercase">
                  {card.label}
                </span>
                <h3 className="font-display text-lg font-bold text-brand">{card.title}</h3>
                <p className="text-sm leading-[22.75px] text-slate-600">{card.body}</p>
              </div>
            </div>
            {card.linkLabel && card.href && (
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1 text-sm font-bold text-brand hover:underline"
              >
                {card.linkLabel} <span aria-hidden>&rarr;</span>
              </a>
            )}
          </Card>
        ))}
      </div>
      <Card className="mx-auto mt-4 flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-sans text-xs font-bold tracking-[0.48px] text-slate-500 uppercase">
            Call or WhatsApp Admissions
          </span>
          <ContactButtons />
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <span className="font-sans text-xs font-bold tracking-[0.48px] text-slate-500 uppercase">
            Follow Vidhyapeeth Schools
          </span>
          <SocialLinks />
        </div>
      </Card>
    </section>
  )
}
