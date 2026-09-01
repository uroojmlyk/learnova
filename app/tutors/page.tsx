










// import type { Metadata } from 'next'
// import Link from 'next/link'
// import TutorCard from '@/components/tutor/TutorCard'
// import { ITutor } from '@/types'

// // ⚠️ SITE_URL: uses the live Vercel URL as fallback. Once your custom domain
// // is connected, just set NEXT_PUBLIC_SITE_URL in your environment variables —
// // nothing here needs to change.
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'

// export const metadata: Metadata = {
//   // NOTE: no "| Avenfield Tutors" suffix here — app/layout.tsx already has
//   // title.template: '%s | Avenfield Tutors', so Next.js appends it
//   // automatically. Adding it manually here was causing "Avenfield Tutors"
//   // to appear twice in the actual <title> tag.
//   title: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT',
//   description:
//     'Browse verified online & home tutors for O Level, A Level, IELTS, MDCAT & 50+ subjects. Pakistan, UAE & UK. Book instantly via WhatsApp.',
//   keywords: [
//     'online tutors Pakistan', 'home tutors Pakistan', 'private tutors',
//     'verified tutors', 'online tuition', 'home tuition', 'O Level tutor',
//     'A Level tutor', 'IELTS preparation online', 'MDCAT tutor',
//     'CSS coaching', 'GCSE tutor', 'find tutors online',
//     'home tutoring Pakistan', 'online tuition UAE',
//   ],
//   openGraph: {
//     title: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
//     description:
//       'Browse hand-verified online and home tutors for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Islamabad, Rawalpindi & Lahore.',
//     type: 'website',
//     locale: 'en_PK',
//     siteName: 'Avenfield Tutors',
//     url: `${SITE_URL}/tutors`,
//     images: [
//       {
//         url: `${SITE_URL}/avenfieldtutors-newlogo.png`,
//         width: 1200,
//         height: 630,
//         alt: 'Verified Tutors for O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Verified Online & Home Tutors | Avenfield Tutors',
//     description: 'Browse hand-verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
//     images: [`${SITE_URL}/avenfieldtutors-newlogo.png`],
//   },
//   alternates: {
//     canonical: `${SITE_URL}/tutors`,
//   },
// }

// // ──────────────────────────────────────────────────────────────────
// // Reusable components (exactly matching home page style)
// // ──────────────────────────────────────────────────────────────────

// function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
//   return (
//     <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//       <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#C43D24]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
//     </div>
//   )
// }

// function Wiggle({ color = '#E8C86A' }: { color?: string }) {
//   return (
//     <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
//       <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
//     </svg>
//   )
// }

// // ── Breadcrumb Schema ──
// function BreadcrumbSchema() {
//   const schema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
//       { '@type': 'ListItem', position: 2, name: 'Tutors', item: `${SITE_URL}/tutors` },
//     ],
//   }
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   )
// }

// // ── WebPage Schema ──
// function WebPageSchema() {
//   const schema = {
//     '@context': 'https://schema.org',
//     '@type': 'WebPage',
//     name: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
//     description:
//       'Browse hand-verified online and home tutors for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Islamabad, Rawalpindi & Lahore.',
//     url: `${SITE_URL}/tutors`,
//     about: {
//       '@type': 'Thing',
//       name: 'Tutoring Services',
//       description: 'Verified online and home tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
//     },
//     inLanguage: 'en-PK',
//     isPartOf: {
//       '@type': 'WebSite',
//       name: 'Avenfield Tutors',
//       url: SITE_URL,
//     },
//   }
//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   )
// }

// // ── FAQ Schema ──
// function FAQSchema() {
//   const faqs = [
//     {
//       question: 'How do I find an online tutor on Avenfield Tutors?',
//       answer: 'Finding an online tutor is simple. Browse our verified tutor directory, filter by subject (O Level, A Level, IELTS, MDCAT, CSS, Mathematics, Physics, etc.), and connect directly via WhatsApp. All our online tutors are verified and qualified educators with proven teaching experience.'
//     },
//     {
//       question: 'Do you offer home tuition in Pakistan?',
//       answer: 'Yes, we offer home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions tailored to your needs.'
//     },
//     {
//       question: 'Are all tutors on Avenfield Tutors verified?',
//       answer: 'Yes, all tutors on Avenfield Tutors are manually verified before approval. We review their qualifications, teaching experience, subject expertise, and conduct a teaching demo. Only qualified educators with proven experience are approved to teach on our platform.'
//     },
//     {
//       question: 'Can I choose my own tutor?',
//       answer: 'Absolutely. You can browse all tutor profiles, review their qualifications, experience, subject expertise, and read student feedback. Once you find a tutor that matches your requirements, you can connect with them directly via WhatsApp to schedule your first session.'
//     },
//     {
//       question: 'Which cities do you cover for home tuition?',
//       answer: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available worldwide including UK, USA, Canada, Australia, UAE, and Europe.'
//     },
//     {
//       question: 'How much does tuition cost?',
//       answer: 'Tuition fees vary based on the subject, level (O Level, A Level, IELTS, MDCAT, etc.), tutor experience, and learning mode (online or home tuition). Contact us for a personalized quote. We offer competitive rates with no hidden charges.'
//     },
//   ]

//   const schema = {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqs.map(faq => ({
//       '@type': 'Question',
//       name: faq.question,
//       acceptedAnswer: {
//         '@type': 'Answer',
//         text: faq.answer,
//       },
//     })),
//   }

//   return (
//     <script
//       type="application/ld+json"
//       dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//     />
//   )
// }

// // ──────────────────────────────────────────────────────────────────
// // Data
// // ──────────────────────────────────────────────────────────────────

// const ALL_SUBJECTS = [
//   'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Science',
//   'English', 'Urdu', 'Computer Science', 'Economics', 'Accounting',
//   'Statistics', 'History', 'Geography', 'Pakistan Studies', 'Islamic Studies',
//   'Political Science', 'Law', 'Quran', 'Arabic',
//   'O Level', 'A Level',
//   'CSS / PMS', 'PPSC / FPSC',
//   'IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'OET', 'CELPIP',
//   'MDCAT', 'Cadet College Entry Test', 'Atchison College Entry Test',
// ]

// const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level', 'CSS / PMS', 'MDCAT', 'Physics', 'English']

// // ──────────────────────────────────────────────────────────────────
// // Fetch function
// // ──────────────────────────────────────────────────────────────────

// async function getTutors(subject?: string): Promise<ITutor[]> {
//   try {
//     const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, { cache: 'no-store' })
//     if (!res.ok) return []
//     return res.json()
//   } catch { return [] }
// }

// // ──────────────────────────────────────────────────────────────────
// // Main Component
// // ──────────────────────────────────────────────────────────────────

// export default async function TutorsPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ subject?: string; search?: string; city?: string }>
// }) {
//   const resolvedParams = await searchParams
//   const activeSubject = resolvedParams.subject || 'All'
//   const searchQuery = resolvedParams.search || ''
//   const activeCity = resolvedParams.city || ''

//   let tutors = await getTutors(activeSubject)
//   // Was previously ignored entirely — every "home tuition in Lahore" style
//   // link on the site (home page, /tutors SEO content, footer) pointed to
//   // ?city=Lahore but nothing here read it, so the link did nothing.
//   if (activeCity) {
//     tutors = tutors.filter(t => t.city.toLowerCase() === activeCity.toLowerCase())
//   }
//   if (searchQuery && tutors.length > 0) {
//     tutors = tutors.filter(t =>
//       t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       t.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (t.bio && t.bio.toLowerCase().includes(searchQuery.toLowerCase()))
//     )
//   }

//   const featuredTutors = tutors.filter(t => t.experience >= 5).slice(0, 3)
//   const regularTutors = tutors.filter(t => !featuredTutors.includes(t))

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       {/* JSON-LD Schemas */}
//       <BreadcrumbSchema />
//       <WebPageSchema />
//       <FAQSchema />

//       <div className="bg-[#FFFDF7] min-h-screen">

//         {/* ══════════════════════════════════════════════════════
//             §1  HERO SECTION (SEO Optimized)
//         ══════════════════════════════════════════════════════ */}
//         <section
//           aria-label="Find verified online and home tutors at Avenfield Tutors"
//           className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 relative overflow-hidden"
//         >
//           {/* Background blobs (same as home page) */}
//           <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
//           <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
//             style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
//           <div aria-hidden="true"
//             className="absolute inset-0 opacity-[0.04]"
//             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

//           <div className="relative max-w-6xl mx-auto">
//             <Eyebrow text="Browse Tutors" light />

//             <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
//               <div className="max-w-2xl">
//                 {/* H1 - SEO optimized with primary keywords */}
//                 <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
//                   Find <span className="relative inline-block text-[#E8C86A]">
//                     <span className="relative z-10">Verified Online &amp; Home Tutors</span>
//                     <Wiggle color="#E05C42" />
//                   </span><br className="hidden sm:block"/>
//                   for <span className="text-[#E8C86A]">O Level, A Level, IELTS &amp; MDCAT</span>
//                 </h1>

//                 {/* Hero paragraph - Keyword rich (100-150 words) */}
//                 <div className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] font-semibold leading-relaxed max-w-lg space-y-2">
//                   <p>
//                     <Link href="/" className="text-[#E8C86A] hover:underline font-black">Avenfield Tutors</Link> connects you with{' '}
//                     <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">verified online tutors</Link> and{' '}
//                     <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">home tutors</Link> across Pakistan and worldwide.
//                     Every educator is manually reviewed and approved before joining our platform.
//                   </p>
//                   <p>
//                     Whether you need an <Link href="/tutors?subject=O%20Level" className="text-[#E8C86A] hover:underline font-black">O Level tutor</Link>,{' '}
//                     <Link href="/tutors?subject=A%20Level" className="text-[#E8C86A] hover:underline font-black">A Level tutor</Link>,{' '}
//                     <Link href="/tutors?subject=IELTS" className="text-[#E8C86A] hover:underline font-black">IELTS tutor</Link>, or{' '}
//                     <Link href="/tutors?subject=MDCAT" className="text-[#E8C86A] hover:underline font-black">MDCAT tutor</Link>, our{' '}
//                     <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">private tutors</Link> provide personalized{' '}
//                     <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">online tuition</Link> and{' '}
//                     <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">home tuition</Link> for 50+ subjects.
//                     Browse our directory of <span className="text-white font-black">{tutors.length}+</span> qualified tutors,{' '}
//                     <Link href="/services" className="text-[#E8C86A] hover:underline font-black">view our services</Link>, or{' '}
//                     <Link href="/become-tutor" className="text-[#E8C86A] hover:underline font-black">apply to become a tutor</Link> today.
//                   </p>
//                 </div>
//               </div>

//               {/* Stats chips (same style as home page) */}
//               <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-end">
//                 {[
//                   { v: `${tutors.length}+`, l: 'Verified Tutors', c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
//                   { v: '50+', l: 'Subjects Covered', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]' },
//                   { v: '15+', l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]' },
//                 ].map(({ v, l, c }) => (
//                   <div key={l} className={`inline-flex items-center gap-2.5 border-2 rounded-xl px-4 py-2 ${c}`}>
//                     <span className="font-black text-[1.1rem] leading-none">{v}</span>
//                     <span className="text-white text-[0.72rem] font-bold">{l}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Trust badges (same as home page) */}
//             <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
//               {[
//                 { t: 'Manually verified tutors' },
//                 { t: 'Online worldwide & home visits' },
//                 { t: 'Direct WhatsApp booking' },
//                 { t: 'Flexible schedules' },
//                 { t: 'Cancel anytime' },
//               ].map(item => (
//                 <span key={item.t} className="flex items-center gap-2 text-[0.72rem] font-bold text-white/70 whitespace-nowrap">
//                   <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem] font-black flex-shrink-0">✓</span>
//                   {item.t}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §2  SEARCH & FILTER BAR (sticky, matches home page style)
//         ══════════════════════════════════════════════════════ */}
//         <section aria-labelledby="search-heading">
//           <div className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b-2 border-[#E8C86A] px-4 sm:px-6 md:px-8 py-3.5 shadow-sm">
//             <div className="max-w-6xl mx-auto">
//               <h2 id="search-heading" className="sr-only">Search and filter tutors by subject or name</h2>

//               <form method="GET" action="/tutors" className="relative mb-3">
//                 <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//                 </svg>
//                 <input
//                   type="text"
//                   name="search"
//                   defaultValue={searchQuery}
//                   placeholder="Search by tutor name or subject — e.g. O Level Maths, IELTS, MDCAT, CSS..."
//                   className="w-full pl-10 pr-24 py-2.5 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/20 text-[0.85rem] font-semibold text-[#2E4F5E] bg-white placeholder:text-[#b0c4cc] transition-all"
//                 />
//                 <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
//                   {searchQuery && (
//                     <Link href="/tutors" className="text-[0.68rem] font-black text-[#C43D24] px-2 py-1">Clear</Link>
//                   )}
//                   <button type="submit" className="bg-[#2E4F5E] text-white text-[0.68rem] font-black px-3 py-1.5 rounded-lg hover:bg-[#1a3a44] transition-colors">
//                     Search
//                   </button>
//                 </div>
//               </form>

//               {activeSubject !== 'All' && (
//                 <div className="flex items-center gap-2 mb-2.5">
//                   <span className="text-[#7da8b8] text-[0.68rem] font-bold">Filtering by:</span>
//                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
//                     {activeSubject}
//                     <Link href="/tutors" className="hover:text-[#C43D24] transition-colors ml-0.5">
//                       <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
//                       </svg>
//                     </Link>
//                   </span>
//                 </div>
//               )}

//               <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
//                 <Link href="/tutors"
//                   className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
//                     activeSubject === 'All'
//                       ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                       : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
//                   }`}>
//                   All Tutors
//                 </Link>
//                 {POPULAR_SUBJECTS.map(s => (
//                   <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
//                     className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
//                       activeSubject === s
//                         ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
//                         : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
//                     }`}>
//                     {s}
//                   </Link>
//                 ))}
//                 <span className="flex-shrink-0 self-center w-1 h-1 rounded-full bg-[#D4D0C5] mx-1" aria-hidden="true" />
//                 {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map(s => (
//                   <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
//                     className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[0.68rem] font-bold border transition-all duration-150 ${
//                       activeSubject === s
//                         ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]'
//                         : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:text-[#2E4F5E]'
//                     }`}>
//                     {s}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §3  TUTOR GRID SECTION
//         ══════════════════════════════════════════════════════ */}
//         <section aria-labelledby="tutors-heading" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
//           <h2 id="tutors-heading" className="sr-only">Available tutors</h2>
//           <div className="max-w-6xl mx-auto">
//             {tutors.length > 0 ? (
//               <>
//                 {/* Results count */}
//                 <div className="flex items-center justify-between mb-6">
//                   <p className="text-[0.75rem] font-bold text-[#7da8b8]">
//                     {activeSubject !== 'All'
//                       ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} found for "${activeSubject}"${activeCity ? ` in ${activeCity}` : ''}`
//                       : activeCity
//                         ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} available in ${activeCity}`
//                         : `${tutors.length} verified tutor${tutors.length !== 1 ? 's' : ''} available`
//                     }
//                   </p>
//                   {searchQuery && (
//                     <span className="text-[0.7rem] font-bold text-[#E8934A]">
//                       Results for "{searchQuery}"
//                     </span>
//                   )}
//                 </div>

//                 {/* Featured Tutors Section */}
//                 {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
//                   <div className="mb-10 sm:mb-14">
//                     <div className="flex items-center gap-3 mb-5">
//                       <div className="h-6 w-1 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" />
//                       <h3 className="font-black text-[1.05rem] text-[#2E4F5E]">✨ Featured Verified Tutors</h3>
//                       <span className="text-[0.62rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2.5 py-0.5 rounded-full">5+ years experience</span>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                       {featuredTutors.map(tutor => (
//                         <TutorCard key={tutor._id} tutor={tutor} featured />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* All Tutors Section */}
//                 {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
//                   <div>
//                     {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
//                       <div className="flex items-center gap-3 mb-5">
//                         <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
//                         <h3 className="font-black text-[1rem] text-[#2E4F5E]">Browse All Verified Tutors</h3>
//                       </div>
//                     )}
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
//                       {(regularTutors.length > 0 ? regularTutors : tutors).map(tutor => (
//                         <TutorCard key={tutor._id} tutor={tutor} />
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Verification note */}
//                 <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-12">
//                   All {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} manually verified by the Avenfield Tutors team
//                 </p>
//               </>
//             ) : (
//               // No Results State (matches home page style)
//               <div className="text-center py-16 sm:py-28">
//                 <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6" aria-hidden="true">
//                   🔍
//                 </div>
//                 <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
//                   No tutors found{activeSubject !== 'All' ? ` for "${activeSubject}"` : ''}
//                 </h3>
//                 <p className="text-[#4a6a78] text-[0.88rem] font-semibold max-w-sm mx-auto mb-8 leading-relaxed">
//                   We may not have added tutors for this subject yet. New tutors join every week.
//                   Try browsing all tutors or request one for your subject.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <Link href="/tutors"
//                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E05C42] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//                     Browse All Tutors
//                   </Link>
//                   <Link href="/become-tutor"
//                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
//                     Become a Tutor
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §4  SEO CONTENT SECTION — Long-form content (500-700 words)
//         ══════════════════════════════════════════════════════ */}
//         <section
//           aria-labelledby="seo-content-heading"
//           className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8 border-t border-[#E8C86A]/30"
//         >
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-8">
//               <Eyebrow text="Why Choose Avenfield Tutors" center />
//               <h2 id="seo-content-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//                 Why Choose Avenfield Tutors for Online &amp; Home Tuition?
//               </h2>
//             </div>
//             <div className="space-y-5 text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] leading-[1.8] font-semibold">
//               <p>
//                 <strong className="text-[#2E4F5E]">Verified Online Tutors Pakistan:</strong>{' '}
//                 Avenfield Tutors is Pakistan's most trusted platform for finding{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">verified online tutors</Link> and{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tutors</Link>. Our rigorous verification process ensures that every educator on our platform is a qualified professional with proven teaching experience. Whether you need a{' '}
//                 <Link href="/tutors?subject=Mathematics" className="text-[#C43D24] hover:underline font-black">Mathematics tutor</Link>,{' '}
//                 <Link href="/tutors?subject=Physics" className="text-[#C43D24] hover:underline font-black">Physics tutor</Link>, or{' '}
//                 <Link href="/tutors?subject=Chemistry" className="text-[#C43D24] hover:underline font-black">Chemistry tutor</Link>, we connect you with the perfect educator for your needs.
//               </p>
//               <p>
//                 <strong className="text-[#2E4F5E]">Subjects We Cover:</strong> We offer tutoring in 50+ subjects including{' '}
//                 <Link href="/tutors?subject=O%20Level" className="text-[#C43D24] hover:underline font-black">O Level</Link>,{' '}
//                 <Link href="/tutors?subject=A%20Level" className="text-[#C43D24] hover:underline font-black">A Level</Link>,{' '}
//                 <Link href="/tutors?subject=IGCSE" className="text-[#C43D24] hover:underline font-black">IGCSE</Link>,{' '}
//                 <Link href="/tutors?subject=GCSE" className="text-[#C43D24] hover:underline font-black">GCSE</Link>,{' '}
//                 <Link href="/tutors?subject=IELTS" className="text-[#C43D24] hover:underline font-black">IELTS</Link>,{' '}
//                 <Link href="/tutors?subject=MDCAT" className="text-[#C43D24] hover:underline font-black">MDCAT</Link>,{' '}
//                 <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#C43D24] hover:underline font-black">CSS</Link>, and more. Our{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">private tutors</Link> are subject matter experts with years of teaching experience, ensuring you receive the highest quality{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tuition</Link> and{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tuition</Link> available.
//               </p>
//               <p>
//                 <strong className="text-[#2E4F5E]">Online and Home Tutors in Pakistan:</strong>{' '}
//                 We provide <Link href="/tutors?city=Lahore" className="text-[#C43D24] hover:underline font-black">home tuition in Lahore</Link>,{' '}
//                 <Link href="/tutors?city=Karachi" className="text-[#C43D24] hover:underline font-black">Karachi</Link>,{' '}
//                 <Link href="/tutors?city=Islamabad" className="text-[#C43D24] hover:underline font-black">Islamabad</Link>, and other major cities. Our{' '}
//                 <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tutors</Link> visit your residence for personalized, face-to-face learning sessions. For students outside Pakistan, our{' '}
//                 <Link href="/tutors?mode=online" className="text-[#C43D24] hover:underline font-black">online tutors</Link> connect from anywhere in the world, providing flexible scheduling and recorded sessions for revision.
//               </p>
//               <p>
//                 <strong className="text-[#2E4F5E]">How to Find a Tutor:</strong> Finding a tutor on Avenfield Tutors is simple. Browse our directory, filter by subject, city, and learning mode, review tutor profiles with qualifications and experience, and connect directly via WhatsApp. You can start learning the same day with no long forms or waiting periods. Our{' '}
//                 <Link href="/services" className="text-[#C43D24] hover:underline font-black">tutoring services</Link> are designed to be accessible, affordable, and effective.
//               </p>
//               <p>
//                 <strong className="text-[#2E4F5E]">Exam Preparation:</strong> We specialize in exam preparation for competitive tests. Our{' '}
//                 <Link href="/tutors?subject=IELTS" className="text-[#C43D24] hover:underline font-black">IELTS tutors</Link> help students achieve their target band scores, while our{' '}
//                 <Link href="/tutors?subject=MDCAT" className="text-[#C43D24] hover:underline font-black">MDCAT tutors</Link> provide comprehensive preparation for medical entrance exams. For civil service aspirants, our{' '}
//                 <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#C43D24] hover:underline font-black">CSS tutors</Link> offer expert guidance on all compulsory and optional subjects.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §5  FAQ SECTION
//         ══════════════════════════════════════════════════════ */}
//         <section
//           aria-labelledby="faq-heading"
//           className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8"
//         >
//           <div className="max-w-3xl mx-auto">
//             <div className="text-center mb-8">
//               <Eyebrow text="Got Questions?" center />
//               <h2 id="faq-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
//                 Frequently Asked Questions
//               </h2>
//               <p className="text-[#4a6a78] text-[0.88rem] mt-2 font-semibold">
//                 Everything you need to know about finding a tutor
//               </p>
//             </div>
//             <div className="space-y-4">
//               {[
//                 {
//                   q: 'How do I find an online tutor on Avenfield Tutors?',
//                   a: 'Finding an online tutor is simple. Browse our verified tutor directory, filter by subject (O Level, A Level, IELTS, MDCAT, CSS, Mathematics, Physics, etc.), and connect directly via WhatsApp. All our online tutors are verified and qualified educators with proven teaching experience.'
//                 },
//                 {
//                   q: 'Do you offer home tuition in Pakistan?',
//                   a: 'Yes, we offer home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions tailored to your needs.'
//                 },
//                 {
//                   q: 'Are all tutors on Avenfield Tutors verified?',
//                   a: 'Yes, all tutors on Avenfield Tutors are manually verified before approval. We review their qualifications, teaching experience, subject expertise, and conduct a teaching demo. Only qualified educators with proven experience are approved to teach on our platform.'
//                 },
//                 {
//                   q: 'Can I choose my own tutor?',
//                   a: 'Absolutely. You can browse all tutor profiles, review their qualifications, experience, subject expertise, and read student feedback. Once you find a tutor that matches your requirements, you can connect with them directly via WhatsApp to schedule your first session.'
//                 },
//                 {
//                   q: 'Which cities do you cover for home tuition?',
//                   a: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available worldwide including UK, USA, Canada, Australia, UAE, and Europe.'
//                 },
//                 {
//                   q: 'How much does tuition cost?',
//                   a: 'Tuition fees vary based on the subject, level (O Level, A Level, IELTS, MDCAT, etc.), tutor experience, and learning mode (online or home tuition). Contact us for a personalized quote. We offer competitive rates with no hidden charges.'
//                 },
//               ].map((faq, index) => (
//                 <details
//                   key={index}
//                   className="group bg-white border-2 border-[#E8C86A] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#c9ab4a] transition-all hover:shadow-[3px_3px_0_0_#c9ab4a]"
//                   itemScope
//                   itemProp="mainEntity"
//                   itemType="https://schema.org/Question"
//                 >
//                   <summary className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                     <span className="text-[0.9rem] sm:text-[0.95rem] font-black text-[#2E4F5E] pr-4" itemProp="name">
//                       {faq.q}
//                     </span>
//                     <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
//                       ▼
//                     </span>
//                   </summary>
//                   <div className="px-5 pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
//                     <div className="pt-2 border-t-2 border-dashed border-[#E8C86A]/30" itemProp="text">
//                       <p className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] font-semibold leading-relaxed">
//                         {faq.a}
//                       </p>
//                     </div>
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §6  BOTTOM CTA SECTION (matches home page "For Educators" style)
//         ══════════════════════════════════════════════════════ */}
//         <section aria-labelledby="bottom-cta-heading">
//           <div className="bg-[#2E4F5E] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t-2 border-[#E8C86A]">
//             <div className="max-w-4xl mx-auto text-center">
//               <Eyebrow text="Ready to Start?" light center />
//               <h2 id="bottom-cta-heading" className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] mb-3">
//                 Can't Find the <span className="text-[#E8C86A]">Right Tutor?</span>
//               </h2>
//               <p className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] font-semibold max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
//                 Tell us your subject and requirements we'll match you with the perfect educator within 24 hours. Free consultation.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                 <Link href="/contact"
//                   className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#2E4F5E] hover:shadow-[0_2px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
//                   Request a Tutor
//                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
//                   </svg>
//                 </Link>
//                 <Link href="/become-tutor"
//                   className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl transition-all duration-200">
//                   Become a Tutor
//                 </Link>
//               </div>
//               <p className="text-white/40 text-[0.62rem] font-bold mt-6">
//                 Book Your Tutor Today Start Learning Tomorrow
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════════════════════════════════
//             §7  JSON-LD ItemList Schema (keeping existing)
//         ══════════════════════════════════════════════════════ */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               '@context': 'https://schema.org',
//               '@type': 'ItemList',
//               name: 'Verified Tutors at Avenfield Tutors',
//               description: 'Browse hand-verified online and home tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Pakistan, UAE & UK.',
//               url: `${SITE_URL}/tutors`,
//               numberOfItems: tutors.length,
//               itemListElement: tutors.slice(0, 10).map((tutor, index) => ({
//                 '@type': 'ListItem',
//                 position: index + 1,
//                 item: {
//                   '@type': 'Person',
//                   name: tutor.name,
//                   description: `${tutor.subjects?.slice(0, 3).join(', ')} tutor with ${tutor.experience}+ years experience`,
//                   knowsAbout: tutor.subjects,
//                   worksFor: {
//                     '@type': 'Organization',
//                     name: 'Avenfield Tutors',
//                   },
//                 },
//               })),
//             }),
//           }}
//         />
//       </div>
//     </div>
//   )
// }









 
import type { Metadata } from 'next'
import Link from 'next/link'
import TutorCard from '@/components/tutor/TutorCard'
import { ITutor } from '@/types'
 
// ⚠️ SITE_URL: uses the live Vercel URL as fallback. Once your custom domain
// is connected, just set NEXT_PUBLIC_SITE_URL in your environment variables —
// nothing here needs to change.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://avenfieldtutors.com'
 
export const metadata: Metadata = {
  // NOTE: no "| Avenfield Tutors" suffix here — app/layout.tsx already has
  // title.template: '%s | Avenfield Tutors', so Next.js appends it
  // automatically. Adding it manually here was causing "Avenfield Tutors"
  // to appear twice in the actual <title> tag.
  title: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT',
  description:
    'Browse verified online & home tutors for O Level, A Level, IELTS, MDCAT & 50+ subjects. Pakistan, UAE & UK. Book instantly via WhatsApp.',
  keywords: [
    'online tutors Pakistan', 'home tutors Pakistan', 'private tutors',
    'verified tutors', 'online tuition', 'home tuition', 'O Level tutor',
    'A Level tutor', 'IELTS preparation online', 'MDCAT tutor',
    'CSS coaching', 'GCSE tutor', 'find tutors online',
    'home tutoring Pakistan', 'online tuition UAE',
  ],
  openGraph: {
    title: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
    description:
      'Browse hand-verified online and home tutors for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Islamabad, Rawalpindi & Lahore.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Avenfield Tutors',
    url: `${SITE_URL}/tutors`,
    images: [
      {
        url: `${SITE_URL}/avenfieldtutors-newlogo.png`,
        width: 1200,
        height: 630,
        alt: 'Verified Tutors for O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verified Online & Home Tutors | Avenfield Tutors',
    description: 'Browse hand-verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
    images: [`${SITE_URL}/avenfieldtutors-newlogo.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/tutors`,
  },
}
 
// ──────────────────────────────────────────────────────────────────
// Reusable components (exactly matching home page style)
// ──────────────────────────────────────────────────────────────────
 
function Eyebrow({ text, light = false, center = false }: { text: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
      <span className={`text-[0.62rem] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#C43D24]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`} />
    </div>
  )
}
 
function Wiggle({ color = '#E8C86A' }: { color?: string }) {
  return (
    <svg viewBox="0 0 160 10" fill="none" className="absolute -bottom-1 left-0 w-full h-3 pointer-events-none" aria-hidden="true">
      <path d="M2 5 C20 1,38 9,56 5 C74 1,92 9,110 5 C128 1,146 9,158 5" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}
 
// ── Breadcrumb Schema ──
function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tutors', item: `${SITE_URL}/tutors` },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
 
// ── WebPage Schema ──
function WebPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Verified Online & Home Tutors — O Level, A Level, IELTS, MDCAT | Avenfield Tutors',
    description:
      'Browse hand-verified online and home tutors for O Level, A Level, IGCSE, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Islamabad, Rawalpindi & Lahore.',
    url: `${SITE_URL}/tutors`,
    about: {
      '@type': 'Thing',
      name: 'Tutoring Services',
      description: 'Verified online and home tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
    },
    inLanguage: 'en-PK',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Avenfield Tutors',
      url: SITE_URL,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
 
// ── FAQ Schema ──
function FAQSchema() {
  const faqs = [
    {
      question: 'How do I find an online tutor on Avenfield Tutors?',
      answer: 'Finding an online tutor is simple. Browse our verified tutor directory, filter by subject (O Level, A Level, IELTS, MDCAT, CSS, Mathematics, Physics, etc.), and connect directly via WhatsApp. All our online tutors are verified and qualified educators with proven teaching experience.'
    },
    {
      question: 'Do you offer home tuition in Pakistan?',
      answer: 'Yes, we offer home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions tailored to your needs.'
    },
    {
      question: 'Are all tutors on Avenfield Tutors verified?',
      answer: 'Yes, all tutors on Avenfield Tutors are manually verified before approval. We review their qualifications, teaching experience, subject expertise, and conduct a teaching demo. Only qualified educators with proven experience are approved to teach on our platform.'
    },
    {
      question: 'Can I choose my own tutor?',
      answer: 'Absolutely. You can browse all tutor profiles, review their qualifications, experience, subject expertise, and read student feedback. Once you find a tutor that matches your requirements, you can connect with them directly via WhatsApp to schedule your first session.'
    },
    {
      question: 'Which cities do you cover for home tuition?',
      answer: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available worldwide including UK, USA, Canada, Australia, UAE, and Europe.'
    },
    {
      question: 'How much does tuition cost?',
      answer: 'Tuition fees vary based on the subject, level (O Level, A Level, IELTS, MDCAT, etc.), tutor experience, and learning mode (online or home tuition). Contact us for a personalized quote. We offer competitive rates with no hidden charges.'
    },
  ]
 
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
 
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
 
// ──────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────
 
const ALL_SUBJECTS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Science',
  'English', 'Urdu', 'Computer Science', 'Economics', 'Accounting',
  'Statistics', 'History', 'Geography', 'Pakistan Studies', 'Islamic Studies',
  'Political Science', 'Law', 'Quran', 'Arabic',
  'O Level', 'A Level',
  'CSS / PMS', 'PPSC / FPSC',
  'IELTS', 'TOEFL', 'PTE Academic', 'Duolingo English Test', 'OET', 'CELPIP',
  'MDCAT', 'Cadet College Entry Test', 'Atchison College Entry Test',
]
 
const POPULAR_SUBJECTS = ['Mathematics', 'IELTS', 'O Level', 'A Level', 'CSS / PMS', 'MDCAT', 'Physics', 'English']
 
// ──────────────────────────────────────────────────────────────────
// Fetch function
// ──────────────────────────────────────────────────────────────────
 
async function getTutors(subject?: string): Promise<ITutor[]> {
  try {
    const query = subject && subject !== 'All' ? `?subject=${encodeURIComponent(subject)}` : ''
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors${query}`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch { return [] }
}
 
// ──────────────────────────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────────────────────────
 
export default async function TutorsPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; search?: string; city?: string }>
}) {
  const resolvedParams = await searchParams
  const activeSubject = resolvedParams.subject || 'All'
  const searchQuery = resolvedParams.search || ''
  const activeCity = resolvedParams.city || ''
 
  let tutors = await getTutors(activeSubject)
  // Was previously ignored entirely — every "home tuition in Lahore" style
  // link on the site (home page, /tutors SEO content, footer) pointed to
  // ?city=Lahore but nothing here read it, so the link did nothing.
  if (activeCity) {
    tutors = tutors.filter(t => t.city.toLowerCase() === activeCity.toLowerCase())
  }
  if (searchQuery && tutors.length > 0) {
    tutors = tutors.filter(t =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (t.bio && t.bio.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }
 
  const featuredTutors = tutors.filter(t => t.experience >= 5).slice(0, 3)
  const regularTutors = tutors.filter(t => !featuredTutors.includes(t))
 
  return (
    <div className="text-[#2E4F5E] overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* JSON-LD Schemas */}
      <BreadcrumbSchema />
      <WebPageSchema />
      <FAQSchema />
 
      <div className="bg-[#FFFDF7] min-h-screen">
 
        {/* ══════════════════════════════════════════════════════
            §1  HERO SECTION (SEO Optimized)
        ══════════════════════════════════════════════════════ */}
        <section
          aria-label="Find verified online and home tutors at Avenfield Tutors"
          className="bg-[#2E4F5E] pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 relative overflow-hidden"
        >
          {/* Background blobs (same as home page) */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-64 sm:w-80 md:w-[400px] h-64 sm:h-80 md:h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#3A9E8F,transparent 70%)', transform: 'translate(40%,-30%)' }} />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full opacity-8 pointer-events-none"
            style={{ background: 'radial-gradient(circle,#E8C86A,transparent 70%)', transform: 'translate(-30%,30%)' }} />
          <div aria-hidden="true"
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,#E8C86A 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
 
          <div className="relative max-w-6xl mx-auto">
            <Eyebrow text="Browse Tutors" light />
 
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-2xl">
                {/* H1 - SEO optimized with primary keywords */}
                <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-black leading-[1.1] tracking-[-0.025em] mb-4">
                  Find <span className="relative inline-block text-[#E8C86A]">
                    <span className="relative z-10">Verified Online &amp; Home Tutors</span>
                    <Wiggle color="#E05C42" />
                  </span><br className="hidden sm:block"/>
                  for <span className="text-[#E8C86A]">O Level, A Level, IELTS &amp; MDCAT</span>
                </h1>
 
                {/* Hero paragraph - Keyword rich (100-150 words) */}
                <div className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] font-semibold leading-relaxed max-w-lg space-y-2">
                  <p>
                    <Link href="/" className="text-[#E8C86A] hover:underline font-black">Avenfield Tutors</Link> connects you with{' '}
                    <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">verified online tutors</Link> and{' '}
                    <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">home tutors</Link> across Pakistan and worldwide.
                    Every educator is manually reviewed and approved before joining our platform.
                  </p>
                  <p>
                    Whether you need an <Link href="/tutors?subject=O%20Level" className="text-[#E8C86A] hover:underline font-black">O Level tutor</Link>,{' '}
                    <Link href="/tutors?subject=A%20Level" className="text-[#E8C86A] hover:underline font-black">A Level tutor</Link>,{' '}
                    <Link href="/tutors?subject=IELTS" className="text-[#E8C86A] hover:underline font-black">IELTS tutor</Link>, or{' '}
                    <Link href="/tutors?subject=MDCAT" className="text-[#E8C86A] hover:underline font-black">MDCAT tutor</Link>, our{' '}
                    <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">private tutors</Link> provide personalized{' '}
                    <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">online tuition</Link> and{' '}
                    <Link href="/tutors" className="text-[#E8C86A] hover:underline font-black">home tuition</Link> for 50+ subjects.
                    Browse our directory of <span className="text-white font-black">{tutors.length}+</span> qualified tutors,{' '}
                    <Link href="/services" className="text-[#E8C86A] hover:underline font-black">view our services</Link>, or{' '}
                    <Link href="/become-tutor" className="text-[#E8C86A] hover:underline font-black">apply to become a tutor</Link> today.
                  </p>
                </div>
              </div>
 
              {/* Stats chips (same style as home page) */}
              <div className="flex flex-wrap lg:flex-col gap-2.5 lg:items-end">
                {[
                  { v: `${tutors.length}+`, l: 'Verified Tutors', c: 'border-[#E8C86A] bg-[#E8C86A]/15 text-[#E8C86A]' },
                  { v: '50+', l: 'Subjects Covered', c: 'border-[#3A9E8F] bg-[#3A9E8F]/15 text-[#3A9E8F]' },
                  { v: '15+', l: 'Countries Served', c: 'border-[#E8934A] bg-[#E8934A]/15 text-[#E8934A]' },
                ].map(({ v, l, c }) => (
                  <div key={l} className={`inline-flex items-center gap-2.5 border-2 rounded-xl px-4 py-2 ${c}`}>
                    <span className="font-black text-[1.1rem] leading-none">{v}</span>
                    <span className="text-white text-[0.72rem] font-bold">{l}</span>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Trust badges (same as home page) */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { t: 'Manually verified tutors' },
                { t: 'Online worldwide & home visits' },
                { t: 'Direct WhatsApp booking' },
                { t: 'Flexible schedules' },
                { t: 'Cancel anytime' },
              ].map(item => (
                <span key={item.t} className="flex items-center gap-2 text-[0.72rem] font-bold text-white/70 whitespace-nowrap">
                  <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.5rem] font-black flex-shrink-0">✓</span>
                  {item.t}
                </span>
              ))}
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §2  SEARCH & FILTER BAR (sticky, matches home page style)
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="search-heading">
          <div className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b-2 border-[#E8C86A] px-4 sm:px-6 md:px-8 py-3.5 shadow-sm">
            <div className="max-w-6xl mx-auto">
              <h2 id="search-heading" className="sr-only">Search and filter tutors by subject or name</h2>
 
              <form method="GET" action="/tutors" className="relative mb-3">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#b0c4cc] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  name="search"
                  defaultValue={searchQuery}
                  placeholder="Search by tutor name or subject — e.g. O Level Maths, IELTS, MDCAT, CSS..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-xl border-2 border-[#D4D0C5] focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/20 text-[0.85rem] font-semibold text-[#2E4F5E] bg-white placeholder:text-[#b0c4cc] transition-all"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery && (
                    <Link href="/tutors" className="text-[0.68rem] font-black text-[#C43D24] px-2 py-1">Clear</Link>
                  )}
                  <button type="submit" className="bg-[#2E4F5E] text-white text-[0.68rem] font-black px-3 py-1.5 rounded-lg hover:bg-[#1a3a44] transition-colors">
                    Search
                  </button>
                </div>
              </form>
 
              {activeSubject !== 'All' && (
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[#7da8b8] text-[0.68rem] font-bold">Filtering by:</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#E8C86A] text-[#2E4F5E] text-[0.65rem] font-black rounded-full border border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]">
                    {activeSubject}
                    <Link href="/tutors" className="hover:text-[#C43D24] transition-colors ml-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </Link>
                  </span>
                </div>
              )}
 
              <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
                <Link href="/tutors"
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                    activeSubject === 'All'
                      ? 'bg-[#E05C42] text-white border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                      : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                  }`}>
                  All Tutors
                </Link>
                {POPULAR_SUBJECTS.map(s => (
                  <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-[0.72rem] font-black border-2 transition-all duration-150 ${
                      activeSubject === s
                        ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E]'
                        : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/10'
                    }`}>
                    {s}
                  </Link>
                ))}
                <span className="flex-shrink-0 self-center w-1 h-1 rounded-full bg-[#D4D0C5] mx-1" aria-hidden="true" />
                {ALL_SUBJECTS.filter(s => !POPULAR_SUBJECTS.includes(s)).map(s => (
                  <Link key={s} href={`/tutors?subject=${encodeURIComponent(s)}`}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[0.68rem] font-bold border transition-all duration-150 ${
                      activeSubject === s
                        ? 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[1px_1px_0_0_#2E4F5E]'
                        : 'bg-white text-[#7da8b8] border-[#D4D0C5] hover:border-[#E8C86A] hover:text-[#2E4F5E]'
                    }`}>
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §3  TUTOR GRID SECTION
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="tutors-heading" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <h2 id="tutors-heading" className="sr-only">Available tutors</h2>
          <div className="max-w-6xl mx-auto">
            {tutors.length > 0 ? (
              <>
                {/* Results count */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-[0.75rem] font-bold text-[#7da8b8]">
                    {activeSubject !== 'All'
                      ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} found for "${activeSubject}"${activeCity ? ` in ${activeCity}` : ''}`
                      : activeCity
                        ? `${tutors.length} tutor${tutors.length !== 1 ? 's' : ''} available in ${activeCity}`
                        : `${tutors.length} verified tutor${tutors.length !== 1 ? 's' : ''} available`
                    }
                  </p>
                  {searchQuery && (
                    <span className="text-[0.7rem] font-bold text-[#E8934A]">
                      Results for "{searchQuery}"
                    </span>
                  )}
                </div>
 
                {/* Featured Tutors Section */}
                {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                  <div className="mb-10 sm:mb-14">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-6 w-1 bg-[#E8C86A] rounded-full border border-[#2E4F5E]" />
                      <h3 className="font-black text-[1.05rem] text-[#2E4F5E]">✨ Featured Verified Tutors</h3>
                      <span className="text-[0.62rem] font-black text-[#7da8b8] bg-[#FFFDF7] border border-[#D4D0C5] px-2.5 py-0.5 rounded-full">5+ years experience</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {featuredTutors.map(tutor => (
                        <TutorCard key={tutor._id} tutor={tutor} featured />
                      ))}
                    </div>
                  </div>
                )}
 
                {/* All Tutors Section */}
                {(regularTutors.length > 0 || featuredTutors.length === 0 || activeSubject !== 'All' || searchQuery) && (
                  <div>
                    {featuredTutors.length > 0 && activeSubject === 'All' && !searchQuery && (
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-5 w-1 bg-[#D4D0C5] rounded-full" />
                        <h3 className="font-black text-[1rem] text-[#2E4F5E]">Browse All Verified Tutors</h3>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {(regularTutors.length > 0 ? regularTutors : tutors).map(tutor => (
                        <TutorCard key={tutor._id} tutor={tutor} />
                      ))}
                    </div>
                  </div>
                )}
 
                {/* Verification note */}
                <p className="text-center text-[0.62rem] font-black text-[#b0c4cc] mt-12">
                  All {tutors.length} tutor{tutors.length !== 1 ? 's' : ''} manually verified by the Avenfield Tutors team
                </p>
              </>
            ) : (
              // No Results State (matches home page style)
              <div className="text-center py-16 sm:py-28">
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[6px_6px_0_0_#2E4F5E] flex items-center justify-center text-4xl mx-auto mb-6" aria-hidden="true">
                  🔍
                </div>
                <h3 className="font-black text-[1.25rem] sm:text-[1.5rem] text-[#2E4F5E] mb-3">
                  No tutors found{activeSubject !== 'All' ? ` for "${activeSubject}"` : ''}
                </h3>
                <p className="text-[#4a6a78] text-[0.88rem] font-semibold max-w-sm mx-auto mb-8 leading-relaxed">
                  We may not have added tutors for this subject yet. New tutors join every week.
                  Try browsing all tutors or request one for your subject.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/tutors"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E05C42] text-white text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                    Browse All Tutors
                  </Link>
                  <Link href="/become-tutor"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E4F5E] text-[0.85rem] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all">
                    Become a Tutor
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §4  SEO CONTENT SECTION — Long-form content (500-700 words)
        ══════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="seo-content-heading"
          className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8 border-t border-[#E8C86A]/30"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Eyebrow text="Why Choose Avenfield Tutors" center />
              <h2 id="seo-content-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                Why Choose Avenfield Tutors for Online &amp; Home Tuition?
              </h2>
            </div>
            <div className="space-y-5 text-[#4a6a78] text-[0.9rem] sm:text-[0.95rem] leading-[1.8] font-semibold">
              <p>
                <strong className="text-[#2E4F5E]">Verified Online Tutors Pakistan:</strong>{' '}
                Avenfield Tutors is Pakistan's most trusted platform for finding{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">verified online tutors</Link> and{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tutors</Link>. Our rigorous verification process ensures that every educator on our platform is a qualified professional with proven teaching experience. Whether you need a{' '}
                <Link href="/tutors?subject=Mathematics" className="text-[#C43D24] hover:underline font-black">Mathematics tutor</Link>,{' '}
                <Link href="/tutors?subject=Physics" className="text-[#C43D24] hover:underline font-black">Physics tutor</Link>, or{' '}
                <Link href="/tutors?subject=Chemistry" className="text-[#C43D24] hover:underline font-black">Chemistry tutor</Link>, we connect you with the perfect educator for your needs.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Subjects We Cover:</strong> We offer tutoring in 50+ subjects including{' '}
                <Link href="/tutors?subject=O%20Level" className="text-[#C43D24] hover:underline font-black">O Level</Link>,{' '}
                <Link href="/tutors?subject=A%20Level" className="text-[#C43D24] hover:underline font-black">A Level</Link>,{' '}
                <Link href="/tutors?subject=IGCSE" className="text-[#C43D24] hover:underline font-black">IGCSE</Link>,{' '}
                <Link href="/tutors?subject=GCSE" className="text-[#C43D24] hover:underline font-black">GCSE</Link>,{' '}
                <Link href="/tutors?subject=IELTS" className="text-[#C43D24] hover:underline font-black">IELTS</Link>,{' '}
                <Link href="/tutors?subject=MDCAT" className="text-[#C43D24] hover:underline font-black">MDCAT</Link>,{' '}
                <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#C43D24] hover:underline font-black">CSS</Link>, and more. Our{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">private tutors</Link> are subject matter experts with years of teaching experience, ensuring you receive the highest quality{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tuition</Link> and{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tuition</Link> available.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Online and Home Tutors in Pakistan:</strong>{' '}
                We provide <Link href="/tutors?city=Lahore" className="text-[#C43D24] hover:underline font-black">home tuition in Lahore</Link>,{' '}
                <Link href="/tutors?city=Karachi" className="text-[#C43D24] hover:underline font-black">Karachi</Link>,{' '}
                <Link href="/tutors?city=Islamabad" className="text-[#C43D24] hover:underline font-black">Islamabad</Link>, and other major cities. Our{' '}
                <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">home tutors</Link> visit your residence for personalized, face-to-face learning sessions. For students outside Pakistan, our{' '}
                <Link href="/tutors?mode=online" className="text-[#C43D24] hover:underline font-black">online tutors</Link> connect from anywhere in the world, providing flexible scheduling and recorded sessions for revision.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">How to Find a Tutor:</strong> Finding a tutor on Avenfield Tutors is simple. Browse our directory, filter by subject, city, and learning mode, review tutor profiles with qualifications and experience, and connect directly via WhatsApp. You can start learning the same day with no long forms or waiting periods. Our{' '}
                <Link href="/services" className="text-[#C43D24] hover:underline font-black">tutoring services</Link> are designed to be accessible, affordable, and effective.
              </p>
              <p>
                <strong className="text-[#2E4F5E]">Exam Preparation:</strong> We specialize in exam preparation for competitive tests. Our{' '}
                <Link href="/tutors?subject=IELTS" className="text-[#C43D24] hover:underline font-black">IELTS tutors</Link> help students achieve their target band scores, while our{' '}
                <Link href="/tutors?subject=MDCAT" className="text-[#C43D24] hover:underline font-black">MDCAT tutors</Link> provide comprehensive preparation for medical entrance exams. For civil service aspirants, our{' '}
                <Link href="/tutors?subject=CSS%20%2F%20PMS" className="text-[#C43D24] hover:underline font-black">CSS tutors</Link> offer expert guidance on all compulsory and optional subjects.
              </p>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §5  FAQ SECTION
        ══════════════════════════════════════════════════════ */}
        <section
          aria-labelledby="faq-heading"
          className="bg-[#FFFDF7] py-16 sm:py-20 px-4 sm:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Eyebrow text="Got Questions?" center />
              <h2 id="faq-heading" className="text-[1.8rem] sm:text-[2.2rem] font-black tracking-[-0.02em] text-[#2E4F5E]">
                Frequently Asked Questions
              </h2>
              <p className="text-[#4a6a78] text-[0.88rem] mt-2 font-semibold">
                Everything you need to know about finding a tutor
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I find an online tutor on Avenfield Tutors?',
                  a: 'Finding an online tutor is simple. Browse our verified tutor directory, filter by subject (O Level, A Level, IELTS, MDCAT, CSS, Mathematics, Physics, etc.), and connect directly via WhatsApp. All our online tutors are verified and qualified educators with proven teaching experience.'
                },
                {
                  q: 'Do you offer home tuition in Pakistan?',
                  a: 'Yes, we offer home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and other major cities across Pakistan. Our verified home tutors visit your residence for personalized, face-to-face learning sessions tailored to your needs.'
                },
                {
                  q: 'Are all tutors on Avenfield Tutors verified?',
                  a: 'Yes, all tutors on Avenfield Tutors are manually verified before approval. We review their qualifications, teaching experience, subject expertise, and conduct a teaching demo. Only qualified educators with proven experience are approved to teach on our platform.'
                },
                {
                  q: 'Can I choose my own tutor?',
                  a: 'Absolutely. You can browse all tutor profiles, review their qualifications, experience, subject expertise, and read student feedback. Once you find a tutor that matches your requirements, you can connect with them directly via WhatsApp to schedule your first session.'
                },
                {
                  q: 'Which cities do you cover for home tuition?',
                  a: 'We provide home tuition in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and other major cities across Pakistan. Our online tutoring services are available worldwide including UK, USA, Canada, Australia, UAE, and Europe.'
                },
                {
                  q: 'How much does tuition cost?',
                  a: 'Tuition fees vary based on the subject, level (O Level, A Level, IELTS, MDCAT, etc.), tutor experience, and learning mode (online or home tuition). Contact us for a personalized quote. We offer competitive rates with no hidden charges.'
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border-2 border-[#E8C86A] rounded-xl overflow-hidden shadow-[2px_2px_0_0_#c9ab4a] transition-all hover:shadow-[3px_3px_0_0_#c9ab4a]"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <summary className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                    <span className="text-[0.9rem] sm:text-[0.95rem] font-black text-[#2E4F5E] pr-4" itemProp="name">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div className="pt-2 border-t-2 border-dashed border-[#E8C86A]/30" itemProp="text">
                      <p className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] font-semibold leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §6  BOTTOM CTA SECTION (matches home page "For Educators" style)
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="bottom-cta-heading">
          <div className="bg-[#2E4F5E] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-t-2 border-[#E8C86A]">
            <div className="max-w-4xl mx-auto text-center">
              <Eyebrow text="Ready to Start?" light center />
              <h2 id="bottom-cta-heading" className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2.4rem] font-black tracking-[-0.02em] mb-3">
                Can't Find the <span className="text-[#E8C86A]">Right Tutor?</span>
              </h2>
              <p className="text-[#7da8b8] text-[0.9rem] sm:text-[0.95rem] font-semibold max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
                Tell us your subject and requirements we'll match you with the perfect educator within 24 hours. Free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 bg-[#E8C86A] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#2E4F5E] hover:shadow-[0_2px_0_0_#2E4F5E] hover:translate-y-[2px] transition-all duration-150">
                  Request a Tutor
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
                <Link href="/become-tutor"
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-7 py-3 border-2 border-white/30 hover:border-white/60 text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl transition-all duration-200">
                  Become a Tutor
                </Link>
              </div>
              <p className="text-white/40 text-[0.62rem] font-bold mt-6">
                Book Your Tutor Today Start Learning Tomorrow
              </p>
            </div>
          </div>
        </section>
 
        {/* ══════════════════════════════════════════════════════
            §7  JSON-LD ItemList Schema (keeping existing)
        ══════════════════════════════════════════════════════ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: 'Verified Tutors at Avenfield Tutors',
              description: 'Browse hand-verified online and home tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online tuition worldwide and home tutoring in Pakistan, UAE & UK.',
              url: `${SITE_URL}/tutors`,
              numberOfItems: tutors.length,
              itemListElement: tutors.slice(0, 10).map((tutor, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Person',
                  name: tutor.name,
                  description: `${tutor.subjects?.slice(0, 3).join(', ')} tutor with ${tutor.experience}+ years experience`,
                  knowsAbout: tutor.subjects,
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Avenfield Tutors',
                  },
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  )
}