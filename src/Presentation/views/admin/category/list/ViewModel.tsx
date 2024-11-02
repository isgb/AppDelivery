import React, { useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategorUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';

const AdminCategoryListViewModel = () => {
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

export default AdminCategoryListViewModel;