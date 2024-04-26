import React, { useEffect } from 'react'
import { GetUserUseCase } from '../../Domain/useCases/userLocal/GetUser';

export const useUserLocal = () => {

    useEffect(() => {
        getUserSession();
      }, [])
      
    const getUserSession = async() => {
        const user = await GetUserUseCase();
        console.log("USUARIO SESION: " + JSON.stringify(user));
    }

  return {}
}
