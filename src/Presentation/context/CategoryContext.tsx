import { createContext, useState } from "react";
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Category } from '../../Domain/entities/Category';
import * as ImagePicker from 'expo-image-picker';
import { GetAllCategorUseCase } from "../../Domain/useCases/category/GetAllCategory";
import { CreateCategoryUseCase } from "../../Domain/useCases/category/CreateCategory";
import { UpdateCategoryUseCase } from "../../Domain/useCases/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from '../../Domain/useCases/category/UpdateWithImageCategory';
import { DeleteCategoryUseCase } from "../../Domain/useCases/category/DeleteCategory";

export interface CategoryContextProps {
    categories: Category[],
    getAll(): Promise<Category[]>;
    create(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>;
    update(category: Category): Promise<ResponseAPIDelivery>;
    updateWithImage(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>;
    remove(id: String): Promise<ResponseAPIDelivery>
}

export const CategoryContext = createContext({} as CategoryContextProps)

export const CategoryProvider = ( {children}: any) => {
    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = async () => {
        const result = await GetAllCategorUseCase();
        setCategories(result);
    }

    const createCategory = async(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery> =>{
        const response = await CreateCategoryUseCase(category,file!);
        setCategories(categories)
        return response;
    }

    const update = async (category: Category): Promise<ResponseAPIDelivery> => {
        const response = await UpdateCategoryUseCase(category);
        setCategories(categories);
        return response;
    }

    const updateWithImage = async (category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery> => {
        const response = await UpdateWithImageCategoryUseCase(category, file);
        setCategories(categories);
        return response;
    }
    const remove = async (id: string): Promise<ResponseAPIDelivery> => {
        const response = await DeleteCategoryUseCase(id);
        setCategories(categories);
        return response;
    }
}