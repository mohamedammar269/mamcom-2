'use client'
// components/Footer.js
export default function Footer() {
  return (
    <footer style={{ background: '#0D1117', padding: '48px 5% 24px' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }}>
        <div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
            <span style={{ color: '#FF6B00' }}>MAM</span>
            <span style={{ color: '#1A6FD4' }}>com</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
            Votre partenaire de confiance pour la communication stratégique et les formations professionnelles certifiantes aux Comores.
          </p>
        </div>
        <FooterCol title="Services" links={['Stratégie comm.', 'Identité visuelle', 'Digital', 'Conseil']} />
        <FooterCol title="Formations" links={['E-commerce', 'Informatique', 'Bureautique', 'Programmation', 'Anglais']} />
        <FooterCol title="Contact" links={['Moroni, Comores', '+269 XXX XXX', 'contact@mamcom.com', 'Lun–Sam 8h–18h']} />
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 MAMcom — Agence de Communication. Tous droits réservés.</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Conçu avec passion aux Comores</p>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h5 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {title}
      </h5>
      {links.map((link) => (
        <a key={link} href="#"
          style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 9, transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B00')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
        >
          {link}
        </a>
      ))}
    </div>
  )
}
