import { ResponseAPIDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';
import { User } from '../entities/User';

export interface AuthRepository{

    login(email:String, password:String): Promise<ResponseAPIDelivery>;
    register(user:User): Promise<ResponseAPIDelivery>;

}