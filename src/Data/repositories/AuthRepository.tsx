import { User } from '../../Domain/entities/User';
import AuthRepository from '../../Domain/repositories/AuthRepository';

export class AuthRepositoryImpl implements AuthRepository{

    async register(user: User){
        try {
            
        } catch (error) {
            let e = (error as Error).message;
            console.log("Error: "+ e);
            return Promise.resolve({ error: e, result: undefined })
        }
    }

}