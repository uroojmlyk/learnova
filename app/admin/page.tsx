


// 'use client'

// import { useEffect, useState, useRef } from 'react'
// import { ITutor } from '@/types'

// type Filter = 'pending' | 'approved' | 'rejected'

// const SUBJECTS = [
//   'Mathematics','Physics','Chemistry','Biology','English','Urdu',
//   'O Level','A Level','IELTS','TOEFL','Computer Science','Coding',
//   'Economics','Accounting','Arabic','Quran','History','Geography',
// ]

// async function uploadImageToImgBB(file: File): Promise<string> {
//   const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY
//   if (!apiKey) throw new Error('NEXT_PUBLIC_IMGBB_KEY missing in .env.local')
//   const formData = new FormData()
//   formData.append('image', file)
//   const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData })
//   const data = await res.json()
//   if (!data.success) throw new Error('Upload failed')
//   return data.data.url
// }

// const inp = `w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-3.5 py-2.5 text-[#2E4F5E] placeholder:text-[#b0c4cc] text-sm font-semibold focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 transition-all`
// const lbl = `block text-[#2E4F5E] text-[10px] font-black uppercase tracking-[0.2em] mb-1.5`

// /* ════════ ICONS ════════ */
// const IconClock   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/></svg>
// const IconCheck   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
// const IconX       = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
// const IconEdit    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
// const IconTrash   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
// const IconLock    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
// const IconLogout  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
// const IconExtLink = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
// const IconUpload  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
// const IconClose   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
// const IconWA      = ({ cls='w-4 h-4' }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.101 1.513 5.832L0 24l6.336-1.49A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.51-5.168-1.4l-.371-.22-3.763.885.919-3.665-.242-.38A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
// const IconMenu    = ({ cls='w-5 h-5' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>

// function Eyebrow({ text, light=false }: { text: string; light?: boolean }) {
//   return (
//     <div className="flex items-center gap-2 mb-2">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
//       <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#C43D24]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    PASSWORD MODAL
// ══════════════════════════════════════ */
// function PasswordModal({ onClose }: { onClose: () => void }) {
//   const [current, setCurrent] = useState('')
//   const [next, setNext]       = useState('')
//   const [confirm, setConfirm] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError]     = useState('')
//   const [success, setSuccess] = useState('')

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault(); setError(''); setSuccess('')
//     if (next !== confirm) return setError('Passwords do not match')
//     if (next.length < 6)  return setError('Minimum 6 characters required')
//     setLoading(true)
//     try {
//       const res  = await fetch('/api/admin/change-password', {
//         method: 'POST', headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ currentPassword: current, newPassword: next }),
//       })
//       const data = await res.json()
//       if (!res.ok) setError(data.error || 'Failed')
//       else setSuccess(`Done! Update .env.local:\nADMIN_PASSWORD=${data.newPassword}\nThen restart.`)
//     } catch { setError('Server error') }
//     finally { setLoading(false) }
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
//       <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
//         {/* drag pill mobile */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-[#D4D0C5] rounded-full"/>
//         </div>
//         <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl">
//           <div className="flex items-center gap-2.5">
//             <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
//               <IconLock cls="w-4 h-4 text-[#2E4F5E]"/>
//             </div>
//             <div>
//               <p className="text-white font-black text-sm leading-tight">Change Password</p>
//               <p className="text-[#E8C86A] text-[10px] font-bold">Update admin credentials</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//             <IconClose cls="w-4 h-4"/>
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="p-5 space-y-4">
//           <div><label className={lbl}>Current Password</label><input type="password" className={inp} value={current} onChange={e => setCurrent(e.target.value)} required placeholder="Enter current password"/></div>
//           <div><label className={lbl}>New Password</label><input type="password" className={inp} value={next} onChange={e => setNext(e.target.value)} required placeholder="Min 6 characters"/></div>
//           <div><label className={lbl}>Confirm Password</label><input type="password" className={inp} value={confirm} onChange={e => setConfirm(e.target.value)} required placeholder="Repeat new password"/></div>
//           {error   && <div className="flex items-center gap-2 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#C43D24] text-[13px] font-bold px-4 py-3 rounded-xl">⚠️ {error}</div>}
//           {success && <div className="bg-[#3A9E8F]/10 border-2 border-[#3A9E8F] text-[#2E4F5E] text-[12px] font-semibold px-4 py-3 rounded-xl whitespace-pre-line leading-relaxed">✓ {success}</div>}
//           <div className="flex gap-3 pt-1">
//             <button type="button" onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all">Cancel</button>
//             <button type="submit" disabled={loading} className="flex-1 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm">
//               {loading ? 'Updating…' : 'Update'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    EDIT MODAL
// ══════════════════════════════════════ */
// function EditModal({ tutor, onClose, onSave }: { tutor: ITutor; onClose: () => void; onSave: () => void }) {
//   const [form,        setForm]        = useState({ ...tutor })
//   const [saving,      setSaving]      = useState(false)
//   const [uploading,   setUploading]   = useState(false)
//   const [uploadError, setUploadError] = useState('')
//   const [preview,     setPreview]     = useState<string>(tutor.imageUrl || '')
//   const fileRef = useRef<HTMLInputElement>(null)

//   async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0]; if (!file) return
//     if (!file.type.startsWith('image/')) { setUploadError('Images only'); return }
//     if (file.size > 5 * 1024 * 1024)    { setUploadError('Max 5MB'); return }
//     setUploadError(''); setUploading(true)
//     const reader = new FileReader()
//     reader.onload = ev => setPreview(ev.target?.result as string)
//     reader.readAsDataURL(file)
//     try {
//       const url = await uploadImageToImgBB(file)
//       setForm(f => ({ ...f, imageUrl: url })); setPreview(url)
//     } catch { setUploadError('Upload failed — check IMGBB key'); setPreview(tutor.imageUrl || '') }
//     finally { setUploading(false) }
//   }

//   async function handleSave() {
//     setSaving(true)
//     try {
//       const res = await fetch(`/api/admin/tutors/${tutor._id}`, {
//         method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
//       })
//       if (!res.ok) throw new Error()
//       onSave(); onClose()
//     } catch { alert('Failed to save changes') }
//     finally { setSaving(false) }
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
//       <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
//         {/* drag pill */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-white/30 rounded-full"/>
//         </div>
//         {/* Header sticky */}
//         <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] sticky top-0 bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl z-10">
//           <div className="flex items-center gap-2.5">
//             <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
//               <IconEdit cls="w-4 h-4 text-[#2E4F5E]"/>
//             </div>
//             <div>
//               <p className="text-white font-black text-sm leading-tight">Edit Tutor</p>
//               <p className="text-[#E8C86A] text-[10px] font-bold">{tutor.name}</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//             <IconClose cls="w-4 h-4"/>
//           </button>
//         </div>

//         <div className="p-5 space-y-4">
//           {/* Photo */}
//           <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-[#D4D0C5]">
//             <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//               {preview ? <img src={preview} alt="preview" className="w-full h-full object-cover"/>
//                 : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-xl">{form.name?.charAt(0)||'?'}</div>}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[#2E4F5E] font-black text-sm mb-2">Profile Photo</p>
//               <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="img-upload"/>
//               <div className="flex gap-2 flex-wrap">
//                 <label htmlFor="img-upload"
//                   className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer border-2 transition-all ${uploading ? 'opacity-50 cursor-not-allowed border-[#D4D0C5] text-[#b0c4cc]' : 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px]'}`}>
//                   <IconUpload cls="w-3.5 h-3.5"/> {uploading ? 'Uploading…' : 'Upload'}
//                 </label>
//                 {preview && (
//                   <button type="button" onClick={() => { setForm(f => ({ ...f, imageUrl: '' })); setPreview('') }}
//                     className="px-3 py-1.5 rounded-xl text-xs font-black bg-white text-[#C43D24] border-2 border-[#E05C42] hover:bg-[#E05C42] hover:text-white transition-all">Remove</button>
//                 )}
//               </div>
//               {uploadError && <p className="text-[#C43D24] text-xs font-bold mt-1.5">{uploadError}</p>}
//               <p className="text-[#b0c4cc] text-[11px] mt-1">JPG, PNG · Max 5MB</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div><label className={lbl}>Full Name</label><input className={inp} value={form.name||''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}/></div>
//             <div><label className={lbl}>WhatsApp</label><input className={inp} value={form.whatsapp||''} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}/></div>
//           </div>

//           <div>
//             <label className={lbl}>Subjects</label>
//             <div className="flex flex-wrap gap-1.5 p-3 bg-white border-2 border-[#D4D0C5] rounded-xl max-h-28 overflow-y-auto">
//               {SUBJECTS.map(s => (
//                 <button key={s} type="button"
//                   onClick={() => setForm(f => ({ ...f, subjects: f.subjects?.includes(s) ? f.subjects.filter(x => x !== s) : [...(f.subjects||[]), s] }))}
//                   className={`px-2.5 py-1 rounded-full text-[11px] font-black border-2 transition-all ${form.subjects?.includes(s) ? 'bg-[#2E4F5E] text-white border-[#2E4F5E]' : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A]'}`}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>Experience (yrs)</label><input type="number" className={inp} value={form.experience||0} onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value)||0 }))}/></div>
//             <div>
//               <label className={lbl}>Mode</label>
//               <select className={inp} value={form.mode||'both'} onChange={e => setForm(f => ({ ...f, mode: e.target.value as ITutor['mode'] }))}>
//                 <option value="both">Both</option>
//                 <option value="online">Online Only</option>
//                 <option value="onsite">Home Visit Only</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>City</label><input className={inp} value={form.city||''} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}/></div>
//             <div><label className={lbl}>Country</label><input className={inp} value={form.country||''} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}/></div>
//           </div>

//           <div><label className={lbl}>Education</label><input className={inp} value={form.education||''} onChange={e => setForm(f => ({ ...f, education: e.target.value }))}/></div>
//           <div><label className={lbl}>Bio</label><textarea rows={3} className={`${inp} resize-none`} value={form.bio||''} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}/></div>

//           <div className="flex gap-3 pt-2 border-t-2 border-dashed border-[#E8C86A]">
//             <button onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all mt-3">Cancel</button>
//             <button onClick={handleSave} disabled={saving||uploading}
//               className="flex-1 py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm mt-3">
//               {saving ? 'Saving…' : 'Save Changes'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    MOBILE TUTOR CARD
// ══════════════════════════════════════ */
// function TutorCard({ t, filter, onEdit, onDelete, onStatus }: {
//   t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
// }) {
//   const modeCfg = {
//     online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
//     onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
//     both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
//   }
//   const mode = modeCfg[t.mode||'both']

//   return (
//     <div className="bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[3px_3px_0_0_#D4D0C5] p-4 space-y-3">
//       {/* Top row */}
//       <div className="flex items-start gap-3">
//         <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//           {t.imageUrl
//             ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
//             : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black">{t.name?.charAt(0)||'?'}</div>}
//         </div>
//         <div className="flex-1 min-w-0">
//           <p className="text-[#2E4F5E] font-black text-[15px] leading-tight">{t.name}</p>
//           <p className="text-[#4a6a78] text-[12px] font-semibold truncate">{t.education||'—'}</p>
//           <p className="text-[#4a6a78] text-[12px] font-semibold mt-0.5">📍 {t.city}, {t.country}</p>
//         </div>
//         <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
//           <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
//           <span className="text-[#4a6a78] text-[11px] font-semibold">{t.experience} yr{t.experience!==1?'s':''}</span>
//         </div>
//       </div>

//       {/* Subjects */}
//       {t.subjects && t.subjects.length > 0 && (
//         <div className="flex flex-wrap gap-1.5">
//           {t.subjects.slice(0,4).map(s => (
//             <span key={s} className="px-2 py-0.5 bg-[#FFFDF7] border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
//           ))}
//           {t.subjects.length > 4 && (
//             <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects.length-4}</span>
//           )}
//         </div>
//       )}

//       {/* WhatsApp */}
//       <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
//         className="flex items-center gap-1.5 text-[#3A9E8F] text-[13px] font-black">
//         <IconWA cls="w-4 h-4 flex-shrink-0"/> {t.whatsapp}
//       </a>

//       {/* Action buttons */}
//       <div className="flex gap-2 pt-1 border-t-2 border-dashed border-[#E8C86A]/50">
//         {filter !== 'approved' && (
//           <button onClick={() => onStatus('approved')}
//             className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#3A9E8F] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//             <IconCheck cls="w-3.5 h-3.5"/> Approve
//           </button>
//         )}
//         {filter !== 'rejected' && (
//           <button onClick={() => onStatus('rejected')}
//             className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#E05C42] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//             <IconX cls="w-3.5 h-3.5"/> Reject
//           </button>
//         )}
//         <button onClick={onEdit}
//           className="px-3 py-2 bg-[#E8C86A]/30 hover:bg-[#E8C86A] text-[#2E4F5E] rounded-xl border-2 border-[#E8C86A] transition-all" title="Edit">
//           <IconEdit cls="w-4 h-4"/>
//         </button>
//         <button onClick={onDelete}
//           className="px-3 py-2 bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white text-[#C43D24] rounded-xl border-2 border-[#E05C42] transition-all" title="Delete">
//           <IconTrash cls="w-4 h-4"/>
//         </button>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    DESKTOP TABLE ROW
// ══════════════════════════════════════ */
// function TutorRow({ t, filter, onEdit, onDelete, onStatus }: {
//   t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
// }) {
//   const modeCfg = {
//     online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
//     onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
//     both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
//   }
//   const mode = modeCfg[t.mode||'both']

//   return (
//     <tr className="group border-b-2 border-[#E8C86A]/20 hover:bg-[#FFFDF7] transition-colors">
//       <td className="px-5 py-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//             {t.imageUrl ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
//               : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-sm">{t.name?.charAt(0)||'?'}</div>}
//           </div>
//           <div>
//             <p className="text-[#2E4F5E] font-black text-[13px] leading-tight">{t.name}</p>
//             <p className="text-[#4a6a78] text-[11px] font-semibold">{t.education||'—'}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-4 py-4 hidden md:table-cell">
//         <p className="text-[#2E4F5E] font-black text-[13px]">📍 {t.city}</p>
//         <p className="text-[#4a6a78] text-[11px] font-semibold">{t.country}</p>
//       </td>
//       <td className="px-4 py-4 hidden lg:table-cell">
//         <div className="flex flex-wrap gap-1">
//           {t.subjects?.slice(0,3).map(s => (
//             <span key={s} className="px-2 py-0.5 bg-white border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
//           ))}
//           {(t.subjects?.length||0) > 3 && (
//             <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects!.length-3}</span>
//           )}
//         </div>
//       </td>
//       <td className="px-4 py-4 hidden md:table-cell">
//         <span className={`inline-flex text-[10px] font-black px-2.5 py-1 rounded-full border-2 w-fit ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
//         <p className="text-[#4a6a78] text-[11px] font-semibold mt-1">{t.experience} yr{t.experience!==1?'s':''}</p>
//       </td>
//       <td className="px-4 py-4 hidden xl:table-cell">
//         <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
//           className="flex items-center gap-1.5 text-[#3A9E8F] hover:text-[#2d7a6e] text-[12px] font-black transition-colors">
//           <IconWA cls="w-3.5 h-3.5 flex-shrink-0"/> <span className="hover:underline">{t.whatsapp}</span>
//         </a>
//       </td>
//       <td className="px-5 py-4">
//         <div className="flex items-center justify-end gap-1.5">
//           {filter !== 'approved' && (
//             <button onClick={() => onStatus('approved')}
//               className="flex items-center gap-1 px-2.5 py-1.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//               <IconCheck cls="w-3 h-3"/> Approve
//             </button>
//           )}
//           {filter !== 'rejected' && (
//             <button onClick={() => onStatus('rejected')}
//               className="flex items-center gap-1 px-2.5 py-1.5 bg-[#E05C42] hover:bg-[#c44d36] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//               <IconX cls="w-3 h-3"/> Reject
//             </button>
//           )}
//           <button onClick={onEdit} className="p-2 text-[#2E4F5E] bg-[#E8C86A]/30 hover:bg-[#E8C86A] rounded-lg border-2 border-[#E8C86A] transition-all" title="Edit">
//             <IconEdit cls="w-3.5 h-3.5"/>
//           </button>
//           <button onClick={onDelete} className="p-2 text-[#C43D24] bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white rounded-lg border-2 border-[#E05C42] transition-all" title="Delete">
//             <IconTrash cls="w-3.5 h-3.5"/>
//           </button>
//         </div>
//       </td>
//     </tr>
//   )
// }

// /* ══════════════════════════════════════
//    MAIN DASHBOARD
// ══════════════════════════════════════ */
// export default function AdminDashboard() {
//   const [tutors,       setTutors]    = useState<ITutor[]>([])
//   const [filter,       setFilter]    = useState<Filter>('pending')
//   const [loading,      setLoading]   = useState(true)
//   const [editingTutor, setEditing]   = useState<ITutor | null>(null)
//   const [showPassword, setShowPass]  = useState(false)
//   const [counts,       setCounts]    = useState({ pending: 0, approved: 0, rejected: 0 })
//   const [mobileMenu,   setMobileMenu]= useState(false)

//   async function fetchTutors(f = filter) {
//     setLoading(true)
//     try {
//       const [main, p, a, r] = await Promise.all([
//         fetch(`/api/admin/tutors?status=${f}`),
//         fetch('/api/admin/tutors?status=pending'),
//         fetch('/api/admin/tutors?status=approved'),
//         fetch('/api/admin/tutors?status=rejected'),
//       ])
//       if (main.ok) setTutors(await main.json())
//       const [pd, ad, rd] = await Promise.all([p.json(), a.json(), r.json()])
//       setCounts({ pending: pd.length, approved: ad.length, rejected: rd.length })
//     } catch (err) { console.error(err) }
//     finally { setLoading(false) }
//   }

//   useEffect(() => { fetchTutors(filter) }, [filter])

//   async function updateStatus(id: string, status: string) {
//     try {
//       await fetch(`/api/admin/tutors/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
//       fetchTutors(filter)
//     } catch (err) { console.error(err) }
//   }

//   async function deleteTutor(id: string) {
//     if (!confirm('Permanently delete this tutor?')) return
//     try { await fetch(`/api/admin/tutors/${id}`, { method: 'DELETE' }); fetchTutors(filter) }
//     catch (err) { console.error(err) }
//   }

//   async function logout() {
//     try { await fetch('/api/admin/logout', { method: 'POST' }) } catch {}
//     finally { window.location.href = '/admin/login' }
//   }

//   const total        = counts.pending + counts.approved + counts.rejected
//   const approvalRate = total > 0 ? Math.round((counts.approved / total) * 100) : 0

//   const navItems = [
//     { key: 'pending'  as Filter, label: 'Pending',  shortLabel: 'Pending',  Icon: IconClock, accentText: 'text-[#2E4F5E]', activeBg: 'bg-[#E8C86A]' },
//     { key: 'approved' as Filter, label: 'Approved', shortLabel: 'Approved', Icon: IconCheck, accentText: 'text-white',      activeBg: 'bg-[#3A9E8F]' },
//     { key: 'rejected' as Filter, label: 'Rejected', shortLabel: 'Rejected', Icon: IconX,     accentText: 'text-white',      activeBg: 'bg-[#E05C42]' },
//   ]

//   const filterCfg = {
//     pending:  { dot: 'bg-[#E8C86A]', badge: 'bg-[#E8C86A]/25 border-[#E8C86A] text-[#2E4F5E]' },
//     approved: { dot: 'bg-[#3A9E8F]', badge: 'bg-[#3A9E8F]/15 border-[#3A9E8F] text-[#2E4F5E]' },
//     rejected: { dot: 'bg-[#E05C42]', badge: 'bg-[#E05C42]/15 border-[#E05C42] text-[#C43D24]' },
//   }

//   return (
//     <div className="min-h-screen bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>

//       {/* ══════ MOBILE SLIDE-DOWN MENU ══════ */}
//       {mobileMenu && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div className="absolute inset-0 bg-[#2E4F5E]/60 backdrop-blur-sm" onClick={() => setMobileMenu(false)}/>
//           <div className="absolute top-0 left-0 w-72 h-full bg-[#2E4F5E] border-r-4 border-[#E8C86A] flex flex-col shadow-2xl">
//             <div className="flex items-center justify-between px-5 py-5 border-b-2 border-white/10">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-9 h-9 rounded-xl bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
//                     <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                     <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-white font-black text-[16px] leading-tight">Learnova</p>
//                   <p className="text-[#E8C86A] text-[10px] font-bold">Admin Panel</p>
//                 </div>
//               </div>
//               <button onClick={() => setMobileMenu(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//                 <IconClose cls="w-4 h-4"/>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
//               <div className="grid grid-cols-3 gap-1.5">
//                 {navItems.map(({ key, activeBg, accentText }) => (
//                   <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
//                     className={`flex flex-col items-center p-2.5 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40` : 'bg-white/8 border-white/10'}`}>
//                     <span className={`text-lg font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
//                     <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
//                   </button>
//                 ))}
//               </div>
//               <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
//                 <div className="flex justify-between mb-1.5">
//                   <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
//                   <span className="text-white text-[12px] font-black">{approvalRate}%</span>
//                 </div>
//                 <div className="h-2 bg-white/15 rounded-full overflow-hidden">
//                   <div className="h-full bg-[#3A9E8F] rounded-full transition-all" style={{ width: `${approvalRate}%` }}/>
//                 </div>
//                 <p className="text-white/40 text-[10px] mt-1">{total} total tutors</p>
//               </div>
//             </div>

//             <nav className="flex-1 px-3 py-4">
//               <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
//               {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
//                 <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
//                   className={`w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30` : 'hover:bg-white/8 border-transparent'}`}>
//                   <div className="flex items-center gap-2.5">
//                     <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
//                     <span className={`text-[14px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
//                   </div>
//                   <span className={`min-w-[24px] text-center text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
//                 </button>
//               ))}
//             </nav>

//             <div className="px-3 pb-6 border-t-2 border-white/10 pt-4 space-y-1">
//               <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
//               <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[14px] font-bold transition-all">
//                 <IconExtLink cls="w-4 h-4"/> View Site
//               </a>
//               <button onClick={() => { setShowPass(true); setMobileMenu(false) }}
//                 className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[14px] font-bold transition-all text-left">
//                 <IconLock cls="w-4 h-4"/> Change Password
//               </button>
//               <button onClick={logout}
//                 className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#C43D24] hover:bg-[#E05C42]/15 rounded-xl text-[14px] font-bold transition-all text-left">
//                 <IconLogout cls="w-4 h-4"/> Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ══════ LAYOUT WRAPPER ══════ */}
//       <div className="flex min-h-screen">

//         {/* ══════ DESKTOP SIDEBAR ══════ */}
//         <aside className="hidden lg:flex w-[230px] flex-shrink-0 bg-[#2E4F5E] min-h-screen flex-col sticky top-0 h-screen border-r-4 border-[#E8C86A]">
//           <div className="px-5 py-5 border-b-2 border-white/10">
//             <div className="flex items-center gap-2.5">
//               <div className="w-9 h-9 rounded-xl bg-[#E8C86A] shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] flex items-center justify-center flex-shrink-0">
//                 <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
//                   <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                   <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-white font-black text-[16px] leading-tight">Learnova</p>
//                 <p className="text-[#E8C86A] text-[10px] font-bold tracking-wide">Admin Panel</p>
//               </div>
//             </div>
//           </div>

//           <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
//             <div className="grid grid-cols-3 gap-1.5">
//               {navItems.map(({ key, activeBg, accentText }) => (
//                 <button key={key} onClick={() => setFilter(key)}
//                   className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]` : 'bg-white/8 border-white/10 hover:bg-white/15'}`}>
//                   <span className={`text-[17px] font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
//                   <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
//                 </button>
//               ))}
//             </div>
//             <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
//               <div className="flex items-center justify-between mb-1.5">
//                 <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
//                 <span className="text-white text-[12px] font-black">{approvalRate}%</span>
//               </div>
//               <div className="h-2 bg-white/15 rounded-full overflow-hidden border border-white/10">
//                 <div className="h-full bg-[#3A9E8F] rounded-full transition-all duration-500" style={{ width: `${approvalRate}%` }}/>
//               </div>
//               <p className="text-white/40 text-[10px] mt-1.5">{total} total tutors</p>
//             </div>
//           </div>

//           <nav className="flex-1 px-3 py-4">
//             <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
//             {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
//               <button key={key} onClick={() => setFilter(key)}
//                 className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]` : 'hover:bg-white/8 border-transparent'}`}>
//                 <div className="flex items-center gap-2.5">
//                   <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
//                   <span className={`text-[13px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
//                 </div>
//                 <span className={`min-w-[22px] text-center text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
//               </button>
//             ))}
//           </nav>

//           <div className="px-3 pb-5 border-t-2 border-white/10 pt-4 space-y-0.5">
//             <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
//             <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[13px] font-bold transition-all border-2 border-transparent">
//               <IconExtLink cls="w-4 h-4"/> View Site
//             </a>
//             <button onClick={() => setShowPass(true)} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
//               <IconLock cls="w-4 h-4"/> Change Password
//             </button>
//             <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#C43D24] hover:bg-[#E05C42]/15 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
//               <IconLogout cls="w-4 h-4"/> Sign Out
//             </button>
//           </div>
//         </aside>

//         {/* ══════ MAIN ══════ */}
//         <main className="flex-1 min-w-0 flex flex-col">

//           {/* Topbar */}
//           <header className="bg-[#FFFDF7] border-b-2 border-[#E8C86A] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
//             <div className="flex items-center gap-3">
//               {/* Hamburger — mobile only */}
//               <button onClick={() => setMobileMenu(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#2E4F5E] text-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44] hover:shadow-none hover:translate-y-[1px] transition-all flex-shrink-0">
//                 <IconMenu cls="w-5 h-5"/>
//               </button>
//               {/* Logo — mobile only */}
//               <div className="lg:hidden flex items-center gap-2">
//                 <div className="w-7 h-7 rounded-lg bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
//                   <svg width="14" height="14" viewBox="0 0 38 38" fill="none">
//                     <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                     <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
//                 <span className="text-[#2E4F5E] font-black text-[15px]">Learnova</span>
//               </div>
//               {/* Desktop title */}
//               <div className="hidden lg:flex items-center gap-3">
//                 <div className={`w-2.5 h-6 rounded-full ${filterCfg[filter].dot}`}/>
//                 <div>
//                   <Eyebrow text="Learnova Admin"/>
//                   <h1 className="text-[#2E4F5E] font-black text-[18px] leading-tight capitalize -mt-0.5">{filter} Applications</h1>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* Mobile filter badge — shows current tab */}
//               <div className="lg:hidden">
//                 <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
//                   <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
//                   {filter} · {loading ? '…' : counts[filter]}
//                 </span>
//               </div>
//               {/* Desktop badge */}
//               <span className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
//                 <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
//                 {loading ? '…' : tutors.length} {filter}
//               </span>
//             </div>
//           </header>

//           {/* Mobile tab strip */}
//           <div className="lg:hidden flex border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7] px-4 pt-3 gap-2 sticky top-[65px] z-20">
//             {navItems.map(({ key, label, Icon, activeBg, accentText }) => (
//               <button key={key} onClick={() => setFilter(key)}
//                 className={`flex-1 flex flex-col items-center gap-1 pb-2.5 rounded-t-xl px-1 transition-all border-b-4 ${filter===key ? `border-current ${activeBg} ${accentText}` : 'border-transparent text-[#4a6a78]'}`}>
//                 <Icon cls="w-4 h-4"/>
//                 <span className="text-[10px] font-black">{label}</span>
//                 <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${filter===key ? 'bg-white/30' : 'bg-[#D4D0C5]/50'}`}>{counts[key]}</span>
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div className="flex-1 p-4 sm:p-6 pb-24 lg:pb-6">
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-32 gap-4">
//                 <div className="w-10 h-10 bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] flex items-center justify-center animate-bounce">
//                   <svg className="w-5 h-5 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
//                 </div>
//                 <p className="text-[#4a6a78] text-sm font-black">Loading applications…</p>
//               </div>
//             ) : tutors.length === 0 ? (
//               <div className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[4px_4px_0_0_#D4D0C5]">
//                 <div className="w-16 h-16 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4D0C5] flex items-center justify-center mb-4 text-3xl">📭</div>
//                 <p className="text-[#2E4F5E] font-black text-[16px]">No {filter} applications</p>
//                 <p className="text-[#4a6a78] text-sm font-semibold mt-1">Switch tabs to view others</p>
//               </div>
//             ) : (
//               <>
//                 {/* ── MOBILE: card list ── */}
//                 <div className="flex flex-col gap-3 lg:hidden">
//                   {tutors.map(t => (
//                     <TutorCard
//                       key={t._id as string} t={t} filter={filter}
//                       onEdit={() => setEditing(t)}
//                       onDelete={() => deleteTutor(t._id as string)}
//                       onStatus={s => updateStatus(t._id as string, s)}
//                     />
//                   ))}
//                 </div>

//                 {/* ── DESKTOP: table ── */}
//                 <div className="hidden lg:block bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden">
//                   <div className="bg-[#2E4F5E] px-5 py-3 flex items-center justify-between">
//                     <p className="text-[#E8C86A] text-[10px] font-black uppercase tracking-[0.2em]">All Tutors</p>
//                     <p className="text-white/50 text-[11px] font-semibold">{tutors.length} {tutors.length===1?'entry':'entries'}</p>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7]">
//                           <th className="px-5 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Tutor</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Location</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden lg:table-cell">Subjects</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Mode</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden xl:table-cell">Contact</th>
//                           <th className="px-5 py-3 text-right text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tutors.map(t => (
//                           <TutorRow
//                             key={t._id as string} t={t} filter={filter}
//                             onEdit={() => setEditing(t)}
//                             onDelete={() => deleteTutor(t._id as string)}
//                             onStatus={s => updateStatus(t._id as string, s)}
//                           />
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="px-5 py-3 border-t-2 border-[#E8C86A]/30 bg-[#FFFDF7] flex items-center justify-between">
//                     <p className="text-[#4a6a78] text-[11px] font-semibold">{tutors.length} {tutors.length===1?'result':'results'}</p>
//                     <p className="text-[#4a6a78] text-[11px] font-semibold capitalize">{filter} · Learnova</p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>

//       {editingTutor && (
//         <EditModal tutor={editingTutor} onClose={() => setEditing(null)} onSave={() => { setEditing(null); fetchTutors(filter) }}/>
//       )}
//       {showPassword && <PasswordModal onClose={() => setShowPass(false)}/>}
//     </div>
//   )
// }







// 'use client'

// import { useEffect, useState, useRef } from 'react'
// import { ITutor } from '@/types'

// type Filter = 'pending' | 'approved' | 'rejected'

// const SUBJECTS = [
//   'Mathematics','Physics','Chemistry','Biology','English','Urdu',
//   'O Level','A Level','IELTS','TOEFL','Computer Science','Coding',
//   'Economics','Accounting','Arabic','Quran','History','Geography',
// ]

// async function uploadImageToImgBB(file: File): Promise<string> {
//   const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY
//   if (!apiKey) throw new Error('NEXT_PUBLIC_IMGBB_KEY missing in .env.local')
//   const formData = new FormData()
//   formData.append('image', file)
//   const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData })
//   const data = await res.json()
//   if (!data.success) throw new Error('Upload failed')
//   return data.data.url
// }

// const inp = `w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-3.5 py-2.5 text-[#2E4F5E] placeholder:text-[#b0c4cc] text-sm font-semibold focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 transition-all`
// const lbl = `block text-[#2E4F5E] text-[10px] font-black uppercase tracking-[0.2em] mb-1.5`

// /* ════════ ICONS ════════ */
// const IconClock   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/></svg>
// const IconCheck   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
// const IconX       = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
// const IconEdit    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
// const IconTrash   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
// const IconLock    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
// const IconLogout  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
// const IconExtLink = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
// const IconUpload  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
// const IconClose   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
// const IconWA      = ({ cls='w-4 h-4' }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.101 1.513 5.832L0 24l6.336-1.49A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.51-5.168-1.4l-.371-.22-3.763.885.919-3.665-.242-.38A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
// const IconMenu    = ({ cls='w-5 h-5' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>

// function Eyebrow({ text, light=false }: { text: string; light?: boolean }) {
//   return (
//     <div className="flex items-center gap-2 mb-2">
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
//       <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#E05C42]'}`}>{text}</span>
//       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    PASSWORD MODAL
// ══════════════════════════════════════ */
// function PasswordModal({ onClose }: { onClose: () => void }) {
//   const [current, setCurrent] = useState('')
//   const [next, setNext]       = useState('')
//   const [confirm, setConfirm] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [error, setError]     = useState('')
//   const [success, setSuccess] = useState('')

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault(); setError(''); setSuccess('')
//     if (next !== confirm) return setError('Passwords do not match')
//     if (next.length < 6)  return setError('Minimum 6 characters required')
//     setLoading(true)
//     try {
//       const res  = await fetch('/api/admin/change-password', {
//         method: 'POST', headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ currentPassword: current, newPassword: next }),
//       })
//       const data = await res.json()
//       if (!res.ok) setError(data.error || 'Failed')
//       else setSuccess(`Done! Update .env.local:\nADMIN_PASSWORD=${data.newPassword}\nThen restart.`)
//     } catch { setError('Server error') }
//     finally { setLoading(false) }
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
//       <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
//         {/* drag pill mobile */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-[#D4D0C5] rounded-full"/>
//         </div>
//         <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl">
//           <div className="flex items-center gap-2.5">
//             <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
//               <IconLock cls="w-4 h-4 text-[#2E4F5E]"/>
//             </div>
//             <div>
//               <p className="text-white font-black text-sm leading-tight">Change Password</p>
//               <p className="text-[#E8C86A] text-[10px] font-bold">Update admin credentials</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//             <IconClose cls="w-4 h-4"/>
//           </button>
//         </div>
//         <form onSubmit={handleSubmit} className="p-5 space-y-4">
//           <div><label className={lbl}>Current Password</label><input type="password" className={inp} value={current} onChange={e => setCurrent(e.target.value)} required placeholder="Enter current password"/></div>
//           <div><label className={lbl}>New Password</label><input type="password" className={inp} value={next} onChange={e => setNext(e.target.value)} required placeholder="Min 6 characters"/></div>
//           <div><label className={lbl}>Confirm Password</label><input type="password" className={inp} value={confirm} onChange={e => setConfirm(e.target.value)} required placeholder="Repeat new password"/></div>
//           {error   && <div className="flex items-center gap-2 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#E05C42] text-[13px] font-bold px-4 py-3 rounded-xl">⚠️ {error}</div>}
//           {success && <div className="bg-[#3A9E8F]/10 border-2 border-[#3A9E8F] text-[#2E4F5E] text-[12px] font-semibold px-4 py-3 rounded-xl whitespace-pre-line leading-relaxed">✓ {success}</div>}
//           <div className="flex gap-3 pt-1">
//             <button type="button" onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all">Cancel</button>
//             <button type="submit" disabled={loading} className="flex-1 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm">
//               {loading ? 'Updating…' : 'Update'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    EDIT MODAL
// ══════════════════════════════════════ */
// function EditModal({ tutor, onClose, onSave }: { tutor: ITutor; onClose: () => void; onSave: () => void }) {
//   const [form,        setForm]        = useState({ ...tutor })
//   const [saving,      setSaving]      = useState(false)
//   const [uploading,   setUploading]   = useState(false)
//   const [uploadError, setUploadError] = useState('')
//   const [preview,     setPreview]     = useState<string>(tutor.imageUrl || '')
//   const fileRef = useRef<HTMLInputElement>(null)

//   async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0]; if (!file) return
//     if (!file.type.startsWith('image/')) { setUploadError('Images only'); return }
//     if (file.size > 5 * 1024 * 1024)    { setUploadError('Max 5MB'); return }
//     setUploadError(''); setUploading(true)
//     const reader = new FileReader()
//     reader.onload = ev => setPreview(ev.target?.result as string)
//     reader.readAsDataURL(file)
//     try {
//       const url = await uploadImageToImgBB(file)
//       setForm(f => ({ ...f, imageUrl: url })); setPreview(url)
//     } catch { setUploadError('Upload failed — check IMGBB key'); setPreview(tutor.imageUrl || '') }
//     finally { setUploading(false) }
//   }

//   async function handleSave() {
//     setSaving(true)
//     try {
//       const res = await fetch(`/api/admin/tutors/${tutor._id}`, {
//         method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
//       })
//       if (!res.ok) throw new Error()
//       onSave(); onClose()
//     } catch { alert('Failed to save changes') }
//     finally { setSaving(false) }
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
//       <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
//         {/* drag pill */}
//         <div className="flex justify-center pt-3 pb-1 sm:hidden">
//           <div className="w-10 h-1 bg-white/30 rounded-full"/>
//         </div>
//         {/* Header sticky */}
//         <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] sticky top-0 bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl z-10">
//           <div className="flex items-center gap-2.5">
//             <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
//               <IconEdit cls="w-4 h-4 text-[#2E4F5E]"/>
//             </div>
//             <div>
//               <p className="text-white font-black text-sm leading-tight">Edit Tutor</p>
//               <p className="text-[#E8C86A] text-[10px] font-bold">{tutor.name}</p>
//             </div>
//           </div>
//           <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//             <IconClose cls="w-4 h-4"/>
//           </button>
//         </div>

//         <div className="p-5 space-y-4">
//           {/* Photo */}
//           <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-[#D4D0C5]">
//             <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//               {preview ? <img src={preview} alt="preview" className="w-full h-full object-cover"/>
//                 : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-xl">{form.name?.charAt(0)||'?'}</div>}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p className="text-[#2E4F5E] font-black text-sm mb-2">Profile Photo</p>
//               <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="img-upload"/>
//               <div className="flex gap-2 flex-wrap">
//                 <label htmlFor="img-upload"
//                   className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer border-2 transition-all ${uploading ? 'opacity-50 cursor-not-allowed border-[#D4D0C5] text-[#b0c4cc]' : 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px]'}`}>
//                   <IconUpload cls="w-3.5 h-3.5"/> {uploading ? 'Uploading…' : 'Upload'}
//                 </label>
//                 {preview && (
//                   <button type="button" onClick={() => { setForm(f => ({ ...f, imageUrl: '' })); setPreview('') }}
//                     className="px-3 py-1.5 rounded-xl text-xs font-black bg-white text-[#E05C42] border-2 border-[#E05C42] hover:bg-[#E05C42] hover:text-white transition-all">Remove</button>
//                 )}
//               </div>
//               {uploadError && <p className="text-[#E05C42] text-xs font-bold mt-1.5">{uploadError}</p>}
//               <p className="text-[#b0c4cc] text-[11px] mt-1">JPG, PNG · Max 5MB</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div><label className={lbl}>Full Name</label><input className={inp} value={form.name||''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}/></div>
//             <div><label className={lbl}>WhatsApp</label><input className={inp} value={form.whatsapp||''} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}/></div>
//           </div>

//           <div>
//             <label className={lbl}>Subjects</label>
//             <div className="flex flex-wrap gap-1.5 p-3 bg-white border-2 border-[#D4D0C5] rounded-xl max-h-28 overflow-y-auto">
//               {SUBJECTS.map(s => (
//                 <button key={s} type="button"
//                   onClick={() => setForm(f => ({ ...f, subjects: f.subjects?.includes(s) ? f.subjects.filter(x => x !== s) : [...(f.subjects||[]), s] }))}
//                   className={`px-2.5 py-1 rounded-full text-[11px] font-black border-2 transition-all ${form.subjects?.includes(s) ? 'bg-[#2E4F5E] text-white border-[#2E4F5E]' : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A]'}`}>
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>Experience (yrs)</label><input type="number" className={inp} value={form.experience||0} onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value)||0 }))}/></div>
//             <div>
//               <label className={lbl}>Mode</label>
//               <select className={inp} value={form.mode||'both'} onChange={e => setForm(f => ({ ...f, mode: e.target.value as ITutor['mode'] }))}>
//                 <option value="both">Both</option>
//                 <option value="online">Online Only</option>
//                 <option value="onsite">Home Visit Only</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div><label className={lbl}>City</label><input className={inp} value={form.city||''} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}/></div>
//             <div><label className={lbl}>Country</label><input className={inp} value={form.country||''} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}/></div>
//           </div>

//           <div><label className={lbl}>Education</label><input className={inp} value={form.education||''} onChange={e => setForm(f => ({ ...f, education: e.target.value }))}/></div>
//           <div><label className={lbl}>Bio</label><textarea rows={3} className={`${inp} resize-none`} value={form.bio||''} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}/></div>

//           <div className="flex gap-3 pt-2 border-t-2 border-dashed border-[#E8C86A]">
//             <button onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all mt-3">Cancel</button>
//             <button onClick={handleSave} disabled={saving||uploading}
//               className="flex-1 py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm mt-3">
//               {saving ? 'Saving…' : 'Save Changes'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    MOBILE TUTOR CARD
// ══════════════════════════════════════ */
// function TutorCard({ t, filter, onEdit, onDelete, onStatus }: {
//   t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
// }) {
//   const modeCfg = {
//     online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
//     onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
//     both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
//   }
//   const mode = modeCfg[t.mode||'both']

//   return (
//     <div className="bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[3px_3px_0_0_#D4D0C5] p-4 space-y-3">
//       {/* Top row */}
//       <div className="flex items-start gap-3">
//         <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//           {t.imageUrl
//             ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
//             : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black">{t.name?.charAt(0)||'?'}</div>}
//         </div>
//         <div className="flex-1 min-w-0">
//           <p className="text-[#2E4F5E] font-black text-[15px] leading-tight">{t.name}</p>
//           <p className="text-[#4a6a78] text-[12px] font-semibold truncate">{t.education||'—'}</p>
//           <p className="text-[#4a6a78] text-[12px] font-semibold mt-0.5">📍 {t.city}, {t.country}</p>
//         </div>
//         <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
//           <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
//           <span className="text-[#4a6a78] text-[11px] font-semibold">{t.experience} yr{t.experience!==1?'s':''}</span>
//         </div>
//       </div>

//       {/* Subjects */}
//       {t.subjects && t.subjects.length > 0 && (
//         <div className="flex flex-wrap gap-1.5">
//           {t.subjects.slice(0,4).map(s => (
//             <span key={s} className="px-2 py-0.5 bg-[#FFFDF7] border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
//           ))}
//           {t.subjects.length > 4 && (
//             <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects.length-4}</span>
//           )}
//         </div>
//       )}

//       {/* WhatsApp */}
//       <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
//         className="flex items-center gap-1.5 text-[#3A9E8F] text-[13px] font-black">
//         <IconWA cls="w-4 h-4 flex-shrink-0"/> {t.whatsapp}
//       </a>

//       {/* Action buttons */}
//       <div className="flex gap-2 pt-1 border-t-2 border-dashed border-[#E8C86A]/50">
//         {filter !== 'approved' && (
//           <button onClick={() => onStatus('approved')}
//             className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#3A9E8F] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//             <IconCheck cls="w-3.5 h-3.5"/> Approve
//           </button>
//         )}
//         {filter !== 'rejected' && (
//           <button onClick={() => onStatus('rejected')}
//             className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#E05C42] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//             <IconX cls="w-3.5 h-3.5"/> Reject
//           </button>
//         )}
//         <button onClick={onEdit}
//           className="px-3 py-2 bg-[#E8C86A]/30 hover:bg-[#E8C86A] text-[#2E4F5E] rounded-xl border-2 border-[#E8C86A] transition-all" title="Edit">
//           <IconEdit cls="w-4 h-4"/>
//         </button>
//         <button onClick={onDelete}
//           className="px-3 py-2 bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white text-[#E05C42] rounded-xl border-2 border-[#E05C42] transition-all" title="Delete">
//           <IconTrash cls="w-4 h-4"/>
//         </button>
//       </div>
//     </div>
//   )
// }

// /* ══════════════════════════════════════
//    DESKTOP TABLE ROW
// ══════════════════════════════════════ */
// function TutorRow({ t, filter, onEdit, onDelete, onStatus }: {
//   t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
// }) {
//   const modeCfg = {
//     online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
//     onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
//     both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
//   }
//   const mode = modeCfg[t.mode||'both']

//   return (
//     <tr className="group border-b-2 border-[#E8C86A]/20 hover:bg-[#FFFDF7] transition-colors">
//       <td className="px-5 py-4">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
//             {t.imageUrl ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
//               : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-sm">{t.name?.charAt(0)||'?'}</div>}
//           </div>
//           <div>
//             <p className="text-[#2E4F5E] font-black text-[13px] leading-tight">{t.name}</p>
//             <p className="text-[#4a6a78] text-[11px] font-semibold">{t.education||'—'}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-4 py-4 hidden md:table-cell">
//         <p className="text-[#2E4F5E] font-black text-[13px]">📍 {t.city}</p>
//         <p className="text-[#4a6a78] text-[11px] font-semibold">{t.country}</p>
//       </td>
//       <td className="px-4 py-4 hidden lg:table-cell">
//         <div className="flex flex-wrap gap-1">
//           {t.subjects?.slice(0,3).map(s => (
//             <span key={s} className="px-2 py-0.5 bg-white border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
//           ))}
//           {(t.subjects?.length||0) > 3 && (
//             <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects!.length-3}</span>
//           )}
//         </div>
//       </td>
//       <td className="px-4 py-4 hidden md:table-cell">
//         <span className={`inline-flex text-[10px] font-black px-2.5 py-1 rounded-full border-2 w-fit ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
//         <p className="text-[#4a6a78] text-[11px] font-semibold mt-1">{t.experience} yr{t.experience!==1?'s':''}</p>
//       </td>
//       <td className="px-4 py-4 hidden xl:table-cell">
//         <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
//           className="flex items-center gap-1.5 text-[#3A9E8F] hover:text-[#2d7a6e] text-[12px] font-black transition-colors">
//           <IconWA cls="w-3.5 h-3.5 flex-shrink-0"/> <span className="hover:underline">{t.whatsapp}</span>
//         </a>
//       </td>
//       <td className="px-5 py-4">
//         <div className="flex items-center justify-end gap-1.5">
//           {filter !== 'approved' && (
//             <button onClick={() => onStatus('approved')}
//               className="flex items-center gap-1 px-2.5 py-1.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//               <IconCheck cls="w-3 h-3"/> Approve
//             </button>
//           )}
//           {filter !== 'rejected' && (
//             <button onClick={() => onStatus('rejected')}
//               className="flex items-center gap-1 px-2.5 py-1.5 bg-[#E05C42] hover:bg-[#c44d36] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
//               <IconX cls="w-3 h-3"/> Reject
//             </button>
//           )}
//           <button onClick={onEdit} className="p-2 text-[#2E4F5E] bg-[#E8C86A]/30 hover:bg-[#E8C86A] rounded-lg border-2 border-[#E8C86A] transition-all" title="Edit">
//             <IconEdit cls="w-3.5 h-3.5"/>
//           </button>
//           <button onClick={onDelete} className="p-2 text-[#E05C42] bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white rounded-lg border-2 border-[#E05C42] transition-all" title="Delete">
//             <IconTrash cls="w-3.5 h-3.5"/>
//           </button>
//         </div>
//       </td>
//     </tr>
//   )
// }

// /* ══════════════════════════════════════
//    MAIN DASHBOARD
// ══════════════════════════════════════ */
// export default function AdminDashboard() {
//   const [tutors,       setTutors]    = useState<ITutor[]>([])
//   const [filter,       setFilter]    = useState<Filter>('pending')
//   const [loading,      setLoading]   = useState(true)
//   const [editingTutor, setEditing]   = useState<ITutor | null>(null)
//   const [showPassword, setShowPass]  = useState(false)
//   const [counts,       setCounts]    = useState({ pending: 0, approved: 0, rejected: 0 })
//   const [mobileMenu,   setMobileMenu]= useState(false)

//   async function fetchTutors(f = filter) {
//     setLoading(true)
//     try {
//       const [main, p, a, r] = await Promise.all([
//         fetch(`/api/admin/tutors?status=${f}`),
//         fetch('/api/admin/tutors?status=pending'),
//         fetch('/api/admin/tutors?status=approved'),
//         fetch('/api/admin/tutors?status=rejected'),
//       ])
//       if (main.ok) setTutors(await main.json())
//       const [pd, ad, rd] = await Promise.all([p.json(), a.json(), r.json()])
//       setCounts({ pending: pd.length, approved: ad.length, rejected: rd.length })
//     } catch (err) { console.error(err) }
//     finally { setLoading(false) }
//   }

//   useEffect(() => { fetchTutors(filter) }, [filter])

//   async function updateStatus(id: string, status: string) {
//     try {
//       await fetch(`/api/admin/tutors/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
//       fetchTutors(filter)
//     } catch (err) { console.error(err) }
//   }

//   async function deleteTutor(id: string) {
//     if (!confirm('Permanently delete this tutor?')) return
//     try { await fetch(`/api/admin/tutors/${id}`, { method: 'DELETE' }); fetchTutors(filter) }
//     catch (err) { console.error(err) }
//   }

//   async function logout() {
//     try { await fetch('/api/admin/logout', { method: 'POST' }) } catch {}
//     finally { window.location.href = '/admin/login' }
//   }

//   const total        = counts.pending + counts.approved + counts.rejected
//   const approvalRate = total > 0 ? Math.round((counts.approved / total) * 100) : 0

//   const navItems = [
//     { key: 'pending'  as Filter, label: 'Pending',  shortLabel: 'Pending',  Icon: IconClock, accentText: 'text-[#2E4F5E]', activeBg: 'bg-[#E8C86A]' },
//     { key: 'approved' as Filter, label: 'Approved', shortLabel: 'Approved', Icon: IconCheck, accentText: 'text-white',      activeBg: 'bg-[#3A9E8F]' },
//     { key: 'rejected' as Filter, label: 'Rejected', shortLabel: 'Rejected', Icon: IconX,     accentText: 'text-white',      activeBg: 'bg-[#E05C42]' },
//   ]

//   const filterCfg = {
//     pending:  { dot: 'bg-[#E8C86A]', badge: 'bg-[#E8C86A]/25 border-[#E8C86A] text-[#2E4F5E]' },
//     approved: { dot: 'bg-[#3A9E8F]', badge: 'bg-[#3A9E8F]/15 border-[#3A9E8F] text-[#2E4F5E]' },
//     rejected: { dot: 'bg-[#E05C42]', badge: 'bg-[#E05C42]/15 border-[#E05C42] text-[#E05C42]' },
//   }

//   return (
//     <div className="min-h-screen bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>

//       {/* ══════ MOBILE SLIDE-DOWN MENU ══════ */}
//       {mobileMenu && (
//         <div className="fixed inset-0 z-40 lg:hidden">
//           <div className="absolute inset-0 bg-[#2E4F5E]/60 backdrop-blur-sm" onClick={() => setMobileMenu(false)}/>
//           <div className="absolute top-0 left-0 w-72 h-full bg-[#2E4F5E] border-r-4 border-[#E8C86A] flex flex-col shadow-2xl">
//             <div className="flex items-center justify-between px-5 py-5 border-b-2 border-white/10">
//               <div className="flex items-center gap-2.5">
//                 <div className="w-9 h-9 rounded-xl bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
//                   <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
//                     <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                     <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-white font-black text-[16px] leading-tight">Learnova</p>
//                   <p className="text-[#E8C86A] text-[10px] font-bold">Admin Panel</p>
//                 </div>
//               </div>
//               <button onClick={() => setMobileMenu(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
//                 <IconClose cls="w-4 h-4"/>
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
//               <div className="grid grid-cols-3 gap-1.5">
//                 {navItems.map(({ key, activeBg, accentText }) => (
//                   <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
//                     className={`flex flex-col items-center p-2.5 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40` : 'bg-white/8 border-white/10'}`}>
//                     <span className={`text-lg font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
//                     <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
//                   </button>
//                 ))}
//               </div>
//               <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
//                 <div className="flex justify-between mb-1.5">
//                   <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
//                   <span className="text-white text-[12px] font-black">{approvalRate}%</span>
//                 </div>
//                 <div className="h-2 bg-white/15 rounded-full overflow-hidden">
//                   <div className="h-full bg-[#3A9E8F] rounded-full transition-all" style={{ width: `${approvalRate}%` }}/>
//                 </div>
//                 <p className="text-white/40 text-[10px] mt-1">{total} total tutors</p>
//               </div>
//             </div>

//             <nav className="flex-1 px-3 py-4">
//               <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
//               {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
//                 <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
//                   className={`w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30` : 'hover:bg-white/8 border-transparent'}`}>
//                   <div className="flex items-center gap-2.5">
//                     <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
//                     <span className={`text-[14px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
//                   </div>
//                   <span className={`min-w-[24px] text-center text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
//                 </button>
//               ))}
//             </nav>

//             <div className="px-3 pb-6 border-t-2 border-white/10 pt-4 space-y-1">
//               <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
//               <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[14px] font-bold transition-all">
//                 <IconExtLink cls="w-4 h-4"/> View Site
//               </a>
//               <button onClick={() => { setShowPass(true); setMobileMenu(false) }}
//                 className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[14px] font-bold transition-all text-left">
//                 <IconLock cls="w-4 h-4"/> Change Password
//               </button>
//               <button onClick={logout}
//                 className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#E05C42] hover:bg-[#E05C42]/15 rounded-xl text-[14px] font-bold transition-all text-left">
//                 <IconLogout cls="w-4 h-4"/> Sign Out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ══════ LAYOUT WRAPPER ══════ */}
//       <div className="flex min-h-screen">

//         {/* ══════ DESKTOP SIDEBAR ══════ */}
//         <aside className="hidden lg:flex w-[230px] flex-shrink-0 bg-[#2E4F5E] min-h-screen flex-col sticky top-0 h-screen border-r-4 border-[#E8C86A]">
//           <div className="px-5 py-5 border-b-2 border-white/10">
//             <div className="flex items-center gap-2.5">
//               <div className="w-9 h-9 rounded-xl bg-[#E8C86A] shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] flex items-center justify-center flex-shrink-0">
//                 <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
//                   <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                   <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-white font-black text-[16px] leading-tight">Learnova</p>
//                 <p className="text-[#E8C86A] text-[10px] font-bold tracking-wide">Admin Panel</p>
//               </div>
//             </div>
//           </div>

//           <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
//             <div className="grid grid-cols-3 gap-1.5">
//               {navItems.map(({ key, activeBg, accentText }) => (
//                 <button key={key} onClick={() => setFilter(key)}
//                   className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]` : 'bg-white/8 border-white/10 hover:bg-white/15'}`}>
//                   <span className={`text-[17px] font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
//                   <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
//                 </button>
//               ))}
//             </div>
//             <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
//               <div className="flex items-center justify-between mb-1.5">
//                 <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
//                 <span className="text-white text-[12px] font-black">{approvalRate}%</span>
//               </div>
//               <div className="h-2 bg-white/15 rounded-full overflow-hidden border border-white/10">
//                 <div className="h-full bg-[#3A9E8F] rounded-full transition-all duration-500" style={{ width: `${approvalRate}%` }}/>
//               </div>
//               <p className="text-white/40 text-[10px] mt-1.5">{total} total tutors</p>
//             </div>
//           </div>

//           <nav className="flex-1 px-3 py-4">
//             <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
//             {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
//               <button key={key} onClick={() => setFilter(key)}
//                 className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]` : 'hover:bg-white/8 border-transparent'}`}>
//                 <div className="flex items-center gap-2.5">
//                   <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
//                   <span className={`text-[13px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
//                 </div>
//                 <span className={`min-w-[22px] text-center text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
//               </button>
//             ))}
//           </nav>

//           <div className="px-3 pb-5 border-t-2 border-white/10 pt-4 space-y-0.5">
//             <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
//             <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[13px] font-bold transition-all border-2 border-transparent">
//               <IconExtLink cls="w-4 h-4"/> View Site
//             </a>
//             <button onClick={() => setShowPass(true)} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
//               <IconLock cls="w-4 h-4"/> Change Password
//             </button>
//             <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#E05C42] hover:bg-[#E05C42]/15 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
//               <IconLogout cls="w-4 h-4"/> Sign Out
//             </button>
//           </div>
//         </aside>

//         {/* ══════ MAIN ══════ */}
//         <main className="flex-1 min-w-0 flex flex-col">

//           {/* Topbar */}
//           <header className="bg-[#FFFDF7] border-b-2 border-[#E8C86A] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
//             <div className="flex items-center gap-3">
//               {/* Hamburger — mobile only */}
//               <button onClick={() => setMobileMenu(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#2E4F5E] text-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44] hover:shadow-none hover:translate-y-[1px] transition-all flex-shrink-0">
//                 <IconMenu cls="w-5 h-5"/>
//               </button>
//               {/* Logo — mobile only */}
//               <div className="lg:hidden flex items-center gap-2">
//                 <div className="w-7 h-7 rounded-lg bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
//                   <svg width="14" height="14" viewBox="0 0 38 38" fill="none">
//                     <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
//                     <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
//                 <span className="text-[#2E4F5E] font-black text-[15px]">Learnova</span>
//               </div>
//               {/* Desktop title */}
//               <div className="hidden lg:flex items-center gap-3">
//                 <div className={`w-2.5 h-6 rounded-full ${filterCfg[filter].dot}`}/>
//                 <div>
//                   <Eyebrow text="Learnova Admin"/>
//                   <h1 className="text-[#2E4F5E] font-black text-[18px] leading-tight capitalize -mt-0.5">{filter} Applications</h1>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               {/* Mobile filter badge — shows current tab */}
//               <div className="lg:hidden">
//                 <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
//                   <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
//                   {filter} · {loading ? '…' : counts[filter]}
//                 </span>
//               </div>
//               {/* Desktop badge */}
//               <span className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
//                 <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
//                 {loading ? '…' : tutors.length} {filter}
//               </span>
//             </div>
//           </header>

//           {/* Mobile tab strip */}
//           <div className="lg:hidden flex border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7] px-4 pt-3 gap-2 sticky top-[65px] z-20">
//             {navItems.map(({ key, label, Icon, activeBg, accentText }) => (
//               <button key={key} onClick={() => setFilter(key)}
//                 className={`flex-1 flex flex-col items-center gap-1 pb-2.5 rounded-t-xl px-1 transition-all border-b-4 ${filter===key ? `border-current ${activeBg} ${accentText}` : 'border-transparent text-[#4a6a78]'}`}>
//                 <Icon cls="w-4 h-4"/>
//                 <span className="text-[10px] font-black">{label}</span>
//                 <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${filter===key ? 'bg-white/30' : 'bg-[#D4D0C5]/50'}`}>{counts[key]}</span>
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <div className="flex-1 p-4 sm:p-6 pb-24 lg:pb-6">
//             {loading ? (
//               <div className="flex flex-col items-center justify-center py-32 gap-4">
//                 <div className="w-10 h-10 bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] flex items-center justify-center animate-bounce">
//                   <svg className="w-5 h-5 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
//                 </div>
//                 <p className="text-[#4a6a78] text-sm font-black">Loading applications…</p>
//               </div>
//             ) : tutors.length === 0 ? (
//               <div className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[4px_4px_0_0_#D4D0C5]">
//                 <div className="w-16 h-16 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4D0C5] flex items-center justify-center mb-4 text-3xl">📭</div>
//                 <p className="text-[#2E4F5E] font-black text-[16px]">No {filter} applications</p>
//                 <p className="text-[#4a6a78] text-sm font-semibold mt-1">Switch tabs to view others</p>
//               </div>
//             ) : (
//               <>
//                 {/* ── MOBILE: card list ── */}
//                 <div className="flex flex-col gap-3 lg:hidden">
//                   {tutors.map(t => (
//                     <TutorCard
//                       key={t._id as string} t={t} filter={filter}
//                       onEdit={() => setEditing(t)}
//                       onDelete={() => deleteTutor(t._id as string)}
//                       onStatus={s => updateStatus(t._id as string, s)}
//                     />
//                   ))}
//                 </div>

//                 {/* ── DESKTOP: table ── */}
//                 <div className="hidden lg:block bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden">
//                   <div className="bg-[#2E4F5E] px-5 py-3 flex items-center justify-between">
//                     <p className="text-[#E8C86A] text-[10px] font-black uppercase tracking-[0.2em]">All Tutors</p>
//                     <p className="text-white/50 text-[11px] font-semibold">{tutors.length} {tutors.length===1?'entry':'entries'}</p>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="w-full">
//                       <thead>
//                         <tr className="border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7]">
//                           <th className="px-5 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Tutor</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Location</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden lg:table-cell">Subjects</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Mode</th>
//                           <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden xl:table-cell">Contact</th>
//                           <th className="px-5 py-3 text-right text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tutors.map(t => (
//                           <TutorRow
//                             key={t._id as string} t={t} filter={filter}
//                             onEdit={() => setEditing(t)}
//                             onDelete={() => deleteTutor(t._id as string)}
//                             onStatus={s => updateStatus(t._id as string, s)}
//                           />
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <div className="px-5 py-3 border-t-2 border-[#E8C86A]/30 bg-[#FFFDF7] flex items-center justify-between">
//                     <p className="text-[#4a6a78] text-[11px] font-semibold">{tutors.length} {tutors.length===1?'result':'results'}</p>
//                     <p className="text-[#4a6a78] text-[11px] font-semibold capitalize">{filter} · Learnova</p>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>

//       {editingTutor && (
//         <EditModal tutor={editingTutor} onClose={() => setEditing(null)} onSave={() => { setEditing(null); fetchTutors(filter) }}/>
//       )}
//       {showPassword && <PasswordModal onClose={() => setShowPass(false)}/>}
//     </div>
//   )
// }






'use client'

import { useEffect, useState, useRef } from 'react'
import { ITutor } from '@/types'

type Filter = 'pending' | 'approved' | 'rejected'

const SUBJECTS = [
  'Mathematics','Physics','Chemistry','Biology','English','Urdu',
  'O Level','A Level','IELTS','TOEFL','Computer Science','Coding',
  'Economics','Accounting','Arabic','Quran','History','Geography',
]

async function uploadImageToImgBB(file: File): Promise<string> {
  const apiKey = process.env.NEXT_PUBLIC_IMGBB_KEY
  if (!apiKey) throw new Error('NEXT_PUBLIC_IMGBB_KEY missing in .env.local')
  const formData = new FormData()
  formData.append('image', file)
  const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, { method: 'POST', body: formData })
  const data = await res.json()
  if (!data.success) throw new Error('Upload failed')
  return data.data.url
}

const inp = `w-full bg-white border-2 border-[#D4D0C5] rounded-xl px-3.5 py-2.5 text-[#2E4F5E] placeholder:text-[#b0c4cc] text-sm font-semibold focus:outline-none focus:border-[#E8C86A] focus:ring-2 focus:ring-[#E8C86A]/30 transition-all`
const lbl = `block text-[#2E4F5E] text-[10px] font-black uppercase tracking-[0.2em] mb-1.5`

/* ════════ ICONS ════════ */
const IconClock   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12 6v6l4 2"/></svg>
const IconCheck   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
const IconX       = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
const IconEdit    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
const IconTrash   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
const IconLock    = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>
const IconLogout  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
const IconExtLink = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
const IconUpload  = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
const IconClose   = ({ cls='w-4 h-4' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
const IconWA      = ({ cls='w-4 h-4' }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.101 1.513 5.832L0 24l6.336-1.49A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.51-5.168-1.4l-.371-.22-3.763.885.919-3.665-.242-.38A9.938 9.938 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
const IconMenu    = ({ cls='w-5 h-5' }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>

function Eyebrow({ text, light=false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
      <span className={`text-[10px] font-black uppercase tracking-[0.22em] ${light ? 'text-[#E8C86A]' : 'text-[#C43D24]'}`}>{text}</span>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? 'bg-[#E8C86A]' : 'bg-[#E05C42]'}`}/>
    </div>
  )
}

/* ══════════════════════════════════════
   PASSWORD MODAL
══════════════════════════════════════ */
function PasswordModal({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState('')
  const [next, setNext]       = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); setError(''); setSuccess('')
    if (next !== confirm) return setError('Passwords do not match')
    if (next.length < 6)  return setError('Minimum 6 characters required')
    setLoading(true)
    try {
      const res  = await fetch('/api/admin/change-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: current, newPassword: next }),
      })
      const data = await res.json()
      if (!res.ok) setError(data.error || 'Failed')
      else setSuccess(`Done! Update .env.local:\nADMIN_PASSWORD=${data.newPassword}\nThen restart.`)
    } catch { setError('Server error') }
    finally { setLoading(false) }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
      <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-md border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
        {/* drag pill mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-[#D4D0C5] rounded-full"/>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
              <IconLock cls="w-4 h-4 text-[#2E4F5E]"/>
            </div>
            <div>
              <p className="text-white font-black text-sm leading-tight">Change Password</p>
              <p className="text-[#E8C86A] text-[10px] font-bold">Update admin credentials</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
            <IconClose cls="w-4 h-4"/>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div><label className={lbl}>Current Password</label><input type="password" className={inp} value={current} onChange={e => setCurrent(e.target.value)} required placeholder="Enter current password"/></div>
          <div><label className={lbl}>New Password</label><input type="password" className={inp} value={next} onChange={e => setNext(e.target.value)} required placeholder="Min 6 characters"/></div>
          <div><label className={lbl}>Confirm Password</label><input type="password" className={inp} value={confirm} onChange={e => setConfirm(e.target.value)} required placeholder="Repeat new password"/></div>
          {error   && <div className="flex items-center gap-2 bg-[#E05C42]/10 border-2 border-[#E05C42] text-[#C43D24] text-[13px] font-bold px-4 py-3 rounded-xl">⚠️ {error}</div>}
          {success && <div className="bg-[#3A9E8F]/10 border-2 border-[#3A9E8F] text-[#2E4F5E] text-[12px] font-semibold px-4 py-3 rounded-xl whitespace-pre-line leading-relaxed">✓ {success}</div>}
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all">Cancel</button>
            <button type="submit" disabled={loading} className="flex-1 py-3 bg-[#E05C42] text-white font-black rounded-xl border-2 border-[#a83c2a] shadow-[0_3px_0_0_#a83c2a] hover:shadow-[0_1px_0_0_#a83c2a] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm">
              {loading ? 'Updating…' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   EDIT MODAL
══════════════════════════════════════ */
function EditModal({ tutor, onClose, onSave }: { tutor: ITutor; onClose: () => void; onSave: () => void }) {
  const [form,        setForm]        = useState({ ...tutor })
  const [saving,      setSaving]      = useState(false)
  const [uploading,   setUploading]   = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [preview,     setPreview]     = useState<string>(tutor.imageUrl || '')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]; if (!file) return
    if (!file.type.startsWith('image/')) { setUploadError('Images only'); return }
    if (file.size > 5 * 1024 * 1024)    { setUploadError('Max 5MB'); return }
    setUploadError(''); setUploading(true)
    const reader = new FileReader()
    reader.onload = ev => setPreview(ev.target?.result as string)
    reader.readAsDataURL(file)
    try {
      const url = await uploadImageToImgBB(file)
      setForm(f => ({ ...f, imageUrl: url })); setPreview(url)
    } catch { setUploadError('Upload failed — check IMGBB key'); setPreview(tutor.imageUrl || '') }
    finally { setUploading(false) }
  }

  async function handleSave() {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/tutors/${tutor._id}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      onSave(); onClose()
    } catch { alert('Failed to save changes') }
    finally { setSaving(false) }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#2E4F5E]/70 backdrop-blur-sm">
      <div className="bg-[#FFFDF7] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto border-2 border-[#2E4F5E] shadow-[0_-4px_0_0_#2E4F5E] sm:shadow-[8px_8px_0_0_#2E4F5E]">
        {/* drag pill */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-white/30 rounded-full"/>
        </div>
        {/* Header sticky */}
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[#E8C86A] sticky top-0 bg-[#2E4F5E] rounded-t-3xl sm:rounded-t-2xl z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#E8C86A] rounded-xl flex items-center justify-center">
              <IconEdit cls="w-4 h-4 text-[#2E4F5E]"/>
            </div>
            <div>
              <p className="text-white font-black text-sm leading-tight">Edit Tutor</p>
              <p className="text-[#E8C86A] text-[10px] font-bold">{tutor.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
            <IconClose cls="w-4 h-4"/>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Photo */}
          <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-[#D4D0C5]">
            <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
              {preview ? <img src={preview} alt="preview" className="w-full h-full object-cover"/>
                : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-xl">{form.name?.charAt(0)||'?'}</div>}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#2E4F5E] font-black text-sm mb-2">Profile Photo</p>
              <input ref={fileRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="img-upload"/>
              <div className="flex gap-2 flex-wrap">
                <label htmlFor="img-upload"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black cursor-pointer border-2 transition-all ${uploading ? 'opacity-50 cursor-not-allowed border-[#D4D0C5] text-[#b0c4cc]' : 'bg-[#E8C86A] text-[#2E4F5E] border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px]'}`}>
                  <IconUpload cls="w-3.5 h-3.5"/> {uploading ? 'Uploading…' : 'Upload'}
                </label>
                {preview && (
                  <button type="button" onClick={() => { setForm(f => ({ ...f, imageUrl: '' })); setPreview('') }}
                    className="px-3 py-1.5 rounded-xl text-xs font-black bg-white text-[#C43D24] border-2 border-[#E05C42] hover:bg-[#E05C42] hover:text-white transition-all">Remove</button>
                )}
              </div>
              {uploadError && <p className="text-[#C43D24] text-xs font-bold mt-1.5">{uploadError}</p>}
              <p className="text-[#b0c4cc] text-[11px] mt-1">JPG, PNG · Max 5MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><label className={lbl}>Full Name</label><input className={inp} value={form.name||''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}/></div>
            <div><label className={lbl}>WhatsApp</label><input className={inp} value={form.whatsapp||''} onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}/></div>
          </div>

          <div>
            <label className={lbl}>Subjects</label>
            <div className="flex flex-wrap gap-1.5 p-3 bg-white border-2 border-[#D4D0C5] rounded-xl max-h-28 overflow-y-auto">
              {SUBJECTS.map(s => (
                <button key={s} type="button"
                  onClick={() => setForm(f => ({ ...f, subjects: f.subjects?.includes(s) ? f.subjects.filter(x => x !== s) : [...(f.subjects||[]), s] }))}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-black border-2 transition-all ${form.subjects?.includes(s) ? 'bg-[#2E4F5E] text-white border-[#2E4F5E]' : 'bg-white text-[#4a6a78] border-[#D4D0C5] hover:border-[#E8C86A]'}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div><label className={lbl}>Experience (yrs)</label><input type="number" className={inp} value={form.experience||0} onChange={e => setForm(f => ({ ...f, experience: parseInt(e.target.value)||0 }))}/></div>
            <div>
              <label className={lbl}>Mode</label>
              <select className={inp} value={form.mode||'both'} onChange={e => setForm(f => ({ ...f, mode: e.target.value as ITutor['mode'] }))}>
                <option value="both">Both</option>
                <option value="online">Online Only</option>
                <option value="onsite">Home Visit Only</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div><label className={lbl}>City</label><input className={inp} value={form.city||''} onChange={e => setForm(f => ({ ...f, city: e.target.value }))}/></div>
            <div><label className={lbl}>Country</label><input className={inp} value={form.country||''} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}/></div>
          </div>

          <div><label className={lbl}>Education</label><input className={inp} value={form.education||''} onChange={e => setForm(f => ({ ...f, education: e.target.value }))}/></div>
          <div><label className={lbl}>Bio</label><textarea rows={3} className={`${inp} resize-none`} value={form.bio||''} onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}/></div>

          <div className="flex gap-3 pt-2 border-t-2 border-dashed border-[#E8C86A]">
            <button onClick={onClose} className="flex-1 py-3 border-2 border-[#D4D0C5] text-[#2E4F5E] font-black hover:bg-[#E8C86A]/20 rounded-xl text-sm transition-all mt-3">Cancel</button>
            <button onClick={handleSave} disabled={saving||uploading}
              className="flex-1 py-3 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white font-black rounded-xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] hover:shadow-[1px_1px_0_0_#2E4F5E] hover:translate-y-[2px] disabled:opacity-50 transition-all text-sm mt-3">
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   MOBILE TUTOR CARD
══════════════════════════════════════ */
function TutorCard({ t, filter, onEdit, onDelete, onStatus }: {
  t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
}) {
  const modeCfg = {
    online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
    onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
    both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
  }
  const mode = modeCfg[t.mode||'both']

  return (
    <div className="bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[3px_3px_0_0_#D4D0C5] p-4 space-y-3">
      {/* Top row */}
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
          {t.imageUrl
            ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
            : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black">{t.name?.charAt(0)||'?'}</div>}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#2E4F5E] font-black text-[15px] leading-tight">{t.name}</p>
          <p className="text-[#4a6a78] text-[12px] font-semibold truncate">{t.education||'—'}</p>
          <p className="text-[#4a6a78] text-[12px] font-semibold mt-0.5">📍 {t.city}, {t.country}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
          <span className="text-[#4a6a78] text-[11px] font-semibold">{t.experience} yr{t.experience!==1?'s':''}</span>
        </div>
      </div>

      {/* Subjects */}
      {t.subjects && t.subjects.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {t.subjects.slice(0,4).map(s => (
            <span key={s} className="px-2 py-0.5 bg-[#FFFDF7] border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
          ))}
          {t.subjects.length > 4 && (
            <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects.length-4}</span>
          )}
        </div>
      )}

      {/* WhatsApp */}
      <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[#3A9E8F] text-[13px] font-black">
        <IconWA cls="w-4 h-4 flex-shrink-0"/> {t.whatsapp}
      </a>

      {/* Action buttons */}
      <div className="flex gap-2 pt-1 border-t-2 border-dashed border-[#E8C86A]/50">
        {filter !== 'approved' && (
          <button onClick={() => onStatus('approved')}
            className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#3A9E8F] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
            <IconCheck cls="w-3.5 h-3.5"/> Approve
          </button>
        )}
        {filter !== 'rejected' && (
          <button onClick={() => onStatus('rejected')}
            className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#E05C42] text-white text-[12px] font-black rounded-xl border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
            <IconX cls="w-3.5 h-3.5"/> Reject
          </button>
        )}
        <button onClick={onEdit}
          className="px-3 py-2 bg-[#E8C86A]/30 hover:bg-[#E8C86A] text-[#2E4F5E] rounded-xl border-2 border-[#E8C86A] transition-all" title="Edit">
          <IconEdit cls="w-4 h-4"/>
        </button>
        <button onClick={onDelete}
          className="px-3 py-2 bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white text-[#C43D24] rounded-xl border-2 border-[#E05C42] transition-all" title="Delete">
          <IconTrash cls="w-4 h-4"/>
        </button>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   DESKTOP TABLE ROW
══════════════════════════════════════ */
function TutorRow({ t, filter, onEdit, onDelete, onStatus }: {
  t: ITutor; filter: Filter; onEdit: () => void; onDelete: () => void; onStatus: (s: string) => void
}) {
  const modeCfg = {
    online: { label: 'Online',     bg: 'bg-[#3A9E8F]/15', text: 'text-[#2d7a6e]', border: 'border-[#3A9E8F]' },
    onsite: { label: 'Home Visit', bg: 'bg-[#E8C86A]/20',  text: 'text-[#8a6a1a]', border: 'border-[#E8C86A]' },
    both:   { label: 'Both',       bg: 'bg-[#E8934A]/15',  text: 'text-[#8a4a1a]', border: 'border-[#E8934A]' },
  }
  const mode = modeCfg[t.mode||'both']

  return (
    <tr className="group border-b-2 border-[#E8C86A]/20 hover:bg-[#FFFDF7] transition-colors">
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] flex-shrink-0">
            {t.imageUrl ? <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover"/>
              : <div className="w-full h-full flex items-center justify-center bg-[#E8C86A] text-[#2E4F5E] font-black text-sm">{t.name?.charAt(0)||'?'}</div>}
          </div>
          <div>
            <p className="text-[#2E4F5E] font-black text-[13px] leading-tight">{t.name}</p>
            <p className="text-[#4a6a78] text-[11px] font-semibold">{t.education||'—'}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 hidden md:table-cell">
        <p className="text-[#2E4F5E] font-black text-[13px]">📍 {t.city}</p>
        <p className="text-[#4a6a78] text-[11px] font-semibold">{t.country}</p>
      </td>
      <td className="px-4 py-4 hidden lg:table-cell">
        <div className="flex flex-wrap gap-1">
          {t.subjects?.slice(0,3).map(s => (
            <span key={s} className="px-2 py-0.5 bg-white border-2 border-[#D4D0C5] text-[#2E4F5E] text-[10px] font-black rounded-full">{s}</span>
          ))}
          {(t.subjects?.length||0) > 3 && (
            <span className="px-2 py-0.5 bg-[#E8C86A]/25 border-2 border-[#E8C86A] text-[#2E4F5E] text-[10px] font-black rounded-full">+{t.subjects!.length-3}</span>
          )}
        </div>
      </td>
      <td className="px-4 py-4 hidden md:table-cell">
        <span className={`inline-flex text-[10px] font-black px-2.5 py-1 rounded-full border-2 w-fit ${mode.bg} ${mode.text} ${mode.border}`}>{mode.label}</span>
        <p className="text-[#4a6a78] text-[11px] font-semibold mt-1">{t.experience} yr{t.experience!==1?'s':''}</p>
      </td>
      <td className="px-4 py-4 hidden xl:table-cell">
        <a href={`https://wa.me/${t.whatsapp?.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#3A9E8F] hover:text-[#2d7a6e] text-[12px] font-black transition-colors">
          <IconWA cls="w-3.5 h-3.5 flex-shrink-0"/> <span className="hover:underline">{t.whatsapp}</span>
        </a>
      </td>
      <td className="px-5 py-4">
        <div className="flex items-center justify-end gap-1.5">
          {filter !== 'approved' && (
            <button onClick={() => onStatus('approved')}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-[#3A9E8F] hover:bg-[#2d7a6e] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
              <IconCheck cls="w-3 h-3"/> Approve
            </button>
          )}
          {filter !== 'rejected' && (
            <button onClick={() => onStatus('rejected')}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-[#E05C42] hover:bg-[#c44d36] text-white text-[11px] font-black rounded-lg border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#2E4F5E] hover:shadow-none hover:translate-y-[1px] transition-all">
              <IconX cls="w-3 h-3"/> Reject
            </button>
          )}
          <button onClick={onEdit} className="p-2 text-[#2E4F5E] bg-[#E8C86A]/30 hover:bg-[#E8C86A] rounded-lg border-2 border-[#E8C86A] transition-all" title="Edit">
            <IconEdit cls="w-3.5 h-3.5"/>
          </button>
          <button onClick={onDelete} className="p-2 text-[#C43D24] bg-[#E05C42]/10 hover:bg-[#E05C42] hover:text-white rounded-lg border-2 border-[#E05C42] transition-all" title="Delete">
            <IconTrash cls="w-3.5 h-3.5"/>
          </button>
        </div>
      </td>
    </tr>
  )
}

/* ══════════════════════════════════════
   MAIN DASHBOARD
══════════════════════════════════════ */
export default function AdminDashboard() {
  const [tutors,       setTutors]    = useState<ITutor[]>([])
  const [filter,       setFilter]    = useState<Filter>('pending')
  const [loading,      setLoading]   = useState(true)
  const [editingTutor, setEditing]   = useState<ITutor | null>(null)
  const [showPassword, setShowPass]  = useState(false)
  const [counts,       setCounts]    = useState({ pending: 0, approved: 0, rejected: 0 })
  const [mobileMenu,   setMobileMenu]= useState(false)

  async function fetchTutors(f = filter) {
    setLoading(true)
    try {
      const [main, p, a, r] = await Promise.all([
        fetch(`/api/admin/tutors?status=${f}`),
        fetch('/api/admin/tutors?status=pending'),
        fetch('/api/admin/tutors?status=approved'),
        fetch('/api/admin/tutors?status=rejected'),
      ])
      if (main.ok) setTutors(await main.json())
      const [pd, ad, rd] = await Promise.all([p.json(), a.json(), r.json()])
      setCounts({ pending: pd.length, approved: ad.length, rejected: rd.length })
    } catch (err) { console.error(err) }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchTutors(filter) }, [filter])

  async function updateStatus(id: string, status: string) {
    try {
      await fetch(`/api/admin/tutors/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) })
      fetchTutors(filter)
    } catch (err) { console.error(err) }
  }

  async function deleteTutor(id: string) {
    if (!confirm('Permanently delete this tutor?')) return
    try { await fetch(`/api/admin/tutors/${id}`, { method: 'DELETE' }); fetchTutors(filter) }
    catch (err) { console.error(err) }
  }

  async function logout() {
    try { await fetch('/api/admin/logout', { method: 'POST' }) } catch {}
    finally { window.location.href = '/admin/login' }
  }

  const total        = counts.pending + counts.approved + counts.rejected
  const approvalRate = total > 0 ? Math.round((counts.approved / total) * 100) : 0

  const navItems = [
    { key: 'pending'  as Filter, label: 'Pending',  shortLabel: 'Pending',  Icon: IconClock, accentText: 'text-[#2E4F5E]', activeBg: 'bg-[#E8C86A]' },
    { key: 'approved' as Filter, label: 'Approved', shortLabel: 'Approved', Icon: IconCheck, accentText: 'text-white',      activeBg: 'bg-[#3A9E8F]' },
    { key: 'rejected' as Filter, label: 'Rejected', shortLabel: 'Rejected', Icon: IconX,     accentText: 'text-white',      activeBg: 'bg-[#E05C42]' },
  ]

  const filterCfg = {
    pending:  { dot: 'bg-[#E8C86A]', badge: 'bg-[#E8C86A]/25 border-[#E8C86A] text-[#2E4F5E]' },
    approved: { dot: 'bg-[#3A9E8F]', badge: 'bg-[#3A9E8F]/15 border-[#3A9E8F] text-[#2E4F5E]' },
    rejected: { dot: 'bg-[#E05C42]', badge: 'bg-[#E05C42]/15 border-[#E05C42] text-[#C43D24]' },
  }

  return (
    <div className="min-h-screen bg-[#FFFDF7]" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ══════ MOBILE SLIDE-DOWN MENU ══════ */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[#2E4F5E]/60 backdrop-blur-sm" onClick={() => setMobileMenu(false)}/>
          <div className="absolute top-0 left-0 w-72 h-full bg-[#2E4F5E] border-r-4 border-[#E8C86A] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-5 border-b-2 border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
                    <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-black text-[16px] leading-tight">Avenfield Tutors</p>
                  <p className="text-[#E8C86A] text-[10px] font-bold">Admin Panel</p>
                </div>
              </div>
              <button onClick={() => setMobileMenu(false)} className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 hover:bg-[#E05C42] text-white transition-all">
                <IconClose cls="w-4 h-4"/>
              </button>
            </div>

            {/* Stats */}
            <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                {navItems.map(({ key, activeBg, accentText }) => (
                  <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
                    className={`flex flex-col items-center p-2.5 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40` : 'bg-white/8 border-white/10'}`}>
                    <span className={`text-lg font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
                    <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
                  </button>
                ))}
              </div>
              <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
                <div className="flex justify-between mb-1.5">
                  <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
                  <span className="text-white text-[12px] font-black">{approvalRate}%</span>
                </div>
                <div className="h-2 bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3A9E8F] rounded-full transition-all" style={{ width: `${approvalRate}%` }}/>
                </div>
                <p className="text-white/40 text-[10px] mt-1">{total} total tutors</p>
              </div>
            </div>

            <nav className="flex-1 px-3 py-4">
              <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
              {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
                <button key={key} onClick={() => { setFilter(key); setMobileMenu(false) }}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-3 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30` : 'hover:bg-white/8 border-transparent'}`}>
                  <div className="flex items-center gap-2.5">
                    <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
                    <span className={`text-[14px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
                  </div>
                  <span className={`min-w-[24px] text-center text-[10px] font-black px-2 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
                </button>
              ))}
            </nav>

            <div className="px-3 pb-6 border-t-2 border-white/10 pt-4 space-y-1">
              <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
              <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[14px] font-bold transition-all">
                <IconExtLink cls="w-4 h-4"/> View Site
              </a>
              <button onClick={() => { setShowPass(true); setMobileMenu(false) }}
                className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[14px] font-bold transition-all text-left">
                <IconLock cls="w-4 h-4"/> Change Password
              </button>
              <button onClick={logout}
                className="w-full flex items-center gap-2.5 px-3 py-3 text-white/60 hover:text-[#C43D24] hover:bg-[#E05C42]/15 rounded-xl text-[14px] font-bold transition-all text-left">
                <IconLogout cls="w-4 h-4"/> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════ LAYOUT WRAPPER ══════ */}
      <div className="flex min-h-screen">

        {/* ══════ DESKTOP SIDEBAR ══════ */}
        <aside className="hidden lg:flex w-[230px] flex-shrink-0 bg-[#2E4F5E] min-h-screen flex-col sticky top-0 h-screen border-r-4 border-[#E8C86A]">
          <div className="px-5 py-5 border-b-2 border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#E8C86A] shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 38 38" fill="none">
                  <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-black text-[16px] leading-tight">Avenfield Tutors</p>
                <p className="text-[#E8C86A] text-[10px] font-bold tracking-wide">Admin Panel</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 border-b-2 border-white/10 space-y-2">
            <div className="grid grid-cols-3 gap-1.5">
              {navItems.map(({ key, activeBg, accentText }) => (
                <button key={key} onClick={() => setFilter(key)}
                  className={`flex flex-col items-center p-2 rounded-xl border-2 transition-all ${filter===key ? `${activeBg} border-white/40 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]` : 'bg-white/8 border-white/10 hover:bg-white/15'}`}>
                  <span className={`text-[17px] font-black leading-none ${filter===key ? accentText : 'text-white'}`}>{counts[key]}</span>
                  <span className={`text-[9px] font-bold mt-0.5 capitalize ${filter===key ? accentText : 'text-white/50'}`}>{key}</span>
                </button>
              ))}
            </div>
            <div className="bg-white/8 rounded-xl p-3 border-2 border-white/10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#E8C86A] text-[10px] font-black uppercase tracking-widest">Approval Rate</span>
                <span className="text-white text-[12px] font-black">{approvalRate}%</span>
              </div>
              <div className="h-2 bg-white/15 rounded-full overflow-hidden border border-white/10">
                <div className="h-full bg-[#3A9E8F] rounded-full transition-all duration-500" style={{ width: `${approvalRate}%` }}/>
              </div>
              <p className="text-white/40 text-[10px] mt-1.5">{total} total tutors</p>
            </div>
          </div>

          <nav className="flex-1 px-3 py-4">
            <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Applications</p>
            {navItems.map(({ key, label, Icon, accentText, activeBg }) => (
              <button key={key} onClick={() => setFilter(key)}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl mb-1 transition-all text-left border-2 ${filter===key ? `${activeBg} border-white/30 shadow-[2px_2px_0_0_rgba(0,0,0,0.15)]` : 'hover:bg-white/8 border-transparent'}`}>
                <div className="flex items-center gap-2.5">
                  <span className={filter===key ? accentText : 'text-white/50'}><Icon cls="w-4 h-4"/></span>
                  <span className={`text-[13px] font-black ${filter===key ? accentText : 'text-white/70'}`}>{label}</span>
                </div>
                <span className={`min-w-[22px] text-center text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 ${filter===key ? `${accentText} bg-white/25 border-white/30` : 'text-white/50 bg-white/10 border-white/10'}`}>{counts[key]}</span>
              </button>
            ))}
          </nav>

          <div className="px-3 pb-5 border-t-2 border-white/10 pt-4 space-y-0.5">
            <p className="text-[#E8C86A]/60 text-[9px] font-black uppercase tracking-[0.22em] px-2 mb-2">Settings</p>
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/8 rounded-xl text-[13px] font-bold transition-all border-2 border-transparent">
              <IconExtLink cls="w-4 h-4"/> View Site
            </a>
            <button onClick={() => setShowPass(true)} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#E8C86A] hover:bg-[#E8C86A]/10 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
              <IconLock cls="w-4 h-4"/> Change Password
            </button>
            <button onClick={logout} className="w-full flex items-center gap-2.5 px-3 py-2.5 text-white/60 hover:text-[#C43D24] hover:bg-[#E05C42]/15 rounded-xl text-[13px] font-bold transition-all text-left border-2 border-transparent">
              <IconLogout cls="w-4 h-4"/> Sign Out
            </button>
          </div>
        </aside>

        {/* ══════ MAIN ══════ */}
        <main className="flex-1 min-w-0 flex flex-col">

          {/* Topbar */}
          <header className="bg-[#FFFDF7] border-b-2 border-[#E8C86A] px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-3">
              {/* Hamburger — mobile only */}
              <button onClick={() => setMobileMenu(true)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-[#2E4F5E] text-white border-2 border-[#2E4F5E] shadow-[2px_2px_0_0_#1a3a44] hover:shadow-none hover:translate-y-[1px] transition-all flex-shrink-0">
                <IconMenu cls="w-5 h-5"/>
              </button>
              {/* Logo — mobile only */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E8C86A] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 38 38" fill="none">
                    <path d="M19 27V13" stroke="#2E4F5E" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M11 13.5C13.5 13 16.5 13.5 19 15C21.5 13.5 24.5 13 27 13.5V26C24.5 25.5 21.5 26 19 27.5C16.5 26 13.5 25.5 11 26V13.5Z" fill="#3A9E8F" stroke="#2E4F5E" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-[#2E4F5E] font-black text-[15px]">Avenfield Tutors</span>
              </div>
              {/* Desktop title */}
              <div className="hidden lg:flex items-center gap-3">
                <div className={`w-2.5 h-6 rounded-full ${filterCfg[filter].dot}`}/>
                <div>
                  <Eyebrow text="Avenfield Tutors Admin"/>
                  <h1 className="text-[#2E4F5E] font-black text-[18px] leading-tight capitalize -mt-0.5">{filter} Applications</h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Mobile filter badge — shows current tab */}
              <div className="lg:hidden">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
                  {filter} · {loading ? '…' : counts[filter]}
                </span>
              </div>
              {/* Desktop badge */}
              <span className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black border-2 ${filterCfg[filter].badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${filterCfg[filter].dot}`}/>
                {loading ? '…' : tutors.length} {filter}
              </span>
            </div>
          </header>

          {/* Mobile tab strip */}
          <div className="lg:hidden flex border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7] px-4 pt-3 gap-2 sticky top-[65px] z-20">
            {navItems.map(({ key, label, Icon, activeBg, accentText }) => (
              <button key={key} onClick={() => setFilter(key)}
                className={`flex-1 flex flex-col items-center gap-1 pb-2.5 rounded-t-xl px-1 transition-all border-b-4 ${filter===key ? `border-current ${activeBg} ${accentText}` : 'border-transparent text-[#4a6a78]'}`}>
                <Icon cls="w-4 h-4"/>
                <span className="text-[10px] font-black">{label}</span>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${filter===key ? 'bg-white/30' : 'bg-[#D4D0C5]/50'}`}>{counts[key]}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-6 pb-24 lg:pb-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <div className="w-10 h-10 bg-[#E8C86A] rounded-2xl border-2 border-[#2E4F5E] shadow-[3px_3px_0_0_#2E4F5E] flex items-center justify-center animate-bounce">
                  <svg className="w-5 h-5 text-[#2E4F5E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
                <p className="text-[#4a6a78] text-sm font-black">Loading applications…</p>
              </div>
            ) : tutors.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-32 bg-white rounded-2xl border-2 border-[#D4D0C5] shadow-[4px_4px_0_0_#D4D0C5]">
                <div className="w-16 h-16 bg-[#FFFDF7] rounded-2xl border-2 border-[#D4D0C5] flex items-center justify-center mb-4 text-3xl">📭</div>
                <p className="text-[#2E4F5E] font-black text-[16px]">No {filter} applications</p>
                <p className="text-[#4a6a78] text-sm font-semibold mt-1">Switch tabs to view others</p>
              </div>
            ) : (
              <>
                {/* ── MOBILE: card list ── */}
                <div className="flex flex-col gap-3 lg:hidden">
                  {tutors.map(t => (
                    <TutorCard
                      key={t._id as string} t={t} filter={filter}
                      onEdit={() => setEditing(t)}
                      onDelete={() => deleteTutor(t._id as string)}
                      onStatus={s => updateStatus(t._id as string, s)}
                    />
                  ))}
                </div>

                {/* ── DESKTOP: table ── */}
                <div className="hidden lg:block bg-white rounded-2xl border-2 border-[#2E4F5E] shadow-[4px_4px_0_0_#2E4F5E] overflow-hidden">
                  <div className="bg-[#2E4F5E] px-5 py-3 flex items-center justify-between">
                    <p className="text-[#E8C86A] text-[10px] font-black uppercase tracking-[0.2em]">All Tutors</p>
                    <p className="text-white/50 text-[11px] font-semibold">{tutors.length} {tutors.length===1?'entry':'entries'}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-[#E8C86A]/30 bg-[#FFFDF7]">
                          <th className="px-5 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Tutor</th>
                          <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Location</th>
                          <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden lg:table-cell">Subjects</th>
                          <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden md:table-cell">Mode</th>
                          <th className="px-4 py-3 text-left text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em] hidden xl:table-cell">Contact</th>
                          <th className="px-5 py-3 text-right text-[10px] font-black text-[#2E4F5E] uppercase tracking-[0.18em]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tutors.map(t => (
                          <TutorRow
                            key={t._id as string} t={t} filter={filter}
                            onEdit={() => setEditing(t)}
                            onDelete={() => deleteTutor(t._id as string)}
                            onStatus={s => updateStatus(t._id as string, s)}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-5 py-3 border-t-2 border-[#E8C86A]/30 bg-[#FFFDF7] flex items-center justify-between">
                    <p className="text-[#4a6a78] text-[11px] font-semibold">{tutors.length} {tutors.length===1?'result':'results'}</p>
                    <p className="text-[#4a6a78] text-[11px] font-semibold capitalize">{filter} · Avenfield Tutors</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {editingTutor && (
        <EditModal tutor={editingTutor} onClose={() => setEditing(null)} onSave={() => { setEditing(null); fetchTutors(filter) }}/>
      )}
      {showPassword && <PasswordModal onClose={() => setShowPass(false)}/>}
    </div>
  )
}