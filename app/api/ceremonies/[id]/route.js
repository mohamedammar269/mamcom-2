// app/api/ceremonies/[id]/route.js
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import cloudinary from '@/lib/cloudinary'

// DELETE
export async function DELETE(request, { params }) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const ceremonie = await prisma.ceremonie.findUnique({
      where: { id: parseInt(params.id) },
    })
    if (!ceremonie) {
      return NextResponse.json({ error: 'Introuvable' }, { status: 404 })
    }

    // Supprimer l'image sur Cloudinary
    await cloudinary.uploader.destroy(ceremonie.imagePublicId)

    await prisma.ceremonie.delete({ where: { id: parseInt(params.id) } })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT — modifier
export async function PUT(request, { params }) {
  const session = await getServerSession()
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const titre = formData.get('titre')
    const contenu = formData.get('contenu')
    const date = formData.get('date')
    const badge = formData.get('badge')
    const file = formData.get('image')

    const data = { titre, contenu, date, badge }

    // Si nouvelle image uploadée
    if (file && file.size > 0) {
      const existing = await prisma.ceremonie.findUnique({
        where: { id: parseInt(params.id) },
      })
      await cloudinary.uploader.destroy(existing.imagePublicId)

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

      data.imageUrl = uploadResult.secure_url
      data.imagePublicId = uploadResult.public_id
    }

    const updated = await prisma.ceremonie.update({
      where: { id: parseInt(params.id) },
      data,
    })

    return NextResponse.json(updated)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
