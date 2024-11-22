import React, { useContext, useState } from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategorUseCase } from '../../../../../Domain/useCases/category/GetAllCategory';
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/category/DeleteCategory';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryListViewModel = () => {
  // const [categories, setCategories] = useState<Category[]>([]);
  const [responseMessage, setResponseMessage] = useState('');
  const { categories,getCategories,remove } = useContext( CategoryContext )

  // const getCategories = async () => {
  //   const result = await GetAllCategorUseCase();
  //   setCategories(result);
  // }

  const deleteCategory = async (idCategory: string) =>{
    const result = await remove(idCategory);
    setResponseMessage(result.message)
  }

  return {
    categories,
    responseMessage,
    getCategories,
    deleteCategory
  }
}

export default AdminCategoryListViewModel;