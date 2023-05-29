
import { z } from "zod";

export const createContactSchema = z.object({
    name: z.string().max(45),
    email: z.string().max(120),
    phone: z.string().max(15),
})

export const returnContactSchema = createContactSchema.extend({
    id: z.number()
})

export const listContactsSChema = returnContactSchema.array()
