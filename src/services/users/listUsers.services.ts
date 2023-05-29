import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tListUsers } from "../../interfaces/user.interfaces";
import { listUsersSchema } from "../../schemas/users.schema";


export const listUsersService = async (): Promise<tListUsers> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const listUsers: tListUsers = listUsersSchema.parse(findUsers)

    return listUsers
}