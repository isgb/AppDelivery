import { ImageInfo } from "expo-image-picker";
import { Product } from "../../Domain/entities/Product";
import { ProductRepository } from "../../Domain/repositories/ProductRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import mime from 'mime';
import { ApiDelivery, ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";

export class ProductRepositoryImpl implements ProductRepository {

    async getProductsByCategory(idCategory: string): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get<Product[]>(`/products/findByCategory/${idCategory}`);
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: "+ JSON.stringify(e.response?.data));
            return Promise.resolve([])
        }
    }

    async create(product: Product, files: ImageInfo[]): Promise<ResponseAPIDelivery>{
        try {
                  
            let data = new FormData();

            files.forEach(file => {
                // @ts-ignore
                data.append('image', {
                    uri: file.uri,
                    name: file.uri.split('/').pop(),
                    type: mime.getType(file.uri)!
                });
            })
            data.append('product',JSON.stringify(product));
            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/products/create',data)
            console.log('REPSONSE REPOSITORY: ' + JSON.stringify(response.data));
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: "+ JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

}