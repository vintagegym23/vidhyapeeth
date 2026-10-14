// School contact details shared across the site.
// PLACEHOLDERS: replace these before launch.
//   - SCHOOL_EMAIL: the official Vidhyapeeth mailbox

export const SCHOOL_EMAIL = '[Official Vidhyapeeth Email]'

/** True until SCHOOL_EMAIL holds a real address; placeholder emails are shown but not linked. */
export const EMAIL_IS_PLACEHOLDER = !SCHOOL_EMAIL.includes('@')

export const ADDRESS_LINES = [
  'House No. 2-10-1282, Back Side Lane,',
  'District Court, Jyothinagar,',
  'Karimnagar, Telangana – 505001',
]

/** Opens the school's Google Maps pin (listed under the former name, Academic Heights Public School). */
export const MAPS_URL = 'https://maps.google.com/?cid=7172080388550335117'

/** Embeddable Google Map of the campus, used by every on-page map. */
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.2996575932273!2d79.10306027666051!3d18.47694342495916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd92796f389cd%3A0x6388591d34169a8d!2sAcademic%20Heights%20Public%20School%20-%20Best%20School%20in%20Karimnagar!5e0!3m2!1sen!2sin!4v1791829896728!5m2!1sen!2sin'

export const PHONE_DISPLAY = '09346002121'
export const PHONE_HREF = 'tel:+919346002121'

export const WHATSAPP_NUMBER = '919346002121'

export const OFFICE_HOURS = 'Mon–Sat · 8:00 AM–2:00 PM'

// PLACEHOLDERS: replace '#' with the school's official profile URLs before launch.
export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  youtube: '#',
  linkedin: '#',
  twitter: '#',
}
