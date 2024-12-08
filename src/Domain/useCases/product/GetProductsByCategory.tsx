import { View, Text } from 'react-native'
import React from 'react'
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository'

const { getProductsByCategory } = new ProductRepositoryImpl();

const GetProductsByCategoryUseCase = async (idCategory: string) => {
  return await getProductsByCategory(idCategory);
}

export default GetProductsByCategoryUseCase