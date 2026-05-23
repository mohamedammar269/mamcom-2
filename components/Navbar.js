'use client'
// components/Navbar.js
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(10px)', borderBottom: '2px solid #FF6B00', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
      {/* Logo */}
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '26px', fontWeight: 800 }}>
        <span style={{ color: '#FF6B00' }}>MAM</span>
        <span style={{ color: '#1A6FD4' }}>com</span>
        <span style={{ fontSize: '10px', fontWeight: 400, color: '#868E96', display: 'block', marginTop: '-4px', letterSpacing: '0.08em' }}>
          Agence de Communication
        </span>
      </div>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {['Services', 'Formations', 'Galerie', 'Témoignages'].map((item) => (
          <a key={item}
            href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 500, color: '#495057', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.target.style.color = '#FF6B00')}
            onMouseLeave={(e) => (e.target.style.color = '#495057')}
          >
            {item}
          </a>
        ))}
        <a href="#contact"
          style={{ background: '#FF6B00', color: '#fff', padding: '10px 22px', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, transition: 'background 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#E55E00')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#FF6B00')}
        >
          Nous contacter
        </a>
      </div>

      {/* Mobile burger */}
      <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        aria-label="Menu"
      >
        <div style={{ width: 24, height: 2, background: '#212529', marginBottom: 5 }} />
        <div style={{ width: 24, height: 2, background: '#212529', marginBottom: 5 }} />
        <div style={{ width: 24, height: 2, background: '#212529' }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'absolute', top: '68px', left: 0, right: 0, background: '#fff', borderTop: '1px solid #e9ecef', padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
          {['Services', 'Formations', 'Galerie', 'Témoignages'].map((item) => (
            <a key={item}
              href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 500, color: '#495057' }}
            >
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ background: '#FF6B00', color: '#fff', padding: '12px 22px', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  )
}
