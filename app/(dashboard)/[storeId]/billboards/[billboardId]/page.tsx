import { BilloardForm } from '@/components/share/BilloardForm'
import { db } from '@/db'

interface BillboardPageProps {
  params: {
    billboardId: string
  }
}

const BillboardPage = async ({ params }: BillboardPageProps) => {
  const billboard = await db.billboard.findUnique({ where: { id: params.billboardId } })

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BilloardForm initialData={billboard} />
      </div>
    </div>
  )
}

export default BillboardPage
