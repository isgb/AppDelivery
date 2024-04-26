import { User } from '../../Domain/entities/User';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AuthRepository } from '../../Domain/repositories/AuthRepository';
import { AxiosError } from 'axios';

export class AuthRepositoryImpl implements AuthRepository{

    async register(user: User): Promise<ResponseAPIDelivery>{
        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/create/',user)
            console.log('REPSONSE REPOSITORY: ' + JSON.stringify(response.data));
            return Promise.resolve(response.data)
            

        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: "+ JSON.stringify(e.response?.data));
            const apiError:ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }

    async login(email:String,password:String): Promise<ResponseAPIDelivery>{
        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/login/',{
                email:email,
                password:password
            })
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