// Parent testimonials for the homepage.
// The quotes below are DRAFTS for real parents to approve or adapt. Only entries with
// `approved: true` and a real parent name and grade are shown.
// TEMPORARY: the names and grades below are placeholders. Replace them with the real
// approved parent names and grades before launch.
// Add `photo` only with the parent's consent. Do not add ratings or star scores.

export interface Testimonial {
  quote: string
  parentName: string
  /** e.g. 'Grade 5' */
  grade: string
  photo?: string
  approved: boolean
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'We joined Vidhyapeeth looking for strong academics, but what impressed us equally was the confidence our child has developed in speaking, participating and expressing ideas.',
    parentName: 'Suresh',
    grade: 'Grade 5',
    approved: true,
  },
  {
    quote:
      'The teachers know my child well—not only academically, but also where support and encouragement are needed. That personal attention gives us a lot of confidence as parents.',
    parentName: 'Raju',
    grade: 'Grade 3',
    approved: true,
  },
  {
    quote:
      'What we value most is that we can actually see the change in our child—better confidence, stronger communication and a genuine interest in learning.',
    parentName: 'Veeresh',
    grade: 'Grade 8',
    approved: true,
  },
]
