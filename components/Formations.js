'use client'
// components/Formations.js
const formations = [
  { icon: '🛒', color: 'blue', title: 'E-commerce', desc: 'Créer et gérer une boutique en ligne performante et rentable.', badge: 'Débutant → Pro', badgeColor: 'blue' },
  { icon: '💻', color: 'orange', title: 'Informatique', desc: 'Maîtriser les outils numériques indispensables en entreprise.', badge: 'Pratique', badgeColor: 'orange' },
  { icon: '📄', color: 'blue', title: 'Bureautique', desc: 'Word, Excel, PowerPoint et tous les outils de productivité.', badge: 'Certifiant', badgeColor: 'blue' },
  { icon: '🎤', color: 'orange', title: 'Prise de parole en public', desc: 'Techniques de présentation, éloquence et leadership professionnel.', badge: 'Coaching', badgeColor: 'orange' },
  { icon: '🌐', color: 'blue', title: 'Anglais professionnel', desc: 'Communication orale et écrite en milieu professionnel international.', badge: 'Tous niveaux', badgeColor: 'blue' },
  { icon: '💻', color: 'orange', title: 'Programmation', desc: 'Initiation au développement web, HTML, CSS et langages modernes.', badge: 'Pratique', badgeColor: 'orange' },
  { icon: '📢', color: 'blue', title: 'Communication', desc: "Stratégie, image de marque et outils de communication moderne.", badge: 'Expert', badgeColor: 'blue' },
  { icon: '💡', color: 'orange', title: 'Conseil & développement', desc: 'Accompagnement personnalisé pour votre projet professionnel.', badge: 'Sur mesure', badgeColor: 'orange' },
]

export default function Formations() {
  return (
    <section id="formations" style={{ padding: '80px 5%', background: '#fff' }}>
      <div className="section-tag blue">Formations professionnelles</div>
      <h2
        style={{
          fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800,
          color: '#212529', marginBottom: 10, lineHeight: 1.25,
        }}
      >
        Développez vos <span style={{ color: '#1A6FD4' }}>compétences</span>
      </h2>
      <p style={{ fontSize: 16, color: '#868E96', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
        Des formations certifiantes animées par des professionnels experts, adaptées à tous les niveaux.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 18,
        }}
      >
        {formations.map((f) => (
          <FormationCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  )
}

function FormationCard({ icon, color, title, desc, badge, badgeColor }) {
  const isBlue = color === 'blue'
  const isBadgeBlue = badgeColor === 'blue'

  return (
    <div
      style={{
        background: '#fff', borderRadius: 20, padding: '24px 20px',
        border: '1px solid #E9ECEF',
        display: 'flex', gap: 16, alignItems: 'flex-start',
        transition: 'all 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = isBlue ? '#1A6FD4' : '#FF6B00'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E9ECEF'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <div
        style={{
          width: 44, height: 44, minWidth: 44, borderRadius: 12,
          background: isBlue ? '#E8F2FD' : '#FFF3E8',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
        }}
      >
        {icon}
      </div>
      <div>
        <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700, color: '#212529', marginBottom: 5 }}>
          {title}
        </h4>
        <p style={{ fontSize: 12, color: '#868E96', lineHeight: 1.6 }}>{desc}</p>
        <span
          style={{
            display: 'inline-block', marginTop: 8,
            fontSize: 10, fontWeight: 600, padding: '3px 10px',
            borderRadius: 20,
            background: isBadgeBlue ? '#E8F2FD' : '#FFF3E8',
            color: isBadgeBlue ? '#1A6FD4' : '#FF6B00',
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  )
}
