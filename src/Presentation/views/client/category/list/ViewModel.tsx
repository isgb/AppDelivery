import React, { useState } from 'react'
import { GetAllCategorUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { Category } from '../../../../../Domain/entities/Category';

const ClientCategoryListViewModel = () => {

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        const result = await GetAllCategorUseCase();
        setCategories(result);
    }

    return {
        categories,
        getCategories
    }
}

export default ClientCategoryListViewModel;
