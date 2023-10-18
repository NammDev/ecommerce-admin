import { z } from 'zod'

export const NewStoreValidator = z.object({
  name: z.string().min(1),
})

export type NewStoreType = z.infer<typeof NewStoreValidator>
