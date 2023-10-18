import { db } from '@/db'
import { NewStoreValidator } from '@/lib/validators/StoreValidator'
import { auth } from '@clerk/nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // auth check
    const { userId } = auth()
    const body = await req.json()
    if (!userId) return new Response('Unauthorized', { status: 401 })

    // get name of store
    const { name } = NewStoreValidator.parse(body)
    if (!name) return new Response('Not found', { status: 404 })

    // create store
    const store = await db.store.create({ data: { name, userId } })
    return NextResponse.json(store)
  } catch (error) {
    console.log('[STORES_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
