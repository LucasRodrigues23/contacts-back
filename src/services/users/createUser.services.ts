import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { tUserReturn } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

export const createUserService = async (userData: User): Promise<tUserReturn> => {

    const reqEmail: string = userData.email

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            email: reqEmail
        }
    })

    if (findUser) {
        throw new AppError('Email already exists', 409)
    }

    const user: User = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser

}