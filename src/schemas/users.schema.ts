import z, { ZodString } from 'zod'

export const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().max(120),
    phone: z.string().max(11)
})

export const updateUserSchama = createUserSchema.partial()

export const returnUserSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.string()
}).omit({ password: true })

export const listUsersSchema = returnUserSchema.array()