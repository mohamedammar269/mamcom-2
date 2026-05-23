// app/api/ceremonies/route.js
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import cloudinary from '@/lib/cloudinary'

// GET — liste publique
export async function GET() {
  const ceremonies = await prisma.ceremonie.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(ceremonies)
}

// POST — créer (admin seulement)
export async function POST(request) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const titre = formData.get('titre')
    const contenu = formData.get('contenu')
    const date = formData.get('date')
    const badge = formData.get('badge') || 'Cérémonie'
    const file = formData.get('image')

    if (!titre || !contenu || !date || !file) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    // Upload image sur Cloudinary
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'mamcom/ceremonies' },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    const ceremonie = await prisma.ceremonie.create({
      data: {
        titre,
        contenu,
        date,
        badge,
        imageUrl: uploadResult.secure_url,
        imagePublicId: uploadResult.public_id,
      },
    })

    return NextResponse.json(ceremonie, { status: 201 })
  } catch (error) {
    console.error('Erreur création cérémonie:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
