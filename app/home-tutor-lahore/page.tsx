

import type { Metadata } from 'next'
import CityLandingPage from '@/components/shared/CityLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-tutor-lahore`

export const metadata: Metadata = {
  // NOTE: no "| Avenfield Tutors" suffix — layout.tsx template already appends it.
  title: 'Best Home Tutor in Lahore | O Level, A Level, IELTS & MDCAT',
  description:
    'Find verified home tutors in Lahore for O Level, A Level, IELTS, MDCAT & 50+ subjects. Free consultation, direct WhatsApp booking. Covering DHA, Gulberg, Johar Town, Bahria Town, Model Town & more.',
  keywords: [
    'home tutor Lahore',
    'best home tutor in Lahore',
    'home tuition Lahore',
    'private tutor Lahore',
    'O Level tutor Lahore',
    'A Level tutor Lahore',
    'IELTS tutor Lahore',
    'MDCAT tutor Lahore',
    'home tutor near me Lahore',
    'tutor for O Level in Lahore',
    'tuition teacher in Lahore',
    'DHA Lahore tutor',
    'Gulberg tutor',
    'Johar Town tutor',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Tutor in Lahore | Avenfield Tutors',
    description: 'Verified home tutors in Lahore for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Tutor in Lahore | Avenfield Tutors',
    description: 'Verified home tutors in Lahore for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
  },
}

// Organized comprehensively by category, matching the depth of the
// Islamabad and Rawalpindi pages.
const LAHORE_AREAS = {
  housingSocieties: [
    'DHA Phase 1', 'DHA Phase 2', 'DHA Phase 3', 'DHA Phase 4', 'DHA Phase 5',
    'DHA Phase 6', 'DHA Phase 7', 'DHA Phase 8', 'DHA Phase 9', 'DHA Rahbar',
    'Bahria Town Lahore (All Phases)', 'Bahria Orchard', 'Bahria Nasheman',
    'Askari 10', 'Askari 11', 'Wapda Town', 'Valencia Town', 'EME Society',
    'Paragon City', 'Al-Kabir Town', 'LDA Avenue', 'PIA Housing Scheme',
    'Sui Gas Society', 'Punjab Coop Housing Society', 'Green City',
    'Lake City', 'Central Park Housing Scheme', 'State Life Housing',
    'Formanite Housing Scheme', 'Architects Engineers Housing Society',
  ],
  centralAndOldCity: [
    'Gulberg', 'Model Town', 'Garden Town', 'Faisal Town', 'Township',
    'Iqbal Town', 'Samanabad', 'Shadman', 'Muslim Town', 'Allama Iqbal Town',
    'Ichhra', 'Anarkali', 'Mozang', 'Nishtar Colony', 'Shah Jamal',
  ],
  cantonmentAndEast: [
    'Cantt', 'Cavalry Ground', 'Walton', 'Zaman Park', 'Baghbanpura',
    'Mughalpura', 'Shalimar', 'Harbanspura', 'Ghaziabad', 'Chauburji',
  ],
  johaAndSouth: [
    'Johar Town', 'Faisal Town', 'Township', 'Wahdat Colony',
    'New Garden Town', 'Punjab University Town', 'Canal View',
    'Chungi Amar Sidhu', 'Thokar Niaz Baig',
  ],
  suburbsAndRingRoad: [
    'Ferozepur Road', 'Raiwind Road', 'Multan Road', 'Canal Bank',
    'Barki Road', 'Ring Road', 'Kahna', 'Manga Mandi', 'Sundar Industrial Estate',
  ],
  commercial: [
    'Liberty Market', 'MM Alam Road', 'Mall Road', 'Fortress Stadium',
    'Hussain Chowk', 'Kalma Chowk', 'Emporium Mall Area', 'Packages Mall Area',
  ],
}

// Genuinely Lahore-specific content — not shared boilerplate with Islamabad/Rawalpindi.
const LAHORE_INTRO = [
  "Lahore's tutoring market looks different from the twin cities because of scale: DHA alone spans nine phases, and Gulberg, Johar Town, Model Town and Bahria Town Lahore each function almost like their own small city. Families here usually want a tutor who already knows their specific neighbourhood's schools rather than someone commuting in from across town, so we match by area first, subject second.",
  "Lahore has a large concentration of Punjab Textbook Board (matric/FSc) students alongside a fast-growing O Level and A Level population in DHA, Gulberg and Cantt — LGS, Beaconhouse, LACAS and Roots campuses are common here. Our Lahore tutors regularly move between Punjab Board and Cambridge syllabi, which is a different mix than Islamabad's more O/A-Level-heavy demand.",
  "MDCAT preparation is especially competitive in Lahore given the number of medical colleges in the city (Allama Iqbal Medical, King Edward, Services Institute among others), so we get a steady stream of requests specifically for MDCAT Biology, Chemistry and Physics tutors who know the local exam pattern.",
]

export default function HomeTutorLahorePage() {
  return <CityLandingPage city="Lahore" areas={LAHORE_AREAS} nearbyCity="Islamabad" cityIntro={LAHORE_INTRO} heroHighlight="Serving DHA to Gulberg, all nine DHA phases and beyond" />
}
 