import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User"

const {update} = new UserLocalRepositoryImpl();

export const UpdateUser = async (user: User) => {
    return await update(user)
}