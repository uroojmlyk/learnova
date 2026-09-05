


 
// 'use client'
 
// import Link from 'next/link'
// import Image from 'next/image'
// import { Fragment, useState, useEffect } from 'react'
// import { createPortal } from 'react-dom'
// import { usePathname } from 'next/navigation'
// import {
//   Home,
//   Search,
//   PenLine,
//   MessageCircle,
//   Sparkles,
//   MapPin,
//   ChevronDown,
//   Menu,
//   X,
// } from 'lucide-react'
 
// // 5 links total, no duplication with the CTA button — keeps desktop clean
// const navLinks = [
//   { href: '/',             label: 'Home' },
//   { href: '/tutors',       label: 'Find a Tutor' },
//   { href: '/blog',         label: 'Blog' },
//   { href: '/contact',      label: 'Contact' },
// ]
 
// // Same links as navLinks, with icons — used by the mobile menu.
// // Icons swapped from emoji to lucide-react SVGs (crisper, consistent across devices/fonts).
// const navIcons = [
//   { href: '/',             label: 'Home',         Icon: Home },
//   { href: '/tutors',       label: 'Find a Tutor',  Icon: Search },
//   { href: '/blog',         label: 'Blog',          Icon: PenLine },
//   { href: '/contact',      label: 'Contact',       Icon: MessageCircle },
// ]
 
// // Rendered as a "Services" dropdown on desktop, and as collapsible sub-items
// // under Services on mobile — keeps the local SEO pages one click from
// // every page on the site instead of only living in the footer.
// const cityLinks = [
//   { href: '/home-tutor-islamabad',  label: 'Home Tutor in Islamabad' },
//   { href: '/home-tutor-rawalpindi', label: 'Home Tutor in Rawalpindi' },
//   { href: '/home-tutor-lahore',     label: 'Home Tutor in Lahore' },
// ]
 
// const cityAccentBg = ['bg-[#3A9E8F]', 'bg-[#E8934A]', 'bg-[#c94e37]']
 
// export default function Navbar() {
//   const [open, setOpen]         = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
//   const [mounted, setMounted]   = useState(false)
//   const pathname                = usePathname()
 
//   // Portal target only exists client-side; also avoids SSR/hydration mismatch
//   useEffect(() => { setMounted(true) }, [])
 
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 10)
//     window.addEventListener('scroll', fn, { passive: true })
//     return () => window.removeEventListener('scroll', fn)
//   }, [])
 
//   useEffect(() => {
//     setOpen(false)
//     setMobileServicesOpen(false)
//   }, [pathname])
 
//   // Lock background scroll while the mobile drawer is open
//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [open])
 
//   // Admin pages get no public navbar (and /admin is disallowed in robots.ts,
//   // so this section stays out of Google entirely)
//   const isAdmin = pathname.startsWith('/admin')
//   if (isAdmin) return null
 
//   const isServicesActive = pathname === '/services' || pathname.startsWith('/home-tutor-')
 
//   return (
//     <header
//       role="banner"
//       className={`sticky top-0 z-50 transition-shadow duration-300 border-b-2 border-[#2E4F5E] ${
//         scrolled
//           ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
//           : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
//       }`}
//       style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[66px] flex items-center justify-between gap-4">
 
//         {/* ── Logo ── transparent PNG, no white box against any background */}
//         <Link
//           href="/"
//           className="flex items-center gap-2.5 flex-shrink-0 group"
//           aria-label="Avenfield Tutors – Expert Online & Home Tutoring"
//         >
//           <div className="relative flex-shrink-0 h-[42px] sm:h-[50px] w-auto">
//             <Image
//               src="/avenfieldtutors-newlogo.png"
//               alt="Avenfield Tutors"
//               width={200}
//               height={60}
//               sizes="(max-width: 640px) 150px, 200px"
//               className="h-full w-auto object-contain"
//               quality={60}
//               priority
//             />
//           </div>
//         </Link>
 
//         {/* ── Desktop nav ── */}
//         <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
//           <Link
//             href="/"
//             aria-current={pathname === '/' ? 'page' : undefined}
//             className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
//               pathname === '/'
//                 ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                 : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//             }`}
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//           >
//             Home
//           </Link>
 
//           {/* Services dropdown — pure CSS group-hover, no JS state, no re-render lag on hover */}
//           <div className="relative group">
//             <Link
//               href="/services"
//               aria-current={isServicesActive ? 'page' : undefined}
//               className={`flex items-center gap-1 px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
//                 isServicesActive
//                   ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//               }`}
//               style={{ fontFamily: "'Nunito', sans-serif" }}
//             >
//               Services
//               <ChevronDown className="w-3.5 h-3.5 transition-transform duration-150 group-hover:rotate-180" strokeWidth={3} />
//             </Link>
 
//             <div className="absolute top-full left-0 pt-2 opacity-0 invisible -translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
//               <div className="bg-white border-2 border-[#2E4F5E] rounded-2xl shadow-[4px_4px_0_0_#2E4F5E] p-2.5 min-w-[260px] overflow-hidden">
//                 <p className="px-2.5 pt-1 pb-2 text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#a8c5d0]">
//                   Local Home Tutoring
//                 </p>
//                 <Link
//                   href="/services"
//                   className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-[#FFFDF7] transition-colors mb-1 group/item"
//                 >
//                   <span className="w-8 h-8 rounded-lg bg-[#2E4F5E] text-[#E8C86A] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
//                     <Sparkles className="w-4 h-4" strokeWidth={2.5} />
//                   </span>
//                   <span className="text-[0.82rem] font-black text-[#2E4F5E]">All Services</span>
//                 </Link>
//                 <div className="h-px bg-[#D4D0C5] my-1.5 mx-1" />
//                 {cityLinks.map((l, i) => (
//                   <Link
//                     key={l.href}
//                     href={l.href}
//                     className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-colors group/item"
//                   >
//                     <span className={`w-8 h-8 rounded-lg ${cityAccentBg[i % 3]} text-white flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
//                       <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
//                     </span>
//                     <span className="text-[0.82rem] font-bold text-[#2E4F5E] whitespace-nowrap">{l.label}</span>
//                     <ChevronDown className="w-3.5 h-3.5 text-[#D4D0C5] ml-auto opacity-0 group-hover/item:opacity-100 -rotate-90 group-hover/item:translate-x-0.5 -translate-x-1 transition-all flex-shrink-0" strokeWidth={3} />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
 
//           {navLinks.slice(1).map((l) => (
//             <Link
//               key={l.href}
//               href={l.href}
//               aria-current={pathname === l.href ? 'page' : undefined}
//               className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
//                 pathname === l.href
//                   ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
//               }`}
//               style={{ fontFamily: "'Nunito', sans-serif" }}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </nav>
 
//         {/* ── Desktop right — single CTA, no duplication ── */}
//         <div className="hidden md:flex items-center">
//           <Link
//             href="/become-tutor"
//             className="px-5 py-2.5 bg-[#c94e37] hover:bg-[#a83c2a] text-white text-[0.85rem] font-black rounded-xl transition-colors duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0 whitespace-nowrap"
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//             aria-label="Join Avenfield Tutors as a tutor"
//           >
//             Join as Tutor ✨
//           </Link>
//         </div>
 
//         {/* ── Mobile right ── */}
//         <div className="md:hidden flex items-center gap-2">
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
//             aria-expanded={open}
//             aria-controls="mobile-nav"
//             className="p-2 rounded-xl bg-[#2E4F5E] border-2 border-[#2E4F5E] text-white shadow-[0_2px_0_0_#1a3240] transition-colors"
//           >
//             {open ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
//           </button>
//         </div>
//       </div>
 
//       {/* ── Mobile drawer ──
//           Rendered through a portal straight into document.body. Fixed-position
//           elements are only fixed relative to the VIEWPORT if no ancestor has a
//           transform/filter/perspective applied — but page-transition wrappers or
//           smooth-scroll libraries commonly add one, which silently turns "fixed"
//           into "absolute relative to that ancestor" and clips the drawer short
//           (the "half-cut" bug). The portal sidesteps that entirely. */}
//       {mounted && createPortal(
//         <>
//           <div
//             className={`md:hidden fixed inset-0 top-[66px] z-[100] bg-black/40 transition-opacity duration-300 ${
//               open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
//             }`}
//             onClick={() => setOpen(false)}
//             aria-hidden="true"
//           />
 
//           <nav
//             id="mobile-nav"
//             className={`md:hidden fixed top-[66px] right-0 bottom-0 z-[100] w-[82%] max-w-[340px]
//                         bg-[#FFFDF7] border-l-2 border-[#2E4F5E] shadow-[-4px_0_0_0_rgba(46,79,94,0.15)]
//                         overflow-y-auto px-3 py-4 flex flex-col gap-1.5 pb-6
//                         transition-transform duration-300 ease-out
//                         ${open ? 'translate-x-0' : 'translate-x-full'}`}
//             aria-label="Mobile navigation"
//             style={{ fontFamily: "'Nunito', sans-serif" }}
//           >
//             {navIcons.map(({ href, label, Icon }, i) => (
//           <Fragment key={href}>
//             <Link
//               href={href}
//               aria-current={pathname === href ? 'page' : undefined}
//               className={`flex items-center gap-3 px-3 py-3 text-[0.9rem] font-black rounded-2xl transition-colors border-2 ${
//                 pathname === href
//                   ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                   : 'text-[#2E4F5E] bg-white border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
//               }`}
//             >
//               <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
//                 pathname === href ? 'bg-white/15' : 'bg-[#FFFDF7]'
//               }`} aria-hidden="true">
//                 <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
//               </span>
//               {label}
//             </Link>
 
//             {/* Services with collapsible sub-items — matches the desktop dropdown styling */}
//             {i === 0 && (
//               <div className="flex flex-col gap-1.5">
//                 <button
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   className={`flex items-center gap-3 px-3 py-3 text-[0.9rem] font-black rounded-2xl transition-colors border-2 ${
//                     isServicesActive
//                       ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
//                       : 'text-[#2E4F5E] bg-white border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
//                   }`}
//                   aria-expanded={mobileServicesOpen}
//                 >
//                   <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
//                     isServicesActive ? 'bg-white/15' : 'bg-[#FFFDF7]'
//                   }`} aria-hidden="true">
//                     <Sparkles className="w-[18px] h-[18px]" strokeWidth={2.5} />
//                   </span>
//                   <span className="flex-1 text-left">Services</span>
//                   <ChevronDown
//                     className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${mobileServicesOpen ? 'rotate-180' : ''}`}
//                     strokeWidth={3}
//                   />
//                 </button>
 
//                 <div
//                   className={`overflow-hidden transition-all duration-200 ease-in-out ${
//                     mobileServicesOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
//                   }`}
//                 >
//                   <div className="ml-3 pl-3 py-1 flex flex-col gap-1.5 border-l-2 border-dashed border-[#E8C86A]">
//                     <Link
//                       href="/services"
//                       className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border-2 border-[#D4D0C5] hover:border-[#2E4F5E] transition-colors"
//                     >
//                       <span className="w-7 h-7 rounded-lg bg-[#2E4F5E] text-[#E8C86A] flex items-center justify-center flex-shrink-0">
//                         <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
//                       </span>
//                       <span className="text-[0.8rem] font-black text-[#2E4F5E]">All Services</span>
//                     </Link>
//                     {cityLinks.map((l, ci) => (
//                       <Link
//                         key={l.href}
//                         href={l.href}
//                         aria-current={pathname === l.href ? 'page' : undefined}
//                         className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-colors ${
//                           pathname === l.href
//                             ? 'text-white bg-[#2E4F5E] border-[#2E4F5E]'
//                             : 'bg-white border-[#D4D0C5] hover:border-[#2E4F5E] text-[#2E4F5E]'
//                         }`}
//                       >
//                         <span className={`w-7 h-7 rounded-lg ${cityAccentBg[ci % 3]} text-white flex items-center justify-center flex-shrink-0`}>
//                           <MapPin className="w-3 h-3" strokeWidth={2.5} />
//                         </span>
//                         <span className="text-[0.8rem] font-bold whitespace-nowrap">{l.label}</span>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </Fragment>
//         ))}
 
//             <Link
//               href="/become-tutor"
//               className="mt-2 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#c94e37] hover:bg-[#a83c2a] text-white text-[0.9rem] font-black rounded-2xl text-center shadow-[0_3px_0_0_#a83c2a] border-2 border-[#a83c2a] transition-colors"
//               aria-label="Apply to become a tutor at Avenfield Tutors"
//             >
//               Join as Tutor ✨
//             </Link>
//           </nav>
//         </>,
//         document.body
//       )}
//     </header>
//   )
// }




 
'use client'
 
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import {
  Home,
  Search,
  PenLine,
  MessageCircle,
  Sparkles,
  MapPin,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'
 
// 5 links total, no duplication with the CTA button — keeps desktop clean
const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/tutors',       label: 'Find a Tutor' },
  { href: '/blog',         label: 'Blog' },
  { href: '/contact',      label: 'Contact' },
]
 
// Same links as navLinks, with icons — used by the mobile menu.
// Icons swapped from emoji to lucide-react SVGs (crisper, consistent across devices/fonts).
const navIcons = [
  { href: '/',             label: 'Home',         Icon: Home },
  { href: '/tutors',       label: 'Find a Tutor',  Icon: Search },
  { href: '/blog',         label: 'Blog',          Icon: PenLine },
  { href: '/contact',      label: 'Contact',       Icon: MessageCircle },
]
 
// Rendered as a "Services" dropdown on desktop, and as collapsible sub-items
// under Services on mobile — keeps the local SEO pages one click from
// every page on the site instead of only living in the footer.
const cityLinks = [
  { href: '/home-tutor-islamabad',  label: 'Home Tutor in Islamabad' },
  { href: '/home-tutor-rawalpindi', label: 'Home Tutor in Rawalpindi' },
  { href: '/home-tutor-lahore',     label: 'Home Tutor in Lahore' },
]
 
const cityAccentBg = ['bg-[#3A9E8F]', 'bg-[#E8934A]', 'bg-[#c94e37]']
 
export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mounted, setMounted]   = useState(false)
  const pathname                = usePathname()
 
  // Portal target only exists client-side; also avoids SSR/hydration mismatch
  useEffect(() => { setMounted(true) }, [])
 
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
 
  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])
 
  // Lock background scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
 
  // Admin pages get no public navbar (and /admin is disallowed in robots.ts,
  // so this section stays out of Google entirely)
  const isAdmin = pathname.startsWith('/admin')
  if (isAdmin) return null
 
  const isServicesActive = pathname === '/services' || pathname.startsWith('/home-tutor-')
 
  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-shadow duration-300 border-b-2 border-[#2E4F5E] ${
        scrolled
          ? 'bg-[#FFFDF7]/97 backdrop-blur-md shadow-[0_4px_0_0_#2E4F5E]'
          : 'bg-[#FFFDF7]/95 backdrop-blur-sm'
      }`}
      style={{ fontFamily: "'Nunito', 'Fredoka One', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[66px] flex items-center justify-between gap-4">
 
        {/* ── Logo ── transparent PNG, no white box against any background */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0 group"
          aria-label="Avenfield Tutors – Expert Online & Home Tutoring"
        >
          <div className="relative flex-shrink-0 h-[42px] sm:h-[50px] w-auto">
            <Image
              src="/avenfieldtutors-newlogo.png"
              alt="Avenfield Tutors"
              width={200}
              height={60}
              sizes="(max-width: 640px) 160px, 250px"
              className="h-full w-auto object-contain"
              quality={60}
              priority
            />
          </div>
        </Link>
 
        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
              pathname === '/'
                ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
            }`}
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Home
          </Link>
 
          {/* Services dropdown — pure CSS group-hover, no JS state, no re-render lag on hover */}
          <div className="relative group">
            <Link
              href="/services"
              aria-current={isServicesActive ? 'page' : undefined}
              className={`flex items-center gap-1 px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
                isServicesActive
                  ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-150 group-hover:rotate-180" strokeWidth={3} />
            </Link>
 
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible -translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="bg-white border-2 border-[#2E4F5E] rounded-2xl shadow-[4px_4px_0_0_#2E4F5E] p-2.5 min-w-[260px] overflow-hidden">
                <p className="px-2.5 pt-1 pb-2 text-[0.6rem] font-black uppercase tracking-[0.15em] text-[#a8c5d0]">
                  Local Home Tutoring
                </p>
                <Link
                  href="/services"
                  className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-[#FFFDF7] transition-colors mb-1 group/item"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#2E4F5E] text-[#E8C86A] flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-[0.82rem] font-black text-[#2E4F5E]">All Services</span>
                </Link>
                <div className="h-px bg-[#D4D0C5] my-1.5 mx-1" />
                {cityLinks.map((l, i) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-colors group/item"
                  >
                    <span className={`w-8 h-8 rounded-lg ${cityAccentBg[i % 3]} text-white flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                      <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-[0.82rem] font-bold text-[#2E4F5E] whitespace-nowrap">{l.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#D4D0C5] ml-auto opacity-0 group-hover/item:opacity-100 -rotate-90 group-hover/item:translate-x-0.5 -translate-x-1 transition-all flex-shrink-0" strokeWidth={3} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
 
          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className={`px-3.5 py-2 text-[0.85rem] font-bold rounded-xl transition-colors duration-150 whitespace-nowrap ${
                pathname === l.href
                  ? 'text-[#FFFDF7] bg-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] hover:text-[#FFFDF7] hover:bg-[#3A9E8F] hover:shadow-[0_2px_0_0_#2a7a6e]'
              }`}
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
 
        {/* ── Desktop right — single CTA, no duplication ── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/become-tutor"
            className="px-5 py-2.5 bg-[#c94e37] hover:bg-[#a83c2a] text-white text-[0.85rem] font-black rounded-xl transition-colors duration-200 shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] border-0 whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
            aria-label="Join Avenfield Tutors as a tutor"
          >
            Join as Tutor ✨
          </Link>
        </div>
 
        {/* ── Mobile right ── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="p-2 rounded-xl bg-[#2E4F5E] border-2 border-[#2E4F5E] text-white shadow-[0_2px_0_0_#1a3240] transition-colors"
          >
            {open ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
          </button>
        </div>
      </div>
 
      {/* ── Mobile drawer ──
          Rendered through a portal straight into document.body. Fixed-position
          elements are only fixed relative to the VIEWPORT if no ancestor has a
          transform/filter/perspective applied — but page-transition wrappers or
          smooth-scroll libraries commonly add one, which silently turns "fixed"
          into "absolute relative to that ancestor" and clips the drawer short
          (the "half-cut" bug). The portal sidesteps that entirely. */}
      {mounted && createPortal(
        <>
          <div
            className={`md:hidden fixed inset-0 top-[66px] z-[100] bg-black/40 transition-opacity duration-300 ${
              open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
 
          <nav
            id="mobile-nav"
            className={`md:hidden fixed top-[66px] right-0 bottom-0 z-[100] w-[82%] max-w-[340px]
                        bg-[#FFFDF7] border-l-2 border-[#2E4F5E] shadow-[-4px_0_0_0_rgba(46,79,94,0.15)]
                        overflow-y-auto px-3 py-4 flex flex-col gap-1.5 pb-6
                        transition-transform duration-300 ease-out
                        ${open ? 'translate-x-0' : 'translate-x-full'}`}
            aria-label="Mobile navigation"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            {navIcons.map(({ href, label, Icon }, i) => (
          <Fragment key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={`flex items-center gap-3 px-3 py-3 text-[0.9rem] font-black rounded-2xl transition-colors border-2 ${
                pathname === href
                  ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                  : 'text-[#2E4F5E] bg-white border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
              }`}
            >
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                pathname === href ? 'bg-white/15' : 'bg-[#FFFDF7]'
              }`} aria-hidden="true">
                <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </span>
              {label}
            </Link>
 
            {/* Services with collapsible sub-items — matches the desktop dropdown styling */}
            {i === 0 && (
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center gap-3 px-3 py-3 text-[0.9rem] font-black rounded-2xl transition-colors border-2 ${
                    isServicesActive
                      ? 'text-white bg-[#2E4F5E] border-[#2E4F5E] shadow-[0_2px_0_0_#1a3240]'
                      : 'text-[#2E4F5E] bg-white border-[#D4D0C5] hover:border-[#E8C86A] hover:bg-[#E8C86A]/15'
                  }`}
                  aria-expanded={mobileServicesOpen}
                >
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isServicesActive ? 'bg-white/15' : 'bg-[#FFFDF7]'
                  }`} aria-hidden="true">
                    <Sparkles className="w-[18px] h-[18px]" strokeWidth={2.5} />
                  </span>
                  <span className="flex-1 text-left">Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    strokeWidth={3}
                  />
                </button>
 
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    mobileServicesOpen ? 'max-h-[280px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="ml-3 pl-3 py-1 flex flex-col gap-1.5 border-l-2 border-dashed border-[#E8C86A]">
                    <Link
                      href="/services"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border-2 border-[#D4D0C5] hover:border-[#2E4F5E] transition-colors"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#2E4F5E] text-[#E8C86A] flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-[0.8rem] font-black text-[#2E4F5E]">All Services</span>
                    </Link>
                    {cityLinks.map((l, ci) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        aria-current={pathname === l.href ? 'page' : undefined}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border-2 transition-colors ${
                          pathname === l.href
                            ? 'text-white bg-[#2E4F5E] border-[#2E4F5E]'
                            : 'bg-white border-[#D4D0C5] hover:border-[#2E4F5E] text-[#2E4F5E]'
                        }`}
                      >
                        <span className={`w-7 h-7 rounded-lg ${cityAccentBg[ci % 3]} text-white flex items-center justify-center flex-shrink-0`}>
                          <MapPin className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                        <span className="text-[0.8rem] font-bold whitespace-nowrap">{l.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ))}
 
            <Link
              href="/become-tutor"
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3.5 bg-[#c94e37] hover:bg-[#a83c2a] text-white text-[0.9rem] font-black rounded-2xl text-center shadow-[0_3px_0_0_#a83c2a] border-2 border-[#a83c2a] transition-colors"
              aria-label="Apply to become a tutor at Avenfield Tutors"
            >
              Join as Tutor ✨
            </Link>
          </nav>
        </>,
        document.body
      )}
    </header>
  )
}
