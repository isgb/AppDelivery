import { CategoryRepositoryImpl } from "../../../Data/repositories/CategoryRepository";

const { getAll } = new CategoryRepositoryImpl();

export const GetAllCategorUseCase =  async () => {
    return await getAll();
}