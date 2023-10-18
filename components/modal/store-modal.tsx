'use client'
import * as z from 'zod'

import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '../ui/modal'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(1),
})

export type formSchemaType = z.infer<typeof formSchema>

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal()

  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = async (values: formSchemaType) => {
    console.log(values.name)
  }

  return (
    <Modal
      title='Create store'
      description='Add a new store to manage products and categories.'
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <div className='space-y-2'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input disabled={loading} placeholder='E-Commerce' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
                  <Button disabled={loading} variant='outline' onClick={onClose}>
                    Cancel
                  </Button>
                  <Button disabled={loading} type='submit'>
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  )
}
