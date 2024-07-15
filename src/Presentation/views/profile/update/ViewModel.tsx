import React, { useState } from 'react'
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
// import { RegisterAuthUseCase } from '../../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from 'expo-image-picker';
// import { RegisterWithImageAuthUseCase } from '../../../../Domain/useCases/auth/RegisterWithImageAuth';
import { SaveUserLocalUseCase } from '../../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../../hooks/useUserLocal';
import { UpdateUserUseCase } from '../../../../Domain/useCases/user/UpdateUser';
import { UpdateWithImageUserUseCase } from '../../../../Domain/useCases/user/UpdateWithImageUser';
import { User } from '../../../../Domain/entities/User';

const ProfileUpdateViewModel = (user: User) => {
  
    const [errorMessage, setErrorMessage] = useState('');

    const [values, setValues] = useState({
        name: '',
        lastname:'',
        phone: '',
        email:'',
        image: '',
        password:'',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();
    // const {user, getUserSession} = useUserLocal();

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

        const response = await UpdateUserUseCase(values as any);
        // const response = await RegisterWithImageAuthUseCase(values as any, file!);
        setLoading(false)
        console.log("RESULT: " + JSON.stringify(response));
        if(response.success){
          await SaveUserLocalUseCase(response.data);
          getUserSession()
        }else{
          setErrorMessage(response.error)
        }
      }
      
      // try {

      //   const response = await ApiDelivery.post('/users/create',values);
      //   console.log("RESPONSE " + JSON.stringify(response));

      // } catch (error) {
      //   console.log("ERROR: " + error);
        
      // }
      // console.log(JSON.stringify(values))
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
    register,
    pickImage,
    takePhoto,
    errorMessage,
    user,
    loading,
    onChangeInfoUpdate,
  }
}


export default ProfileUpdateViewModel