import { z } from "zod";
import { createUserSchema, listUsersSchema, returnUserSchema } from "../schemas/users.schema";

export type tUserCreateData = z.infer<typeof createUserSchema>

export type tUserReturn = z.infer<typeof returnUserSchema>

export type tListUsers = z.infer<typeof listUsersSchema>