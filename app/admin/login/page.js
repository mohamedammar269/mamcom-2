'use client'
// app/admin/login/page.js
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    const res = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Email ou mot de passe incorrect.')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 20, padding: '40px 36px', border: '1px solid #E9ECEF', width: '100%', maxWidth: 400, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
            <span style={{ color: '#FF6B00' }}>MAM</span>
            <span style={{ color: '#1A6FD4' }}>com</span>
          </div>
          <p style={{ fontSize: 14, color: '#868E96' }}>Espace administration</p>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="admin@mamcom.com"
            style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }}
            onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
            onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#495057', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mot de passe</label>
          <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="••••••••"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            style={{ width: '100%', padding: '12px 14px', borderRadius: 8, border: '1.5px solid #E9ECEF', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }}
            onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
            onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
          />
        </div>

        {error && (
          <div style={{ background: '#fee2e2', color: '#991b1b', borderRadius: 8, padding: '10px 14px', marginBottom: 16, fontSize: 13 }}>
            {error}
          </div>
        )}

        <button onClick={handleSubmit} disabled={loading}
          style={{ width: '100%', padding: 14, background: loading ? '#aaa' : '#FF6B00', color: '#fff', border: 'none', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#E55E00' }}
          onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#FF6B00' }}
        >
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </div>
    </div>
  )
}
