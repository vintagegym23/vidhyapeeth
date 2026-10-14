import Reveal from '../components/ui/Reveal'
import Hero from '../components/academics/Hero'
import CurriculumFramework from '../components/academics/CurriculumFramework'
import PedagogyInPractice from '../components/academics/PedagogyInPractice'
import CbeCompetency from '../components/academics/CbeCompetency'
import AssessmentProgress from '../components/academics/AssessmentProgress'
import LearningStages from '../components/academics/LearningStages'
import SubjectLearning from '../components/academics/SubjectLearning'
import LearningInAction from '../components/academics/LearningInAction'
import EnvironmentTour from '../components/academics/EnvironmentTour'
import TeachingWithPurpose from '../components/academics/TeachingWithPurpose'
import AcademicOutcomes from '../components/academics/AcademicOutcomes'
import AdmissionsBanner from '../components/shared/AdmissionsBanner'
import ctaBanner from '../assets/images/academics-cta-banner.jpg'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Academics() {
  usePageMeta(
    'Academics & CBSE Curriculum | Vidhyapeeth Public School Karimnagar',
    'Explore academics at Vidhyapeeth Public School Karimnagar, including CBSE curriculum, inquiry-based learning, competency-based education, assessments and application-focused learning from Pre-Primary to Grade X.',
  )

  return (
    <>
      <Hero />
      <Reveal>
        <CurriculumFramework />
      </Reveal>
      <Reveal>
        <PedagogyInPractice />
      </Reveal>
      <Reveal>
        <CbeCompetency />
      </Reveal>
      <Reveal>
        <AssessmentProgress />
      </Reveal>
      <Reveal>
        <LearningStages />
      </Reveal>
      <Reveal>
        <SubjectLearning />
      </Reveal>
      <Reveal>
        <LearningInAction />
      </Reveal>
      <Reveal>
        <EnvironmentTour />
      </Reveal>
      <Reveal>
        <TeachingWithPurpose />
      </Reveal>
      <Reveal>
        <AcademicOutcomes />
      </Reveal>
      <Reveal>
        <AdmissionsBanner
          eyebrow="Admissions Open · Academic Year 2027–28"
          heading="Come See How Learning Happens at Vidhyapeeth."
          body="Visit Vidhyapeeth Public School Karimnagar, meet our educators and experience how our CBSE academic programme combines strong foundations, inquiry-based learning, meaningful assessment and real-world application."
          primaryLabel="Book a Campus Visit"
          primaryTo="/enquiry"
          secondaryLabel="Start an Admission Enquiry"
          secondaryTo="/admissions#enquiry"
          image={ctaBanner}
          imageCaption={
            <>
              <p className="font-display text-sm font-bold text-white">Learn. Explore. Grow.</p>
              <p className="text-xs text-slate-200">Vidhyapeeth Public School, Karimnagar</p>
            </>
          }
        />
      </Reveal>
    </>
  )
}
