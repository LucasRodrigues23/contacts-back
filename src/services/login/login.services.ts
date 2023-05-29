import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { tLoginRequestData } from "../../interfaces/login.interfaces";

const loginService = async (userLoginData: tLoginRequestData): Promise<object> => {


    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: userLoginData.email
    })

    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }

    const pwdMatch = await compare(userLoginData.password, user.password)

    if (!pwdMatch) {
        throw new AppError('Invalid credentials', 401)
    }
    const token: string = Jwt.sign(
        {},
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: user.id.toString()
        }
    )

    const res = { user: user.id, token }
    return res
}

export default loginService