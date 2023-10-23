import BillboardClient from '@/components/share/BillboardClient'
import React from 'react'

interface Props {
  storeId: string
}

const BillboardsPage: React.FC<Props> = ({ storeId }) => {
  // Your component logic here
  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BillboardClient />
      </div>
    </div>
  )
}

export default BillboardsPage
