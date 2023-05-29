import { Request, Response } from "express"
import { tLoginRequestData } from "../interfaces/index."
import { loginSchema } from "../schemas/login.schema"
import loginService from "../services/login/login.services"

export const loginController = async (req: Request, res: Response): Promise<Response> => {

    const userLoginData: tLoginRequestData = loginSchema.parse(req.body)

    const token = await loginService(userLoginData)

    return res.status(200).json({
        token
    })
}