import { db } from '@/db'
import { format } from 'date-fns'
import React from 'react'
import { CategoryColumn } from './component/columns'
import { CategoriesClient } from './component/client'

interface CategoriesProps {
  params: { storeId: string }
}

const Categories: React.FC<CategoriesProps> = async ({ params }) => {
  // Implement your component logic here
  const categories = await db.category.findMany({
    where: { storeId: params.storeId },
    include: { billboard: true },
    orderBy: { createdAt: 'desc' },
  })

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }))

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  )
}

export default Categories
