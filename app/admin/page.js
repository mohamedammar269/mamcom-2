'use client'
// app/admin/page.js
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function AdminPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [ceremonies, setCeremonies] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ titre: '', contenu: '', date: '', badge: 'Cérémonie' })
  const [imageFile, setImageFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login')
  }, [status, router])

  useEffect(() => {
    fetchCeremonies()
  }, [])

  const fetchCeremonies = async () => {
    const res = await fetch('/api/ceremonies')
    const data = await res.json()
    setCeremonies(data)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setPreview(URL.createObjectURL(file))
  }

  const resetForm = () => {
    setForm({ titre: '', contenu: '', date: '', badge: 'Cérémonie' })
    setImageFile(null)
    setPreview(null)
    setEditItem(null)
    setShowForm(false)
  }

  const handleEdit = (item) => {
    setEditItem(item)
    setForm({ titre: item.titre, contenu: item.contenu, date: item.date, badge: item.badge })
    setPreview(item.imageUrl)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    if (!form.titre || !form.contenu || !form.date) {
      setMsg({ type: 'error', text: 'Remplis tous les champs.' })
      return
    }
    if (!editItem && !imageFile) {
      setMsg({ type: 'error', text: 'Sélectionne une image.' })
      return
    }

    setLoading(true)
    const fd = new FormData()
    fd.append('titre', form.titre)
    fd.append('contenu', form.contenu)
    fd.append('date', form.date)
    fd.append('badge', form.badge)
    if (imageFile) fd.append('image', imageFile)

    const url = editItem ? `/api/ceremonies/${editItem.id}` : '/api/ceremonies'
    const method = editItem ? 'PUT' : 'POST'

    const res = await fetch(url, { method, body: fd })
    const data = await res.json()
    setLoading(false)

    if (res.ok) {
      setMsg({ type: 'success', text: editItem ? 'Cérémonie modifiée !' : 'Cérémonie ajoutée !' })
      resetForm()
      fetchCeremonies()
    } else {
      setMsg({ type: 'error', text: data.error || 'Erreur.' })
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cette cérémonie ?')) return
    await fetch(`/api/ceremonies/${id}`, { method: 'DELETE' })
    fetchCeremonies()
  }

  if (status === 'loading') return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Chargement...</div>
  if (!session) return null

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '2px solid #FF6B00', padding: '0 5%', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, fontWeight: 800 }}>
          <span style={{ color: '#FF6B00' }}>MAM</span><span style={{ color: '#1A6FD4' }}>com</span>
          <span style={{ fontSize: 12, color: '#868E96', fontWeight: 400, marginLeft: 8 }}>Admin</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="/" target="_blank" style={{ fontSize: 13, color: '#1A6FD4', fontFamily: 'Poppins, sans-serif' }}>← Voir le site</a>
          <button onClick={() => signOut({ callbackUrl: '/admin/login' })}
            style={{ padding: '8px 16px', background: '#212529', color: '#fff', border: 'none', borderRadius: 8, fontFamily: 'Poppins, sans-serif', fontSize: 13, cursor: 'pointer' }}>
            Déconnexion
          </button>
        </div>
      </div>

      <div style={{ padding: '40px 5%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 24, fontWeight: 800, color: '#212529' }}>
            Cérémonies <span style={{ color: '#FF6B00' }}>({ceremonies.length})</span>
          </h1>
          <button onClick={() => { resetForm(); setShowForm(!showForm) }}
            style={{ padding: '10px 22px', background: '#FF6B00', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            {showForm ? 'Annuler' : '+ Ajouter une cérémonie'}
          </button>
        </div>

        {/* Message feedback */}
        {msg && (
          <div style={{ background: msg.type === 'success' ? '#d1fae5' : '#fee2e2', color: msg.type === 'success' ? '#065f46' : '#991b1b', borderRadius: 8, padding: '12px 16px', marginBottom: 24, fontSize: 14 }}>
            {msg.type === 'success' ? '✅' : '❌'} {msg.text}
          </div>
        )}

        {/* Formulaire */}
        {showForm && (
          <div style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: '1px solid #E9ECEF', marginBottom: 40, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#212529' }}>
              {editItem ? 'Modifier la cérémonie' : 'Nouvelle cérémonie'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase' }}>Titre *</label>
                <input value={form.titre} onChange={(e) => setForm({ ...form, titre: e.target.value })}
                  placeholder="Ex: Cérémonie de diplômes 2025"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                  onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase' }}>Date *</label>
                <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                  placeholder="Ex: Décembre 2025"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                  onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
                />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase' }}>Badge</label>
              <input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })}
                placeholder="Ex: Promo 2025"
                style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none' }}
                onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase' }}>Description *</label>
              <textarea value={form.contenu} onChange={(e) => setForm({ ...form, contenu: e.target.value })}
                placeholder="Décrivez la cérémonie..."
                rows={4}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif' }}
                onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase' }}>
                Image {editItem ? '(laisser vide pour garder l\'actuelle)' : '*'}
              </label>
              <input type="file" accept="image/*" onChange={handleImageChange}
                style={{ width: '100%', padding: '10px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14 }}
              />
              {preview && (
                <img src={preview} alt="preview"
                  style={{ marginTop: 12, width: '100%', maxHeight: 200, objectFit: 'cover', borderRadius: 10 }}
                />
              )}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={handleSubmit} disabled={loading}
                style={{ flex: 1, padding: 14, background: loading ? '#aaa' : '#FF6B00', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Enregistrement...' : editItem ? 'Modifier' : 'Ajouter'}
              </button>
              <button onClick={resetForm}
                style={{ padding: '14px 24px', background: '#F8F9FA', color: '#495057', border: '1px solid #E9ECEF', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 15, cursor: 'pointer' }}>
                Annuler
              </button>
            </div>
          </div>
        )}

        {/* Liste des cérémonies */}
        <div style={{ display: 'grid', gap: 16 }}>
          {ceremonies.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#868E96', fontFamily: 'Poppins, sans-serif' }}>
              Aucune cérémonie pour l'instant. Ajoutez-en une !
            </div>
          ) : ceremonies.map((c) => (
            <div key={c.id} style={{ background: '#fff', borderRadius: 16, border: '1px solid #E9ECEF', display: 'flex', gap: 20, padding: 20, alignItems: 'flex-start' }}>
              <img src={c.imageUrl} alt={c.titre}
                style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700, color: '#212529', marginBottom: 4 }}>{c.titre}</h3>
                <p style={{ fontSize: 13, color: '#868E96', marginBottom: 8, lineHeight: 1.5 }}>{c.contenu.slice(0, 100)}...</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: '#E8F2FD', color: '#1A6FD4' }}>📅 {c.date}</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: '#FFF3E8', color: '#FF6B00' }}>{c.badge}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                <a href={`/ceremonie/${c.id}`} target="_blank"
                  style={{ padding: '8px 14px', background: '#E8F2FD', color: '#1A6FD4', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                  Voir
                </a>
                <button onClick={() => handleEdit(c)}
                  style={{ padding: '8px 14px', background: '#FFF3E8', color: '#FF6B00', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                  Modifier
                </button>
                <button onClick={() => handleDelete(c.id)}
                  style={{ padding: '8px 14px', background: '#fee2e2', color: '#991b1b', border: 'none', borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
