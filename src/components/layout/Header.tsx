import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import logo from '../../assets/images/logo.png'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { ContactButtons, SocialLinks } from '../shared/ContactLinks'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Vidhyapeeth', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Beyond Academics', to: '/beyond-academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Gallery', to: '/gallery' },
]

function NavLinkItem({ label, to }: { label: string; to: string }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `relative flex flex-col items-start pt-[3.5px] pb-[3.75px] font-sans text-[13.5px] font-semibold whitespace-nowrap ${
          isActive ? 'text-brand' : 'text-slate-700 font-medium hover:text-brand'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand" />}
        </>
      )}
    </NavLink>
  )
}

// Larger, glowing CTA so the campus-visit action stands out from the nav links.
const visitButtonClasses =
  'group px-6! py-3.5! text-[13px]! ring-2 ring-accent/40 ring-offset-2 ring-offset-white shadow-[0_10px_24px_-8px_rgba(212,160,23,0.75)] hover:shadow-[0_14px_28px_-8px_rgba(212,160,23,0.9)]'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18M8 14h2M14 14h2M8 17h2" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-[4px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-6">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex size-[72px] shrink-0 items-center justify-center">
            <img src={logo} alt="Vidhyapeeth High School" className="size-full object-contain" />
          </span>
          <span className="flex flex-col items-start gap-1">
            <span className="font-display text-[20px] leading-none font-extrabold tracking-[-0.5px] text-brand">
              VIDHYAPEETH
            </span>
            <span className="pl-1 font-display text-[11px] leading-none font-semibold tracking-[2.75px] text-accent [-webkit-text-stroke:0.1px_var(--color-brand)]">
              HIGH SCHOOL
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => (
            <NavLinkItem key={item.to} {...item} />
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <SocialLinks include="contact" className="hidden flex-nowrap gap-2! 2xl:flex" />
          <Button
            as={NavLink}
            to="/enquiry"
            className={visitButtonClasses}
            icon={<img src={arrowRight} alt="" className="size-3.5 transition-transform group-hover:translate-x-0.5" />}
          >
            <CalendarIcon />
            Book a Campus Visit
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex size-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-brand transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 bg-brand transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-brand transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-t border-slate-100 bg-white px-6 py-4 xl:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 font-sans text-sm font-semibold ${
                  isActive ? 'bg-slate-100 text-brand' : 'text-slate-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            as={NavLink}
            to="/enquiry"
            onClick={() => setMobileOpen(false)}
            className={`mt-3 justify-center ${visitButtonClasses}`}
            icon={<img src={arrowRight} alt="" className="size-3.5" />}
          >
            <CalendarIcon />
            Book a Campus Visit
          </Button>
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <span className="font-sans text-xs font-bold tracking-[1.2px] text-slate-500 uppercase">
              Talk to Admissions
            </span>
            <ContactButtons />
            <span className="pt-1 font-sans text-xs font-bold tracking-[1.2px] text-slate-500 uppercase">
              Follow Vidhyapeeth
            </span>
            <SocialLinks />
          </div>
        </nav>
      )}
    </header>
  )
}
