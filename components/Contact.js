// components/Contact.js
'use client'
import { useState } from 'react'

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 8,
  border: '1.5px solid #E9ECEF', background: '#fff',
  fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#212529',
  transition: 'border-color 0.2s', outline: 'none',
}

const labelStyle = {
  display: 'block', fontSize: 12, fontWeight: 600,
  color: '#495057', marginBottom: 6,
  textTransform: 'uppercase', letterSpacing: '0.06em',
}

export default function Contact() {
  const [form, setForm] = useState({ nom: '', prenom: '', email: '', objet: 'Demande de formation', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
        setForm({ nom: '', prenom: '', email: '', objet: 'Demande de formation', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Une erreur est survenue.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Impossible de contacter le serveur.')
    }
  }

  return (
    <section id="contact" style={{ padding: '80px 5%', background: '#fff' }}>
      <div className="section-tag">Contact</div>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800, color: '#212529', marginBottom: 10 }}>
        Parlons de votre <span style={{ color: '#FF6B00' }}>projet</span>
      </h2>
      <p style={{ fontSize: 16, color: '#868E96', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
        Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }} className="contact-grid">

        {/* Coordonnées */}
        <div>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 700, color: '#212529', marginBottom: 20 }}>
            Nos coordonnées
          </h3>
          {[
            { icon: '📍', color: 'orange', label: 'Adresse', value: 'Moroni, Comores' },
            { icon: '📞', color: 'blue', label: 'Téléphone', value: '+269 XXX XXX' },
            { icon: '✉️', color: 'orange', label: 'Email', value: 'contact@mamcom.com' },
            { icon: '🕐', color: 'blue', label: 'Horaires', value: 'Lun – Sam : 8h00 – 18h00' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div
                style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: item.color === 'orange' ? '#FFF3E8' : '#E8F2FD',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, color: '#868E96', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: 15, color: '#212529', fontWeight: 500, marginTop: 2 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div
          style={{
            background: '#F8F9FA', borderRadius: 20, padding: '32px 28px',
            border: '1px solid #E9ECEF',
          }}
        >
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 20, color: '#212529' }}>
            Envoyez-nous un message
          </h3>

          {/* Nom / Prénom */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }} className="form-row">
            <div>
              <label style={labelStyle}>Nom</label>
              <input name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')} />
            </div>
            <div>
              <label style={labelStyle}>Prénom</label>
              <input name="prenom" value={form.prenom} onChange={handleChange} placeholder="Votre prénom" style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
                onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')} />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
              onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')} />
          </div>

          {/* Objet */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Objet</label>
            <select name="objet" value={form.objet} onChange={handleChange}
              style={{ ...inputStyle, cursor: 'pointer' }}
              onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
              onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
            >
              <option>Demande de formation</option>
              <option>Devis communication</option>
              <option>Renseignements généraux</option>
              <option>Partenariat</option>
            </select>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Décrivez votre projet ou votre demande..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
              onFocus={(e) => (e.target.style.borderColor = '#1A6FD4')}
              onBlur={(e) => (e.target.style.borderColor = '#E9ECEF')}
            />
          </div>

          {/* Feedback messages */}
          {status === 'success' && (
            <div style={{ background: '#d1fae5', color: '#065f46', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: 14, fontWeight: 500 }}>
              ✅ Message envoyé avec succès ! Nous vous répondrons rapidement.
            </div>
          )}
          {status === 'error' && (
            <div style={{ background: '#fee2e2', color: '#991b1b', borderRadius: 8, padding: '12px 16px', marginBottom: 16, fontSize: 14, fontWeight: 500 }}>
              ❌ {errorMsg}
            </div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{
              width: '100%', padding: 14,
              background: status === 'loading' ? '#aaa' : '#FF6B00',
              color: '#fff', border: 'none', borderRadius: 10,
              fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700,
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#E55E00' }}
            onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#FF6B00' }}
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message →'}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
