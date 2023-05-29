import { Router } from "express";
import { createUserController, listUsersController, softDeleteUserController, updateUserController } from "../controllers";
import { userExixsts } from "../middlewares/userExists.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { validateToken } from "../middlewares/validateToken.middlware";
import { createUserSchema, updateUserSchama } from "../schemas/users.schema";
import { retriveUserController } from "../controllers/user.controller";

export const usersRoutes: Router = Router()

usersRoutes.post('', validateData(createUserSchema), createUserController)
usersRoutes.get('', validateToken, listUsersController)
usersRoutes.get('/:id', userExixsts, validateToken, retriveUserController)
usersRoutes.patch('/:id', userExixsts, validateToken, validateData(updateUserSchama), updateUserController)
usersRoutes.delete('/:id', userExixsts, validateToken, softDeleteUserController)