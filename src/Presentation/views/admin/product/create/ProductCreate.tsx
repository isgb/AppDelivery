import React, { useEffect, useState } from 'react'
import { View ,Text, TouchableOpacity, Image, ActivityIndicator, ToastAndroid} from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'

export const AdminProductCreateScreen = () => {

  const { name, description, onChange, responseMessage, createCategory, loading, image1,image2,image3,pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if(responseMessage !== ''){
     ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <TouchableOpacity 
          onPress={() => setModalVisible(true)}
        >

        {
          image1 == ''
            ? 
            <Image
                style={ styles.image }
                source={require('../../../../../../assets/image_new.png')}   
            />
            : <Image
              source={{ uri: image1 }}
              style={styles.image}
            />
        }
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => setModalVisible(true)}
        >

        {
          image2 == ''
            ? 
            <Image
                style={ styles.image }
                source={require('../../../../../../assets/image_new.png')}   
            />
            : <Image
              source={{ uri: image2 }}
              style={styles.image}
            />
        }
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => setModalVisible(true)}
        >

        {
          image3 == ''
            ? 
            <Image
                style={ styles.image }
                source={require('../../../../../../assets/image_new.png')}   
            />
            : <Image
              source={{ uri: image3 }}
              style={styles.image}
            />
        }
        </TouchableOpacity>
        
      </View>

        <View style={ styles.form }>
        <CustomTextInput 
                placeholder='Nombre del producto'
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
            text='Crear categoria'
            onPress={() => { createCategory() }}
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
