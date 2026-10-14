import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
// The icon files are misnamed; these imports are paired by what each SVG actually draws.
import pinIcon from '../../assets/icons/phone.svg'
import phoneIcon from '../../assets/icons/mail.svg'
import mailIcon from '../../assets/icons/clock.svg'
import clockIcon from '../../assets/icons/pin.svg'
import {
  ADDRESS_LINES,
  EMAIL_IS_PLACEHOLDER,
  MAPS_URL,
  OFFICE_HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SCHOOL_EMAIL,
  WHATSAPP_HREF,
} from '../../data/contact'
import { SocialLinks } from '../shared/ContactLinks'

const discoverLinks = [
  { label: 'About Vidhyapeeth', to: '/about' },
  { label: 'Vision, Mission & Philosophy', to: '/about#vision' },
  { label: 'Leadership', to: '/about#leadership' },
  { label: 'Campus & Infrastructure', to: '/academics#environment' },
  { label: 'Student Life', to: '/gallery' },
  { label: 'News & Stories', to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

// The Academics page has no separate stage pages yet, so stage links open its curriculum section.
const learningLinks = [
  { label: 'Academics', to: '/academics' },
  { label: 'Foundational & Primary Years', to: '/academics#curriculum' },
  { label: 'Middle School', to: '/academics#curriculum' },
  { label: 'Secondary School', to: '/academics#curriculum' },
  { label: 'Beyond Academics', to: '/beyond-academics' },
  { label: 'Admissions 2027–28', to: '/admissions' },
  { label: 'Book a Campus Experience', to: '/enquiry' },
]

// Privacy Policy and Terms of Use are placeholder pages until the approved text is published.
const bottomLinks = [
  { label: 'Mandatory Public Disclosure', to: '/mandatory-disclosure' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Contact Us', to: '/contact' },
]

function ContactRow({ icon, iconClass, children }: { icon: string; iconClass: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex size-5 shrink-0 items-center justify-center">
        <img src={icon} alt="" className={iconClass} />
      </span>
      <div className="text-sm leading-5 tracking-[0.07px] text-footer-text">{children}</div>
    </div>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-lg font-semibold leading-7 text-white">{children}</h2>
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="w-fit text-sm leading-5 tracking-[0.07px] text-footer-text transition-colors hover:text-white"
    >
      {label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 pb-12 sm:grid-cols-2 sm:pb-16 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Vidhyapeeth High School" className="size-16 shrink-0 object-contain" />
              <span className="flex flex-col items-start gap-1">
                <span className="font-display text-[20px] leading-none font-extrabold tracking-[-0.5px] text-white">
                  VIDHYAPEETH
                </span>
                <span className="pl-1 font-display text-[11px] leading-none font-semibold tracking-[2.75px] text-accent">
                  HIGH SCHOOL
                </span>
              </span>
            </div>
            <p className="pt-2 font-sans text-xs font-semibold tracking-[0.3px] text-accent-light">
              CBSE Affiliation No. 3630436
            </p>
            <p className="max-w-[320px] text-sm leading-[22.75px] tracking-[0.07px] text-footer-text">
              A CBSE school focused on strong academics, confident communication and
              character&mdash;helping every child grow with purpose.
            </p>
            <p className="font-script text-2xl text-accent">Learning with Purpose.</p>
            <SocialLinks tone="dark" include="all" className="pt-1" />
          </div>

          <nav aria-label="Discover Vidhyapeeth" className="flex flex-col gap-5">
            <FooterHeading>Discover Vidhyapeeth</FooterHeading>
            <div className="flex flex-col gap-3">
              {discoverLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <nav aria-label="Learning and admissions" className="flex flex-col gap-5">
            <FooterHeading>Learning &amp; Admissions</FooterHeading>
            <div className="flex flex-col gap-3">
              {learningLinks.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-5">
            <FooterHeading>Visit Vidhyapeeth Karimnagar</FooterHeading>
            <address className="flex flex-col gap-3 not-italic">
              <ContactRow icon={pinIcon} iconClass="h-5 w-4">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactRow>
              <ContactRow icon={phoneIcon} iconClass="size-[18px]">
                Phone:{' '}
                <a href={PHONE_HREF} className="transition-colors hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </ContactRow>
              <ContactRow icon={mailIcon} iconClass="h-4 w-5">
                Email:{' '}
                {EMAIL_IS_PLACEHOLDER ? (
                  SCHOOL_EMAIL
                ) : (
                  <a href={`mailto:${SCHOOL_EMAIL}`} className="break-all transition-colors hover:text-white">
                    {SCHOOL_EMAIL}
                  </a>
                )}
              </ContactRow>
              <ContactRow icon={clockIcon} iconClass="size-5">
                School Office: {OFFICE_HOURS}
              </ContactRow>
            </address>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-display text-xs font-bold tracking-[0.6px] text-accent uppercase hover:underline"
              >
                Get Directions &rarr;
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit font-display text-xs font-bold tracking-[0.6px] text-accent uppercase hover:underline"
              >
                WhatsApp Admissions &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-8">
            <p className="text-xs font-semibold leading-5 tracking-[0.48px] text-footer-text">
              &copy; {new Date().getFullYear()} Vidhyapeeth Karimnagar. All Rights Reserved.
              <span className="px-2" aria-hidden>
                |
              </span>
              CBSE Affiliation No. 3630436
            </p>
            <nav aria-label="Legal and quick links" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="whitespace-nowrap text-xs font-semibold tracking-[0.48px] text-footer-text transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <p className="text-xs text-footer-text/80">
            Vidhyapeeth Karimnagar &middot; CBSE School in Karimnagar, Telangana
          </p>
        </div>
      </div>
    </footer>
  )
}
