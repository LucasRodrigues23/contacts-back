import { Router } from "express";
import { loginController } from "../controllers";

export const loginRoutes: Router = Router()

loginRoutes.post('', loginController)
