import { z } from 'zod'

export const BillboardValidator = z.object({
  label: z.string().min(1),
  imageUrl: z.string().min(1),
})

export type BillboardType = z.infer<typeof BillboardValidator>
