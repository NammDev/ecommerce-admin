import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { db } from '@/db'
import { NewStoreValidator } from '@/lib/validators/StoreValidator'

export async function PATCH(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth()
    const body = await req.json()
    if (!userId) return new NextResponse('Unauthenticated', { status: 403 })

    // get name of store
    const { name } = NewStoreValidator.parse(body)
    if (!name) return new NextResponse('Name is required', { status: 400 })

    if (!params.storeId) return new NextResponse('Store id is required', { status: 400 })

    const store = await db.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name,
      },
    })

    return NextResponse.json(store)
  } catch (error) {
    console.log('[STORE_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { storeId: string } }) {
  try {
    const { userId } = auth()
    if (!userId) return new NextResponse('Unauthenticated', { status: 403 })

    if (!params.storeId) return new NextResponse('Store id is required', { status: 400 })

    const store = await db.store.deleteMany({ where: { id: params.storeId, userId } })
    return NextResponse.json(store)
  } catch (error) {
    console.log('[STORE_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
