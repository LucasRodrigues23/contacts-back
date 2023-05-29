import { Request, Response, NextFunction } from "express"
import { ZodTypeAny } from "zod"

export const validateData = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validateData = schema.parse(req.body)

    req.body = validateData

    return next()

}