'use client'
// components/Hero.js
export default function Hero() {
  return (
    <>
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 45%, #1A6FD4 100%)',
          padding: '90px 5% 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '30%', width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

        <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '6px 16px', borderRadius: 30, fontSize: 12, fontWeight: 500, marginBottom: 20, fontFamily: 'Poppins, sans-serif', border: '1px solid rgba(255,255,255,0.3)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFE0B2', display: 'inline-block' }} />
            Agence de Communication & Formations
          </div>

          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 42, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 18 }}>
            Votre partenaire pour{' '}
            <em style={{ fontStyle: 'normal', color: '#FFE0B2' }}>communiquer</em>{' '}
            et{' '}
            <em style={{ fontStyle: 'normal', color: '#FFE0B2' }}>évoluer</em>
          </h1>

          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, marginBottom: 32 }}>
            MAMcom vous accompagne dans votre stratégie de communication et propose des formations professionnelles certifiantes pour booster vos compétences.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#formations" style={{ background: '#fff', color: '#FF6B00', padding: '14px 28px', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#fff8f0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'none' }}>
              Nos formations →
            </a>
            <a href="#contact" style={{ background: 'transparent', color: '#fff', padding: '14px 28px', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, border: '2px solid rgba(255,255,255,0.6)', transition: 'all 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
              Demander un devis
            </a>
          </div>
        </div>

        <div className="hero-visual" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, position: 'relative', zIndex: 1 }}>
          <div style={{ gridColumn: 'span 2', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 14, padding: '20px 16px', textAlign: 'center', color: '#fff', backdropFilter: 'blur(4px)' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 30, fontWeight: 800, color: '#FFE0B2' }}>+200</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>Clients accompagnés avec succès</div>
          </div>
          {[{ num: '8', lbl: 'Formations disponibles' }, { num: '95%', lbl: 'Taux de satisfaction' }, { num: '+5 ans', lbl: "D'expertise terrain" }, { num: '100%', lbl: 'Certifiant' }].map((item) => (
            <div key={item.num} style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 14, padding: '20px 16px', textAlign: 'center', color: '#fff', backdropFilter: 'blur(4px)' }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 30, fontWeight: 800, color: '#FFE0B2' }}>{item.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>{item.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar" style={{ background: '#212529', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[{ num: '+200', lbl: 'Clients formés' }, { num: '8', lbl: 'Formations certifiantes' }, { num: '95%', lbl: 'Satisfaction clients' }, { num: '+5 ans', lbl: "D'expertise" }].map((item, i) => (
          <div key={item.num} style={{ padding: '22px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 800, color: '#FF6B00' }}>{item.num}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{item.lbl}</div>
          </div>
        ))}
      </div>
    </>
  )
}
