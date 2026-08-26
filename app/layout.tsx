

// import './globals.css'
// import type { Metadata } from 'next'
// import { Nunito } from 'next/font/google'
// import Navbar from '@/components/shared/Navbar'
// import Footer from '@/components/shared/Footer'
// import StructuredData from '@/components/shared/StructuredData'
// import WhatsAppButton from '@/components/shared/WhatsAppButton'

// // Self-hosted via next/font — eliminates the render-blocking request to
// // fonts.googleapis.com (was costing ~750ms + 1,590ms of render-blocking
// // time per PageSpeed Insights). next/font keeps the family registered as
// // literally 'Nunito', so it's a drop-in replacement for every existing
// // style={{ fontFamily: "'Nunito', sans-serif" }} in the codebase — nothing
// // else needs to change.
// const nunito = Nunito({
//   subsets: ['latin'],
//   weight: ['400', '600', '700', '800', '900'],
//   display: 'swap',
//   variable: '--font-nunito',
// })

// export const metadata: Metadata = {
//   metadataBase: new URL('https://avenfieldtutors.com'),
//   title: {
//     default: 'Best Online & Home Tutors in Pakistan | Avenfield Tutors',
//     template: '%s | Avenfield Tutors',
//   },
//   description:
//     'Avenfield Tutors connects students with verified, expert tutors for online and home sessions across Pakistan, UAE & UK. Browse tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
//   keywords: [
//     'Avenfield Tutors', 'online tutor Pakistan', 'home tutor Lahore',
//     'home tutor Islamabad', 'home tutor Karachi', 'private tutor Pakistan',
//     'O Level tutor', 'A Level tutor', 'IELTS preparation', 'MDCAT tutor',
//     'CSS PMS coaching', 'online tutoring UAE', 'online tutoring UK',
//   ],
//   openGraph: {
//     type: 'website',
//     locale: 'en_PK',
//     url: 'https://avenfieldtutors.com',
//     siteName: 'Avenfield Tutors',
//     title: 'Avenfield Tutors — Expert Online & Home Tutoring',
//     description:
//       'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide · Home visits in Pakistan, UAE & UK.',
//     images: [{ url: '/avenfieldtutors-newlogo.png', width: 1200, height: 630, alt: 'Avenfield Tutors' }],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Avenfield Tutors — Expert Online & Home Tutoring',
//     description:
//       'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
//     images: ['/avenfieldtutors-newlogo.png'],
//   },
//   robots: { index: true, follow: true },
//   icons: {
//     icon: [
//       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
//       { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
//     ],
//     apple: '/apple-touch-icon.png',
//   },
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={nunito.variable}>
//       <body className={`${nunito.className} min-h-screen flex flex-col bg-[#FFFDF7]`}>
//          <StructuredData />
//         <Navbar />
//         <main className="flex-1">{children}</main>
//         <Footer />
//         <WhatsAppButton />
//       </body>
//     </html>
//   )
// }






import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import StructuredData from '@/components/shared/StructuredData'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

// Self-hosted via next/font — eliminates the render-blocking request to
// fonts.googleapis.com (was costing ~750ms + 1,590ms of render-blocking
// time per PageSpeed Insights). next/font keeps the family registered as
// literally 'Nunito', so it's a drop-in replacement for every existing
// style={{ fontFamily: "'Nunito', sans-serif" }} in the codebase — nothing
// else needs to change.
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://avenfieldtutors.com'),
  title: {
    default: 'Best Online & Home Tutors in Pakistan | Avenfield Tutors',
    template: '%s | Avenfield Tutors',
  },
  description:
    'Avenfield Tutors connects students with verified, expert tutors for online and home sessions across Pakistan, UAE & UK. Browse tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
  keywords: [
    'Avenfield Tutors', 'online tutor Pakistan', 'home tutor Lahore',
    'home tutor Islamabad', 'home tutor Karachi', 'private tutor Pakistan',
    'O Level tutor', 'A Level tutor', 'IELTS preparation', 'MDCAT tutor',
    'CSS PMS coaching', 'online tutoring UAE', 'online tutoring UK',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://avenfieldtutors.com',
    siteName: 'Avenfield Tutors',
    title: 'Avenfield Tutors — Expert Online & Home Tutoring',
    description:
      'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects. Online worldwide · Home visits in Pakistan, UAE & UK.',
    images: [{ url: '/avenfieldtutors-newlogo.png', width: 1200, height: 630, alt: 'Avenfield Tutors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avenfield Tutors — Expert Online & Home Tutoring',
    description:
      'Verified tutors for O Level, A Level, IELTS, MDCAT, CSS and 50+ subjects.',
    images: ['/avenfieldtutors-newlogo.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} min-h-screen flex flex-col bg-[#FFFDF7]`}>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3ZVQLFN');
          `}
        </Script>

        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3ZVQLFN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

      </body>
    </html>
  )
}