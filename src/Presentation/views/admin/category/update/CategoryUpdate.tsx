import React, { useEffect, useState } from 'react'
import { View ,Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid} from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../../../App'

interface Props extends StackScreenProps<RootStackParamList, 'AdminCategoryUpdateScreen'>{};

export const AdminCategoryUpdateScreen = ({navigation, route}: Props) => {

  const { category } = route.params;
  const { name, description, onChange, responseMessage, updateCategory, loading, image,pickImage, takePhoto } = useViewModel(category);
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if(responseMessage !== ''){
     ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])

  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => setModalVisible(true)}
        >

        {
          image == ''
            ? 
            <Image
                style={ styles.image }
                source={require('../../../../../../assets/image_new.png')}   
            />
            : <Image
              source={{ uri: image }}
              style={styles.image}
            />
        }
        </TouchableOpacity>
        
        <View style={ styles.form }>
        <CustomTextInput 
                placeholder='Nombre de la categoria'
                image={ require('../../../../../../assets/categories.png')}
                keyboardType='default'
                property='name'
                value={name}
                onChangeText={ onChange }
            />
            <CustomTextInput 
                placeholder='Descripcion'
                image={ require('../../../../../../assets/description.png')}
                keyboardType='default'
                property='description'
                value={description}
                onChangeText={ onChange }
            />
        </View>

        <View style={styles.buttonContainer}>
          <RoundedButton
            text='Actualizar categoria'
            onPress={() => { updateCategory() }}
          />
        </View>

        <ModalPickImage
                openGallery={pickImage}
                openCamera={takePhoto}
                modalUseState={modalVisible}
                setModalUseState={setModalVisible}
            />

            {
                loading &&
                <ActivityIndicator 
                    style={MyStyles.loading} 
                    size="large" 
                    color={MyColors.primary} 
                />
            }
        
    </View>
  )
}
