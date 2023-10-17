'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '../ui/modal'

export const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal()
  return (
    <Modal title='test' description='test' isOpen={isOpen} onClose={onClose}>
      Future Create Store Form
    </Modal>
  )
}
