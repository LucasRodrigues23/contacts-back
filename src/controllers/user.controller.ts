import { Request, Response } from "express";
import { tUserReturn } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.services";
import softDeleteUserService from "../services/users/deleteUser.services";
import { listUsersService } from "../services/users/listUsers.services";
import updateUserService from "../services/users/updateUser.services";
import { retriveUsersService } from "../services/users/retriveUser.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const userData = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const listUsers = await listUsersService()

    return res.status(200).json(listUsers)
}

export const retriveUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId = Number(req.params.id)
    const user = await retriveUsersService(userId)

    return res.status(200).json(user)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const updatedUser: tUserReturn = await updateUserService(req)

    return res.status(200).json(updatedUser)
}

export const softDeleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = Number(req.params.id)

    await softDeleteUserService(userId)

    return res.status(204).send()
}