import { Request } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { tUserReturn } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

const updateUserService = async (req: Request): Promise<tUserReturn> => {

        
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const validateUser = await userRepository.findOne({
        where: {
            id: Number(req.params.id)
        }
    })


    const oldUserData = await userRepository.findOneBy({
        id: Number(req.params.id)
    })

    const user = userRepository.create({
        ...oldUserData,
        ...req.body
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser

}

export default updateUserService