import React, { useState } from 'react'
import { View ,Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import useViewModel from './ViewModel'
import { RoundedButton } from '../../../../components/RoundedButton'
import { ModalPickImage } from '../../../../components/ModalPickImage'
import { MyColors, MyStyles } from '../../../../theme/AppTheme'

export const AdminCategoryCreateScreen = () => {

  const { name, description, onChange, successMessage, errorMessage, loading, image,pickImage, takePhoto } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false)

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
                image={ require('../../../../../../assets/categories.png') }
                keyboardType='default'
                value={name}
                onChangeText={onChange}
                property='name'
            />
            <CustomTextInput
                placeholder='Descripción'
                image={ require('../../../../../../assets/description.png') }
                keyboardType='default'
                value={name}
                onChangeText={onChange}
                property='name'
            />
        </View>

        <View style={styles.buttonContainer}>
          <RoundedButton
            text='Crear categoria'
            onPress={() => {}}
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
