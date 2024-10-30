import React, { useState } from "react"
import * as ImagePicker from 'expo-image-picker';

const AdminCategoryCreateViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

    const [values, setValues] = useState({
        name: '',
        description: '',
        image : ''
    })

    const onChange = (property:string, value:any) => {
        setValues({ ...values, [property]: value})
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
        errorMessage,
        successMessage,
        loading
      }
}


export default AdminCategoryCreateViewModel