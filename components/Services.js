'use client'
// components/Services.js
const services = [
  {
    icon: '📢',
    color: 'orange',
    title: 'Stratégie de communication',
    desc: 'Élaborez une identité forte et cohérente pour votre marque ou votre entreprise.',
  },
  {
    icon: '🎨',
    color: 'blue',
    title: 'Identité visuelle',
    desc: 'Logo, charte graphique, supports print et digitaux entièrement sur mesure.',
  },
  {
    icon: '📱',
    color: 'orange',
    title: 'Communication digitale',
    desc: 'Réseaux sociaux, site web, campagnes en ligne et contenu engageant.',
  },
  {
    icon: '👥',
    color: 'blue',
    title: 'Conseil & accompagnement',
    desc: 'Audit, recommandations stratégiques et suivi personnalisé de vos projets.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: '80px 5%', background: '#F8F9FA' }}
    >
      <div className="section-tag">Nos services</div>
      <h2
        style={{
          fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800,
          color: '#212529', marginBottom: 10, lineHeight: 1.25,
        }}
      >
        Ce que nous <span style={{ color: '#FF6B00' }}>faisons</span> pour vous
      </h2>
      <p
        style={{
          fontSize: 16, color: '#868E96', lineHeight: 1.7,
          maxWidth: 560, marginBottom: 48,
        }}
      >
        Une agence complète pour votre communication, votre image et votre développement professionnel.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}
      >
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ icon, color, title, desc }) {
  const isBlue = color === 'blue'

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 20, padding: '28px 22px',
        border: '1px solid #E9ECEF',
        transition: 'all 0.25s', cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = isBlue ? '#1A6FD4' : '#FF6B00'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E9ECEF'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: 52, height: 52, borderRadius: 14,
          background: isBlue ? '#E8F2FD' : '#FFF3E8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 18, fontSize: 24,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: 'Poppins, sans-serif', fontSize: 16, fontWeight: 700,
          color: '#212529', marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 13, color: '#868E96', lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}
