// app/layout.js
import './globals.css'

export const metadata = {
  title: 'MAMcom — Agence de Communication & Formations Professionnelles',
  description:
    'MAMcom vous accompagne dans votre stratégie de communication et propose des formations professionnelles certifiantes aux Comores.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
