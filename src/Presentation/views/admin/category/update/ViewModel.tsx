import React, { useState } from "react"
import * as ImagePicker from 'expo-image-picker';
import { UpdateCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateCategory';
import { UpdateWithImageCategoryUseCase } from '../../../../../Domain/useCases/category/UpdateWithImageCategory';
import { Category } from '../../../../../Domain/entities/Category';
import { ResponseAPIDelivery } from "../../../../../Data/sources/remote/models/ResponseApiDelivery";

const AdminCategoryUpdateViewModel = (category: Category) => {

    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImageInfo>();

    const [values, setValues] = useState(category)

    const onChange = (property:string, value:any) => {
        setValues({ ...values, [property]: value})
    }

    const updateCategory = async() =>{
      setLoading(true)
      let response = {} as ResponseAPIDelivery
      if(values.image?.includes('https://')){ // ACTUALIZAR SIN IMAGEN
         response = await UpdateCategoryUseCase(values as any);
      }
      else{
         response = await UpdateWithImageCategoryUseCase(values as any, file!);
      }
      setLoading(false)
      setResponseMessage(response.message)
    }

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

      return{
        ...values,
        onChange,
        takePhoto,
        pickImage,
        responseMessage,
        updateCategory,
        loading
      }
}


export default AdminCategoryUpdateViewModel