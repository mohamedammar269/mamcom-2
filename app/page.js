// app/page.js
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Formations from '@/components/Formations'
import Galerie from '@/components/Galerie'
import Temoignages from '@/components/Temoignages'
import { Pourquoi, CTA } from '@/components/PourquoiCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Formations />
        <Galerie />
        <Temoignages />
        <Pourquoi />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
