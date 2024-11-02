import { Axios, AxiosError } from 'axios';
import { Category } from '../../Domain/entities/Category';
import { CategoryRepository } from '../../Domain/repositories/CategoryRepository';
import { ApiDelivery, ApiDeliveryForImage } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import axios from 'axios';

export class CategoryRepositoryImpl implements CategoryRepository {


    async getAll(): Promise<Category[]> {
        try {
            const response = await ApiDelivery.get<Category[]>('/categories/getAll')
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: "+ JSON.stringify(e.response?.data));
            return Promise.resolve([])
            
        }
    }

   async create(category: Category, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery> {
        try {

            let data = new FormData();
            // @ts-ignore
            data.append('image', {
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            });
            data.append('category',JSON.stringify(category));

            const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>('/categories/create',data)
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