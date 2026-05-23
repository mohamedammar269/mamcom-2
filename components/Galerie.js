// 'use client'
// // components/Galerie.js
// import { useState, useEffect } from 'react'
// import Link from 'next/link'

// const sessions = [
//   { icon: '💻', bg: 'orange', title: 'Formation informatique & bureautique', desc: 'Sessions pratiques en salle équipée', badge: '2024', badgeColor: 'orange' },
//   { icon: '🎤', bg: 'blue', title: 'Prise de parole en public', desc: "Ateliers pratiques d'éloquence et de présentation", badge: 'Coaching individuel', badgeColor: 'blue' },
//   { icon: '🛒', bg: 'orange', title: 'Formation e-commerce', desc: 'Création et gestion de boutiques en ligne', badge: 'Certifiant', badgeColor: 'orange' },
//   { icon: '💻', bg: 'blue', title: 'Formation programmation', desc: 'Initiation au développement web et aux langages', badge: 'Pratique', badgeColor: 'blue' },
//   { icon: '🌐', bg: 'orange', title: 'Anglais professionnel', desc: 'Cours intensifs en petits groupes', badge: 'Tous niveaux', badgeColor: 'orange' },
//   { icon: '👥', bg: 'blue', title: 'Atelier communication', desc: 'Stratégie de marque et communication digitale', badge: 'Expert', badgeColor: 'blue' },
// ]

// function StaticCard({ icon, bg, title, desc, badge, badgeColor }) {
//   const isBlue = bg === 'blue'
//   const isBadgeBlue = badgeColor === 'blue'
//   return (
//     <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #E9ECEF', background: '#fff', transition: 'all 0.25s' }}
//       onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.14)' }}
//       onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
//     >
//       <div style={{ aspectRatio: '4/3', background: isBlue ? '#E8F2FD' : '#FFF3E8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 44 }}>
//         {icon}
//         <span style={{ fontSize: 11, color: '#868E96', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>{title}</span>
//       </div>
//       <div style={{ padding: '14px 16px' }}>
//         <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#212529', marginBottom: 4 }}>{title}</h4>
//         <p style={{ fontSize: 12, color: '#868E96' }}>{desc}</p>
//         <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 8, fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: isBadgeBlue ? '#E8F2FD' : '#FFF3E8', color: isBadgeBlue ? '#1A6FD4' : '#FF6B00' }}>
//           {badge}
//         </span>
//       </div>
//     </div>
//   )
// }

// function CeremonieCard({ ceremonie }) {
//   return (
//     <Link href={`/ceremonie/${ceremonie.id}`} style={{ textDecoration: 'none' }}>
//       <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #E9ECEF', background: '#fff', transition: 'all 0.25s', cursor: 'pointer' }}
//         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.14)' }}
//         onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
//       >
//         <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
//           <img src={ceremonie.imageUrl} alt={ceremonie.titre}
//             style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
//             onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
//             onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//           />
//         </div>
//         <div style={{ padding: '14px 16px' }}>
//           <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, color: '#212529', marginBottom: 4 }}>{ceremonie.titre}</h4>
//           <p style={{ fontSize: 12, color: '#868E96', marginBottom: 8 }}>{ceremonie.contenu.slice(0, 80)}...</p>
//           <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
//             <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: '#E8F2FD', color: '#1A6FD4' }}>
//               📅 {ceremonie.date}
//             </span>
//             <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 20, background: '#FFF3E8', color: '#FF6B00' }}>
//               {ceremonie.badge}
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default function Galerie() {
//   const [ceremonies, setCeremonies] = useState([])

//   useEffect(() => {
//     fetch('/api/ceremonies')
//       .then((r) => r.json())
//       .then((data) => setCeremonies(data))
//       .catch(() => {})
//   }, [])

//   return (
//     <section id="galerie" style={{ padding: '80px 5%', background: '#F8F9FA' }}>
//       <div className="section-tag">Galerie</div>
//       <h2 className="section-title" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 34, fontWeight: 800, color: '#212529', marginBottom: 10 }}>
//         Nos <span style={{ color: '#FF6B00' }}>formations</span> en images
//       </h2>
//       <p style={{ fontSize: 16, color: '#868E96', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
//         Découvrez les moments forts de nos sessions de formation et cérémonies de remise de diplômes.
//       </p>

//       <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, color: '#212529', marginBottom: 20 }}>
//         Sessions de formation
//       </h3>
//       <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
//         {sessions.map((s) => <StaticCard key={s.title} {...s} />)}
//       </div>

//       <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18, fontWeight: 700, color: '#212529', marginBottom: 20 }}>
//         Cérémonies de remise de diplômes
//       </h3>

//       {ceremonies.length === 0 ? (
//         <div style={{ textAlign: 'center', padding: '60px 0', color: '#868E96', fontFamily: 'Poppins, sans-serif', fontSize: 15 }}>
//           Aucune cérémonie pour l'instant.
//         </div>
//       ) : (
//         <div className="gallery-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
//           {ceremonies.map((c) => <CeremonieCard key={c.id} ceremonie={c} />)}
//         </div>
//       )}
//     </section>
//   )
// }

'use client'
// components/Galerie.js
import { useState, useEffect } from 'react'
import Link from 'next/link'

const sessions = [
  {
    icon: '💻',
    bg: 'orange',
    title: 'Formation informatique & bureautique',
    desc: 'Sessions pratiques en salle équipée',
    badge: '2024',
    badgeColor: 'orange',
  },
  {
    icon: '🎤',
    bg: 'blue',
    title: 'Prise de parole en public',
    desc: "Ateliers pratiques d'éloquence et de présentation",
    badge: 'Coaching individuel',
    badgeColor: 'blue',
  },
  {
    icon: '🛒',
    bg: 'orange',
    title: 'Formation e-commerce',
    desc: 'Création et gestion de boutiques en ligne',
    badge: 'Certifiant',
    badgeColor: 'orange',
  },
  {
    icon: '💻',
    bg: 'blue',
    title: 'Formation programmation',
    desc: 'Initiation au développement web et aux langages',
    badge: 'Pratique',
    badgeColor: 'blue',
  },
  {
    icon: '🌐',
    bg: 'orange',
    title: 'Anglais professionnel',
    desc: 'Cours intensifs en petits groupes',
    badge: 'Tous niveaux',
    badgeColor: 'orange',
  },
  {
    icon: '👥',
    bg: 'blue',
    title: 'Atelier communication',
    desc: 'Stratégie de marque et communication digitale',
    badge: 'Expert',
    badgeColor: 'blue',
  },
]

const PAGE_SIZE = 4

function StaticCard({ icon, bg, title, desc, badge, badgeColor }) {
  const isBlue = bg === 'blue'
  const isBadgeBlue = badgeColor === 'blue'
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: '1px solid #E9ECEF',
        background: '#fff',
        transition: 'all 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.14)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          aspectRatio: '4/3',
          background: isBlue ? '#E8F2FD' : '#FFF3E8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          fontSize: 44,
        }}
      >
        {icon}
        <span
          style={{
            fontSize: 11,
            color: '#868E96',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ padding: '14px 16px' }}>
        <h4
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            color: '#212529',
            marginBottom: 4,
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: 12, color: '#868E96' }}>{desc}</p>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            marginTop: 8,
            fontSize: 10,
            fontWeight: 600,
            padding: '3px 10px',
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

function CeremonieCard({ ceremonie }) {
  return (
    <Link
      href={`/ceremonie/${ceremonie.id}`}
      style={{ textDecoration: 'none' }}
    >
      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          border: '1px solid #E9ECEF',
          background: '#fff',
          transition: 'all 0.25s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.14)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
          <img
            src={ceremonie.imageUrl}
            alt={ceremonie.titre}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
        <div style={{ padding: '14px 16px' }}>
          <h4
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 14,
              fontWeight: 700,
              color: '#212529',
              marginBottom: 4,
            }}
          >
            {ceremonie.titre}
          </h4>
          <p style={{ fontSize: 12, color: '#868E96', marginBottom: 8 }}>
            {ceremonie.contenu.slice(0, 80)}...
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 10,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 20,
                background: '#E8F2FD',
                color: '#1A6FD4',
              }}
            >
              📅 {ceremonie.date}
            </span>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 10,
                fontWeight: 600,
                padding: '3px 10px',
                borderRadius: 20,
                background: '#FFF3E8',
                color: '#FF6B00',
              }}
            >
              {ceremonie.badge}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Galerie() {
  const [allCeremonies, setAllCeremonies] = useState([])
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/ceremonies')
      .then((r) => r.json())
      .then((data) => setAllCeremonies(data))
      .catch(() => {})
  }, [])

  const handleVoirPlus = () => {
    setLoading(true)
    setTimeout(() => {
      setVisible((prev) => prev + PAGE_SIZE)
      setLoading(false)
    }, 300)
  }

  const displayed = allCeremonies.slice(0, visible)
  const hasMore = visible < allCeremonies.length

  return (
    <section id="galerie" style={{ padding: '80px 5%', background: '#F8F9FA' }}>
      <div className="section-tag">Galerie</div>
      <h2
        className="section-title"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 34,
          fontWeight: 800,
          color: '#212529',
          marginBottom: 10,
        }}
      >
        Nos <span style={{ color: '#FF6B00' }}>formations</span> en images
      </h2>
      <p
        style={{
          fontSize: 16,
          color: '#868E96',
          lineHeight: 1.7,
          maxWidth: 560,
          marginBottom: 48,
        }}
      >
        Découvrez les moments forts de nos sessions de formation et cérémonies
        de remise de diplômes.
      </p>

      <h3
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 18,
          fontWeight: 700,
          color: '#212529',
          marginBottom: 20,
        }}
      >
        Sessions de formation
      </h3>
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 48,
        }}
      >
        {sessions.map((s) => (
          <StaticCard key={s.title} {...s} />
        ))}
      </div>

      <h3
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: 18,
          fontWeight: 700,
          color: '#212529',
          marginBottom: 20,
        }}
      >
        Cérémonies de remise de diplômes
      </h3>

      {allCeremonies.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '60px 0',
            color: '#868E96',
            fontFamily: 'Poppins, sans-serif',
            fontSize: 15,
          }}
        >
          Aucune cérémonie pour l'instant.
        </div>
      ) : (
        <>
          <div
            className="gallery-grid-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 16,
            }}
          >
            {displayed.map((c) => (
              <CeremonieCard key={c.id} ceremonie={c} />
            ))}
          </div>

          {/* Bouton voir plus */}
          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <button
                onClick={handleVoirPlus}
                disabled={loading}
                style={{
                  padding: '12px 36px',
                  background: loading ? '#aaa' : '#fff',
                  color: loading ? '#fff' : '#FF6B00',
                  border: '2px solid #FF6B00',
                  borderRadius: 10,
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = '#FF6B00'
                    e.currentTarget.style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.background = '#fff'
                    e.currentTarget.style.color = '#FF6B00'
                  }
                }}
              >
                {loading
                  ? 'Chargement...'
                  : `Voir plus (${allCeremonies.length - visible} restantes)`}
              </button>
            </div>
          )}

          {/* Message tout affiché */}
          {!hasMore && allCeremonies.length > PAGE_SIZE && (
            <div
              style={{
                textAlign: 'center',
                marginTop: 32,
                fontSize: 13,
                color: '#868E96',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Toutes les cérémonies sont affichées ✓
            </div>
          )}
        </>
      )}
    </section>
  )
}
