





// import Link from 'next/link'

// interface CityPageProps {
//   city: string
//   areas: {
//     [category: string]: string[]
//   }
//   nearbyCity?: string
//   // Genuinely city-specific paragraphs (not shared boilerplate) — each city
//   // page file supplies its own real local content here instead of every
//   // city rendering the same generic text with just the name swapped.
//   cityIntro?: string[]
// }

// const WHATSAPP_NUMBER = '923095154253'

// // Cities that currently have dedicated subject pages built
// const SUBJECT_PAGE_CITIES = ['Islamabad', 'Rawalpindi']

// function buildWhatsAppURL(city: string, subject?: string) {
//   const baseMessage = `Hi! I'm looking for a home tutor in ${city}`
//   const subjectText = subject ? ` for ${subject}` : ''
//   const message = encodeURIComponent(`${baseMessage}${subjectText}. Could you help me find one?`)
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
// }

// const SUBJECTS = [
//   { name: 'O Level', icon: '📚' },
//   { name: 'A Level', icon: '🎯' },
//   { name: 'IGCSE', icon: '🌍' },
//   { name: 'Mathematics', icon: '📐' },
//   { name: 'Physics', icon: '⚡' },
//   { name: 'Chemistry', icon: '🧪' },
//   { name: 'Biology', icon: '🧬' },
//   { name: 'English', icon: '📝' },
//   { name: 'Computer Science', icon: '💻' },
//   { name: 'Economics', icon: '📊' },
//   { name: 'IELTS', icon: '🎓' },
//   { name: 'MDCAT', icon: '🩺' },
//   { name: 'CSS / PMS', icon: '🏛️' },
//   { name: 'Quran & Arabic', icon: '🕌' },
// ]

// const BENEFITS = [
//   {
//     icon: '✅',
//     title: '100% Verified Tutors',
//     desc: 'Every tutor undergoes thorough background checks, qualification verification, and teaching ability assessment before joining our platform.',
//   },
//   {
//     icon: '💬',
//     title: 'Direct WhatsApp Booking',
//     desc: 'Skip the waiting games. Message your chosen tutor directly through WhatsApp and schedule your first session within hours.',
//   },
//   {
//     icon: '🎯',
//     title: 'Exact Subject Matching',
//     desc: "Get connected with tutors who have specific experience in your syllabus, whether it's CAIE, Edexcel, or local Pakistani boards.",
//   },
//   {
//     icon: '🏠',
//     title: 'Flexible Learning Options',
//     desc: 'Choose between in-home tutoring at your location or convenient online sessions, whatever fits your schedule best.',
//   },
// ]

// function getTotalAreas(areas: CityPageProps['areas']): number {
//   return Object.values(areas).reduce((acc, arr) => acc + arr.length, 0)
// }

// function getCategoryLabel(key: string): string {
//   const labels: Record<string, string> = {
//     sectors: '📍 Sectors',
//     housingSocieties: '🏘️ Housing Societies',
//     localities: '🏠 Localities & Neighborhoods',
//     commercial: '🏪 Commercial Areas',
//     centralAndOldCity: '🏙️ Central & Old City',
//     cantonmentAndEast: '🎖️ Cantonment & East',
//     johaAndSouth: '🏠 Johar Town & South',
//     suburbsAndRingRoad: '🛣️ Suburbs & Ring Road',
//     bahriaTown: '🏘️ Bahria Town Phases',
//     dha: '🏘️ DHA Phases',
//     askariHousing: '🏘️ Askari Housing Schemes',
//   }
//   return labels[key] || key
// }

// export default function CityLandingPage({ city, areas, nearbyCity, cityIntro }: CityPageProps) {
//   const whatsappURL = buildWhatsAppURL(city)
//   const totalAreas = getTotalAreas(areas)

//   const serviceSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Service',
//     serviceType: 'Home Tutoring',
//     provider: {
//       '@type': 'LocalBusiness',
//       name: 'Avenfield Tutors',
//       telephone: '+923095154253',
//       email: 'avenfieldtutors@gmail.com',
//       address: {
//         '@type': 'PostalAddress',
//         addressLocality: city,
//         addressCountry: 'PK',
//       },
//     },
//     areaServed: {
//       '@type': 'City',
//       name: city,
//       containedIn: 'Pakistan',
//     },
//     description: `Verified home tutors for O Level, A Level, IELTS, MDCAT and 50+ subjects in ${city}, Pakistan. Free consultation and direct WhatsApp booking.`,
//     offers: {
//       '@type': 'Offer',
//       priceSpecification: {
//         '@type': 'PriceSpecification',
//         priceCurrency: 'PKR',
//         valueAddedTaxIncluded: true,
//       },
//     },
//   }

//   const faqList = [
//     {
//       q: `Which areas of ${city} do your home tutors cover?`,
//       a: `Our verified tutors provide home tuition across ${Object.values(areas).flat().slice(0, 8).join(', ')} and many other areas in ${city}. If your specific area isn't listed, <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we'll confirm availability.`,
//     },
//     {
//       q: `How much does a home tutor in ${city} cost?`,
//       a: `Home tutor rates in ${city} vary based on the subject, academic level, and tutor experience. We offer competitive pricing with complete transparency. <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your requirements for a detailed quote with no hidden charges.`,
//     },
//     {
//       q: `Can I get a free trial before committing?`,
//       a: "Yes, we offer a free initial consultation session. This lets you assess the tutor's teaching style and ensures they're the right fit for your learning needs before you commit to regular sessions.",
//     },
//     {
//       q: `What qualifications do your tutors have?`,
//       a: `All our tutors in ${city} hold minimum bachelor's degrees with proven teaching experience and subject expertise. Many tutors have advanced degrees, professional certifications, and years of teaching experience.`,
//     },
//     ...(nearbyCity
//       ? [
//           {
//             q: `Do you also provide home tutors in ${nearbyCity}?`,
//             a: `Yes, we serve both ${city} and ${nearbyCity} for home tuition. Check out our <a href="/home-tutor-${nearbyCity.toLowerCase()}" class="text-[#C43D24] hover:underline font-black">home tutors in ${nearbyCity}</a> page for more details. We also offer <a href="/tutors" class="text-[#C43D24] hover:underline font-black">online tutoring</a> for students anywhere in Pakistan and worldwide.`,
//           },
//         ]
//       : []),
//   ]

//   const faqSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'FAQPage',
//     mainEntity: faqList.map(f => ({
//       '@type': 'Question',
//       name: f.q,
//       acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
//     })),
//   }

//   const breadcrumbSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     itemListElement: [
//       { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
//       {
//         '@type': 'ListItem',
//         position: 2,
//         name: `Home Tutors in ${city}`,
//         item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}`,
//       },
//     ],
//   }

//   return (
//     <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

//       {/* ══════════════════════ HERO ══════════════════════ */}
//       <section className="bg-[#2E4F5E] pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 relative overflow-hidden">
//         <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full"
//             style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(30%, -20%)' }} />
//           <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full"
//             style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(-20%, 30%)' }} />
//         </div>

//         <div className="max-w-5xl mx-auto relative">
//           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8C86A]/20 border border-[#E8C86A]/30 rounded-full mb-5">
//             <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse flex-shrink-0" />
//             <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
//               Home Tuition in {city}
//             </span>
//           </span>

//           <h1 className="text-white text-[1.9rem] sm:text-[2.6rem] lg:text-[3.2rem] font-black tracking-tight leading-[1.15] mb-4">
//             Find Expert Home Tutors in
//             <span className="text-[#E8C86A] block sm:inline"> {city}</span>
//           </h1>

//           <p className="text-[#a8c5d0] text-[0.92rem] sm:text-[1.05rem] font-semibold leading-relaxed max-w-2xl mb-6">
//             Connect with verified home tutors for{' '}
//             <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">O Level</Link>,{' '}
//             <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">A Level</Link>,{' '}
//             <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">IELTS</Link>,{' '}
//             <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">MDCAT</Link>, and 50+ other subjects.
//           </p>

//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7">
//             {['Free Consultation', '100% Verified Tutors', 'WhatsApp Booking'].map(t => (
//               <span key={t} className="flex items-center gap-1.5 text-[#a8c5d0] text-[0.8rem] sm:text-[0.85rem] font-semibold">
//                 <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] flex-shrink-0">✓</span>
//                 {t}
//               </span>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row gap-3">
//             <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150">
//               <span className="text-xl">💬</span>
//               Get Free Consultation
//             </a>
//             <Link href={`/tutors?city=${encodeURIComponent(city)}`}
//               className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-white text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150 no-underline">
//               Browse Tutors
//             </Link>
//           </div>
//         </div>
//       </section>

//       <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 sm:space-y-14">

//         {cityIntro && cityIntro.length > 0 && (
//           <section>
//             <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] mb-4">
//               Home Tutoring in {city}: What Makes It Different
//             </h2>
//             <div className="space-y-3">
//               {cityIntro.map((para, i) => (
//                 <p key={i} className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] leading-relaxed font-medium">
//                   {para}
//                 </p>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* ══════════════════════ AREAS COVERED ══════════════════════ */}
//         <section>
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
//             <div>
//               <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
//                 <span>📍</span>
//                 Areas We Cover in {city}
//               </h2>
//               <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
//                 Our home tutors serve students across these neighborhoods
//               </p>
//             </div>
//             <span className="text-[0.7rem] font-bold text-[#a8c5d0] bg-white px-3 py-1.5 rounded-full border border-[#D4D0C5] whitespace-nowrap self-start sm:self-auto">
//               {totalAreas}+ areas covered
//             </span>
//           </div>

//           <div className="space-y-3">
//             {Object.entries(areas).map(([category, areaList]) => (
//               <details key={category} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
//                 <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                   <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E] flex items-center gap-2 min-w-0">
//                     <span className="truncate">{getCategoryLabel(category)}</span>
//                     <span className="flex-shrink-0 text-[0.68rem] font-bold text-[#a8c5d0] bg-[#D4D0C5]/30 px-2 py-0.5 rounded-full">
//                       {areaList.length}
//                     </span>
//                   </span>
//                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
//                     ▼
//                   </span>
//                 </summary>
//                 <div className="px-4 sm:px-5 pb-5 pt-1">
//                   <div className="flex flex-wrap gap-2">
//                     {areaList.map((area) => (
//                       <Link key={area} href={`/tutors?city=${encodeURIComponent(city)}&area=${encodeURIComponent(area)}`}
//                         className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] sm:text-[0.78rem] font-bold rounded-full border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#E8C86A]/20 transition-all no-underline">
//                         {area}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </details>
//             ))}
//           </div>

//           <p className="text-[#a8c5d0] text-[0.78rem] sm:text-[0.8rem] font-semibold mt-4 flex items-start gap-1.5">
//             <span>📌</span>
//             <span>
//               Don&#39;t see your area?{' '}
//               <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#C43D24] hover:underline font-black">
//                 Message us on WhatsApp
//               </a>{' '}
//               and we&#39;ll confirm availability.
//             </span>
//           </p>
//         </section>

//         {/* ══════════════════════ SUBJECTS WE TEACH ══════════════════════ */}
//         <section>
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
//             <div>
//               <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
//                 <span>📚</span>
//                 Subjects We Teach in {city}
//               </h2>
//               <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
//                 Expert tutoring across all major subjects and exam boards
//               </p>
//             </div>
//             <Link href="/tutors" className="text-[0.7rem] font-bold text-[#2c7d70] hover:text-[#2d7a6e] underline whitespace-nowrap">
//               View all subjects →
//             </Link>
//           </div>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
//             {SUBJECTS.map((subject) => (
//               <Link key={subject.name} href={`/tutors?subject=${encodeURIComponent(subject.name)}&city=${encodeURIComponent(city)}`}
//                 className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] transition-all no-underline">
//                 <span className="text-base sm:text-lg flex-shrink-0">{subject.icon}</span>
//                 <span className="group-hover:text-[#2c7d70] transition-colors truncate">{subject.name}</span>
//               </Link>
//             ))}
//           </div>
//         </section>

//         {/* ══════════════════════ POPULAR SUBJECTS ══════════════════════ */}
//         {/* ORGANIZED WITH CATEGORIES — shows for Islamabad & Rawalpindi */}
//         {SUBJECT_PAGE_CITIES.includes(city) && (
//           <section className="bg-white rounded-2xl border-2 border-[#E8C86A] p-5 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
//             <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
//               <div>
//                 <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
//                   <span>🎯</span>
//                   Popular Subjects in {city}
//                 </h2>
//                 <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
//                   Dedicated tutoring pages for the most sought-after subjects
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-5">
//               {/* ─── ACADEMIC SUBJECTS ─── */}
//               <div>
//                 <p className="text-[0.7rem] font-black text-[#2c7d70] uppercase tracking-wider mb-2 flex items-center gap-2">
//                   <span>📚</span> Academic Subjects
//                 </p>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
//                   {[
//                     // ─── Islamabad Subjects ───
//                     ...(city === 'Islamabad' ? [
//                       { name: 'O Level Tutors', href: `/o-level-tutor-${city.toLowerCase()}`, icon: '📚' },
//                       { name: 'A Level Tutors', href: `/a-level-tutor-${city.toLowerCase()}`, icon: '🎯' },
//                       { name: 'IELTS Tutors', href: `/ielts-tutor-${city.toLowerCase()}`, icon: '🎓' },
//                       { name: 'MDCAT Tutors', href: `/mdcat-tutor-${city.toLowerCase()}`, icon: '🩺' },
//                       { name: 'Biology Tutors', href: `/biology-tutor-${city.toLowerCase()}`, icon: '🧬' },
//                       { name: 'Chemistry Tutors', href: `/chemistry-tutor-${city.toLowerCase()}`, icon: '🧪' },
//                       { name: 'Physics Tutors', href: `/physics-tutor-${city.toLowerCase()}`, icon: '⚡' },
//                       { name: 'Mathematics Tutors', href: `/math-tutor-${city.toLowerCase()}`, icon: '📐' },
//                       { name: 'Computer Science Tutors', href: `/computer-science-tutor-${city.toLowerCase()}`, icon: '💻' },
//                       { name: 'English Tutors', href: `/english-tutor-${city.toLowerCase()}`, icon: '📝' },
//                       { name: 'Quran Tutors', href: `/quran-tutor-${city.toLowerCase()}`, icon: '🕌' },
//                       { name: 'Urdu Tutors', href: `/urdu-tutor-${city.toLowerCase()}`, icon: '🖋️' },
//                       { name: 'Pakistan Studies Tutors', href: `/pakistan-studies-tutor-${city.toLowerCase()}`, icon: '🇵🇰' },
//                       { name: 'Islamic Studies Tutors', href: `/islamic-studies-tutor-${city.toLowerCase()}`, icon: '☪️' },
//                       { name: 'Accounting Tutors', href: `/accounting-tutor-${city.toLowerCase()}`, icon: '📊' },
//                       { name: 'Economics Tutors', href: `/economics-tutor-${city.toLowerCase()}`, icon: '📈' },
//                     ] : []),
//                     // ─── Rawalpindi Subjects (ALL 20) ───
//                     ...(city === 'Rawalpindi' ? [
//                       // ─── Core Subjects ───
//                       { name: 'Home Math Tutors', href: `/home-math-tutor-${city.toLowerCase()}`, icon: '📐' },
//                       { name: 'Home Physics Tutors', href: `/home-physics-tutor-${city.toLowerCase()}`, icon: '⚡' },
//                       { name: 'Home Chemistry Tutors', href: `/home-chemistry-tutor-${city.toLowerCase()}`, icon: '🧪' },
//                       { name: 'Home Biology Tutors', href: `/home-biology-tutor-${city.toLowerCase()}`, icon: '🧬' },
//                       { name: 'Home English Tutors', href: `/home-english-tutor-${city.toLowerCase()}`, icon: '📝' },
//                       // ─── Cambridge & Exam Subjects ───
//                       { name: 'Home O Level Tutors', href: `/home-o-level-tutor-${city.toLowerCase()}`, icon: '📚' },
//                       { name: 'Home A Level Tutors', href: `/home-a-level-tutor-${city.toLowerCase()}`, icon: '🎯' },
//                       { name: 'Home IELTS Tutors', href: `/home-ielts-tutor-${city.toLowerCase()}`, icon: '🎓' },
//                       { name: 'Home MDCAT Tutors', href: `/home-mdcat-tutor-${city.toLowerCase()}`, icon: '🩺' },
//                       // ─── Humanities & Social Sciences ───
//                       { name: 'Home Pakistan Studies Tutors', href: `/home-pakistan-studies-tutor-${city.toLowerCase()}`, icon: '🇵🇰' },
//                       { name: 'Home Islamic Studies Tutors', href: `/home-islamic-studies-tutor-${city.toLowerCase()}`, icon: '☪️' },
//                       { name: 'Home Geography Tutors', href: `/home-geography-tutor-${city.toLowerCase()}`, icon: '🌍' },
//                       { name: 'Home Psychology Tutors', href: `/home-psychology-tutor-${city.toLowerCase()}`, icon: '🧠' },
//                       { name: 'Home Sociology Tutors', href: `/home-sociology-tutor-${city.toLowerCase()}`, icon: '👥' },
//                       { name: 'Home Statistics Tutors', href: `/home-statistics-tutor-${city.toLowerCase()}`, icon: '📊' },
//                       // ─── Additional Subjects ───
//                       { name: 'Home Computer Science Tutors', href: `/home-computer-science-tutor-${city.toLowerCase()}`, icon: '💻' },
//                       { name: 'Home Urdu Tutors', href: `/home-urdu-tutor-${city.toLowerCase()}`, icon: '🖋️' },
//                       { name: 'Home Quran Tutors', href: `/home-quran-tutor-${city.toLowerCase()}`, icon: '🕌' },
//                       { name: 'Home Accounting Tutors', href: `/home-accounting-tutor-${city.toLowerCase()}`, icon: '📊' },
//                       { name: 'Home Economics Tutors', href: `/home-economics-tutor-${city.toLowerCase()}`, icon: '📈' },
//                     ] : []),
//                   ].map((item) => (
//                     <Link key={item.name} href={item.href}
//                       className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FFFDF7] text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] transition-all no-underline">
//                       <span className="text-base sm:text-lg flex-shrink-0">{item.icon}</span>
//                       <span className="group-hover:text-[#2c7d70] transition-colors">{item.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* ─── COMPETITIVE EXAMS ─── */}
//               <div className="pt-4 border-t-2 border-dashed border-[#E8C86A]/40">
//                 <p className="text-[0.7rem] font-black text-[#C43D24] uppercase tracking-wider mb-2 flex items-center gap-2">
//                   <span>🏛️</span> Competitive Exams
//                 </p>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
//                   {[
//                     { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
//                     { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
//                   ].map((item) => (
//                     <Link key={item.name} href={item.href}
//                       className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FFFDF7] text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#E05C42] hover:bg-[#FFFDF7] transition-all no-underline">
//                       <span className="text-base sm:text-lg flex-shrink-0">{item.icon}</span>
//                       <span className="group-hover:text-[#C43D24] transition-colors">{item.name}</span>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <p className="text-[#a8c5d0] text-[0.75rem] font-semibold mt-5 text-center">
//               🎓 These pages are designed to help you find specialised tutors for each subject in {city}
//             </p>
//           </section>
//         )}

//         {/* ══════════════════════ WHY CHOOSE US ══════════════════════ */}
//         <section className="bg-[#2f8074] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] sm:shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-9 text-white">
//           <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
//             <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
//               <span>⭐</span>
//               Why Families in {city} Trust Us
//             </h2>
//             <p className="text-white text-[0.85rem] sm:text-[0.9rem] font-semibold mt-1">
//               What makes Avenfield Tutors the preferred choice for home tuition
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//             {BENEFITS.map((item) => (
//               <div key={item.title} className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
//                 <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8C86A] text-[#2E4F5E] flex items-center justify-center text-base sm:text-lg font-black flex-shrink-0 shadow-[2px_2px_0_0_#1a3240]">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-black text-[0.9rem] sm:text-[0.95rem]">{item.title}</h3>
//                   <p className="text-white text-[0.78rem] sm:text-[0.8rem] font-semibold mt-0.5 leading-relaxed">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
//         <section className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] sm:shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-9 text-[#2E4F5E]">
//           <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
//             <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
//               <span>🚀</span>
//               Get Started in 3 Simple Steps
//             </h2>
//             <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold mt-1">
//               Find your perfect home tutor in {city} without the hassle
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
//             {[
//               { step: '01', title: 'Share Your Requirements', desc: `Message us on WhatsApp with your subject, level, and location in ${city}` },
//               { step: '02', title: 'Get Matched Instantly', desc: 'We connect you with verified tutors who match your specific needs' },
//               { step: '03', title: 'Start Learning Today', desc: 'Schedule a free consultation and begin your tutoring sessions' },
//             ].map((item) => (
//               <div key={item.step} className="text-center p-4 sm:p-5 bg-white rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-[#2E4F5E] text-white font-black rounded-full flex items-center justify-center text-lg sm:text-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#1a3240]">
//                   {item.step}
//                 </div>
//                 <h3 className="font-black text-[0.92rem] sm:text-[1rem] mb-1.5 sm:mb-2">{item.title}</h3>
//                 <p className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-[#4a6a78] leading-relaxed">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ══════════════════════ FAQ ══════════════════════ */}
//         <section>
//           <div className="text-center max-w-2xl mx-auto mb-6">
//             <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center justify-center gap-2">
//               <span>❓</span>
//               Frequently Asked Questions
//             </h2>
//             <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
//               Everything you need to know about home tutoring in {city}
//             </p>
//           </div>

//           <div className="space-y-3 max-w-3xl mx-auto">
//             {faqList.map((faq, i) => (
//               <details key={i} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
//                 <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
//                   <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E]">{faq.q}</span>
//                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
//                     ▼
//                   </span>
//                 </summary>
//                 <div className="px-4 sm:px-5 pb-5 pt-1">
//                   <p className="text-[#4a6a78] text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: faq.a }} />
//                 </div>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* ══════════════════════ SEO CONTENT BLOCK ══════════════════════ */}
//         <section className="bg-[#FFFDF7] border-2 border-[#E8C86A] rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
//           <h2 className="font-black text-[1.1rem] sm:text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
//             <span>📖</span>
//             Home Tuition in {city} – Expert Tutors for Every Subject
//           </h2>
//           <div className="space-y-4 text-[#4a6a78] text-[0.85rem] sm:text-[0.95rem] leading-[1.75] font-semibold">
//             <p>
//               <strong className="text-[#2E4F5E]">Why choose a home tutor in {city}?</strong> Personalised, one-on-one attention is the most effective way to improve academic performance. Our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">home tutors in {city}</Link> are carefully selected to match your child's learning style and academic goals. Whether preparing for <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">O Level</Link> exams or aiming for top scores in <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">A Level</Link>, our tutors bring subject expertise and real-world teaching experience.
//             </p>
//             <p>
//               <strong className="text-[#2E4F5E]">Subjects we cover:</strong> From <Link href={`/tutors?subject=Mathematics&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Mathematics</Link> and <Link href={`/tutors?subject=Physics&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Physics</Link> to <Link href={`/tutors?subject=Chemistry&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Chemistry</Link>, <Link href={`/tutors?subject=Biology&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Biology</Link>, <Link href={`/tutors?subject=English&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">English</Link>, <Link href={`/tutors?subject=Computer%20Science&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Computer Science</Link>, and <Link href={`/tutors?subject=Quran%20%26%20Arabic&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Quran &amp; Arabic</Link>, we have expert tutors for every subject. We also specialise in exam preparation for <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">IELTS</Link>, <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">MDCAT</Link>, <Link href={`/tutors?subject=CSS%20%2F%20PMS&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">CSS</Link>, and <Link href={`/tutors?subject=PPSC%20%2F%20FPSC&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">PPSC</Link>.
//             </p>
//             <p>
//               <strong className="text-[#2E4F5E]">Why Avenfield Tutors?</strong> Unlike other platforms, we manually verify every tutor before they join. Our <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tutors</Link> and home tutors are experienced, qualified, and passionate about teaching. With <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tutoring</Link> available worldwide, we are the trusted choice for families in {city} and beyond.
//             </p>
//             <p>
//               <strong className="text-[#2E4F5E]">Home tuition vs. online tutoring:</strong> We offer both! If you prefer in-person lessons, our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">home tutors in {city}</Link> will travel to your location. If you need flexibility, our <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tuition</Link> connects you with expert tutors from anywhere. Many students combine both modes for maximum convenience.
//             </p>
//             <p>
//               <strong className="text-[#2E4F5E]">Ready to get started?</strong> Simply <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> with your subject and level. We&#39;ll match you with a verified tutor in {city} within 24 hours. No long forms, no waiting weeks – start learning today with Avenfield Tutors.
//             </p>
//             {nearbyCity && (
//               <p className="text-[0.78rem] sm:text-[0.8rem] text-[#a8c5d0]">
//                 <span>📌 </span>
//                 Also serving <Link href={`/home-tutor-${nearbyCity.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">{nearbyCity}</Link> and other cities across Pakistan.
//               </p>
//             )}
//           </div>
//         </section>

//         {/* ══════════════════════ FINAL CTA ══════════════════════ */}
//         <section className="bg-gradient-to-br from-[#2E4F5E] to-[#1a3240] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#1a3240] sm:shadow-[6px_6px_0_0_#1a3240] p-6 sm:p-10 text-center">
//           <div className="max-w-2xl mx-auto">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8C86A]/20 rounded-full mb-4">
//               <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse flex-shrink-0" />
//               <span className="text-[0.58rem] sm:text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
//                 Book your free consultation
//               </span>
//             </div>

//             <h2 className="text-white font-black text-[1.3rem] sm:text-[1.8rem] mb-3">
//               Ready to Find Your Perfect Home Tutor in {city}?
//             </h2>

//             <p className="text-[#a8c5d0] text-[0.88rem] sm:text-[0.95rem] font-semibold mb-6">
//               Message us on WhatsApp with your subject and level. We&#39;ll match you with a verified tutor within 24 hours.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-[#E8C86A] hover:bg-[#d4b85a] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all">
//                 <span className="text-xl">💬</span>
//                 Contact Us on WhatsApp
//               </a>
//               <Link href="/tutors"
//                 className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-white hover:bg-[#FFFDF7] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all no-underline">
//                 Browse All Tutors
//               </Link>
//             </div>

//             <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-[0.68rem] sm:text-[0.7rem] text-[#a8c5d0] font-semibold">
//               <span>📱 WhatsApp: +92 309 5154253</span>
//               <span className="hidden sm:inline">|</span>
//               <span>✉️ avenfieldtutors@gmail.com</span>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }










import Link from 'next/link'

interface CityPageProps {
  city: string
  areas: {
    [category: string]: string[]
  }
  nearbyCity?: string
  // Genuinely city-specific paragraphs (not shared boilerplate) — each city
  // page file supplies its own real local content here instead of every
  // city rendering the same generic text with just the name swapped.
  cityIntro?: string[]
  // One short, genuinely local line shown right under the hero heading
  // (e.g. "Serving F-6 to Bahria Town") so the hero itself isn't a pure
  // name-swap even though the H1 pattern intentionally stays consistent —
  // "Find Expert Home Tutors in {city}" is the exact phrase families search
  // for, so that part is deliberately NOT varied for SEO reasons.
  heroHighlight?: string
}

const WHATSAPP_NUMBER = '923095154253'

// Cities that currently have dedicated subject pages built
const SUBJECT_PAGE_CITIES = ['Islamabad', 'Rawalpindi']

function buildWhatsAppURL(city: string, subject?: string) {
  const baseMessage = `Hi! I'm looking for a home tutor in ${city}`
  const subjectText = subject ? ` for ${subject}` : ''
  const message = encodeURIComponent(`${baseMessage}${subjectText}. Could you help me find one?`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

const SUBJECTS = [
  { name: 'O Level', icon: '📚' },
  { name: 'A Level', icon: '🎯' },
  { name: 'IGCSE', icon: '🌍' },
  { name: 'Mathematics', icon: '📐' },
  { name: 'Physics', icon: '⚡' },
  { name: 'Chemistry', icon: '🧪' },
  { name: 'Biology', icon: '🧬' },
  { name: 'English', icon: '📝' },
  { name: 'Computer Science', icon: '💻' },
  { name: 'Economics', icon: '📊' },
  { name: 'IELTS', icon: '🎓' },
  { name: 'MDCAT', icon: '🩺' },
  { name: 'CSS / PMS', icon: '🏛️' },
  { name: 'Quran & Arabic', icon: '🕌' },
]

const BENEFITS = [
  {
    icon: '✅',
    title: '100% Verified Tutors',
    desc: 'Every tutor undergoes thorough background checks, qualification verification, and teaching ability assessment before joining our platform.',
  },
  {
    icon: '💬',
    title: 'Direct WhatsApp Booking',
    desc: 'Skip the waiting games. Message your chosen tutor directly through WhatsApp and schedule your first session within hours.',
  },
  {
    icon: '🎯',
    title: 'Exact Subject Matching',
    desc: "Get connected with tutors who have specific experience in your syllabus, whether it's CAIE, Edexcel, or local Pakistani boards.",
  },
  {
    icon: '🏠',
    title: 'Flexible Learning Options',
    desc: 'Choose between in-home tutoring at your location or convenient online sessions, whatever fits your schedule best.',
  },
]

function getTotalAreas(areas: CityPageProps['areas']): number {
  return Object.values(areas).reduce((acc, arr) => acc + arr.length, 0)
}

function getCategoryLabel(key: string): string {
  const labels: Record<string, string> = {
    sectors: '📍 Sectors',
    housingSocieties: '🏘️ Housing Societies',
    localities: '🏠 Localities & Neighborhoods',
    commercial: '🏪 Commercial Areas',
    centralAndOldCity: '🏙️ Central & Old City',
    cantonmentAndEast: '🎖️ Cantonment & East',
    johaAndSouth: '🏠 Johar Town & South',
    suburbsAndRingRoad: '🛣️ Suburbs & Ring Road',
    bahriaTown: '🏘️ Bahria Town Phases',
    dha: '🏘️ DHA Phases',
    askariHousing: '🏘️ Askari Housing Schemes',
  }
  return labels[key] || key
}

export default function CityLandingPage({ city, areas, nearbyCity, cityIntro, heroHighlight }: CityPageProps) {
  const whatsappURL = buildWhatsAppURL(city)
  const totalAreas = getTotalAreas(areas)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Tutoring',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Avenfield Tutors',
      telephone: '+923095154253',
      email: 'avenfieldtutors@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: 'PK',
      },
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedIn: 'Pakistan',
    },
    description: `Verified home tutors for O Level, A Level, IELTS, MDCAT and 50+ subjects in ${city}, Pakistan. Free consultation and direct WhatsApp booking.`,
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'PKR',
        valueAddedTaxIncluded: true,
      },
    },
  }

  const faqList = [
    {
      q: `Which areas of ${city} do your home tutors cover?`,
      a: `Our verified tutors provide home tuition across ${Object.values(areas).flat().slice(0, 8).join(', ')} and many other areas in ${city}. If your specific area isn't listed, <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> and we'll confirm availability.`,
    },
    {
      q: `How much does a home tutor in ${city} cost?`,
      a: `Home tutor rates in ${city} vary based on the subject, academic level, and tutor experience. We offer competitive pricing with complete transparency. <a href="${whatsappURL}" target="_blank" rel="noopener noreferrer" class="text-[#C43D24] hover:underline font-black">Contact us on WhatsApp</a> with your requirements for a detailed quote with no hidden charges.`,
    },
    {
      q: `Can I get a free trial before committing?`,
      a: "Yes, we offer a free initial consultation session. This lets you assess the tutor's teaching style and ensures they're the right fit for your learning needs before you commit to regular sessions.",
    },
    {
      q: `What qualifications do your tutors have?`,
      a: `All our tutors in ${city} hold minimum bachelor's degrees with proven teaching experience and subject expertise. Many tutors have advanced degrees, professional certifications, and years of teaching experience.`,
    },
    ...(nearbyCity
      ? [
          {
            q: `Do you also provide home tutors in ${nearbyCity}?`,
            a: `Yes, we serve both ${city} and ${nearbyCity} for home tuition. Check out our <a href="/home-tutor-${nearbyCity.toLowerCase()}" class="text-[#C43D24] hover:underline font-black">home tutors in ${nearbyCity}</a> page for more details. We also offer <a href="/tutors" class="text-[#C43D24] hover:underline font-black">online tutoring</a> for students anywhere in Pakistan and worldwide.`,
          },
        ]
      : []),
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://avenfieldtutors.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Home Tutors in ${city}`,
        item: `https://avenfieldtutors.com/home-tutor-${city.toLowerCase()}`,
      },
    ],
  }

  return (
    <div className="text-[#2E4F5E] overflow-x-hidden bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="bg-[#2E4F5E] pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-8 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, #3A9E8F, transparent 70%)', transform: 'translate(30%, -20%)' }} />
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, #E8C86A, transparent 70%)', transform: 'translate(-20%, 30%)' }} />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8C86A]/20 border border-[#E8C86A]/30 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse flex-shrink-0" />
            <span className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
              Home Tuition in {city}
            </span>
          </span>

          <h1 className="text-white text-[1.9rem] sm:text-[2.6rem] lg:text-[3.2rem] font-black tracking-tight leading-[1.15] mb-4">
            Find Expert Home Tutors in
            <span className="text-[#E8C86A] block sm:inline"> {city}</span>
          </h1>

          <p className="text-[#a8c5d0] text-[0.92rem] sm:text-[1.05rem] font-semibold leading-relaxed max-w-2xl mb-6">
            Connect with verified home tutors for{' '}
            <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">O Level</Link>,{' '}
            <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">A Level</Link>,{' '}
            <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">IELTS</Link>,{' '}
            <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#E8C86A] hover:underline font-black">MDCAT</Link>, and 50+ other subjects.
          </p>

          {heroHighlight && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 mb-6 -mt-2">
              <span className="text-sm flex-shrink-0">📍</span>
              <span className="text-[#a8c5d0] text-[0.75rem] sm:text-[0.8rem] font-bold">{heroHighlight}</span>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7">
            {['Free Consultation', '100% Verified Tutors', 'WhatsApp Booking'].map(t => (
              <span key={t} className="flex items-center gap-1.5 text-[#a8c5d0] text-[0.8rem] sm:text-[0.85rem] font-semibold">
                <span className="w-4 h-4 rounded-full bg-[#3A9E8F] flex items-center justify-center text-white text-[0.6rem] flex-shrink-0">✓</span>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150">
              <span className="text-xl">💬</span>
              Get Free Consultation
            </a>
            <Link href={`/tutors?city=${encodeURIComponent(city)}`}
              className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-3.5 sm:py-3 bg-white text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all duration-150 no-underline">
              Browse Tutors
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-16 space-y-12 sm:space-y-14">

        {cityIntro && cityIntro.length > 0 && (
          <section>
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] mb-4">
              Home Tutoring in {city}: What Makes It Different
            </h2>
            <div className="space-y-3">
              {cityIntro.map((para, i) => (
                <p key={i} className="text-[#4a6a78] text-[0.88rem] sm:text-[0.92rem] leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* ══════════════════════ AREAS COVERED ══════════════════════ */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                <span>📍</span>
                Areas We Cover in {city}
              </h2>
              <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
                Our home tutors serve students across these neighborhoods
              </p>
            </div>
            <span className="text-[0.7rem] font-bold text-[#4a6a78] bg-white px-3 py-1.5 rounded-full border border-[#D4D0C5] whitespace-nowrap self-start sm:self-auto">
              {totalAreas}+ areas covered
            </span>
          </div>

          <div className="space-y-3">
            {Object.entries(areas).map(([category, areaList]) => (
              <details key={category} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
                <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E] flex items-center gap-2 min-w-0">
                    <span className="truncate">{getCategoryLabel(category)}</span>
                    <span className="flex-shrink-0 text-[0.68rem] font-bold text-[#4a6a78] bg-[#D4D0C5]/30 px-2 py-0.5 rounded-full">
                      {areaList.length}
                    </span>
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {areaList.map((area) => (
                      <Link key={area} href={`/tutors?city=${encodeURIComponent(city)}&area=${encodeURIComponent(area)}`}
                        className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-[#FFFDF7] text-[#2E4F5E] text-[0.72rem] sm:text-[0.78rem] font-bold rounded-full border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#E8C86A]/20 transition-all no-underline">
                        {area}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <p className="text-[#4a6a78] text-[0.78rem] sm:text-[0.8rem] font-semibold mt-4 flex items-start gap-1.5">
            <span>📌</span>
            <span>
              Don&#39;t see your area?{' '}
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#C43D24] hover:underline font-black">
                Message us on WhatsApp
              </a>{' '}
              and we&#39;ll confirm availability.
            </span>
          </p>
        </section>

        {/* ══════════════════════ SUBJECTS WE TEACH ══════════════════════ */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
            <div>
              <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                <span>📚</span>
                Subjects We Teach in {city}
              </h2>
              <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
                Expert tutoring across all major subjects and exam boards
              </p>
            </div>
            <Link href="/tutors" className="text-[0.7rem] font-bold text-[#2c7d70] hover:text-[#2d7a6e] underline whitespace-nowrap">
              View all subjects →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {SUBJECTS.map((subject) => (
              <Link key={subject.name} href={`/tutors?subject=${encodeURIComponent(subject.name)}&city=${encodeURIComponent(city)}`}
                className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-white text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] transition-all no-underline">
                <span className="text-base sm:text-lg flex-shrink-0">{subject.icon}</span>
                <span className="group-hover:text-[#2c7d70] transition-colors truncate">{subject.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════ POPULAR SUBJECTS ══════════════════════ */}
        {/* ORGANIZED WITH CATEGORIES — shows for Islamabad & Rawalpindi */}
        {SUBJECT_PAGE_CITIES.includes(city) && (
          <section className="bg-white rounded-2xl border-2 border-[#E8C86A] p-5 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
              <div>
                <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center gap-2">
                  <span>🎯</span>
                  Popular Subjects in {city}
                </h2>
                <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
                  Dedicated tutoring pages for the most sought-after subjects
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* ─── ACADEMIC SUBJECTS ─── */}
              <div>
                <p className="text-[0.7rem] font-black text-[#2c7d70] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span>📚</span> Academic Subjects
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {[
                    // ─── Islamabad Subjects ───
                    ...(city === 'Islamabad' ? [
                      { name: 'O Level Tutors', href: `/o-level-tutor-${city.toLowerCase()}`, icon: '📚' },
                      { name: 'A Level Tutors', href: `/a-level-tutor-${city.toLowerCase()}`, icon: '🎯' },
                      { name: 'IELTS Tutors', href: `/ielts-tutor-${city.toLowerCase()}`, icon: '🎓' },
                      { name: 'MDCAT Tutors', href: `/mdcat-tutor-${city.toLowerCase()}`, icon: '🩺' },
                      { name: 'Biology Tutors', href: `/biology-tutor-${city.toLowerCase()}`, icon: '🧬' },
                      { name: 'Chemistry Tutors', href: `/chemistry-tutor-${city.toLowerCase()}`, icon: '🧪' },
                      { name: 'Physics Tutors', href: `/physics-tutor-${city.toLowerCase()}`, icon: '⚡' },
                      { name: 'Mathematics Tutors', href: `/math-tutor-${city.toLowerCase()}`, icon: '📐' },
                      { name: 'Computer Science Tutors', href: `/computer-science-tutor-${city.toLowerCase()}`, icon: '💻' },
                      { name: 'English Tutors', href: `/english-tutor-${city.toLowerCase()}`, icon: '📝' },
                      { name: 'Quran Tutors', href: `/quran-tutor-${city.toLowerCase()}`, icon: '🕌' },
                      { name: 'Urdu Tutors', href: `/urdu-tutor-${city.toLowerCase()}`, icon: '🖋️' },
                      { name: 'Pakistan Studies Tutors', href: `/pakistan-studies-tutor-${city.toLowerCase()}`, icon: '🇵🇰' },
                      { name: 'Islamic Studies Tutors', href: `/islamic-studies-tutor-${city.toLowerCase()}`, icon: '☪️' },
                      { name: 'Accounting Tutors', href: `/accounting-tutor-${city.toLowerCase()}`, icon: '📊' },
                      { name: 'Economics Tutors', href: `/economics-tutor-${city.toLowerCase()}`, icon: '📈' },
                    ] : []),
                    // ─── Rawalpindi Subjects (ALL 20) ───
                    ...(city === 'Rawalpindi' ? [
                      // ─── Core Subjects ───
                      { name: 'Home Math Tutors', href: `/home-math-tutor-${city.toLowerCase()}`, icon: '📐' },
                      { name: 'Home Physics Tutors', href: `/home-physics-tutor-${city.toLowerCase()}`, icon: '⚡' },
                      { name: 'Home Chemistry Tutors', href: `/home-chemistry-tutor-${city.toLowerCase()}`, icon: '🧪' },
                      { name: 'Home Biology Tutors', href: `/home-biology-tutor-${city.toLowerCase()}`, icon: '🧬' },
                      { name: 'Home English Tutors', href: `/home-english-tutor-${city.toLowerCase()}`, icon: '📝' },
                      // ─── Cambridge & Exam Subjects ───
                      { name: 'Home O Level Tutors', href: `/home-o-level-tutor-${city.toLowerCase()}`, icon: '📚' },
                      { name: 'Home A Level Tutors', href: `/home-a-level-tutor-${city.toLowerCase()}`, icon: '🎯' },
                      { name: 'Home IELTS Tutors', href: `/home-ielts-tutor-${city.toLowerCase()}`, icon: '🎓' },
                      { name: 'Home MDCAT Tutors', href: `/home-mdcat-tutor-${city.toLowerCase()}`, icon: '🩺' },
                      // ─── Humanities & Social Sciences ───
                      { name: 'Home Pakistan Studies Tutors', href: `/home-pakistan-studies-tutor-${city.toLowerCase()}`, icon: '🇵🇰' },
                      { name: 'Home Islamic Studies Tutors', href: `/home-islamic-studies-tutor-${city.toLowerCase()}`, icon: '☪️' },
                      { name: 'Home Geography Tutors', href: `/home-geography-tutor-${city.toLowerCase()}`, icon: '🌍' },
                      { name: 'Home Psychology Tutors', href: `/home-psychology-tutor-${city.toLowerCase()}`, icon: '🧠' },
                      { name: 'Home Sociology Tutors', href: `/home-sociology-tutor-${city.toLowerCase()}`, icon: '👥' },
                      { name: 'Home Statistics Tutors', href: `/home-statistics-tutor-${city.toLowerCase()}`, icon: '📊' },
                      // ─── Additional Subjects ───
                      { name: 'Home Computer Science Tutors', href: `/home-computer-science-tutor-${city.toLowerCase()}`, icon: '💻' },
                      { name: 'Home Urdu Tutors', href: `/home-urdu-tutor-${city.toLowerCase()}`, icon: '🖋️' },
                      { name: 'Home Quran Tutors', href: `/home-quran-tutor-${city.toLowerCase()}`, icon: '🕌' },
                      { name: 'Home Accounting Tutors', href: `/home-accounting-tutor-${city.toLowerCase()}`, icon: '📊' },
                      { name: 'Home Economics Tutors', href: `/home-economics-tutor-${city.toLowerCase()}`, icon: '📈' },
                    ] : []),
                  ].map((item) => (
                    <Link key={item.name} href={item.href}
                      className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FFFDF7] text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#3A9E8F] hover:bg-[#FFFDF7] transition-all no-underline">
                      <span className="text-base sm:text-lg flex-shrink-0">{item.icon}</span>
                      <span className="group-hover:text-[#2c7d70] transition-colors">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* ─── COMPETITIVE EXAMS ─── */}
              <div className="pt-4 border-t-2 border-dashed border-[#E8C86A]/40">
                <p className="text-[0.7rem] font-black text-[#C43D24] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span>🏛️</span> Competitive Exams
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {[
                    { name: 'CSS Tutors', href: '/css-tutor-pakistan', icon: '🏛️' },
                    { name: 'PMS Tutors', href: '/pms-tutor-pakistan', icon: '📋' },
                  ].map((item) => (
                    <Link key={item.name} href={item.href}
                      className="group flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#FFFDF7] text-[#2E4F5E] text-[0.76rem] sm:text-[0.82rem] font-bold rounded-xl border-2 border-[#D4D0C5] hover:border-[#E05C42] hover:bg-[#FFFDF7] transition-all no-underline">
                      <span className="text-base sm:text-lg flex-shrink-0">{item.icon}</span>
                      <span className="group-hover:text-[#C43D24] transition-colors">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[#4a6a78] text-[0.75rem] font-semibold mt-5 text-center">
              🎓 These pages are designed to help you find specialised tutors for each subject in {city}
            </p>
          </section>
        )}

        {/* ══════════════════════ WHY CHOOSE US ══════════════════════ */}
        <section className="bg-[#2f8074] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] sm:shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-9 text-white">
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
              <span>⭐</span>
              Why Families in {city} Trust Us
            </h2>
            <p className="text-white text-[0.85rem] sm:text-[0.9rem] font-semibold mt-1">
              What makes Avenfield Tutors the preferred choice for home tuition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {BENEFITS.map((item) => (
              <div key={item.title} className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#E8C86A] text-[#2E4F5E] flex items-center justify-center text-base sm:text-lg font-black flex-shrink-0 shadow-[2px_2px_0_0_#1a3240]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-[0.9rem] sm:text-[0.95rem]">{item.title}</h3>
                  <p className="text-white text-[0.78rem] sm:text-[0.8rem] font-semibold mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
        <section className="bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#2E4F5E] sm:shadow-[6px_6px_0_0_#2E4F5E] p-5 sm:p-9 text-[#2E4F5E]">
          <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-8">
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] flex items-center justify-center gap-2">
              <span>🚀</span>
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold mt-1">
              Find your perfect home tutor in {city} without the hassle
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { step: '01', title: 'Share Your Requirements', desc: `Message us on WhatsApp with your subject, level, and location in ${city}` },
              { step: '02', title: 'Get Matched Instantly', desc: 'We connect you with verified tutors who match your specific needs' },
              { step: '03', title: 'Start Learning Today', desc: 'Schedule a free consultation and begin your tutoring sessions' },
            ].map((item) => (
              <div key={item.step} className="text-center p-4 sm:p-5 bg-white rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 bg-[#2E4F5E] text-white font-black rounded-full flex items-center justify-center text-lg sm:text-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#1a3240]">
                  {item.step}
                </div>
                <h3 className="font-black text-[0.92rem] sm:text-[1rem] mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-[0.78rem] sm:text-[0.82rem] font-semibold text-[#4a6a78] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ FAQ ══════════════════════ */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-black text-[1.2rem] sm:text-[1.4rem] text-[#2E4F5E] flex items-center justify-center gap-2">
              <span>❓</span>
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a6a78] text-[0.85rem] sm:text-[0.9rem] font-semibold">
              Everything you need to know about home tutoring in {city}
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqList.map((faq, i) => (
              <details key={i} className="group bg-white border-2 border-[#D4D0C5] rounded-xl overflow-hidden hover:border-[#3A9E8F] transition-colors">
                <summary className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 cursor-pointer list-none hover:bg-[#FFFDF7] transition-colors">
                  <span className="text-[0.82rem] sm:text-[0.88rem] font-black text-[#2E4F5E]">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8C86A] flex items-center justify-center text-[#2E4F5E] font-black text-sm transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-1">
                  <p className="text-[#4a6a78] text-[0.82rem] sm:text-[0.88rem] leading-relaxed font-semibold" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════════════ SEO CONTENT BLOCK ══════════════════════ */}
        <section className="bg-[#FFFDF7] border-2 border-[#E8C86A] rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0_0_#E8C86A]">
          <h2 className="font-black text-[1.1rem] sm:text-[1.3rem] text-[#2E4F5E] mb-4 flex items-center gap-2">
            <span>📖</span>
            Home Tuition in {city} – Expert Tutors for Every Subject
          </h2>
          <div className="space-y-4 text-[#4a6a78] text-[0.85rem] sm:text-[0.95rem] leading-[1.75] font-semibold">
            <p>
              <strong className="text-[#2E4F5E]">Why choose a home tutor in {city}?</strong> Personalised, one-on-one attention is the most effective way to improve academic performance. Our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">home tutors in {city}</Link> are carefully selected to match your child's learning style and academic goals. Whether preparing for <Link href={`/tutors?subject=O%20Level&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">O Level</Link> exams or aiming for top scores in <Link href={`/tutors?subject=A%20Level&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">A Level</Link>, our tutors bring subject expertise and real-world teaching experience.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Subjects we cover:</strong> From <Link href={`/tutors?subject=Mathematics&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Mathematics</Link> and <Link href={`/tutors?subject=Physics&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Physics</Link> to <Link href={`/tutors?subject=Chemistry&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Chemistry</Link>, <Link href={`/tutors?subject=Biology&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Biology</Link>, <Link href={`/tutors?subject=English&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">English</Link>, <Link href={`/tutors?subject=Computer%20Science&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Computer Science</Link>, and <Link href={`/tutors?subject=Quran%20%26%20Arabic&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">Quran &amp; Arabic</Link>, we have expert tutors for every subject. We also specialise in exam preparation for <Link href={`/tutors?subject=IELTS&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">IELTS</Link>, <Link href={`/tutors?subject=MDCAT&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">MDCAT</Link>, <Link href={`/tutors?subject=CSS%20%2F%20PMS&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">CSS</Link>, and <Link href={`/tutors?subject=PPSC%20%2F%20FPSC&city=${encodeURIComponent(city)}`} className="text-[#C43D24] hover:underline font-black">PPSC</Link>.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Why Avenfield Tutors?</strong> Unlike other platforms, we manually verify every tutor before they join. Our <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tutors</Link> and home tutors are experienced, qualified, and passionate about teaching. With <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tutoring</Link> available worldwide, we are the trusted choice for families in {city} and beyond.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Home tuition vs. online tutoring:</strong> We offer both! If you prefer in-person lessons, our <Link href={`/home-tutor-${city.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">home tutors in {city}</Link> will travel to your location. If you need flexibility, our <Link href="/tutors" className="text-[#C43D24] hover:underline font-black">online tuition</Link> connects you with expert tutors from anywhere. Many students combine both modes for maximum convenience.
            </p>
            <p>
              <strong className="text-[#2E4F5E]">Ready to get started?</strong> Simply <a href={whatsappURL} target="_blank" rel="noopener noreferrer" className="text-[#C43D24] hover:underline font-black">message us on WhatsApp</a> with your subject and level. We&#39;ll match you with a verified tutor in {city} within 24 hours. No long forms, no waiting weeks – start learning today with Avenfield Tutors.
            </p>
            {nearbyCity && (
              <p className="text-[0.78rem] sm:text-[0.8rem] text-[#4a6a78]">
                <span>📌 </span>
                Also serving <Link href={`/home-tutor-${nearbyCity.toLowerCase()}`} className="text-[#C43D24] hover:underline font-black">{nearbyCity}</Link> and other cities across Pakistan.
              </p>
            )}
          </div>
        </section>

        {/* ══════════════════════ FINAL CTA ══════════════════════ */}
        <section className="bg-gradient-to-br from-[#2E4F5E] to-[#1a3240] rounded-2xl border-2 border-[#2E4F5E] shadow-[5px_5px_0_0_#1a3240] sm:shadow-[6px_6px_0_0_#1a3240] p-6 sm:p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8C86A]/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E8C86A] animate-pulse flex-shrink-0" />
              <span className="text-[0.58rem] sm:text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#E8C86A]">
                Book your free consultation
              </span>
            </div>

            <h2 className="text-white font-black text-[1.3rem] sm:text-[1.8rem] mb-3">
              Ready to Find Your Perfect Home Tutor in {city}?
            </h2>

            <p className="text-[#a8c5d0] text-[0.88rem] sm:text-[0.95rem] font-semibold mb-6">
              Message us on WhatsApp with your subject and level. We&#39;ll match you with a verified tutor within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-[#E8C86A] hover:bg-[#d4b85a] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_4px_0_0_#1a3240] hover:shadow-[0_2px_0_0_#1a3240] hover:translate-y-[2px] active:translate-y-[2px] transition-all">
                <span className="text-xl">💬</span>
                Contact Us on WhatsApp
              </a>
              <Link href="/tutors"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 bg-white hover:bg-[#FFFDF7] text-[#2E4F5E] font-black text-[0.85rem] md:text-[0.9rem] rounded-xl border-2 border-[#2E4F5E] shadow-[0_3px_0_0_#2E4F5E] hover:shadow-[0_1px_0_0_#2E4F5E] hover:translate-y-[2px] active:translate-y-[2px] transition-all no-underline">
                Browse All Tutors
              </Link>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 text-[0.68rem] sm:text-[0.7rem] text-[#a8c5d0] font-semibold">
              <span>📱 WhatsApp: +92 309 5154253</span>
              <span className="hidden sm:inline">|</span>
              <span>✉️ avenfieldtutors@gmail.com</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}