


// import { NextRequest, NextResponse } from 'next/server'
// import { connectDB } from '@/lib/db'
// import Tutor from '@/lib/models/Tutor'
// // import { buildTutorSlugBase, ensureUniqueSlug } from '@/lib/utils/slug'
// import { buildTutorSlugBase,ensureUniqueSlug } from '@/lib/utils/slug'

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB()
//     const body = await req.json()
//     const { name, subjects, experience, city, country, whatsapp, bio, education, mode } = body

//     if (!name || !subjects?.length || !whatsapp || !bio || !education) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
//     }

//     // Generate the public-facing slug now, at creation, so it's stable and
//     // never needs to change once the profile goes live and gets indexed.
//     const slugBase = buildTutorSlugBase(name, subjects[0], city)
//     const slug = await ensureUniqueSlug(slugBase, Tutor)

//     const tutor = await Tutor.create({
//       name, subjects, experience, city, country,
//       whatsapp, bio, education, mode, slug,
//       status: 'pending',
//     })

//     return NextResponse.json({ success: true, id: tutor._id }, { status: 201 })
//   } catch {
//     return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
//   }
// }








import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import Tutor from '@/lib/models/Tutor'
// import { buildTutorSlugBase, ensureUniqueSlug } from '@/lib/utils/slug'
import { buildTutorSlugBase,ensureUniqueSlug } from '@/lib/utils/slug'

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()
    const { name, subjects, experience, city, country, whatsapp, bio, education, mode, specialNeedsExperience } = body

    if (!name || !subjects?.length || !whatsapp || !bio || !education) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Generate the public-facing slug now, at creation, so it's stable and
    // never needs to change once the profile goes live and gets indexed.
    const slugBase = buildTutorSlugBase(name, subjects[0], city)
    const slug = await ensureUniqueSlug(slugBase, Tutor)

    const tutor = await Tutor.create({
      name, subjects, experience, city, country,
      whatsapp, bio, education, mode, slug,
      specialNeedsExperience: specialNeedsExperience || [],
      status: 'pending',
    })

    return NextResponse.json({ success: true, id: tutor._id }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}