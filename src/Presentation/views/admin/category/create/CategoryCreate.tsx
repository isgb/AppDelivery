import React from 'react'
import { View ,Text, TouchableOpacity, Image} from 'react-native'
import styles from './Styles'
import { CustomTextInput } from '../../../../components/CustomTextInput'

export const AdminCategoryCreateScreen = () => {
  return (
    <View>
        <TouchableOpacity style={styles.imageContainer}>
            <Image
               style={ styles.image }
               source={require('../../../../../../assets/image_new.png')}   
            />
        </TouchableOpacity>
        
        <View>
            <CustomTextInput
                placeholder='Nombre de la categoria'
                image={ require('../../../../../../assets/categories.png') }
                keyboardType='default'
                value=''
                onChangeText={}
                property=''
            />
        </View>
    </View>
  )
}
