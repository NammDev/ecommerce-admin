import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='p-4'>
      <Button variant={'default'}>Click me</Button>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
