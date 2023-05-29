import { z } from "zod"
import { createContactSchema, returnContactSchema, listContactsSChema } from "../schemas/contacts.schema"


export type tContactCreateData = z.infer<typeof createContactSchema>

export type tContactReturn = z.infer<typeof returnContactSchema>

export type tListContacts = z.infer<typeof listContactsSChema>
