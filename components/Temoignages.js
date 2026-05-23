'use client'
// components/Temoignages.js
const temoignages = [
  {
    text: "\"La formation e-commerce de MAMcom a transformé mon activité. En 3 mois, j'ai lancé ma boutique en ligne avec succès et doublé mes revenus.\"",
    name: 'Said Ali',
    role: 'Entrepreneur, Moroni',
    initials: 'SA',
    avatarColor: '#FF6B00',
    accent: 'orange',
  },
  {
    text: "\"Les formateurs sont excellents. La formation en prise de parole m'a donné la confiance pour mes présentations professionnelles. Je recommande vivement.\"",
    name: 'Fatima Omar',
    role: 'Chargée de communication',
    initials: 'FO',
    avatarColor: '#1A6FD4',
    accent: 'blue',
  },
  {
    text: "\"MAMcom nous a accompagnés dans toute notre stratégie de communication. Résultat : notre visibilité a augmenté de 70% en 6 mois.\"",
    name: 'Ansoib Mohamed',
    role: 'Directeur, PME locale',
    initials: 'AM',
    avatarColor: '#FF6B00',
    accent: 'orange',
  },
]

export default function Temoignages() {
  return (
    <section id="temoignages" style={{ padding: '80px 5%', background: '#fff' }}>
      <div className="section-tag">Témoignages</div>
      <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800, color: '#212529', marginBottom: 10 }}>
        Ils nous font <span style={{ color: '#FF6B00' }}>confiance</span>
      </h2>
      <p style={{ fontSize: 16, color: '#868E96', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
        Découvrez ce que disent nos apprenants et clients après avoir travaillé avec MAMcom.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {temoignages.map((t) => (
          <div
            key={t.name}
            style={{
              background: '#fff', borderRadius: 20, padding: '28px 24px',
              border: '1px solid #E9ECEF', position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Guillemet décoratif */}
            <span
              style={{
                position: 'absolute', top: '-10px', right: '20px',
                fontSize: 120, fontFamily: 'Poppins, sans-serif', fontWeight: 800,
                color: t.accent === 'orange' ? '#FF6B00' : '#1A6FD4',
                opacity: 0.07, lineHeight: 1,
              }}
            >
              "
            </span>

            <div style={{ color: '#FFB300', fontSize: 14, marginBottom: 12 }}>★★★★★</div>
            <p style={{ fontSize: 14, color: '#495057', lineHeight: 1.75, fontStyle: 'italic' }}>
              {t.text}
            </p>
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                marginTop: 20, paddingTop: 16, borderTop: '1px solid #F1F3F5',
              }}
            >
              <div
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: t.avatarColor,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff',
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#212529' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12, color: '#868E96' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
