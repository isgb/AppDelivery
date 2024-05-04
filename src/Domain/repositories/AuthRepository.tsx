import { ResponseAPIDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';
import { User } from '../entities/User';
import * as ImagePicker from 'expo-image-picker';

export interface AuthRepository{

    login(email:String, password:String): Promise<ResponseAPIDelivery>;
    register(user:User): Promise<ResponseAPIDelivery>;
    registerWithImage(user:User, file: ImagePicker.ImageInfo): Promise<ResponseAPIDelivery>;

}