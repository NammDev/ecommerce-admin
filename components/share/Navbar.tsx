import { db } from '@/db'
import { UserButton, auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import StoreSwitcher from './StoreSwitcher'
import { MainNav } from './MainNav'
import { ThemeToggle } from './ThemeToggle'

const Navbar = async () => {
  const { userId } = auth()
  if (!userId) redirect('/sign-in')

  const stores = await db.store.findMany({ where: { userId } })

  return (
    <div className='border-b'>
      <div className='flex items-center h-16 px-4'>
        <StoreSwitcher items={stores} />
        <MainNav className='mx-6' />
        <div className='flex items-center ml-auto space-x-4'>
          <ThemeToggle />
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
