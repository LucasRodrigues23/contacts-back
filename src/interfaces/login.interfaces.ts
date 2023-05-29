import { z } from "zod"
import { loginSchema } from "../schemas/login.schema"

export type tLoginRequestData = z.infer<typeof loginSchema>