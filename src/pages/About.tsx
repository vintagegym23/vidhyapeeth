import Reveal from '../components/ui/Reveal'
import Hero from '../components/about/Hero'
import InstitutionalStory from '../components/about/InstitutionalStory'
import MissionVision from '../components/about/MissionVision'
import LeadershipMessages from '../components/about/LeadershipMessages'
import HolisticHighlights from '../components/about/HolisticHighlights'
import AdmissionsBanner from '../components/shared/AdmissionsBanner'
import { PHONE_DISPLAY, PHONE_HREF } from '../data/contact'

export default function About() {
  return (
    <>
      <Hero />
      <Reveal>
        <InstitutionalStory />
      </Reveal>
      <Reveal>
        <MissionVision />
      </Reveal>
      <Reveal>
        <LeadershipMessages />
      </Reveal>
      <Reveal>
        <HolisticHighlights />
      </Reveal>
      <Reveal>
        <AdmissionsBanner
          eyebrow="Admissions Open for Academic Year 2027–28"
          heading="Ready to Be a Part of Their Bright Tomorrow?"
          body="Give your child an inspiring educational sanctuary where intellect, character, and self-belief flourish concurrently. Limited class cohorts ensure personalized attention."
          footerNote={
            <>
              <span>CBSE Affiliation Code: 3630436 &bull; Karimnagar, Telangana</span>
              <span>
                Call:{' '}
                <a href={PHONE_HREF} className="hover:text-white hover:underline">
                  {PHONE_DISPLAY}
                </a>{' '}
                &bull; Email: ahps5103@academicheights.in
              </span>
            </>
          }
        />
      </Reveal>
    </>
  )
}
