import type { Metadata } from 'next'
import CityLandingPage from '@/components/shared/CityLandingPage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
const url = `${SITE_URL}/home-tutor-islamabad`

export const metadata: Metadata = {
  // NOTE: no "| Avenfield Tutors" suffix — layout.tsx template already appends it.
  title: 'Best Home Tutor in Islamabad | O Level, A Level, IELTS & MDCAT',
  description:
    'Find verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT & 50+ subjects. Free consultation, direct WhatsApp booking. Covering F-6 to G-15, DHA, Bahria Town & more. 100% verified tutors.',
  keywords: [
    'home tutor Islamabad',
    'best home tutor in Islamabad',
    'home tuition Islamabad',
    'private tutor Islamabad',
    'O Level tutor Islamabad',
    'A Level tutor Islamabad',
    'IELTS tutor Islamabad',
    'MDCAT tutor Islamabad',
    'home tutor near me Islamabad',
    'tutor for O Level in Islamabad',
    'tuition teacher in Islamabad',
    'academy in Islamabad',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Best Home Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects. Free consultation available.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Home Tutor in Islamabad | Avenfield Tutors',
    description: 'Verified home tutors in Islamabad for O Level, A Level, IELTS, MDCAT and 50+ subjects.',
  },
}

// Organized Islamabad Areas with Categories
const ISLAMABAD_AREAS = {
  sectors: [
    'F-5', 'F-6', 'F-7', 'F-8', 'F-10', 'F-11', 'F-15', 'F-17',
    'G-5', 'G-6', 'G-7', 'G-8', 'G-9', 'G-10', 'G-11', 'G-13', 'G-14', 'G-15', 'G-16',
    'E-7', 'E-8', 'E-11', 'E-16', 'E-17',
    'D-12', 'D-17',
    'I-8', 'I-9', 'I-10', 'I-11', 'I-12', 'I-14',
    'B-10', 'B-11', 'B-12', 'B-15', 'B-17',
    'C-12', 'C-14', 'C-15', 'C-16', 'C-17',
    'H-8', 'H-9', 'H-10', 'H-11', 'H-12', 'H-13',
  ],
  housingSocieties: [
    'DHA Islamabad (All Phases)',
    'Bahria Enclave',
    'Gulberg Greens',
    'Gulberg Residencia',
    'Naval Anchorage',
    'Park View City',
    'Capital Smart City',
    'Top City-1',
    'University Town',
    'Faisal Town',
    'Mumtaz City',
    'Multi Gardens B-17',
    'MPCHS',
    'Faisal Hills',
    'Eighteen Islamabad',
    'Blue World City',
    'Kingdom Valley',
    'Discovery Gardens',
    'PECHS',
    'CBR Town',
    'Pakistan Town',
    'Soan Garden',
    'River Garden',
    'Jinnah Gardens',
    'PWD Housing Society',
    'Korang Town',
    'Korang Enclave',
    'Media Town',
    'FGEHA Housing Scheme',
    'OPF Housing Scheme',
    'Gulshan-e-Sehat',
    'Doctors Housing Society',
    'Engineers Cooperative Housing Society',
  ],
  localities: [
    'Bani Gala',
    'Chak Shahzad',
    'Bhara Kahu',
    'Shah Allah Ditta',
    'Bari Imam',
    'Saidpur',
    'Rawal Town',
    'Model Town Humak',
    'Humak',
    'Sihala',
    'Tarlai',
    'Lehtrar Road',
    'Nilore',
    'Simly Dam Road',
    'Tramri',
    'Khanna',
    'Koral',
    'Loi Bher',
    'Alipur Farash',
    'Golra',
    'Tarnol',
    'Sangjani',
    'Golra Sharif',
    'Noon',
    'Kirpa',
    'Phulgran',
    'Jhangi Syedan',
    'Islamabad Expressway Corridor',
  ],
  commercial: [
    'Diplomatic Enclave',
    'Blue Area',
    'Red Zone',
    'Constitution Avenue',
    'Melody',
    'Aabpara',
    'Super Market',
    'Jinnah Super',
    'Sitara Market',
    'Karachi Company',
    'F-10 Markaz',
    'F-11 Markaz',
    'I-8 Markaz',
  ],
}

const ISLAMABAD_INTRO = [
  "Islamabad's sector-based layout F-6 to F-11, G-6 to G-13, E-7, and the newer societies like Bahria Town, DHA and Gulberg Greens means a family in F-10 and a family in Bahria Town Phase 8 are often a 40-minute drive apart. That's the main reason home tuition is so common here: parents would rather have a qualified tutor travel to their house than lose two hours a day on the school run to an academy across town.",
  "Islamabad also has one of the highest concentrations of O Level and A Level schools in Pakistan Beaconhouse, Roots, Froebel's, Headstart and OPF campuses are spread across the sectors alongside FBISE-affiliated schools for Matric and FSc students. Our tutors are used to switching between Cambridge (CAIE), Edexcel and the Federal Board syllabus within the same week, which matters more here than in cities with a single dominant board.",
  "Because Islamabad is home to embassies, international organisations and diplomatic families, we also get regular requests for IB and American curriculum support alongside the usual O/A Level and MDCAT demand something we plan for specifically when matching tutors in this city.",
]

export default function HomeTutorIslamabadPage() {
  return <CityLandingPage city="Islamabad" areas={ISLAMABAD_AREAS} nearbyCity="Rawalpindi" cityIntro={ISLAMABAD_INTRO} heroHighlight="Serving F-6 to Bahria Town, all sectors and housing societies" />
}