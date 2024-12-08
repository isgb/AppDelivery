import { Product } from '../../Domain/entities/Product';
import * as ImagePicker from 'expo-image-picker';
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { createContext, useState } from "react";
import CreateProductUseCase from "../../Domain/useCases/product/CreateProduct";
import GetProductsByCategoryUseCase from '../../Domain/useCases/product/GetProductsByCategory';

export interface ProductContextProps{
    products: Product[],
    getProducts(idCategory: string): Promise<void>,
    create(product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery>
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({children}: any) => { 

    const [products, setProducts] = useState<Product[]>([])

    const getProducts = async (idCategory: string): Promise<void> => {
        const result = await GetProductsByCategoryUseCase(idCategory);
        setProducts(result)
    }

    const create = async (product: Product, files: ImagePicker.ImageInfo[]): Promise<ResponseAPIDelivery> => {
        const response = await CreateProductUseCase(product, files);
        getProducts(product.id_category!);
        return response;
    }

    return(
        <ProductContext.Provider value={{
            products,
            getProducts,
            create
        }}>
            {children}
        </ProductContext.Provider>
    )
}