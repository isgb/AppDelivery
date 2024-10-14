import React, { useContext } from 'react'
import { RemoveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/RemoveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UserContext } from '../../../context/UserContext';

const ProfileInfoViewModel = () => {

   const {user, removeUserSession} = useContext(UserContext);

    // const removeSession = async () => {
    //     await RemoveUserLocalUseCase();
    // }

  return {
    removeSession,
    user
  }
}

export default ProfileInfoViewModel;
