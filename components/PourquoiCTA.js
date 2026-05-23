'use client'
// components/PourquoiCTA.js
const raisons = [
  { icon: '🥇', color: 'orange', title: 'Formations certifiantes', desc: 'Des parcours reconnus pour valoriser votre profil sur le marché du travail.' },
  { icon: '👥', color: 'blue', title: 'Formateurs experts', desc: 'Des professionnels terrain avec une vraie expérience du marché.' },
  { icon: '🎯', color: 'orange', title: 'Approche sur mesure', desc: 'Des solutions adaptées à votre profil, vos besoins et votre budget.' },
  { icon: '🔥', color: 'blue', title: 'Accompagnement continu', desc: 'Un suivi après formation pour garantir votre réussite sur le long terme.' },
]

export function Pourquoi() {
  return (
    <section style={{ padding: '80px 5%', background: '#212529' }}>
      <div className="section-tag" style={{ color: '#FF6B00' }}>Pourquoi MAMcom</div>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
        Ce qui nous <span style={{ color: '#FF6B00' }}>différencie</span>
      </h2>
      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
        Une approche humaine, professionnelle et orientée résultats.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
        {raisons.map((r) => (
          <div
            key={r.title}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, padding: '28px 22px', textAlign: 'center',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.09)'
              e.currentTarget.style.borderColor = '#FF6B00'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
            }}
          >
            <span style={{ fontSize: 32, display: 'block', marginBottom: 14 }}>{r.icon}</span>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              {r.title}
            </h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1A6FD4, #0D4E9E)',
        padding: '80px 5%', textAlign: 'center',
      }}
    >
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
        Prêt à développer vos compétences ?
      </h2>
      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 36 }}>
        Contactez MAMcom dès aujourd'hui pour un audit gratuit ou une inscription à nos formations.
      </p>
      <a
        href="#contact"
        style={{
          background: '#FF6B00', color: '#fff',
          padding: '16px 40px', borderRadius: 10,
          fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700,
          display: 'inline-block', transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#E55E00'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#FF6B00'
          e.currentTarget.style.transform = 'none'
        }}
      >
        Demander un devis gratuit →
      </a>
    </div>
  )
}
