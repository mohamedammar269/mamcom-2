// app/api/contact/route.js
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { sendContactEmail } from '@/lib/mailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { nom, prenom, email, objet, message } = body

    // Validation
    if (!nom || !prenom || !email || !objet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // Sauvegarde en base de données
    const contact = await prisma.contact.create({
      data: { nom, prenom, email, objet, message },
    })

    // Envoi de l'email
    await sendContactEmail({ nom, prenom, email, objet, message })

    return NextResponse.json(
      { success: true, id: contact.id, message: 'Message envoyé avec succès !' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur contact:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
