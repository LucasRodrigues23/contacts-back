import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities"
import { AppError } from "../errors"


export const userExixsts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const find = await userRepository.findOne({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if (!find) {
        throw new AppError('User not found', 404)
    }

    return next()

}