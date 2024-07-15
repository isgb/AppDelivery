import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User"

const {update} = new UserLocalRepositoryImpl();

export const UpdateUserUseCase = async (user: User) => {
    return await update(user)
}