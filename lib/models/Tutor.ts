

// import mongoose, { Schema, models } from 'mongoose'

// const TutorSchema = new Schema(
//   {
//     name:       { type: String, required: true, trim: true },
//     // SEO-friendly URL slug, e.g. "sara-khan-o-level-tutor-lahore".
//     // sparse+unique so legacy tutors without one yet don't collide on null.
//     slug:       { type: String, trim: true, unique: true, sparse: true, index: true },
//     subjects:   { type: [String], required: true },
//     experience: { type: Number, required: true },
//     city:       { type: String, required: true, trim: true },
//     country:    { type: String, required: true, trim: true },
//     whatsapp:   { type: String, required: true, trim: true },
//     bio:        { type: String, required: true, trim: true },
//     education:  { type: String, required: true, trim: true },
//     mode:       { type: String, enum: ['online', 'onsite', 'both'], default: 'both' },
//     status:     { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
//     imageUrl:   { type: String, default: null },
//     rating:     { type: Number, default: null },
//   },
//   { timestamps: true }
// )

// const Tutor = models.Tutor || mongoose.model('Tutor', TutorSchema)
// export default Tutor








import mongoose, { Schema, models } from 'mongoose'

const TutorSchema = new Schema(
  {
    name:       { type: String, required: true, trim: true },
    // SEO-friendly URL slug, e.g. "sara-khan-o-level-tutor-lahore".
    // sparse+unique so legacy tutors without one yet don't collide on null.
    slug:       { type: String, trim: true, unique: true, sparse: true, index: true },
    subjects:   { type: [String], required: true },
    experience: { type: Number, required: true },
    city:       { type: String, required: true, trim: true },
    country:    { type: String, required: true, trim: true },
    whatsapp:   { type: String, required: true, trim: true },
    bio:        { type: String, required: true, trim: true },
    education:  { type: String, required: true, trim: true },
    mode:       { type: String, enum: ['online', 'onsite', 'both'], default: 'both' },
    // Which special-needs / learning-difference categories this tutor has
    // experience teaching. Optional and defaults to an empty array, so it
    // never blocks existing application/approval flow for tutors who don't
    // set it. Values are validated against a fixed list on the frontend
    // dropdown rather than free text, to keep this field filterable later.
    specialNeedsExperience: { type: [String], default: [] },
    status:     { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    imageUrl:   { type: String, default: null },
    rating:     { type: Number, default: null },
  },
  { timestamps: true }
)

const Tutor = models.Tutor || mongoose.model('Tutor', TutorSchema)
export default Tutor