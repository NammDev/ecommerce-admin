import { BillboardClient } from '@/components/share/BillboardClient'
import { BillboardColumn } from '@/components/share/BillboardColumn'
import { db } from '@/db'
import { format } from 'date-fns'
import React from 'react'

interface Props {
  params: { storeId: string }
}

const BillboardsPage: React.FC<Props> = async ({ params }) => {
  const billboards = await db.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  )
}

export default BillboardsPage
