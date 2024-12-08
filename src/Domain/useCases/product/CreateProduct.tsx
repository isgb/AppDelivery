import { View, Text } from 'react-native'
import React from 'react'
import { Product } from '../../entities/Product'
import * as ImagePicker from 'expo-image-picker';
import { ProductRepositoryImpl } from '../../../Data/repositories/ProductRepository';

const {create} = new ProductRepositoryImpl();

const CreateProductUseCase = async (product: Product, files: ImagePicker.ImageInfo[]) => {
 return await create(product, files)
}

export default CreateProductUseCase