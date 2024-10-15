import React, { useContext, useState } from 'react'
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
// import { RegisterAuthUseCase } from '../../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
// import { RegisterWithImageAuthUseCase } from '../../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';
import { ResponseAPIDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';

const ProfileUpdateViewModel = (user: User) => {
  
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [values, setValues] = useState(user);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    const {getUserSession} = useUserLocal();
    const {saveUserSession} = useContext(UserContext  );

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1
      });

      if(!result.canceled){
        onChange('image', result.assets[0].uri);
        setFile(result.assets[0]);
      }
    }

    const takePhoto = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1
      });

      if(!result.canceled){
        onChange('image', result.assets[0].uri);
        setFile(result.assets[0]);
      }
    }

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const onChangeInfoUpdate = (name: string, lastname: string, phone: string) => {
      setValues({...values, name ,lastname, phone})
    }

    const update = async () => {

      if(isValidForm()){
        //const response = await RegisterAuthUseCase(values); //2°
        setLoading(true)
        let response = {} as ResponseAPIDelivery;
        if(values.image?.includes('https://')){
           response = await UpdateUserUseCase(values as any);
        }
        else{
           response = await UpdateWithImageUserUseCase(values as any, file!);
        }

        setLoading(false)
        console.log("RESULT: " + JSON.stringify(response));
        if(response.success){
          // await SaveUserLocalUseCase(response.data);
          // getUserSession()
          saveUserSession(response.data);
          setSuccessMessage(response.message);
        }else{
          setErrorMessage(response.error)
        }
      }
      
    }

    const isValidForm = ():boolean => {

      if(values.name === ''){
        setErrorMessage('Ingresa tu nombre');
        return false;
      }

      if(values.lastname === ''){
        setErrorMessage('Ingresa tu apellido');
        return false;
      }

      if(values.phone === ''){
        setErrorMessage('Ingresa tu teléfono');
        return false;
      }

      return true;
    }

  return {
    ...values,
    onChange,
    update,
    pickImage,
    takePhoto,
    errorMessage,
    user,
    loading,
    onChangeInfoUpdate,
    successMessage
  }
}


export default ProfileUpdateViewModel