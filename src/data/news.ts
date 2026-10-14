// Homepage News, Events & Achievements.
// Add only verified items. For achievements, confirm the award, level, organiser,
// recipient and date before publishing. Past events and stories drop off the
// "Upcoming" list automatically once their date has passed.

export type NewsCategory = 'News' | 'Event' | 'Achievement'

export interface NewsItem {
  category: NewsCategory
  title: string
  /** Publication date, or the event date for events. Format: YYYY-MM-DD */
  date: string
  summary: string
  /** Link to the full story or event page. */
  href: string
  image?: string
  /** Describe what is actually pictured. */
  imageAlt?: string
}

// TEMPORARY: the items below are placeholders so the section can be previewed.
// Replace them with real, verified school news (and real article/event links) before launch.
export const newsItems: NewsItem[] = [
  {
    category: 'Event',
    title: 'Annual Day Celebrations 2026',
    date: '2026-10-25',
    summary: 'An evening of performances, music and dance by our students, celebrating the year at Vidhyapeeth.',
    href: '/blog',
  },
  {
    category: 'Event',
    title: "Children's Day Celebrations",
    date: '2026-11-14',
    summary: 'A day of fun activities and special assemblies planned by teachers for our students.',
    href: '/blog',
  },
  {
    category: 'News',
    title: 'Gandhi Jayanti Observed at Vidhyapeeth',
    date: '2026-10-02',
    summary: 'Students remembered Mahatma Gandhi through a special assembly, speeches and a campus cleanliness drive.',
    href: '/blog',
  },
  {
    category: 'News',
    title: "Teachers' Day Celebrated by Students",
    date: '2026-09-05',
    summary: 'Students thanked their teachers with a student-led assembly, cultural performances and handmade cards.',
    href: '/blog',
  },
  {
    category: 'News',
    title: 'Independence Day Celebrations 2026',
    date: '2026-08-15',
    summary: 'The school marked the 80th Independence Day with the flag hoisting, a march past and patriotic performances.',
    href: '/blog',
  },
]
