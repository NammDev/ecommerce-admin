import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { db } from '@/db'
import Navbar from '@/components/share/Navbar'

type DashboardLayoutProps = {
  children: React.ReactNode
  params: { storeId: string }
}

export default async function DashboardLayout({ children, params }: DashboardLayoutProps) {
  const { userId } = auth()
  if (!userId) redirect('/sign-in')

  const store = await db.store.findFirst({ where: { id: params.storeId, userId } })
  if (!store) redirect('/')

  return (
    <div className='mx-auto max-w-7xl'>
      <Navbar />
      {children}
    </div>
  )
}
