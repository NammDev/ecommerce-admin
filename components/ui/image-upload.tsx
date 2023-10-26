'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { CldUploadWidget } from 'next-cloudinary'
import { ImagePlus, Trash } from 'lucide-react'

import { Button } from './button'

interface ImageUploadProps {
  disabled?: boolean
  value: string[]
  onChange: (value: string) => void
  onRemove: (value: string) => void
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled = false,
  value,
  onChange,
  onRemove,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const onUpload = (result: any) => {
    onChange(result.info.secure_url)
  }

  return (
    <div>
      <div className='flex items-center gap-4 mb-4'>
        {value.map((url) => (
          <div key={url} className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
            <div className='absolute z-10 top-2 right-2'>
              <Button type='button' onClick={() => onRemove(url)} variant='destructive' size='sm'>
                <Trash className='w-4 h-4' />
              </Button>
            </div>
            <Image fill className='object-cover' alt='Image' src={url} />
          </div>
        ))}
      </div>
      <CldUploadWidget onUpload={onUpload} uploadPreset='indgbdgi'>
        {({ open }) => {
          const onClick = () => {
            open()
          }
          return (
            <Button type='button' disabled={disabled} variant='secondary' onClick={onClick}>
              <ImagePlus className='w-4 h-4 mr-2' />
              Upload an Image
            </Button>
          )
        }}
      </CldUploadWidget>
    </div>
  )
}

export default ImageUpload
