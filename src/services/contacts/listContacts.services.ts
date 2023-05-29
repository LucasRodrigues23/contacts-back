import { Repository } from "typeorm";
import { Request } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tContactReturn } from "../../interfaces/contact.interfaces";
import { AppError } from "../../errors";


export const listContactsService = async (req: Request): Promise<any> => {
    const userId = req.params.userId

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const contacts = await userRepository.findOne({
        where: {
            id: Number(userId)
        },
        relations: {
            contacts: true
        }
    })
    if (!contacts) {
        throw new AppError('User not have contacts', 404)
    }

    return contacts
}