// app/ceremonie/[id]/page.js
import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  const ceremonie = await prisma.ceremonie.findUnique({
    where: { id: parseInt(params.id) },
  })
  if (!ceremonie) return { title: 'Introuvable' }
  return { title: `${ceremonie.titre} — MAMcom` }
}

export default async function CeremoniePage({ params }) {
  const ceremonie = await prisma.ceremonie.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!ceremonie) notFound()

  return (
    <div style={{ minHeight: '100vh', background: '#F8F9FA' }}>
      {/* Navbar simple */}
      <nav style={{ background: '#fff', borderBottom: '2px solid #FF6B00', padding: '0 5%', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 26, fontWeight: 800 }}>
          <span style={{ color: '#FF6B00' }}>MAM</span>
          <span style={{ color: '#1A6FD4' }}>com</span>
        </div>
        <Link href="/#galerie" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, color: '#495057' }}>
          ← Retour à la galerie
        </Link>
      </nav>

      {/* Image hero */}
      <div style={{ width: '100%', height: 420, position: 'relative', overflow: 'hidden' }}>
        <img
          src={ceremonie.imageUrl}
          alt={ceremonie.titre}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: 40, left: '5%', right: '5%' }}>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 20, background: '#FF6B00', color: '#fff', marginBottom: 12 }}>
            {ceremonie.badge}
          </span>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 36, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
            {ceremonie.titre}
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 8 }}>📅 {ceremonie.date}</p>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 5%' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: '40px', border: '1px solid #E9ECEF', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 16, color: '#495057', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>
            {ceremonie.contenu}
          </p>
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <Link href="/#galerie"
            style={{ display: 'inline-block', padding: '14px 32px', background: '#FF6B00', color: '#fff', borderRadius: 10, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700 }}>
            ← Voir toutes les cérémonies
          </Link>
        </div>
      </div>
    </div>
  )
}
