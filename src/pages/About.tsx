import Reveal from '../components/ui/Reveal'
import Hero from '../components/about/Hero'
import InstitutionalStory from '../components/about/InstitutionalStory'
import MissionVision from '../components/about/MissionVision'
import InquiryLearning from '../components/about/InquiryLearning'
import LeadershipMessages from '../components/about/LeadershipMessages'
import HolisticHighlights from '../components/about/HolisticHighlights'
import AdmissionsBanner from '../components/shared/AdmissionsBanner'
import campusVisitImage from '../assets/images/home-hero/student-arrival.jpg'
import { OFFICE_HOURS, PHONE_DISPLAY, PHONE_HREF } from '../data/contact'

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
        <InquiryLearning />
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
          heading="Come See How Learning Happens at Vidhyapeeth."
          body="Choosing a school is an important decision. Visit Vidhyapeeth Karimnagar, meet our educators, explore the campus and understand how we combine strong CBSE academics with inquiry, communication, creativity and character development."
          primaryLabel="Book a Campus Visit"
          primaryTo="/enquiry"
          secondaryLabel="Start an Admission Enquiry"
          secondaryTo="/admissions#enquiry"
          image={campusVisitImage}
          imageCaption={
            <>
              <p className="font-display text-sm font-bold text-white">Campus Visits Welcome</p>
              <p className="text-xs text-slate-200">{OFFICE_HOURS}</p>
            </>
          }
          footerNote={
            <>
              <span>CBSE Affiliation No. 3630436 &middot; Karimnagar, Telangana</span>
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
